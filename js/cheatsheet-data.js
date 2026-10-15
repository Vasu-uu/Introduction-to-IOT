/*
 * Cheat sheet: key facts per week, condensed strictly from the
 * lecture-note PDFs of NPTEL "Introduction to Internet of Things".
 * Each item is "Term: detail" (the part before the first ": " is shown bold).
 */
window.CHEATSHEET_DATA = {
  1: {
    title: "Introduction to IoT, Addressing & Sensing",
    topics: [
      { h: "IoT basics", items: [
        "Origin: \"The Internet of Things\", ITU Internet Report 2005 (title of the report)",
        "ITU vision: humans may become the minority as generators and receivers of traffic; most traffic flows between devices and things",
        "IoT enablers (ITU): RFID, Nanotechnology, Sensors, Smart Networks",
        "Gartner definition: network of physical objects with embedded technology to communicate and sense or interact with internal states or the external environment",
        "Scale: over 9 billion things connected; projected to cross 20 billion",
        "Unification of: low-power embedded systems, cloud computing, big-data, machine learning, networking",
        "Characteristics: efficient scalable architecture; unambiguous naming & addressing; abundance of sleeping, mobile and non-IP nodes; intermittent connectivity"
      ]},
      { h: "Evolution of connected devices", items: [
        "ATM: went online in 1974",
        "World Wide Web: debut in 1991",
        "Smart meters: first remote-communicating meters in the early 2000s",
        "Smart Dust: computers smaller than a grain of sand, sprayed/injected to measure soil chemicals or diagnose the human body"
      ]},
      { h: "Baseline technologies", items: [
        "Closely related to IoT: M2M, Cyber-Physical Systems (CPS), Web of Things (WoT)",
        "M2M: communication between machines/devices; term introduced by telecom service providers; uses telecom networks (3G, 4G, 5G, satellite)",
        "IoT vs M2M: M2M is part of IoT; IoT has broader scope (things, people, applications)",
        "WoT: access/control of IoT resources using mainstream web tech (HTML 5.0, JavaScript, Ajax, PHP, Ruby on Rails)",
        "WoT approach: RESTful principles and REST APIs",
        "WoT position: an application layer added over the IoT's network layer",
        "Not web-accessible IoT: conventional WSN and RFID systems"
      ]},
      { h: "Connectivity terminologies", items: [
        "IoT LAN: local, short range, may or may not connect to Internet",
        "IoT WAN: connects network segments, organizationally and geographically wide",
        "IoT Gateway: router connecting IoT LAN to WAN/Internet; forwards packets on the IP layer",
        "IoT Proxy: performs active application layer functions between IoT nodes and other entities",
        "Address crunch: estimated 20-50 billion devices by 2018"
      ]},
      { h: "IoT addressing", items: [
        "Local addresses: valid only in a gateway's domain; may repeat under another gateway; saves address space",
        "Gateway: has a unique network prefix; routers assign prefixes to gateways",
        "Mobility: gateway WAN address changes without changing LAN address, achieved using ULA",
        "Remote anchor point: gateways attach via Mobile IPv6; LU addresses keep nodes immune to prefix changes",
        "Tunneling: nodes reach Internet directly via remote anchor point using protocols such as IKEv2",
        "Gateway duties: Internet connectivity and IoT LAN intra-connectivity",
        "Prefixes: obtained upstream with DHCPv6, delegated to nodes using SLAAC (stateless)",
        "LU limitation: cannot talk directly to Internet, solved by an application layer proxy",
        "Makeshift IPv6 solutions: IPv6-to-IPv4 translation, IPv6 tunneling over IPv4, application layer proxies",
        "Multi-homing: node/network connected to multiple networks for improved reliability"
      ]},
      { h: "IPv4 vs IPv6", items: [
        "Developed: IPv4 by IETF 1974; IPv6 1998",
        "Length: IPv4 32 bits (2^32); IPv6 128 bits (2^128)",
        "Notation: IPv4 dotted decimal; IPv6 hexadecimal",
        "IPv6 header: fixed size, no checksum, no options",
        "Broadcast/Multicast: IPv4 has broadcast; IPv6 has no broadcast but has multicast",
        "Focus: IPv4 emphasises reliable transmission; IPv6 simpler header focused on addressing"
      ]},
      { h: "Sensing", items: [
        "Sensor: detects changes in ambient conditions or state of a system and forwards/processes the information",
        "Transducer: converts energy of one kind into another; collective term for sensors and actuators",
        "Good sensor: sensitive only to measured property, insensitive to others, does not influence the measured property",
        "Resolution: smallest change a sensor can detect; accuracy does not depend upon resolution",
        "Analog sensor: continuous output proportional to quantity (temperature, speed, pressure, strain)",
        "Digital sensor: discrete output (logic 1/0); single bit = serial, combined byte = parallel transmission",
        "Scalar sensor: magnitude only (temperature, color, pressure, strain)",
        "Vector sensor: magnitude, direction, orientation (sound, image, velocity, acceleration); e.g. accelerometer x,y,z",
        "Full scale range: maximum and minimum values of the measured property",
        "Sensitivity error: real sensitivity differs from specified value",
        "Offset error / bias: output differs from correct value by a constant"
      ]}
    ]
  },
  2: {
    title: "IoT Networking & Connectivity Technologies",
    topics: [
      { h: "6LoWPAN", items: [
        "Full form: Low-power Wireless Personal Area Networks over IPv6; by IETF (RFC 5933, RFC 4919)",
        "Function: lets IEEE 802.15.4 radios carry 128-bit IPv6 addresses via header compression and address translation",
        "Addressing: 64-bit extended = globally unique; 16-bit short = PAN specific, assigned by PAN coordinator",
        "Limits: IPv6 multicast not supported by 802.15.4; IPv6 packets carried as link layer broadcast frames",
        "Dispatch header: initiates communication; 6-bit dispatch identifies next header",
        "Mesh addressing header: V/F bits = 0 for 64-bit, 1 for 16-bit address; Hops Left decremented each hop",
        "Routing protocols: LOADng and RPL"
      ]},
      { h: "LOADng & RPL", items: [
        "LOADng: derived from AODV, extended for IoT; RREQ, RREP, RERR messages",
        "LOADng rule: only the destination may respond to an RREQ; intermediate routers are prohibited",
        "LOADng: optimized flooding; RREQ/RREP share a single monotonically increasing sequence number",
        "RPL: distance vector IPv6 routing for low-power lossy networks; low-rate beaconing",
        "RPL beaconing: rate increases on detecting inconsistencies",
        "RPL modes: proactive (maintain topology), reactive (resolve inconsistencies)",
        "RPL objectives: minimize energy, minimize latency, satisfy constraints; needs bidirectional links"
      ]},
      { h: "RFID", items: [
        "RFID: radio-frequency identification; read outside line-of-sight (unlike barcodes/QR)",
        "Tag: integrated circuit + antenna, covered by protective material",
        "Passive tags: most widely used; powered inductively by reader",
        "Active tags: own power supply",
        "Origin: derived from AIDC (Automatic Identification and Data Capture); AIDC wired, RFID uses radio waves",
        "Components: tag/smart label, reader, antenna",
        "Applications: inventory, asset/personnel tracking, access control, ID badging, supply chain, counterfeit prevention"
      ]},
      { h: "Protocol organization (by functionality)", items: [
        "Connectivity: 6LoWPAN, RPL",
        "Identification: EPC, uCode, IPv6, URIs",
        "Communication/Transport: WiFi, Bluetooth, LPWAN",
        "Discovery: Physical Web, mDNS, DNS-SD",
        "Data protocols: MQTT, CoAP, AMQP, Websocket, Node",
        "Device management: TR-069, OMA-DM",
        "Semantic: JSON-LD, Web Thing Model",
        "Multi-layer frameworks: Alljoyn, IoTivity, Weave, Homekit"
      ]},
      { h: "MQTT", items: [
        "Full form: Message Queue Telemetry Transport; ISO/IEC PRF 20922",
        "Type: lightweight publish-subscribe messaging over TCP/IP",
        "History: introduced by IBM in 1999, standardized by OASIS in 2013",
        "Designed for: remote connections, limited bandwidth, small code footprint",
        "Components: publishers (sensors), subscribers (applications), broker (connects them, classifies data into topics)",
        "Methods: Connect, Disconnect, Subscribe, Unsubscribe, Publish",
        "Topic: routing information for the broker; hierarchy separated by slash, e.g. house/living-room/temperature",
        "Wildcards: + single level (house/+/temperature); # multilevel (house/#)",
        "Users: Facebook Messenger, AWS IoT, Azure IoT Hub, EVRYTHNG, Adafruit IO",
        "SMQTT: lightweight attribute-based encryption; broadcast encryption advantage",
        "SMQTT stages: setup, encryption, publish, decryption; algorithms not standardized"
      ]},
      { h: "CoAP", items: [
        "Full form: Constrained Application Protocol; session layer; by IETF CoRE working group",
        "Model: request-response; asynchronous over UDP; designed for M2M (smart energy, building automation)",
        "Sub-layers: Messaging (reliability, duplication) and Request/response (communication)",
        "Message modes: Confirmable, Non-confirmable, Piggyback, Separate",
        "Confirmable/Non-confirmable: reliable / unreliable transmission",
        "Piggyback: response within the ACK; Separate: response sent separately later",
        "Methods: GET, PUT, PUSH, DELETE = retrieve, create, update, delete",
        "Features: low overhead, URL/content-type support, resource discovery, subscription & push, caching by max message age"
      ]},
      { h: "XMPP", items: [
        "Full form: Extensible Messaging and Presence Protocol; XML based; open standard",
        "Architecture: client-server but decentralized; no central server required",
        "Highlights: decentralization, open standards, security, flexibility",
        "Core techs: Core (XML streaming), Jingle (voice/video/file signalling), Multi-user Chat, PubSub (alerts), BOSH (HTTP binding)",
        "Weaknesses: no QoS, text overhead, binary data must be base64 encoded"
      ]},
      { h: "AMQP", items: [
        "Full form: Advanced Message Queuing Protocol; ISO/IEC 19464; binary application layer protocol",
        "Basic unit: frame",
        "Delivery guarantees: at-most-once, at-least-once, exactly-once",
        "Nine frame types: Open, Begin, Attach, Transfer, Flow, Disposition, Detach, End, Close",
        "Flow: controls message flow rate; Disposition: change in transfer state; Detach: terminate link",
        "Components: Exchange (routes to queues), Queue (stores for consumers), Bindings (distribution rules)",
        "Exchange types: Direct, Fan-out, Topic, Header"
      ]},
      { h: "IEEE 802.15.4", items: [
        "Purpose: low data-rate WPAN, low-power monitoring and control; ISM band",
        "Layers: PHY and MAC, plus LLC and SSCS additions",
        "Modulation: DSSS; BPSK (low speed), O-QPSK (high data rate)",
        "Channel access: CSMA-CA; duty cycle < 1%; minimum power -3 dBm (0.5 mW)",
        "Range: 10-75 m standard; up to 1000 m outdoors best case; mostly LOS",
        "Topologies: star and mesh",
        "Variants: A/B base, C China, D Japan, E industrial, F active RFID, G smart utility networks",
        "FFD: talks to all devices, full protocol; RFD: talks only to an FFD, low power, minimal CPU/RAM",
        "Frames: Beacon, MAC Command, Acknowledgement, Data",
        "Beacon-enabled: slotted CSMA/CA, superframe managed by PAN coordinator",
        "Non-beacon: unslotted CSMA/CA; beacons only for link layer discovery"
      ]},
      { h: "ZigBee", items: [
        "Relation: most widely deployed enhancement of 802.15.4; defines layer 3 and above",
        "Adds: authentication, encryption, routing and forwarding enabling mesh",
        "Components: ZDO (device management, security, policies), APS (interfacing and control services)",
        "Mesh: self-configuring and self-healing",
        "Coordinator (ZC): root, one per network, trust center and key repository",
        "Router (ZR): runs applications and relays data",
        "End device (ZED): talks only to parent, cannot relay, sleeps a lot, low memory/cost",
        "Network layer: AODV routing",
        "Applications: building automation, RF4CE remote control, smart energy, health care, home automation, Light Link, telecom"
      ]}
    ]
  },
  3: {
    title: "HART, NFC, Bluetooth, Z-Wave, ISA100.11A & WSNs",
    topics: [
      { h: "HART & WirelessHART", items: [
        "HART: Highway Addressable Remote Transducer; for networked smart field devices",
        "Wired vs wireless: differ in physical, data link and network layers; wired HART lacks a network layer",
        "Physical layer: from IEEE 802.15.4; only 2.4 GHz ISM; 15 channels",
        "Data link: super-frames of 10 ms timeslots + TDMA; channel hopping and channel blacklisting",
        "Channel blacklisting: removes channels consistently affected by interference",
        "Network layer (HART): = OSI Network + Transport + Session; mesh networking",
        "Application layer: command/response between gateways and devices; same for wired and wireless",
        "Congestion control: channel 26 removed; channel switching after every transmission; 15 packets at a time",
        "Network manager: schedules who sends/listens and at what frequency; security; blocks unauthorized nodes"
      ]},
      { h: "WirelessHART vs ZigBee", items: [
        "Hopping: WirelessHART hops after every message; ZigBee hops only when whole network hops",
        "MAC: WirelessHART TDMA; ZigBee CSMA/CA",
        "Topology: WirelessHART true mesh; ZigBee tree (trunk nodes critical)",
        "Compatibility: WirelessHART backward compatible; ZigBee variants (Pro, RF4CE, IP) incompatible"
      ]},
      { h: "NFC", items: [
        "NFC: Near Field Communication; offshoot of RFID; close proximity",
        "Types: Type A, Type B, FeliCa (Japan)",
        "Passive devices: readable only (supermarket tags); Active devices: read and transmit (smartphones)",
        "Principle: magnetic induction; reader's current creates magnetic field",
        "Frequency: 13.56 MHz",
        "Data rates: 106, 212 or 424 Kbps",
        "Storage: 96 to 512 bytes; range less than 20 cm",
        "Modes: peer-to-peer, read/write, card emulation",
        "Applications: smartphone payments, parcel tracking, poster tags, game toys, home automation"
      ]},
      { h: "Bluetooth", items: [
        "Nature: short range, cable replacement, ad-hoc piconets",
        "Band: 2.4 to 2.485 GHz ISM; frequency hopping at 1600 hops/sec, full-duplex",
        "Data rate: 1 Mbps (v1.2), 3 Mbps (v2.0 + EDR)",
        "Range: Class 3 ~1 m, Class 2 ~10 m (mobiles), Class 1 ~100 m (industrial)",
        "Connection: Inquiry, Paging, Connection",
        "Modes: Active, Sniff, Hold, Park",
        "Baseband: physical layer; error correction, data whitening, hop selection, security",
        "L2CAP: data link; multiplexing, segmentation & reassembly, group abstractions",
        "RFCOMM: serial port (EIA-232) emulation; reliable stream like TCP; up to 60 connections",
        "SDP: service discovery; request/response model",
        "Link Manager Protocol: establishment, authentication, link configuration",
        "Piconet: 1 master + up to 7 slaves; 48-bit master address sets hopping; no slave-to-slave link",
        "Scatternet: linked piconets; device can be slave in many but master in only one"
      ]},
      { h: "Z-Wave", items: [
        "Purpose: home automation; RF signaling",
        "Frequency: 908.42 MHz (US), 868.42 MHz (Europe); India 865.2 MHz",
        "Network: mesh, up to 232 nodes; source-routed static mesh; one primary controller",
        "Modulation/coding: GFSK and Manchester channel encoding",
        "IDs: Home (Network) ID 4 bytes; Node ID 1 byte; different Home IDs cannot talk",
        "GFSK: Gaussian filter pulse shaping limits spectrum width",
        "Healing: message used to bypass radio dead-spots",
        "Mobile devices: excluded (static network)",
        "vs ZigBee: Z-Wave simpler/user friendly, more expensive; ZigBee cheaper, low power (years on batteries), for experts"
      ]},
      { h: "ISA100.11A", items: [
        "By: International Society of Automation; for large industrial plants",
        "Layers: PHY/MAC on 802.15.4; network/transport TCP or UDP over IPv6; DLL mesh + hopping",
        "Topologies: star/tree, mesh",
        "Transport services: reliable, best effort, real-time",
        "Security: built-in; per-hop DLL encryption + transport peer-to-peer security; network security manager",
        "Usage classes: Safety class 0 (always critical) to class 5 (logging/downloading)"
      ]},
      { h: "Wireless Sensor Networks", items: [
        "WSN: many densely deployed nodes; multi-hop relaying to sink",
        "Node: multifunctional, short range, OS (e.g. TinyOS), battery powered",
        "Constraints: < 1 cubic cm, very low power, unattended, cheap, autonomous, adaptive",
        "Challenges: scalability (throughput falls ~1/sqrt(N)), QoS, energy efficiency, security",
        "Sensor Web: O&M, SensorML, TransducerML, SOS, SPS, SAS, WNS",
        "Cooperation: total cooperation exhausts energy; total non-cooperation kills throughput",
        "Node behaviour: normal, failed, badly failed (false routing), selfish (packet dropping), malicious (disrupt routing)",
        "Dumb nodes: sense but cannot transmit under adverse environment; temporal behaviour",
        "Reconnection schemes: CoRD and CoRAD",
        "InTSeM: controls transmission rate via node sleep time",
        "Social sensing: probabilistic duty cycle (PDC) for rare events using social media info",
        "Mines: WSN fire monitoring & alarm for Bord-and-Pillar coal mines",
        "WBAN: monitoring physiological parameters; PATS gives priority by fitness"
      ]}
    ]
  },
  4: {
    title: "Sensor Networks, UAV Networks & M2M",
    topics: [
      { h: "Target tracking & applications", items: [
        "Push-based: nodes compute target position and notify sink periodically; cluster structure",
        "Poll-based: report only on query; tree structure",
        "Guided: beacon nodes define a trajectory; face structure",
        "AID (agri intrusion): PIR detects intruder at boundary; ultrasonic measures distance"
      ]},
      { h: "WMSN, nanonetworks, underwater", items: [
        "WMSN: few camera sensor (CS) nodes (directional, costly) + many scalar sensor (SS) nodes (omni, cheap)",
        "WMSN topology: coalition formation game between CS and SS nodes for coverage",
        "Nanonetworks: electromagnetic (0.1-10 THz, SPP) or molecular (vesicles, gap junction; NTT Japan)",
        "Underwater: solitons (non-linear internal waves) scatter sound",
        "OFMM: oceanic forces mobility model; nodes move in 3D ocean column",
        "3D localization: only 3 surface anchor nodes; mobility prediction",
        "HASL: high-speed AUV-based silent localization",
        "Tic-tac-toe-arch: self-organizing virtual architecture for underwater networks"
      ]},
      { h: "Coverage", items: [
        "Coverage: area-of-interest covered; Connectivity: data reaches sink",
        "Rule: transmission range >= 2 x sensing range means coverage implies connectivity (Zhang and Hou)",
        "Reporting: event driven (forest fire) or on demand (inventory control)",
        "Algorithms: centralized, distributed, localized (subset of nodes)",
        "Static WSN coverage problems: area, point, barrier",
        "Barrier: k-barrier = covered by at least k sensors; weak vs strong",
        "Crossing covered: inside at least one node's coverage disk",
        "OGDC: starting node volunteers with probability p; cover crossings with minimum overlap; covered nodes sleep",
        "Optimal spacing: nodes sqrt(3) x rs apart"
      ]},
      { h: "Stationary vs mobile WSN", items: [
        "Stationary pros: easy deployment, optimized placement, easy topology maintenance",
        "Stationary cons: node failure can partition network; topology cannot change automatically",
        "MWSN: MANET + WSN; self-CHOP (configure, heal, optimize, protect)",
        "Components: mobile sensor nodes, mobile sink, data mules",
        "Data mule: collects data from nodes and carries it to the sink",
        "Underwater MWSN: with AUVs; Terrestrial: with UAVs; Aerial: UAVs",
        "Mobile entities: humans (unpredictable), vehicles (to RSU), robots (controllable)"
      ]},
      { h: "Human-centric sensing & DTN", items: [
        "Paradigms: participatory, people-centric, opportunistic sensing",
        "Human roles: sensing targets, sensor operators, data source",
        "Challenges: device energy, participant selection, privacy",
        "Participatory sensing: Burke et al., 2006",
        "DTN: no end-to-end path, high latency; data-mule WSNs are DT-WSNs"
      ]},
      { h: "UAV networks & FANETs", items: [
        "Features: mesh or star; SDN deployment; adaptive routing; large coverage; multi-tasking",
        "Key issues: frequent topology change, relative position change, malfunction, intermittent links",
        "Multi-UAV vs single: higher survivability & scalability, faster missions, directional antennas",
        "Constraints: link breakages, malfunction, huge power, weather",
        "Star: UAVs connect directly to ground station; multi-star: one node per group connects",
        "Mesh: flat or hierarchical; flexible, reliable, secure",
        "FANET: flying ad hoc network; popular for disaster networks; A2A links (XBee-PRO 802.15.4, Wi-Fi 802.11)",
        "Gateway selection: start with most stable node; each UAV knows UAVs within 2 hops",
        "Layered gateway: adds delay; not for time-critical tasks",
        "Trajectory control: change trajectory centers/radius when queues exceed threshold"
      ]},
      { h: "M2M", items: [
        "M2M: machine communication free of human intervention",
        "vs SCADA: SCADA isolated proprietary; M2M cross-platform integration",
        "Features: many nodes, low cost, energy efficient, small traffic per device; human needed for stability",
        "Low-end nodes: cheap, static, dense, no IP support",
        "Mid-end nodes: may be mobile; localization, QoS, TCP/IP",
        "High-end nodes: low density, multimedia with QoS, mobility essential (smartphones)",
        "Ecosystem: device providers, ISPs, platform providers, service providers, service users",
        "Device platform: device profiles, auth key management, status monitoring",
        "User platform: user registration, modification, charging, inquiry",
        "Application platform: integrated services from merged device data",
        "Access platform: app/web access, app registration and app-device mapping"
      ]}
    ]
  },
  5: {
    title: "Interoperability & Arduino Programming",
    topics: [
      { h: "Interoperability", items: [
        "Challenges: large-scale co-operation, global heterogeneity, unknown device configuration, semantic conflicts",
        "Definition: product/system whose interfaces are completely understood works with others without restriction",
        "Heterogeneity: protocols (ZigBee, Bluetooth, GPRS, 6LoWPAN, Wi-Fi), languages, hardware, OS, databases",
        "Sensor OS examples: TinyOS, SOS, Mantis OS, RETOS",
        "Types: user interoperability (user-device) and device interoperability (device-device)",
        "Unique addressing: EPC, UPC, URI, IP, IPv6",
        "Classification: UNSPSC, eCl@ss",
        "Syntactic: message format (SOC, web services, REST, middleware bridge, XML)",
        "Semantic: message meaning (ontology: limited to domain; collaborative conceptualization: cross-domain)",
        "Cosign: (A identifier, B natural language, C context, D definition)",
        "UMB: Universal Middleware Bridge across HAVI, Jini, LonWorks, UPnP",
        "UMB-A: adaptor; converts devices to Universal Device Template (global device/function/action/event IDs)",
        "UMB-C: core; routes metadata messages via Middleware Routing Table (MRT)"
      ]},
      { h: "Arduino basics", items: [
        "Arduino: open source board (microcontroller) + IDE; analog and digital inputs",
        "Board families: ATMEGA328, ATMEGA32u4, ATMEGA2560, AT91SAM3X8E",
        "UNO: 5 V, 16 MHz, 14 digital I/O, 6 analog in, 6 PWM, 1 UART, USB via ATMega16U2",
        "Power: USB or barrel jack",
        "IDE: based on C/C++; program = sketch",
        "Setup: Tools > Board and Tools > Port",
        "Verify: compile check; Upload: send to board; Serial Monitor: console",
        "setup(): runs first (like main), init pins; loop(): repeats",
        "pinMode(pin, INPUT/OUTPUT); digitalWrite(pin, HIGH/LOW); analogRead(pin); delay(ms)",
        "Blink: LED on pin 12, 1.4 kOhm resistor, 1000 ms delays"
      ]},
      { h: "Arduino programming", items: [
        "Operators: arithmetic, comparison, boolean, bitwise, compound",
        "Control: if, if-else, else-if, switch-case, conditional ?:",
        "Loops: for, while, do-while, nested, infinite",
        "Arrays: homogeneous, adjacent memory, index starts at 0",
        "String: null-terminated char array or String object; toUpperCase(), replace(), length()",
        "Math: include MATH.h; cos, sin, tan, fabs, fmod, exp, log, log10, square, pow",
        "Random: randomSeed(v); random(max); random(min, max)",
        "Interrupts: hardware/software; attachInterrupt(digitalPinToInterrupt(pin), ISR, mode)",
        "Traffic light: 3 LEDs, 330 Ohm; green, yellow, red each 5 s"
      ]},
      { h: "Sensors & actuators with Arduino", items: [
        "Sensor: converts physical quantity into electrical signal",
        "DHT pins: 1 = 3.3-5V, 2 = Data, 3 = Null, 4 = Ground",
        "DHT library: dht.readHumidity(), dht.readTemperature(); readings every 2 s (delay(2000))",
        "Actuator: converts energy into motion",
        "Motor types: servo, stepper, hydraulic, solenoid, relay, AC motor",
        "Servo: 0-180 degrees; black = ground, red = power, yellow = signal",
        "Servo library: Servo obj; attach(pin); write(angle); also read(), detach(), writeMicroseconds()"
      ]}
    ]
  },
  6: {
    title: "Python, Raspberry Pi & IoT Implementation",
    topics: [
      { h: "Python basics", items: [
        "Why Python: easy to read/script, supports wide hardware, open source",
        "IDEs: Spyder, PyCharm",
        "Blocks: rigid indentation",
        "Data types (5): Numbers, String, List, Tuple, Dictionary",
        "Functions: def; can return multiple values; functions are objects",
        "Scope: global (outside functions) vs local (inside)",
        "Modules: import module; from math import pi",
        "Exceptions: try / except / else"
      ]},
      { h: "Python files, images, sockets", items: [
        "File modes: r, w, a (append), r+",
        "Steps: open, read/write, close; with-statement auto closes",
        "CSV: csv.reader / csv.writer",
        "Images: PIL (till Python 2.7) / Pillow (3.x); pip install pillow",
        "PIL ops: Image.open, show, resize, rotate (counter clockwise), format/size/mode",
        "Modes: 'L' grey scale, 'RGB' true colour; convert('L')",
        "Socket: socket.socket(family, type, protocol=0)",
        "Family: AF_UNIX or AF_INET; Type: SOCK_STREAM (TCP) or SOCK_DGRAM (UDP)",
        "Server: bind, listen, accept, recv; Client: connect, send"
      ]},
      { h: "Raspberry Pi", items: [
        "What: low-cost single-board computer",
        "Pi 3 Model B: 1 GB RAM, quad Cortex A53 @1.2 GHz, 802.11 + Bluetooth 4.0, 40 GPIO",
        "GPIO: digital input or output",
        "Setup: HDMI, monitor, keyboard, mouse, 5 V adapter, LAN cable, min 2 GB micro SD",
        "Official OS: Raspbian, NOOBS; third party: Ubuntu Mate, Snappy Ubuntu Core, Windows 10 Core, Pinet, Risc OS",
        "Flash: Win32 Disk Imager writes Raspbian .img",
        "Config: sudo raspi-config (enable SSH, expand filesystem, camera)",
        "Languages: Python, C, C++, Java, Scratch, Ruby; anything compiling for ARMv6",
        "Uses: media streamer, home automation, bots, VPN, IoT web server, tablet"
      ]},
      { h: "Pi GPIO & camera", items: [
        "GPIO library: sudo apt-get install python-rpi.gpio",
        "Blink: RPi.GPIO, GPIO.setmode(GPIO.BOARD), GPIO.setup(11, GPIO.OUT); 100 ohm resistor",
        "nano: Ctrl+O write, Ctrl+X exit",
        "Camera: CSI slot between Ethernet and HDMI ports",
        "Capture: raspistill -o image.jpg; or python-picamera camera.capture()"
      ]},
      { h: "IoT with Raspberry Pi (auto cooling)", items: [
        "Parts: DHT sensor, 4.7K ohm resistor, relay, jumper wires, Pi, mini fan",
        "DHT wiring: pin 1 to 3.3V, pin 2 to Pi pin 11, pin 4 to ground",
        "Library: Adafruit_Python_DHT (git clone, sudo python setup.py install)",
        "Read: Adafruit_DHT.read_retry(Adafruit_DHT.AM2302, 17)",
        "Relay: terminals NO, Common, NC; VCC to 5V; signal pin 7; active low",
        "Logic: if temperature > 30, relay on for 5 s",
        "Fan: relay NO to fan +, Common to battery +, battery - to fan -"
      ]}
    ]
  },
  7: {
    title: "Remote Data Logging, SDN & Software-Defined IoT",
    topics: [
      { h: "Remote data logging", items: [
        "Flow: read DHT on Pi, send to server, save, split, plot",
        "Socket: two-way communication between server and client",
        "Example TCP server: port 12321, s.listen(5), c, addr = s.accept()",
        "Client data: UDP socket (SOCK_DGRAM) to ('10.14.3.194', 10001)",
        "Message: str(h)+','+str(t)",
        "Server: sock.recvfrom(4096), append to Datalog.txt",
        "Split: 'a,b,c'.split(',') gives a list of 3 strings",
        "matplotlib: plot, xlabel, ylabel, title, show; single list goes on y-axis",
        "Other plot functions: figure, grid, ion (interactive), subplot, close, scatter"
      ]},
      { h: "SDN basics", items: [
        "Problem: switches (OSPF) forward in a distributed manner with no global view",
        "Limitations: vendor-specific switches, no centralized control, costly",
        "History: 2006 SANE (Stanford); 2008 OpenFlow (SIGCOMM); 2009 OpenFlow 1.0, Nicira; Mar 2011 ONF; Oct 2011 first ONS",
        "Concept: separate control logic from switches, centralize it, use APIs between planes",
        "Components: hardware switches, controller, applications, flow-rules, APIs",
        "Adopters: Google datacenter networks",
        "Challenges: rule placement and controller placement"
      ]},
      { h: "Rules & OpenFlow", items: [
        "Flow table: SDN switch keeps flow table (vs routing table); entries = flow-rules",
        "TCAM: limited, fast and expensive memory for rules",
        "PACKET-IN: sent to controller when no rule matches",
        "Rule placement delay: 3-5 ms",
        "OpenFlow: only rule-placement protocol; versions 1.0, 1.1, 1.2, 1.3",
        "Hard timeout: deletes all rules; Soft timeout: deletes rule unused for a while",
        "SDN is not OpenFlow: SDN = concept; OpenFlow = data-control plane protocol",
        "Switch software: Indigo (Mac OS X), LINC (many OS), Pantou (OpenWRT router), Of13softswitch (Ericsson TrafficLab)"
      ]},
      { h: "SDN APIs & controllers", items: [
        "Southbound API: control to infrastructure layer (OpenFlow)",
        "Northbound API: control to application layer",
        "East-Westbound API: among multiple controllers",
        "Controller capacity: about 200 requests/second (single thread)",
        "Logical vs physical: one-hop logically, multi-hop physically",
        "Architectures: flat, hierarchical (tree), ring, mesh",
        "Control: distributed or centralized; backup controller is a replica",
        "Security: firewall, proxy, HTTP, IDS",
        "Mininet: Python-based virtual OpenFlow network",
        "Controllers: Pox, Nox, FloodLight, OpenDayLight, ONOS"
      ]},
      { h: "Software-defined IoT", items: [
        "Benefits: intelligent routing, simpler data collection/analysis, visibility of resources, traffic analysis",
        "WSN challenges: real-time programming, vendor-specific, resource constrained, limited memory",
        "Sensor OpenFlow (Luo, 2012): value-centric and ID-centric forwarding; not implemented",
        "Soft-WSN (Bera, 2016): sensor, delay, active-sleep and topology management",
        "Soft-WSN results: higher PDR, fewer replicated packets, more control messages (PACKET-IN)",
        "SDN-WISE (Galluccio, INFOCOM 2015): flow tables at sensor nodes; INPP = In Network Packet Processing"
      ]}
    ]
  },
  8: {
    title: "SDN for Mobile/IoT & Cloud Computing",
    topics: [
      { h: "SDN for mobile networks", items: [
        "Traditional problems: hard to scale, hard to manage, inflexible, costly CapEx/OpEx",
        "Flow-table paradigm: end-to-end over WiFi, 3G, 4G",
        "Centralized control: base-station coordination against inter-cell interference",
        "Also: path management and network virtualization",
        "Access device challenges: OpenFlow lacks wireless support, mobility, heterogeneity",
        "ODIN: Odin agent at AP, Odin master at controller; LVAP = light virtual AP",
        "Ubi-Flow: mobility management, scalable AP control, fault tolerance, load balancing",
        "Mobi-Flow: predicts user location at t+1 (order-K Markov) and places rules proactively; LP picks AP",
        "Data center: wildcard rules for mice flows, exact match for elephant flows",
        "Anomaly detection: monitor flows/port statistics via OpenFlow",
        "Mininet-WiFi: wired and wireless emulation; ONOS for controllers"
      ]},
      { h: "Cloud fundamentals", items: [
        "NIST: on-demand network access to a shared pool of configurable computing resources",
        "Evolution: step on from utility computing",
        "Essential characteristics: broad network access, rapid elasticity, measured service, on-demand self-service, resource pooling",
        "Service models: SaaS, PaaS, IaaS",
        "Deployment: public, private, hybrid, community, distributed, multi-cloud, inter-cloud",
        "General traits: agility, ubiquity, multitenancy, load balancing, reliability, low cost, security",
        "Business: near-zero upfront cost, usage-based costing, faster time to market"
      ]},
      { h: "Service models", items: [
        "SaaS: provider's apps as services (Google Apps, Salesforce, Learn.com); thin client, pay-as-you-go",
        "PaaS: deploy own apps (Windows Azure, Google App Engine); application middleware as a service",
        "IaaS: compute, storage, network, OS (Amazon EC2, GoGrid, iland, Rackspace); hypervisor hosts VMs",
        "IaaS fits: startups, fast growth, fluctuating demand (Flipkart/Amazon festive season)",
        "IaaS limits: regulation for sensitive data, network latency, low-level details",
        "SaaS limits: centralized control, switching cost, limited flexibility, data security"
      ]},
      { h: "Deployment models", items: [
        "Public: anyone; AWS, Google Compute Engine, Azure; cheap and scalable",
        "Private: single organization; total control, minimum security concern; needs maintenance",
        "Hybrid: two or more clouds; portability, load balancing",
        "Community: shared by organizations with common concerns",
        "Distributed: public-resource computing and volunteer cloud",
        "Multi-cloud: multiple services via one heterogeneous architecture",
        "Inter-cloud: global cloud of clouds"
      ]},
      { h: "Management & security", items: [
        "SLA: non-functional requirements; quality, utility, warranty of services",
        "Accounting: resource usage records; Billing: accounting records + prices + rules",
        "DBaaS: Azure SQL, DynamoDB/RDS, Google Cloud SQL, ClearDB, Database.com",
        "Security concerns: data loss, account seizing, traffic hindrance, vulnerable APIs",
        "Levels: network, host, application",
        "Host (IaaS) threat: Blue Pill attack on hypervisor",
        "IAM: right persons, right resources, right time, right reasons",
        "Trust vs reputation: expectancy between entities vs community belief",
        "User authentication: done at PaaS layer"
      ]},
      { h: "Simulators & platforms", items: [
        "Simulators: CloudSim, CloudAnalyst, GreenCloud, iCanCloud, GroudSim, DCSim",
        "CloudSim: Java, CLOUDS Lab Univ. of Melbourne; layers: User Code, CloudSim, Core Simulation Engine",
        "CloudAnalyst: GUI tool built on CloudSim",
        "GreenCloud: energy monitoring; extension of NS2",
        "OpenStack: Nova, Neutron, Cinder, Keystone, Glance, Swift, Horizon, Trove, Sahara, Manila, Designate, Searchlight, Barbican",
        "Azure: IaaS + PaaS (formerly Windows Azure)",
        "EC2 types: general T2/M4/M3; compute C4/C3; memory X1/R4/R3; accelerated P2/G2/F1",
        "EC2 storage: Instance Store, EBS, S3; CloudWatch monitoring; Elastic IP; VPC"
      ]}
    ]
  },
  9: {
    title: "OpenStack, Sensor-Cloud & Fog Computing",
    topics: [
      { h: "OpenStack", items: [
        "Origin: 2010, Rackspace Hosting + NASA; open source",
        "Versions: Austin ... Newton, Ocata (latest in notes)",
        "Keystone: identity (authentication, authorization)",
        "Horizon: dashboard GUI",
        "Nova: compute, launch instances",
        "Glance: image service, VM images and snapshots",
        "Swift: object storage",
        "Neutron: networking",
        "Cinder: block storage",
        "Heat: orchestration; Ceilometer: billing",
        "Install: DevStack; local.conf with passwords + HOST_IP; ./stack.sh; unstack.sh to uninstall"
      ]},
      { h: "Sensor-cloud", items: [
        "Idea: virtualization of sensor nodes, pay-per-use; not just dumping data into cloud",
        "Virtualization benefits: sharing, encapsulation, independence, portability (VM migration)",
        "WSN limits: procurement, deployment, maintenance, change of requirement",
        "Actors: end-users (use Se-aaS), sensor-owners (buy and lend sensors), SCSP (managerial, charges users)",
        "Sensor-cloud: SCSP handles deployment, redeployment, maintenance, overhead",
        "CoV-I: homogeneous nodes, same region, Virtual Sensor",
        "CoV-II: heterogeneous nodes, multiple regions, Virtual Sensor Group",
        "Caching: Internal Cache handles user requests; External Cache re-caches periodically",
        "Pricing: hardware (pH) + infrastructure (pI)"
      ]},
      { h: "Fog computing", items: [
        "Coined by: CISCO",
        "Idea: extend cloud nearer to IoT devices; layer between cloud and devices",
        "Stats: 2.5 quintillion bytes/day; >30 billion IoT devices; 50 billion devices online by 2020",
        "Cloud issues: volume, latency, bandwidth",
        "IoT requirements: low latency, data security, reliability, process data at suitable place, wide-area monitoring",
        "Fog node: storage, computing, network connectivity; e.g. routers, embedded servers, switches, cameras",
        "Very time-sensitive data: nearest fog node (fraction of second)",
        "Less time-sensitive: aggregate fog node (seconds to minutes)",
        "Non time-sensitive: cloud (hours to weeks)",
        "Advantages: security, low cost, fewer accidents, privacy, agility, mobility, remote deployment",
        "Applications: health monitoring, power systems, rail monitoring, pipelines, wind turbines",
        "Challenges: power consumption, data security, reliability, fault tolerance, real-time analysis, programming"
      ]}
    ]
  },
  10: {
    title: "Smart Cities, Smart Homes & Connected Vehicles",
    topics: [
      { h: "Smart cities", items: [
        "Smart city: urban system using ICT for interactive, accessible, efficient infrastructure",
        "Need: growing population, depleting resources, climate change",
        "Human analogy: skeleton = buildings/industries/people; skin = transport/logistics; organs = hospitals/police/banks/schools; brain = embedded intelligence; nerves = telecom networks; sensory organs = sensors/tags; cognition = software",
        "Focus areas: Smart Economy, Governance, People, Mobility, Environment, Living",
        "Current areas: smart homes, parking, vehicles, health, pollution/calamity monitoring, energy, agriculture",
        "Technological areas: data collection, transmission, storage, processing",
        "Challenges: security & privacy, heterogeneity, reliability, large scale, legal/social, big data, sensor networks"
      ]},
      { h: "Data fusion", items: [
        "Purpose: make large incoming data precise and accurate",
        "Challenges: imperfection, ambiguity (outliers/missing), conflicts, alignment, trivial features",
        "Stages: decision, feature, pixel, signal level",
        "Methods: probability (Bayesian, statistics), AI (ANN, ML, CNN), theory of evidence (belief functions)"
      ]},
      { h: "Smart parking & energy", items: [
        "Benefits: less search time, congestion, pollution, fuel; more revenue",
        "Layers: information collection, system deployment, service dissemination",
        "Sensing: stationary (many sensors) or mobile (fewer sensors)",
        "Energy efficient: lightweight protocols, scheduling, prediction, cloud, low-power transceivers",
        "Harvesting: ambient (RF, wind, sun, heat, vibration) or dedicated sources"
      ]},
      { h: "Smart homes & HAN", items: [
        "HAN: network within home for remote access and control",
        "Multi-protocol gateway: bridges non-IP to IP",
        "Wired HAN: power lines, coax, phone lines, fibre; Wireless HAN: Wi-Fi, ZigBee, 6LoWPAN",
        "UPnP: application layer, zero-configuration, auto discovery",
        "DLNA: Sony, Intel, Microsoft; media sharing",
        "KNX (Konnex): open standard for home/building; needs software setup",
        "LonWorks: Neuron chip SoC + transceiver in every device",
        "ZigBee: PHY/MAC from 802.15.4; network/app by ZigBee; Alliance: Mitsubishi, Honeywell, Invensys, Motorola, Philips",
        "X-10: power line control; GE and Philips; low speed",
        "DomoNet: XML + web services, SOA, central gateway",
        "Jini: Java, Sun Microsystems; federation without central node",
        "HYDRA: middleware; embedded HYDRA client acts as proxy; Amigo: ambient intelligence for homes"
      ]},
      { h: "Connected vehicles", items: [
        "Challenges: security, privacy, scalability, reliability, QoS, no global standards",
        "V2X: distributed, mobile, shares info with vehicles, pedestrians, infrastructure",
        "TCP/IP failure in V2X: built for single pair, location dependent, address-only",
        "CCN: from ICN; name-based; in-network caching; Content Store cache; FIB from name prefixes",
        "VANET: DSRC + WAVE; MANET-derived routing",
        "VANET features: dynamic topology, high capability, unstable links, large scale, predictable mobility",
        "VANET apps: safety, efficiency (toll, parking), commercial, comfort",
        "Body & brain: decision = brain; network & transmission = nerves; sense & execution = body (INN)",
        "Spectrum: 75 MHz (5850-5925 MHz) for ICVs by US DoT and FCC; DSRC",
        "DSRC standards: IEEE 802.11p, IEEE 1609; SAE J2735, J2945",
        "IEEE 1609: .1 resource manager, .2 security, .3 networking, .4 multi-channel",
        "ICV phases: 1 infotainment (2G/3G), 2 intelligent transport (4G LTE/DSRC), 3 cloud connected",
        "VANET domains: in-vehicle (OBU, ADAS, CAN/VPLN/Ethernet), ad-hoc (vehicles + RSUs, 802.11p), infrastructure (RSU gateways or cellular)",
        "V2X pros: safety, travel time, fuel efficiency; cons: privacy, data control, tracking"
      ]}
    ]
  },
  11: {
    title: "Smart Grid, Industrial IoT & Data Handling",
    topics: [
      { h: "Smart grid basics", items: [
        "Traditional grid: centralized generation, one-way distribution, manual restoration",
        "NIST: modernized grid with bidirectional energy flow and two-way communication and control",
        "Nicknames: electricity with a brain, the energy internet, the electronet",
        "Benefits: efficient transmission, quick restoration, lower costs, reduced peak demand, renewables, security",
        "Components: smart home, renewable energy, consumer engagement, distribution intelligence, PEVs, operation center"
      ]},
      { h: "Smart home & consumers", items: [
        "Smart meter: grid interface between consumer and provider; digital; two-way info",
        "Home energy management: tracks usage and prices; schedules for lowest price",
        "Smart appliances: respond to peak signals; consumer override",
        "Home generation: rooftop solar, small wind, small hydro, fuel cells (natural gas)",
        "Islanding: home powered by its own distributed generation",
        "Engagement: Time-of-Use pricing (use off-peak), net metering (inflow vs outflow), financial incentives"
      ]},
      { h: "Operations & communication", items: [
        "PMU: samples voltage/current; phasor network analyzed at SCADA",
        "Self-healing: dampen oscillations, avoid unwanted flows, reroute power",
        "Distribution intelligence: locate outages, automatic switching, balance real/reactive power",
        "PEVs: charge off-peak; can supply grid on-peak for incentives",
        "Comm components: appliances, smart meters, gateways, DAUs, MDMS",
        "Networks: HAN, NAN, WAN, IP networks, SANETs",
        "Protocols: C-Bus 3500 bps; DECT 64000 bps (1880-1930 MHz); EnOcean 9600 bps (902 MHz NA); UPB 480 bps; Thread/ZigBee 20-250 kbps; SCS 9.6 kbps twisted pair",
        "Gateway: links nearby smart meters to DAUs; mostly WiFi (802.11)",
        "DAU: aggregates an area and forwards to MDMS",
        "MDMS: central coordinator at operation center; decides price per unit"
      ]},
      { h: "Smart grid security & cloud", items: [
        "Vulnerabilities: integrity, availability, dynamic system attacks, physical threats, coordinated attacks",
        "Integrity: data injection attacks (e.g. Stuxnet), price manipulation, time synchronization attacks on PMUs",
        "Availability: denial of service (DoS)",
        "Dynamic: replay attacks, dynamic data injection, covert attack (closed-loop replay)",
        "Cloud roles: energy management, information management, security",
        "Demand response models: data-centric and topic-based group communication"
      ]},
      { h: "Industrial IoT", items: [
        "IIoT: IoT in industries linking automation with enterprise, planning and product lifecycle",
        "Includes: ML, big data, M2M, automation",
        "Approach: wrap & re-use (not rip & replace)",
        "Industry 4.0: 4th industrial revolution",
        "Design factors: energy, latency, throughput, scalability, topology, safety & security",
        "IoT vs IIoT: convenience/consumer vs efficiency/safety/industry",
        "Services: primary (node functions) and secondary (auxiliary)",
        "Applications: manufacturing, healthcare, transportation & logistics (DSRC for V2V/V2R), mining, firefighting",
        "Robots: sensing, thinking, acting",
        "Challenges: identification, huge data, integration, storage, safety, standardization, privacy",
        "Products: IRM 1500 & ACE 1000 radio modems; Comtrol IO-Link master (Ethernet/IP, PROFINET, Modbus TCP)"
      ]},
      { h: "Data handling & Hadoop", items: [
        "Big data (IDC/NIST): data whose volume, speed or representation defeats traditional relational methods",
        "Structured: 20% of data (SQL); Unstructured: 80%",
        "7 Vs: Volume, Velocity, Variety, Variability, Veracity, Visualization, Value",
        "Volume e.g.: LSST 30 TB/night; 72 hours YouTube video per minute",
        "Velocity e.g.: 140 million tweets/day; NYSE 1 TB per session",
        "Veracity: biases, noise, abnormality",
        "Flow: generation, acquisition, storage, analysis",
        "Pre-processing: integration, cleaning, redundancy mitigation",
        "Storage: GFS, HDFS, Kosmosfs; NoSQL: key-value, column-oriented, document-oriented",
        "Hadoop: open-source GFS + MapReduce",
        "Blocks: Hadoop Common, HDFS, MapReduce, YARN",
        "HDFS: Namenode = metadata; Datanode = actual data (replicated blocks)",
        "Job Tracker: on Namenode; Task Tracker: on each Datanode",
        "Architecture: master-slave, shared-nothing"
      ]}
    ]
  },
  12: {
    title: "Data Analytics, Agriculture, Healthcare & Activity Monitoring",
    topics: [
      { h: "Data analytics", items: [
        "Qualitative: categorical, descriptive (interviews, video, audio); Seidel: notice, collect, think",
        "Quantitative: numerical; mean, median, standard deviation",
        "Statistical model: ordered pair (X, P); complete = variables equal equations",
        "ANOVA: compares more than 2 populations; continuous response + categorical factor",
        "ANOVA needs: independence, normality, homogeneity; types: one way, two way, k-way",
        "F-ratio: about 1.0 if null hypothesis true; greater than 1 if false",
        "Dispersion: range, average absolute deviation, variance, standard deviation",
        "Contingency table: cross tabulation of frequencies",
        "Pearson's r: strength of association between two variables",
        "Regression: dependent vs independent variables; prediction and forecasting",
        "Statistical significance: depends on sample size and effect size",
        "Precision: inversely related to standard error",
        "Limit of error: critical value x standard deviation of statistic"
      ]},
      { h: "AgriSens (smart water)", items: [
        "Objectives: more yield with less water, save water, automatic and dynamic irrigation, remote control",
        "Layers: sensing & actuating; processing, storage & service; application",
        "Sensors: designed water-level sensor; EC-05 soil moisture sensor",
        "Remote server: repository server (GPRS from gateway), web server, multi-user server (SMS to farmer)",
        "Results: avg PDR 98.75-89.75%; noise from air flow, temperature, solar radiation, rain"
      ]},
      { h: "IoT healthcare", items: [
        "Benefits: data over time, preventive care, automation reduces error and cost",
        "Layers: sensing (Google Glass, Fitbit), aggregated (smartphones, tablets), processing (servers), cloud",
        "Directions: remote healthcare (Withings BP monitor, Shimmer), real-time monitoring, preventive care (fall detection)",
        "AmbuSens: ECG, temperature, heart rate, GSR",
        "AmbuSens WBAN: single hop, Bluetooth (IEEE 802.15.1)",
        "AmbuSens cloud: privacy via hashing and reverse hashing of patient ID",
        "AmbuSens web: paramedic and doctor portals"
      ]},
      { h: "Activity monitoring", items: [
        "Uses: medical, child-care, elderly-care, entertainment, security",
        "Advantages: daily behaviour patterns, easy integration, long-term monitoring",
        "Handheld sensors: accelerometer, gyroscope, GPS",
        "Activities: running, jumping, folding legs, moving hand",
        "Sensor types: camera, smartphone, activity tracker band",
        "Analysis: statistical, ML, deep learning (sensor data, images, videos)",
        "In-place: on device, power intensive, no network needed",
        "Network-based: heavy processing, group analytics, low power, needs network"
      ]}
    ]
  }
};
