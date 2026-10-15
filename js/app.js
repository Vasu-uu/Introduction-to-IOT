/* =========================================================
   IoT Quiz — single-page app (vanilla JS, hash routing)
   Works on GitHub Pages / any static host / file://
   ========================================================= */
(function () {
  "use strict";

  var NOTES = window.NOTES_DATA || {};
  var ASSIGN = window.ASSIGNMENT_DATA || {};
  var app = document.getElementById("app");
  var STORE = "iot-quiz:";

  /* ---------------- utilities ---------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function store(key, val) {
    try {
      if (val === undefined) {
        var raw = localStorage.getItem(STORE + key);
        return raw ? JSON.parse(raw) : null;
      }
      localStorage.setItem(STORE + key, JSON.stringify(val));
    } catch (e) { return null; }
  }

  function weeks(bank) {
    return Object.keys(bank).map(Number).sort(function (a, b) { return a - b; });
  }

  function countAll(bank) {
    return weeks(bank).reduce(function (n, w) { return n + bank[w].questions.length; }, 0);
  }

  function fmtTime(sec) {
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  var LETTERS = "ABCDEFGH";
  var ICON_CHECK = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  var ICON_X = '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var ICON_ARROW = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------------- theme ---------------- */
  var themeBtn = document.getElementById("themeToggle");
  function currentTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  themeBtn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem(STORE + "theme", next); } catch (e) {}
  });

  /* ---------------- modal ---------------- */
  var modalOpen = false;
  function confirmModal(title, text, okLabel, cancelLabel) {
    return new Promise(function (resolve) {
      modalOpen = true;
      var wrap = document.createElement("div");
      wrap.className = "modal-backdrop";
      wrap.innerHTML =
        '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="mTitle">' +
        '<h3 id="mTitle">' + esc(title) + "</h3><p>" + esc(text) + "</p>" +
        '<div class="row"><button class="btn ghost sm" data-r="0">' + esc(cancelLabel || "Cancel") + "</button>" +
        '<button class="btn sm" data-r="1">' + esc(okLabel || "OK") + "</button></div></div>";
      document.body.appendChild(wrap);
      var okBtn = $('[data-r="1"]', wrap);
      okBtn.focus();
      function close(v) {
        modalOpen = false;
        document.removeEventListener("keydown", onKey, true);
        wrap.remove();
        resolve(v);
      }
      function onKey(e) {
        if (e.key === "Escape") { e.stopPropagation(); close(false); }
      }
      document.addEventListener("keydown", onKey, true);
      wrap.addEventListener("click", function (e) {
        if (e.target === wrap) return close(false);
        var b = e.target.closest("[data-r]");
        if (b) close(b.getAttribute("data-r") === "1");
      });
    });
  }

  /* ---------------- quiz state ---------------- */
  var quiz = null;       // active quiz session
  var lastResult = null; // finished session for the results page
  var timerId = null;

  function bankFor(kind) { return kind === "notes" ? NOTES : ASSIGN; }

  function quizLabel(kind, week) {
    var section = kind === "notes" ? "Notes Quiz" : "Assignment";
    if (week === "all") return kind === "notes" ? "All Weeks — Notes Mix" : "Full Assignment Quiz";
    return "Week " + week + " · " + section;
  }

  // Shuffling options would break questions whose options refer to other options by letter
  // ("Both (a) and (b)", "None of these") or True/False items, so those keep their order.
  function canShuffleOptions(q) {
    if (q.o.length <= 2) return false;
    return !q.o.some(function (t) {
      return /\b(both|neither|none of|all of (these|the above)|all the above)\b|\(\s*[a-d]\s*\)/i.test(t);
    });
  }

  function defaultSettings(kind, week) {
    var saved = store("settings:" + kind) || {};
    return {
      shuffleQ: saved.shuffleQ !== undefined ? saved.shuffleQ : true,
      shuffleO: saved.shuffleO !== undefined ? saved.shuffleO : kind === "notes",
      instant: saved.instant !== undefined ? saved.instant : true,
      count: week === "all" ? (saved.count || "all") : "all"
    };
  }

  function collect(kind, week) {
    var bank = bankFor(kind);
    var list = [];
    var ws = week === "all" ? weeks(bank) : [Number(week)];
    ws.forEach(function (w) {
      if (!bank[w]) return;
      bank[w].questions.forEach(function (q, i) {
        list.push({ src: q, week: w, idx: i });
      });
    });
    return list;
  }

  function makeQuestion(item, shuffleO) {
    var q = item.src;
    var order = q.o.map(function (_, i) { return i; });
    if (shuffleO && canShuffleOptions(q)) order = shuffle(order);
    var correct = [];
    order.forEach(function (orig, disp) { if (q.a.indexOf(orig) !== -1) correct.push(disp); });
    return {
      week: item.week,
      idx: item.idx,
      text: q.q,
      options: order.map(function (orig) { return q.o[orig]; }),
      correct: correct,
      multi: q.a.length > 1,
      explanation: q.e,
      source: q.src,
      selected: [],
      checked: false
    };
  }

  function startQuiz(kind, week, settings, subset) {
    var items = subset || collect(kind, week);
    if (settings.shuffleQ) items = shuffle(items);
    if (!subset && week === "all" && settings.count !== "all") items = items.slice(0, Number(settings.count));
    quiz = {
      kind: kind,
      week: week,
      settings: settings,
      record: !subset && (week !== "all" || settings.count === "all"),
      items: items,
      questions: items.map(function (it) { return makeQuestion(it, settings.shuffleO); }),
      current: 0,
      dir: "next",
      startedAt: Date.now(),
      elapsed: 0
    };
    location.hash = "#/quiz";
  }

  function isCorrect(q) {
    if (q.selected.length !== q.correct.length) return false;
    return q.correct.every(function (c) { return q.selected.indexOf(c) !== -1; });
  }

  /* ---------------- router ---------------- */
  function parseRoute() {
    var h = (location.hash || "#/").replace(/^#\/?/, "");
    var parts = h.split("/").filter(Boolean);
    return parts;
  }

  function setNav(name) {
    $all("[data-nav]").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === name);
    });
  }

  function mount(html, after) {
    stopTimer();
    var old = app.firstElementChild;
    var swap = function () {
      app.innerHTML = '<div class="view">' + html + "</div>";
      window.scrollTo(0, 0);
      if (after) after(app.firstElementChild);
    };
    if (old && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      old.classList.add("leaving");
      setTimeout(swap, 180);
    } else {
      swap();
    }
  }

  function route() {
    var p = parseRoute();
    stopHero();
    if (p.length === 0) { setNav(""); return renderHome(); }
    if (p[0] === "notes") { setNav("notes"); return renderList("notes"); }
    if (p[0] === "assignments") { setNav("assignments"); return renderList("assign"); }
    if (p[0] === "setup" && (p[1] === "notes" || p[1] === "assign") && p[2]) {
      setNav(p[1] === "notes" ? "notes" : "assignments");
      return renderSetup(p[1], p[2]);
    }
    if (p[0] === "quiz") {
      if (!quiz) { location.replace("#/"); return; }
      setNav(quiz.kind === "notes" ? "notes" : "assignments");
      return renderQuiz(true);
    }
    if (p[0] === "results") {
      if (!lastResult) { location.replace("#/"); return; }
      setNav(lastResult.kind === "notes" ? "notes" : "assignments");
      return renderResults();
    }
    location.replace("#/");
  }

  window.addEventListener("hashchange", function () {
    // Leaving an unfinished quiz through browser navigation: keep it simple, drop it.
    var p = parseRoute();
    if (quiz && p[0] !== "quiz") quiz = null;
    route();
  });

  /* ---------------- home ---------------- */
  function renderHome() {
    var nNotes = countAll(NOTES), nAssign = countAll(ASSIGN);
    var html =
      '<section class="hero">' +
      '<canvas id="heroCanvas" aria-hidden="true"></canvas>' +
      '<span class="eyebrow">NPTEL · IIT Kharagpur</span>' +
      '<h1 class="hero-title"><span class="line"><span>Introduction</span></span>' +
      '<span class="line"><span>to <span class="outline">Internet</span></span></span>' +
      '<span class="line"><span>of Things.</span></span></h1>' +
      '<p class="hero-sub">Revise all 12 weeks with quizzes written from the lecture notes, then drill the official weekly assignments in random order.</p>' +
      '<div class="hero-actions">' +
      '<a class="btn" href="#/notes">Notes quizzes <span class="arrow">→</span></a>' +
      '<a class="btn ghost" href="#/assignments">Assignments <span class="arrow">→</span></a></div>' +
      '<div class="stats">' +
      '<div class="stat"><b data-count="12">0</b><span>weeks covered</span></div>' +
      '<div class="stat"><b data-count="' + nNotes + '">0</b><span>notes questions</span></div>' +
      '<div class="stat"><b data-count="' + nAssign + '">0</b><span>assignment questions</span></div>' +
      "</div></section>" +
      '<div class="section-grid">' +
      '<a class="section-card" href="#/notes"><span class="num">01 / SECTION</span>' +
      "<h2>Weekly Notes Quiz</h2>" +
      '<p class="muted">Questions written only from each week\'s lecture-note PDFs: protocols, sensors, SDN, cloud, fog, smart cities and more. Every answer explains itself and cites the lecture topic.</p>' +
      '<span class="go">' + nNotes + " questions · 12 weeks " + ICON_ARROW + "</span></a>" +
      '<a class="section-card" href="#/assignments"><span class="num">02 / SECTION</span>' +
      "<h2>Assignments</h2>" +
      '<p class="muted">All 12 official weekly assignments with solutions, shuffled every attempt, plus a full assignment quiz across every week.</p>' +
      '<span class="go">' + nAssign + " questions · random order " + ICON_ARROW + "</span></a>" +
      "</div>";
    mount(html, function (root) {
      countUp(root);
      startHero($("#heroCanvas", root));
    });
  }

  function countUp(root) {
    $all("[data-count]", root).forEach(function (el) {
      var target = Number(el.getAttribute("data-count"));
      var t0 = null, dur = 1200;
      function step(ts) {
        if (!t0) t0 = ts;
        var k = Math.min(1, (ts - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* Animated "network of things" behind the hero */
  var hero = { raf: 0, ro: null };
  function stopHero() {
    if (hero.raf) cancelAnimationFrame(hero.raf);
    hero.raf = 0;
    if (hero.ro) { hero.ro.disconnect(); hero.ro = null; }
  }
  function startHero(canvas) {
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var nodes = [], W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var mouse = { x: -999, y: -999 };

    function resize() {
      var r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(70, Math.max(24, (W * H) / 14000)));
      nodes = [];
      for (var i = 0; i < n; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() < 0.15 ? 2.6 : 1.4
        });
      }
    }
    function draw() {
      var fg = getComputedStyle(document.documentElement).getPropertyValue("--fg").trim() || "#0a0a0a";
      ctx.clearRect(0, 0, W, H);
      var link = 120;
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        if (!reduce) {
          a.x += a.vx; a.y += a.vy;
          if (a.x < 0 || a.x > W) a.vx *= -1;
          if (a.y < 0 || a.y > H) a.vy *= -1;
          var dxm = a.x - mouse.x, dym = a.y - mouse.y, dm = Math.sqrt(dxm * dxm + dym * dym);
          if (dm < 90 && dm > 0) { a.x += (dxm / dm) * 0.8; a.y += (dym / dm) * 0.8; }
        }
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j];
          var dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < link) {
            ctx.globalAlpha = (1 - d / link) * 0.22;
            ctx.strokeStyle = fg;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 0.55;
      ctx.fillStyle = fg;
      nodes.forEach(function (n) { ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill(); });
      ctx.globalAlpha = 1;
      if (!reduce) hero.raf = requestAnimationFrame(draw);
    }
    canvas.parentElement.addEventListener("pointermove", function (e) {
      var r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    canvas.parentElement.addEventListener("pointerleave", function () { mouse.x = mouse.y = -999; });
    resize();
    if (window.ResizeObserver) { hero.ro = new ResizeObserver(resize); hero.ro.observe(canvas); }
    draw();
  }

  /* ---------------- section lists ---------------- */
  function bestBadge(kind, week) {
    var b = store("best:" + kind + ":" + week);
    if (!b) return '<span class="badge">New</span>';
    return '<span class="badge solid" title="Best score">Best ' + b.best + "%</span>";
  }

  function renderList(kind) {
    var bank = bankFor(kind);
    var isNotes = kind === "notes";
    var total = countAll(bank);
    var cards = weeks(bank).map(function (w, i) {
      var d = bank[w];
      return '<a class="week-card" style="--i:' + (i + 1) + '" href="#/setup/' + kind + "/" + w + '">' +
        '<div class="wk"><span class="wk-no">' + (w < 10 ? "0" : "") + w + '</span><span class="wk-label">Week</span></div>' +
        "<h3>" + esc(d.title) + "</h3>" +
        '<div class="meta"><span>' + d.questions.length + " Qs</span>" + bestBadge(kind, w) + "</div></a>";
    }).join("");

    var feature =
      '<a class="week-card feature" style="--i:0" href="#/setup/' + kind + '/all">' +
      '<span class="feature-icon" aria-hidden="true"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg></span>' +
      "<div><h3>" + (isNotes ? "All Weeks — Notes Mix" : "Full Assignment Quiz") + "</h3>" +
      "<p>" + (isNotes ? "Every notes question from all 12 weeks, shuffled. Pick how many to attempt." :
        "All " + total + " assignment questions from Weeks 1–12 in random order. Pick how many to attempt.") + "</p></div>" +
      '<div class="meta"><span>' + total + " Qs</span>" + bestBadge(kind, "all") + "</div></a>";

    var html =
      '<div class="list-head"><div>' +
      '<span class="eyebrow">' + (isNotes ? "Section 01" : "Section 02") + "</span>" +
      '<h1 class="page-title">' + (isNotes ? "Weekly Notes Quiz" : "Assignments") + "</h1>" +
      '<p class="page-sub">' + (isNotes
        ? "Each quiz is written strictly from that week's lecture notes. Answers come with an explanation and the lecture topic they're from."
        : "Official weekly assignment questions with their published solutions. Questions are shuffled every time you start.") + "</p></div>" +
      '<div class="legend"><span class="badge">MCQ</span><span class="badge">MSQ = select all that apply</span></div></div>' +
      '<div class="week-grid">' + (isNotes ? cards + feature : feature + cards) + "</div>";
    mount(html);
  }

  /* ---------------- setup ---------------- */
  function renderSetup(kind, week) {
    var bank = bankFor(kind);
    if (week !== "all" && !bank[week]) { location.replace("#/"); return; }
    var s = defaultSettings(kind, week);
    var total = week === "all" ? countAll(bank) : bank[week].questions.length;
    var title = week === "all" ? quizLabel(kind, "all") : bank[week].title;
    var counts = kind === "notes" ? [25, 50, 100] : [20, 50, 100];

    function sw(id, label, desc, on) {
      return '<div class="setup-row"><div class="lbl"><b>' + label + "</b><span>" + desc + "</span></div>" +
        '<label class="switch"><input type="checkbox" id="' + id + '"' + (on ? " checked" : "") + ' aria-label="' + esc(label) + '"><span class="track"></span></label></div>';
    }

    var countRow = week === "all"
      ? '<div class="setup-row"><div class="lbl"><b>Number of questions</b><span>Drawn at random from all weeks</span></div><div class="chips" role="group" aria-label="Number of questions">' +
        counts.concat(["all"]).map(function (c) {
          return '<button type="button" class="chip" data-count="' + c + '" aria-pressed="' + (String(s.count) === String(c)) + '">' + (c === "all" ? "All " + total : c) + "</button>";
        }).join("") + "</div></div>"
      : "";

    var html =
      '<a class="back-link" href="#/' + (kind === "notes" ? "notes" : "assignments") + '">← Back to ' + (kind === "notes" ? "notes" : "assignments") + "</a>" +
      '<div class="setup"><span class="eyebrow">' + esc(quizLabel(kind, week)) + "</span>" +
      "<h1>" + esc(title) + "</h1>" +
      '<p class="lead">' + total + " questions" + (kind === "notes" ? " from the lecture notes." : " from the official assignment solutions.") + "</p>" +
      countRow +
      sw("optShuffleQ", "Random question order", "Shuffle the questions on every attempt", s.shuffleQ) +
      sw("optShuffleO", "Shuffle options", "Questions like “Both (a) and (b)” and True/False always keep their order", s.shuffleO) +
      sw("optInstant", "Instant feedback", "Check each answer as you go; turn off for exam mode", s.instant) +
      '<div class="setup-actions"><button class="btn" id="startBtn">Start quiz <span class="arrow">→</span></button></div></div>';

    mount(html, function (root) {
      var chosen = s.count;
      $all(".chip", root).forEach(function (c) {
        c.addEventListener("click", function () {
          chosen = c.getAttribute("data-count");
          $all(".chip", root).forEach(function (x) { x.setAttribute("aria-pressed", String(x === c)); });
        });
      });
      $("#startBtn", root).addEventListener("click", function () {
        var settings = {
          shuffleQ: $("#optShuffleQ", root).checked,
          shuffleO: $("#optShuffleO", root).checked,
          instant: $("#optInstant", root).checked,
          count: chosen
        };
        store("settings:" + kind, settings);
        startQuiz(kind, week, settings);
      });
      $("#startBtn", root).focus({ preventScroll: true });
    });
  }

  /* ---------------- quiz ---------------- */
  function startTimer() {
    stopTimer();
    timerId = setInterval(function () {
      if (!quiz) return stopTimer();
      var el = $("#timer");
      if (el) el.textContent = fmtTime(Math.floor((Date.now() - quiz.startedAt) / 1000));
    }, 1000);
  }
  function stopTimer() { if (timerId) clearInterval(timerId); timerId = null; }

  function renderQuiz(fresh) {
    var html =
      '<div class="quiz">' +
      '<div class="quiz-top">' +
      '<button class="exit" id="exitBtn" aria-label="Exit quiz" title="Exit quiz"><svg width="16" height="16" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
      '<div class="title"><b>' + esc(quizLabel(quiz.kind, quiz.week)) + "</b><span>" +
      (quiz.settings.instant ? "Practice mode" : "Exam mode") + " · " + quiz.questions.length + " questions</span></div>" +
      '<span class="timer" id="timer" aria-label="Elapsed time">' + fmtTime(Math.floor((Date.now() - quiz.startedAt) / 1000)) + "</span></div>" +
      '<div class="progress" aria-hidden="true"><div class="bar" id="bar"></div></div>' +
      '<div class="dots" id="dots" aria-label="Question navigator"></div>' +
      '<div id="qwrap"></div></div>';
    var paint = function (root) {
      $("#exitBtn", root).addEventListener("click", exitQuiz);
      // Dots are redrawn often, so listen once on the container.
      $("#dots", root).addEventListener("click", function (e) {
        var d = e.target.closest("[data-go]");
        if (d) go(Number(d.getAttribute("data-go")));
      });
      drawQuestion();
      startTimer();
    };
    if (fresh) mount(html, paint);
    else { app.innerHTML = '<div class="view">' + html + "</div>"; paint(app.firstElementChild); }
  }

  function drawDots() {
    var wrap = $("#dots");
    if (!wrap) return;
    var many = quiz.questions.length > 60;
    wrap.style.display = many ? "none" : "";
    if (many) return;
    wrap.innerHTML = quiz.questions.map(function (q, i) {
      var cls = "dot";
      if (q.checked && quiz.settings.instant) cls += isCorrect(q) ? " right" : " wrong";
      else if (q.selected.length) cls += " answered";
      if (i === quiz.current) cls += " current";
      return '<button class="' + cls + '" data-go="' + i + '" aria-label="Question ' + (i + 1) + '"></button>';
    }).join("");
  }

  function drawProgress() {
    var done = quiz.questions.filter(function (q) { return quiz.settings.instant ? q.checked : q.selected.length; }).length;
    var bar = $("#bar");
    if (bar) bar.style.width = (done / quiz.questions.length) * 100 + "%";
  }

  function drawQuestion() {
    var q = quiz.questions[quiz.current];
    var n = quiz.questions.length;
    var locked = quiz.settings.instant && q.checked;
    var last = quiz.current === n - 1;

    var opts = q.options.map(function (t, i) {
      var cls = "option" + (q.multi ? " msq" : "");
      var sel = q.selected.indexOf(i) !== -1;
      var mark = "";
      if (locked) {
        var isC = q.correct.indexOf(i) !== -1;
        if (isC) { cls += " correct"; mark = ICON_CHECK; }
        else if (sel) { cls += " incorrect"; mark = ICON_X; }
      } else if (sel) cls += " selected";
      return '<button class="' + cls + '" style="--i:' + i + '" data-opt="' + i + '" role="' + (q.multi ? "checkbox" : "radio") +
        '" aria-checked="' + sel + '"' + (locked ? ' aria-disabled="true"' : "") + ">" +
        '<span class="key">' + LETTERS[i] + '</span><span class="txt">' + esc(t) + "</span>" +
        '<span class="mark" aria-hidden="true">' + mark + "</span></button>";
    }).join("");

    var fb = locked ? feedbackHtml(q) : "";
    var primary;
    if (quiz.settings.instant && !q.checked) {
      primary = '<button class="btn" id="checkBtn"' + (q.selected.length ? "" : " disabled") + ">Check answer</button>";
    } else if (last) {
      primary = '<button class="btn" id="finishBtn">Finish <span class="arrow">→</span></button>';
    } else {
      primary = '<button class="btn" id="nextBtn">Next <span class="arrow">→</span></button>';
    }

    var weekTag = quiz.week === "all" ? '<span class="badge">Week ' + q.week + "</span>" : "";
    $("#qwrap").innerHTML =
      '<article class="qcard enter-' + quiz.dir + '">' +
      '<div class="qmeta"><span class="qnum">Q ' + (quiz.current + 1) + " / " + n + "</span>" + weekTag +
      '<span class="badge' + (q.multi ? " solid" : "") + '">' + (q.multi ? "MSQ · select all that apply" : "Single answer") + "</span></div>" +
      '<h2 class="qtext">' + esc(q.text) + "</h2>" +
      '<div class="options' + (locked ? " locked" : "") + '" role="' + (q.multi ? "group" : "radiogroup") + '" aria-label="Options">' + opts + "</div>" +
      fb + "</article>" +
      '<div class="quiz-nav">' +
      '<button class="btn ghost" id="prevBtn"' + (quiz.current === 0 ? " disabled" : "") + '><span class="arrow">←</span> Prev</button>' +
      '<span class="hint">' + (q.multi ? "Pick every correct option" : "Pick one option") + " · <kbd>Enter</kbd></span>" +
      primary + "</div>";

    drawDots();
    drawProgress();
    bindQuestion();
  }

  function feedbackHtml(q) {
    var ok = isCorrect(q);
    var correctTxt = q.correct.map(function (i) { return LETTERS[i] + ". " + q.options[i]; }).join("; ");
    return '<div class="feedback ' + (ok ? "ok" : "bad") + '" role="status">' +
      '<div class="fb-head">' + (ok ? ICON_CHECK.replace("<svg", '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"') + " Correct"
        : ICON_X.replace("<svg", '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"') + " Not quite") + "</div>" +
      '<div class="fb-body">' +
      (ok ? "" : "<p><b>Answer:</b> " + esc(correctTxt) + "</p>") +
      (q.explanation ? "<p>" + esc(q.explanation) + "</p>" : "") +
      (q.source ? '<p class="fb-src">' + esc(q.source) + "</p>" : "") +
      "</div></div>";
  }

  function bindQuestion() {
    var wrap = $("#qwrap");
    $all("[data-opt]", wrap).forEach(function (b) {
      b.addEventListener("click", function () { choose(Number(b.getAttribute("data-opt"))); });
    });
    var c = $("#checkBtn"); if (c) c.addEventListener("click", check);
    var nx = $("#nextBtn"); if (nx) nx.addEventListener("click", function () { go(quiz.current + 1); });
    var pv = $("#prevBtn"); if (pv) pv.addEventListener("click", function () { go(quiz.current - 1); });
    var fn = $("#finishBtn"); if (fn) fn.addEventListener("click", finish);
  }

  function choose(i) {
    var q = quiz.questions[quiz.current];
    if (quiz.settings.instant && q.checked) return;
    if (i < 0 || i >= q.options.length) return;
    if (q.multi) {
      var at = q.selected.indexOf(i);
      if (at === -1) q.selected.push(i); else q.selected.splice(at, 1);
    } else {
      q.selected = [i];
    }
    // Update in place so the option animations don't replay.
    $all("[data-opt]").forEach(function (b) {
      var k = Number(b.getAttribute("data-opt"));
      var on = q.selected.indexOf(k) !== -1;
      b.classList.toggle("selected", on);
      b.setAttribute("aria-checked", String(on));
      b.style.animation = "none";
    });
    var c = $("#checkBtn");
    if (c) c.disabled = q.selected.length === 0;
    drawDots();
    drawProgress();
  }

  function check() {
    var q = quiz.questions[quiz.current];
    if (!q.selected.length || q.checked) return;
    q.checked = true;
    drawQuestion();
    $all("[data-opt]").forEach(function (b) {
      b.style.animation = "none";
      if (b.classList.contains("correct") || b.classList.contains("incorrect")) b.classList.add("reveal");
    });
    var fb = $(".feedback");
    if (fb && fb.getBoundingClientRect().bottom > window.innerHeight) {
      fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    var primary = $("#nextBtn") || $("#finishBtn");
    if (primary) primary.focus({ preventScroll: true });
  }

  function go(i) {
    if (i < 0 || i >= quiz.questions.length || i === quiz.current) return;
    quiz.dir = i > quiz.current ? "next" : "prev";
    quiz.current = i;
    drawQuestion();
    var top = $(".quiz");
    if (top && top.getBoundingClientRect().top < 0) top.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function exitQuiz() {
    var answered = quiz.questions.some(function (q) { return q.selected.length; });
    if (!answered) return leaveQuiz();
    confirmModal("Leave this quiz?", "Your progress in this attempt will be lost.", "Leave", "Stay").then(function (ok) {
      if (ok) leaveQuiz();
    });
  }
  function leaveQuiz() {
    var back = quiz.kind === "notes" ? "#/notes" : "#/assignments";
    quiz = null;
    location.hash = back;
  }

  function finish() {
    var unanswered = quiz.questions.filter(function (q) {
      return quiz.settings.instant ? !q.checked : !q.selected.length;
    }).length;
    if (unanswered) {
      confirmModal("Finish now?", unanswered + " question" + (unanswered > 1 ? "s are" : " is") +
        (quiz.settings.instant ? " not checked yet" : " unanswered") + " and will be marked wrong.", "Finish", "Keep going")
        .then(function (ok) { if (ok) doFinish(); });
    } else {
      doFinish();
    }
  }

  function doFinish() {
    var qs = quiz.questions;
    var right = qs.filter(isCorrect).length;
    var pct = Math.round((right / qs.length) * 100);
    var secs = Math.floor((Date.now() - quiz.startedAt) / 1000);
    var key = "best:" + quiz.kind + ":" + quiz.week;
    var prev = store(key);
    var isBest = false;
    if (quiz.record) {
      isBest = !prev || pct > prev.best;
      store(key, { best: Math.max(pct, prev ? prev.best : 0), last: pct, at: Date.now() });
    }
    lastResult = {
      kind: quiz.kind, week: quiz.week, settings: quiz.settings, items: quiz.items,
      questions: qs, right: right, pct: pct, secs: secs, isBest: isBest, record: quiz.record
    };
    quiz = null;
    location.hash = "#/results";
  }

  /* ---------------- results ---------------- */
  function verdict(p) {
    if (p === 100) return "Perfect score.";
    if (p >= 80) return "Excellent work.";
    if (p >= 60) return "Good, keep going.";
    if (p >= 40) return "Getting there.";
    return "Time to revise.";
  }

  function renderResults() {
    var r = lastResult;
    var wrong = r.questions.filter(function (q) { return !isCorrect(q); }).length;
    var C = 2 * Math.PI * 52;

    var html =
      '<div class="results">' +
      '<section class="result-hero">' +
      '<div class="ring"><svg viewBox="0 0 120 120"><circle class="track" cx="60" cy="60" r="52"/>' +
      '<circle class="val" id="ringVal" cx="60" cy="60" r="52" stroke-dasharray="' + C + '" stroke-dashoffset="' + C + '"/></svg>' +
      '<div class="center"><div><b id="pctNum">0%</b><span>' + r.right + " / " + r.questions.length + "</span></div></div></div>" +
      "<div><span class=\"eyebrow\">" + esc(quizLabel(r.kind, r.week)) + "</span>" +
      "<h1>" + verdict(r.pct) + "</h1>" +
      '<div class="result-stats">' +
      '<span class="badge">' + r.right + " correct</span>" +
      '<span class="badge">' + wrong + " wrong</span>" +
      '<span class="badge">Time ' + fmtTime(r.secs) + "</span>" +
      (r.isBest ? '<span class="badge solid">New best</span>' : "") + "</div>" +
      '<div class="result-actions">' +
      '<button class="btn" id="retryBtn">Retry <span class="arrow">↻</span></button>' +
      (wrong ? '<button class="btn ghost" id="retryWrongBtn">Retry ' + wrong + " wrong</button>" : "") +
      '<a class="btn ghost" href="#/' + (r.kind === "notes" ? "notes" : "assignments") + '">All weeks</a>' +
      "</div></div></section>" +
      '<div class="review-head"><h2>Review answers</h2>' +
      '<div class="chips" role="group" aria-label="Filter review">' +
      '<button class="chip" data-filter="all" aria-pressed="true">All</button>' +
      '<button class="chip" data-filter="wrong" aria-pressed="false">Wrong only</button></div></div>' +
      '<div class="review" id="review"></div></div>';

    mount(html, function (root) {
      requestAnimationFrame(function () {
        setTimeout(function () {
          $("#ringVal", root).style.strokeDashoffset = String(C * (1 - r.pct / 100));
        }, 60);
      });
      var el = $("#pctNum", root), t0 = null;
      (function step(ts) {
        if (!t0) t0 = ts;
        var k = Math.min(1, (ts - t0) / 1300);
        el.textContent = Math.round(r.pct * (1 - Math.pow(1 - k, 3))) + "%";
        if (k < 1) requestAnimationFrame(step);
      })(performance.now());

      drawReview("all");
      $all("[data-filter]", root).forEach(function (c) {
        c.addEventListener("click", function () {
          $all("[data-filter]", root).forEach(function (x) { x.setAttribute("aria-pressed", String(x === c)); });
          drawReview(c.getAttribute("data-filter"));
        });
      });
      $("#retryBtn", root).addEventListener("click", function () {
        startQuiz(r.kind, r.week, r.settings, r.record ? null : r.items);
      });
      var rw = $("#retryWrongBtn", root);
      if (rw) rw.addEventListener("click", function () {
        var items = r.items.filter(function (_, i) { return !isCorrect(r.questions[i]); });
        startQuiz(r.kind, r.week, r.settings, items);
      });
    });
  }

  function drawReview(filter) {
    var r = lastResult;
    var rows = r.questions.map(function (q, i) {
      var ok = isCorrect(q);
      if (filter === "wrong" && ok) return "";
      var opts = q.options.map(function (t, k) {
        var c = q.correct.indexOf(k) !== -1, s = q.selected.indexOf(k) !== -1;
        var cls = c ? "c" : s ? "w" : "";
        var tag = c && s ? " ✓ your answer" : s ? " ✕ your answer" : "";
        return '<li class="' + cls + '"><span class="k">' + LETTERS[k] + ".</span>" + esc(t) + (tag ? "<em>" + tag + "</em>" : "") + "</li>";
      }).join("");
      return '<div class="review-item ' + (ok ? "ok" : "bad") + '" style="--i:' + Math.min(i, 20) + '">' +
        '<div class="rq"><span class="rstat">' + (ok ? ICON_CHECK : ICON_X) + "</span>" +
        "<h3>" + (i + 1) + ". " + esc(q.text) + (r.week === "all" ? ' <span class="badge">W' + q.week + "</span>" : "") +
        (q.selected.length ? "" : ' <span class="badge">Skipped</span>') + "</h3></div>" +
        "<ul>" + opts + "</ul>" +
        (q.explanation ? '<p class="rexp">' + esc(q.explanation) + "</p>" : "") +
        (q.source ? '<p class="rsrc">' + esc(q.source) + "</p>" : "") + "</div>";
    }).join("");
    $("#review").innerHTML = rows || '<p class="empty">No wrong answers. Nice!</p>';
  }

  /* ---------------- keyboard ---------------- */
  document.addEventListener("keydown", function (e) {
    if (modalOpen || !quiz || parseRoute()[0] !== "quiz") return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    var q = quiz.questions[quiz.current];
    var k = e.key;
    if (/^[1-8]$/.test(k)) { e.preventDefault(); choose(Number(k) - 1); return; }
    if (/^[a-hA-H]$/.test(k) && LETTERS.indexOf(k.toUpperCase()) < q.options.length) {
      e.preventDefault(); choose(LETTERS.indexOf(k.toUpperCase())); return;
    }
    if (k === "ArrowRight") { e.preventDefault(); go(quiz.current + 1); return; }
    if (k === "ArrowLeft") { e.preventDefault(); go(quiz.current - 1); return; }
    if (k === "Enter") {
      // Let Enter activate a focused button that isn't an option (e.g. Prev).
      if (e.target && e.target.closest && e.target.closest("button:not([data-opt])")) return;
      e.preventDefault();
      if (quiz.settings.instant && !q.checked) { if (q.selected.length) check(); return; }
      if (quiz.current === quiz.questions.length - 1) finish();
      else go(quiz.current + 1);
    }
  });

  route();
})();
