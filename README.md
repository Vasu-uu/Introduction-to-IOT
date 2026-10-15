# IoT/Quiz: Introduction to Internet of Things

A black-and-white quiz web app for revising the NPTEL course **Introduction to Internet of Things** (IIT Kharagpur, Prof. Sudip Misra).

It's plain HTML, CSS and JavaScript, so there's no build step, no framework and nothing to install. It runs on GitHub Pages or straight from your file system.

**Live site:** https://vasu-uu.github.io/Introduction-to-IOT/ *(after GitHub Pages is enabled, see below)*

---

## Features

### 01 · Weekly Notes Quiz
- **329 questions** across all 12 weeks, written **only from the lecture-note PDFs**. Nothing comes from outside sources.
- Every answer comes with an explanation and the lecture or slide topic it's from, so you can check it against the notes.
- Has a mixed **All Weeks** mode where you choose 25, 50, 100 or all questions.

### 02 · Assignments
- **180 questions**: all 12 official weekly assignments (15 questions each), with answers and explanations **transcribed from the official solution PDFs**.
- Each weekly assignment is shown in **random order** on every attempt.
- A **Full Assignment Quiz** shuffles all 180 questions together (or 20, 50 or 100 of them).

### 03 · Cheat Sheet
- **571 key facts** condensed week by week from the lecture notes, grouped into topic cards (protocols, frequencies, data rates, standards, definitions, etc.).
- Instant **search** with highlighting, a **week filter**, and a **Print / PDF** layout (one week per page).

### Quiz experience
- Supports **MCQ and MSQ** (multiple-select) questions, labelled on each question.
- **Practice mode** gives you instant feedback with explanations. **Exam mode** shows feedback only at the end.
- Optional **option shuffling**. Questions with options like "Both (a) and (b)" or "None of these", and True/False questions, always keep their original order so they still make sense.
- A question navigator, a progress bar and a timer.
- The results page has an animated score ring and a full answer review (with a *wrong only* filter). You can **retry** the quiz or **retry only the questions you got wrong**.
- Your best score for each quiz is saved in your browser (`localStorage`).
- Keyboard shortcuts: <kbd>1</kbd>–<kbd>4</kbd> or <kbd>A</kbd>–<kbd>D</kbd> select an option, <kbd>Enter</kbd> checks the answer or moves to the next question, and <kbd>←</kbd> / <kbd>→</kbd> move between questions.
- Monochrome design with a white theme by default (dark theme via the toggle), smooth animations (including an animated "network of things" hero) and a responsive layout down to phone width. It respects `prefers-reduced-motion`.

---

## Project structure

```
.
├── index.html            # Main (and only) HTML page; the app is a hash-routed SPA
├── css/
│   └── style.css         # Monochrome theme, layout and animations
├── js/
│   ├── app.js            # Routing, quiz engine, results, theme, keyboard
│   ├── notes-data.js     # Weekly notes question bank (window.NOTES_DATA)
│   ├── cheatsheet-data.js# Cheat sheet facts per week (window.CHEATSHEET_DATA)
│   └── assignment-data.js# Weekly assignment bank (window.ASSIGNMENT_DATA)
├── .gitignore            # Excludes Materials/ (course PDFs)
└── README.md
```

### Question format

Both banks use the same shape:

```js
{
  q: "Question text",
  o: ["Option A", "Option B", "Option C", "Option D"],
  a: [1],            // indexes of the correct options (more than one = MSQ)
  e: "Explanation",
  src: "Lecture / slide reference"
}
```

To add or fix a question, edit `js/notes-data.js` or `js/assignment-data.js`. The app reads the question counts, week titles and MSQ detection straight from the data.

---

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 5173
```

Then visit http://localhost:5173.

---

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**. Select the `main` branch and the `/ (root)` folder, then click **Save**.
4. After a minute the site is live at `https://<username>.github.io/Introduction-to-IOT/`.

The app uses relative paths and hash routing (`#/notes`, `#/assignments` and so on), so it works on Pages without any extra configuration.

---

## Course materials

The source PDFs (weekly lecture notes and assignment solutions) are kept in a local `Materials/` folder. That folder is **git-ignored** and not published. Only the question banks made from it are included.

## Disclaimer

This is an unofficial study aid. The course content belongs to NPTEL / IIT Kharagpur. If you find a question that doesn't match the official material, please open an issue.
