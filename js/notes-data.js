/*
 * Weekly notes quiz bank.
 * Every question below is written strictly from the lecture-note PDFs of the
 * NPTEL "Introduction to Internet of Things" course (IIT Kharagpur).
 * `src` names the lecture / slide topic the fact comes from.
 *
 * Shape: { q, o: [options], a: [correct option indexes], e: explanation, src }
 * A question with more than one index in `a` is a multiple-select (MSQ).
 */
window.NOTES_DATA = {
  1: {
    title: "Introduction to IoT, Addressing & Sensing",
    questions: [
      {
        q: "The term \"Internet of Things\" was the title of a report published by ITU in which year?",
        o: ["1999", "2005", "2011", "2018"],
        a: [1],
        e: "The notes quote \"The Internet of Things\", ITU Internet Report 2005, which was titled \"Internet of Things\".",
        src: "Introduction to IoT – Part I: Origin of Terminology"
      },
      {
        q: "Which of the following were identified as IoT enablers in the ITU 2005 report?",
        o: ["RFID", "Nanotechnology", "Smart Networks", "Quantum computing"],
        a: [0, 1, 2],
        e: "The areas identified as IoT enablers were RFID, Nanotechnology, Sensors and Smart Networks.",
        src: "Introduction to IoT – Part I: Origin of Terminology"
      },
      {
        q: "\"The network of physical objects that contain embedded technology to communicate and sense or interact with their internal states or the external environment.\" This alternate definition of IoT is attributed to:",
        o: ["ITU", "Gartner Research", "IETF", "Cisco Systems"],
        a: [1],
        e: "The notes give this as the 'Alternate Definition' of IoT from Gartner Research.",
        src: "Introduction to IoT – Part I: Alternate Definition"
      },
      {
        q: "Which of the following is listed as a characteristic of IoT?",
        o: ["Guaranteed continuous connectivity", "Intermittent connectivity", "Only IP-based devices", "Centralised naming only"],
        a: [1],
        e: "Characteristics listed: efficient, scalable and associated architecture; unambiguous naming and addressing; abundance of sleeping nodes, mobile and non-IP devices; intermittent connectivity.",
        src: "Introduction to IoT – Part I: Characteristics"
      },
      {
        q: "According to the 'Evolution of Connected Devices', ATMs went online for the first time in:",
        o: ["1964", "1974", "1991", "2000"],
        a: [1],
        e: "\"These ubiquitous money dispensers went online for the first time way back in 1974.\"",
        src: "Introduction to IoT – Part I: Evolution of Connected Devices"
      },
      {
        q: "The World Wide Web made its debut in:",
        o: ["1974", "1985", "1991", "2005"],
        a: [2],
        e: "The notes state that the World Wide Web made its debut in 1991.",
        src: "Introduction to IoT – Part I: Evolution of Connected Devices"
      },
      {
        q: "Which technologies are named as baseline technologies very closely related to IoT?",
        o: ["Machine-to-Machine (M2M) communications", "Cyber-Physical-Systems (CPS)", "Web-of-Things (WoT)", "Optical character recognition"],
        a: [0, 1, 2],
        e: "Baseline technologies: M2M communications, Cyber-Physical-Systems (CPS) and Web-of-Things (WoT).",
        src: "Introduction to IoT – Part I: Baseline Technologies"
      },
      {
        q: "The term M2M was introduced by:",
        o: ["Web developers", "Telecommunication services providers", "Cloud vendors", "Sensor manufacturers"],
        a: [1],
        e: "M2M is a term introduced by telecommunication services providers and emphasises machine interactions via one or more telecom/communication networks.",
        src: "Introduction to IoT – Part I: IoT vs. M2M"
      },
      {
        q: "The approach to building the Web of Things (WoT) is based on:",
        o: ["RESTful principles and REST APIs", "Circuit switching", "Proprietary telecom signalling", "Token ring networks"],
        a: [0],
        e: "\"The approach to building WoT is therefore based on RESTful principles and REST APIs.\"",
        src: "Introduction to IoT – Part I: IoT vs. WoT"
      },
      {
        q: "Technically, WoT can be thought of as:",
        o: ["A replacement for the IoT physical layer", "An application layer added over the IoT's network layer", "A MAC protocol for sensors", "A type of IPv6 address"],
        a: [1],
        e: "WoT can be thought of as a flavour/option of an application layer added over the IoT's network layer.",
        src: "Introduction to IoT – Part I: IoT vs. WoT"
      },
      {
        q: "Which IoT systems are given as examples of systems NOT accessible through the web?",
        o: ["Conventional WSN", "RFID systems", "REST APIs", "HTML 5.0 pages"],
        a: [0, 1],
        e: "The scope of IoT is broader and includes systems not accessible through the web, e.g. conventional WSN and RFID systems.",
        src: "Introduction to IoT – Part I: IoT vs. WoT"
      },
      {
        q: "Which IoT entity \"performs active application layer functions between IoT nodes and other entities\"?",
        o: ["IoT LAN", "IoT Node", "IoT Gateway", "IoT Proxy"],
        a: [3],
        e: "IoT Proxy: performs active application layer functions between IoT nodes and other entities. The gateway is a router connecting the IoT LAN to a WAN.",
        src: "Introduction to IoT – Part II: Connectivity Terminologies"
      },
      {
        q: "In the impact of mobility on addressing, the IoT gateway's WAN address changes without changing the LAN address. This is achieved using:",
        o: ["ULA", "NAT", "ARP", "DHCPv4"],
        a: [0],
        e: "\"IoT gateway WAN address changes without change in LAN address. This is achieved using ULA.\"",
        src: "Introduction to IoT – Part II: Impact of Mobility on Addressing"
      },
      {
        q: "When nodes need to communicate directly with the internet via a remote anchor point, they use tunneling protocols such as:",
        o: ["IKEv2", "SMTP", "FTP", "SNMP"],
        a: [0],
        e: "Tunneling is achieved using protocols such as IKEv2 (internet key exchange version 2).",
        src: "Introduction to IoT – Part II: Impact of Mobility on Addressing"
      },
      {
        q: "Since LU addresses cannot communicate directly with the internet or upper layers, this is solved by implementing:",
        o: ["A broadcast address", "An application layer proxy", "A larger subnet mask", "A physical layer repeater"],
        a: [1],
        e: "\"LU cannot communicate directly with the internet or the upper layers, which is solved by implementing an application layer proxy.\"",
        src: "Introduction to IoT – Part II: Gateways"
      },
      {
        q: "Which makeshift solutions are mainly used for IoT deployment due to the lack of a universal IPv6 transition solution?",
        o: ["IPv6 to IPv4 translation", "IPv6 tunneling over IPv4", "Application layer proxies", "Disabling IPv4 completely"],
        a: [0, 1, 2],
        e: "The makeshift solutions mainly address IPv6 to IPv4 translation, IPv6 tunneling over IPv4 and application layer proxies (e.g. data relaying).",
        src: "Introduction to IoT – Part II"
      },
      {
        q: "Multi-homing refers to:",
        o: ["A node/network connected to multiple networks for improved reliability", "A node with multiple sensors", "A home with multiple gateways only", "Using multiple MAC addresses for one radio"],
        a: [0],
        e: "Multi-homing: a node/network connected to multiple networks for improved reliability.",
        src: "Introduction to IoT – Part II: Multi-homing"
      },
      {
        q: "As per the IPv4 vs IPv6 comparison, which of the following hold for IPv6?",
        o: ["Fixed header size", "No header checksum", "No broadcast addresses", "Address length of 32 bits"],
        a: [0, 1, 2],
        e: "IPv6: 128-bit length, fixed header size, no header checksum, no header options, no broadcast addresses, multicast supported.",
        src: "Introduction to IoT – Part II: IPv4 versus IPv6"
      },
      {
        q: "Which statement correctly contrasts the IPv4 and IPv6 headers?",
        o: ["IPv4 emphasises reliable transmission; IPv6 focuses more on addressing", "IPv6 emphasises reliable transmission; IPv4 focuses on addressing", "Both headers are identical", "IPv6 has more reliability fields than IPv4"],
        a: [0],
        e: "IPv4 emphasises reliable transmission (type of service, TTL, checksum fields). The IPv6 header is simpler and is concerned more with addressing than reliability.",
        src: "Introduction to IoT – Part II: IPv4 / IPv6 Header"
      },
      {
        q: "The word \"Transducer\" is the collective term used for:",
        o: ["Sensors only", "Actuators only", "Both sensors and actuators", "Gateways and proxies"],
        a: [2],
        e: "\"Transducer\" is the collective term used for both sensors and actuators.",
        src: "Sensing: Sensor vs. Transducer"
      },
      {
        q: "Digital sensor output combining bits to produce a single \"byte\" output is called:",
        o: ["Serial transmission", "Parallel transmission", "Analog transmission", "Vector transmission"],
        a: [1],
        e: "A single \"bit\" is serial transmission; combining the bits to produce a single \"byte\" output is parallel transmission.",
        src: "Sensing: Digital Sensors"
      },
      {
        q: "Which of the following are vector quantities according to the notes?",
        o: ["Sound", "Velocity", "Image", "Temperature"],
        a: [0, 1, 2],
        e: "Vector quantities: sound, image, velocity, acceleration, orientation. Temperature is a scalar quantity.",
        src: "Sensing: Scalar and Vector Sensors"
      },
      {
        q: "If a sensor's output signal differs from the correct value by a constant, the sensor has:",
        o: ["Sensitivity error", "Offset error or bias", "Full scale range error", "Resolution error"],
        a: [1],
        e: "\"If the output signal differs from the correct value by a constant, the sensor has an offset error or bias.\"",
        src: "Sensing: Sensorial Deviations"
      },
      {
        q: "The maximum and minimum values of the measured property of a sensor are defined by its:",
        o: ["Resolution", "Full scale range", "Sensitivity", "Bias"],
        a: [1],
        e: "\"The full scale range of a sensor defines the maximum and minimum values of the measured property.\"",
        src: "Sensing: Sensorial Deviations"
      }
    ]
  },
  2: {
    title: "IoT Networking & Connectivity Technologies",
    questions: [
      {
        q: "6LoWPAN stands for:",
        o: ["Low-power Wireless Personal Area Networks over IPv6", "IPv6 Long-range Wide Area Network", "Six-Layer Low-power WAN", "Low-power Wired Personal Area Network"],
        a: [0],
        e: "6LoWPAN: Low-power Wireless Personal Area Networks over IPv6, created by the IETF.",
        src: "6LoWPAN: Introduction"
      },
      {
        q: "How do IEEE 802.15.4 radios access the Internet in 6LoWPAN?",
        o: ["Using header compression and address translation techniques", "By switching to IPv4 only", "By using TCP over Ethernet", "By disabling the MAC layer"],
        a: [0],
        e: "Header compression and address translation techniques allow IEEE 802.15.4 radios to access the Internet; IPv6 packets are compressed and reformatted to fit the 802.15.4 packet format.",
        src: "6LoWPAN: Features"
      },
      {
        q: "In 6LoWPAN addressing, which statements are correct?",
        o: ["IPv6 multicast is not supported by 802.15.4", "IPv6 packets are carried as link layer broadcast frames", "64-bit addresses are globally unique", "16-bit addresses are globally unique"],
        a: [0, 1, 2],
        e: "64-bit addresses are globally unique; 16-bit addresses are PAN specific (assigned by the PAN coordinator); IPv6 multicast is not supported by 802.15.4; IPv6 packets are carried as link layer broadcast frames.",
        src: "6LoWPAN: Addressing"
      },
      {
        q: "In the 6LoWPAN Mesh Addressing Header, the 'Hops Left' field is:",
        o: ["Incremented by each node", "Decremented by each node before sending to the next hop", "Fixed by the originator and never changed", "Used only for fragmentation"],
        a: [1],
        e: "Hops Left: decremented by each node before sending to the next hop.",
        src: "6LoWPAN: Mesh Addressing Header"
      },
      {
        q: "LOADng routing is derived from:",
        o: ["RPL", "AODV", "OSPF", "BGP"],
        a: [1],
        e: "LOADng is derived from AODV and extended for use in IoT.",
        src: "6LoWPAN: LOADng Routing"
      },
      {
        q: "In LOADng, if a route is detected to be broken, which message is returned to the originator?",
        o: ["RREQ", "RREP", "RERR", "ACK"],
        a: [2],
        e: "A Route Error (RERR) message is returned to the originator of that data packet to inform it about the route breakage.",
        src: "6LoWPAN: LOADng Routing"
      },
      {
        q: "Which statements about RPL are correct?",
        o: ["It is a distance vector IPv6 routing protocol for lossy and low power networks", "It maintains routing topology using low rate beaconing", "Beaconing rate increases on detecting inconsistencies", "It does not require bidirectional links"],
        a: [0, 1, 2],
        e: "RPL is a distance vector IPv6 routing protocol for LLNs, uses low-rate beaconing that increases on detecting inconsistencies. RPL operations require bidirectional links.",
        src: "6LoWPAN: RPL Routing"
      },
      {
        q: "Compared to traditional barcodes and QR codes, a key advantage of RFID is that:",
        o: ["Tag data can be read outside the line-of-sight", "Tags never need a reader", "It uses wired communication", "It does not store any data"],
        a: [0],
        e: "\"As compared to traditional barcodes and QR codes, RFID tag data can be read outside the line-of-sight.\"",
        src: "RFID: Introduction"
      },
      {
        q: "RFID working principle is derived from which technology?",
        o: ["AIDC (Automatic Identification and Data Capture)", "GPS", "DSSS", "LTE"],
        a: [0],
        e: "RFID is derived from AIDC technology. AIDC uses wired communication while RFID uses radio waves to perform AIDC functions.",
        src: "RFID: Working Principle"
      },
      {
        q: "MQTT was introduced by ______ in 1999 and standardized by OASIS in 2013.",
        o: ["Cisco", "IBM", "Microsoft", "IETF"],
        a: [1],
        e: "\"MQTT was introduced by IBM in 1999 and standardized by OASIS in 2013.\"",
        src: "MQTT: Introduction"
      },
      {
        q: "Which of the following are MQTT methods?",
        o: ["Connect", "Subscribe", "Publish", "Piggyback"],
        a: [0, 1, 2],
        e: "MQTT methods: Connect, Disconnect, Subscribe, Unsubscribe, Publish. Piggyback is a CoAP messaging mode.",
        src: "MQTT: Methods"
      },
      {
        q: "The main advantage of the lightweight attribute-based encryption used in SMQTT is:",
        o: ["Broadcast encryption: one message is encrypted and delivered to multiple nodes", "It removes the need for a broker", "It uses no keys", "It is fully standardized"],
        a: [0],
        e: "The broadcast encryption feature: one message is encrypted and delivered to multiple other nodes. Key generation and encryption algorithms are not standardized.",
        src: "MQTT: SMQTT"
      },
      {
        q: "CoAP was designed by which IETF working group?",
        o: ["CoRE (Constrained RESTful Environment)", "ROLL", "6TiSCH", "MANET"],
        a: [0],
        e: "CoAP is a session layer protocol designed by the IETF Constrained RESTful Environment (CoRE) working group.",
        src: "CoAP: Introduction"
      },
      {
        q: "The two main sub-layers of the CoAP architecture are:",
        o: ["Messaging and Request/response", "Physical and MAC", "Session and Presentation", "Broker and Topic"],
        a: [0],
        e: "CoAP is divided into Messaging (reliability and duplication) and Request/response (communication) sub-layers.",
        src: "CoAP: Architecture"
      },
      {
        q: "In CoAP, which messaging modes represent reliable and unreliable transmissions respectively?",
        o: ["Confirmable and Non-confirmable", "Piggyback and Separate", "Separate and Confirmable", "Non-confirmable and Piggyback"],
        a: [0],
        e: "Confirmable and non-confirmable modes represent reliable and unreliable transmissions respectively; the other modes are used for request/response.",
        src: "CoAP: Message Types"
      },
      {
        q: "XMPP is a communication protocol for message-oriented middleware based on:",
        o: ["JSON", "XML", "YAML", "Binary frames"],
        a: [1],
        e: "XMPP (Extensible Messaging and Presence Protocol) is based on XML (Extensible Markup Language).",
        src: "XMPP: Introduction"
      },
      {
        q: "Which of the following are weaknesses of XMPP?",
        o: ["Does not support QoS", "Text based communications induce higher network overheads", "Binary data must be encoded to base64 before transmission", "Requires a single central server"],
        a: [0, 1, 2],
        e: "Weaknesses: no QoS, higher overhead due to text-based communication, binary data must be base64 encoded. XMPP is decentralized; no central server is required.",
        src: "XMPP: Weaknesses"
      },
      {
        q: "Which XMPP core technology provides multimedia signalling for voice, video and file transfer?",
        o: ["Jingle", "BOSH", "PubSub", "Multi-user Chat"],
        a: [0],
        e: "Jingle: multimedia signalling for voice, video, file transfer. BOSH is HTTP binding for XMPP; PubSub is alerts/notifications.",
        src: "XMPP: Core Technologies"
      },
      {
        q: "AMQP is ISO standard:",
        o: ["ISO/IEC 20922", "ISO/IEC 19464", "ISO/IEC 27001", "ISO/IEC 14443"],
        a: [1],
        e: "AMQP: ISO/IEC 19464. (ISO/IEC PRF 20922 is MQTT.)",
        src: "AMQP: Introduction"
      },
      {
        q: "In AMQP's 'Exactly-once' message delivery guarantee:",
        o: ["Each message is delivered once or never", "Each message is certain to be delivered but may be delivered multiple times", "The message will always certainly arrive and do so only once", "Messages are never acknowledged"],
        a: [2],
        e: "At-most-once: once or never; At-least-once: certain but possibly multiple times; Exactly-once: always arrives, only once.",
        src: "AMQP: Message Delivery Guarantees"
      },
      {
        q: "How many AMQP frame types are defined?",
        o: ["Five", "Seven", "Nine", "Twelve"],
        a: [2],
        e: "Nine frame types: Open, Begin, Attach, Transfer, Flow, Disposition, Detach, End, Close.",
        src: "AMQP: Frame Types"
      },
      {
        q: "Which of the following are AMQP exchange types?",
        o: ["Direct", "Fan-out", "Topic", "Piggyback"],
        a: [0, 1, 2],
        e: "AMQP exchanges: Direct, Fan-out, Topic and Header.",
        src: "AMQP: Exchanges"
      },
      {
        q: "IEEE 802.15.4 high data-rate versions use which modulation?",
        o: ["BPSK", "O-QPSK", "GFSK", "FHSS"],
        a: [1],
        e: "Low-speed versions use Binary Phase Shift Keying (BPSK); high data-rate versions use offset-quadrature phase-shift keying (O-QPSK).",
        src: "IEEE 802.15.4: Features"
      },
      {
        q: "The standard transmission range of IEEE 802.15.4 varies between:",
        o: ["1 m to 5 m", "10 m to 75 m", "100 m to 500 m", "1 km to 5 km"],
        a: [1],
        e: "Standard transmission range is 10 m to 75 m; best case outdoors can be up to 1000 m.",
        src: "IEEE 802.15.4: Features"
      },
      {
        q: "A Reduced Function Device (RFD) in IEEE 802.15.4:",
        o: ["Can talk to all types of devices", "Can only talk to an FFD", "Supports the full protocol", "Acts as the PAN coordinator"],
        a: [1],
        e: "RFD: can only talk to an FFD, lower power consumption, minimal CPU/RAM required. FFD can talk to all device types and supports full protocol.",
        src: "IEEE 802.15.4: Types"
      },
      {
        q: "The ZigBee network layer uses which routing protocol?",
        o: ["RPL", "LOADng", "AODV", "OLSR"],
        a: [2],
        e: "The ZigBee network layer uses Ad Hoc On-Demand Distance Vector (AODV) routing.",
        src: "ZigBee: Network Layer"
      },
      {
        q: "In ZigBee, which component is responsible for device management, security and policies?",
        o: ["ZDO (ZigBee Device Object)", "APS (Application Support Sub-layer)", "ZigBee End Device", "PAN ID"],
        a: [0],
        e: "ZDO: ZigBee Device Object (device management, security, policies). APS provides interfacing and control services.",
        src: "ZigBee: Important Components"
      }
    ]
  },
  3: {
    title: "HART, NFC, Bluetooth, Z-Wave, ISA100.11A & WSNs",
    questions: [
      {
        q: "WirelessHART's physical layer is derived from which protocol?",
        o: ["IEEE 802.11", "IEEE 802.15.4", "IEEE 802.3", "IEEE 802.16"],
        a: [1],
        e: "The HART physical layer is derived from the IEEE 802.15.4 protocol and operates only in the 2.4 GHz ISM band.",
        src: "HART & WirelessHART: Physical Layer"
      },
      {
        q: "How many channels of the 2.4 GHz band does the HART physical layer employ to increase reliability?",
        o: ["11", "15", "26", "79"],
        a: [1],
        e: "It employs and exploits 15 channels of the band to increase reliability.",
        src: "HART & WirelessHART: Physical Layer"
      },
      {
        q: "In the HART data link layer, super-frames consist of grouped timeslots of width:",
        o: ["1 ms", "10 ms", "100 ms", "1 s"],
        a: [1],
        e: "Super-frames consist of grouped 10 ms wide timeslots and, with TDMA, give collision-free deterministic communication.",
        src: "HART & WirelessHART: Data Link Layer"
      },
      {
        q: "In HART congestion control, which channel of the 2.4 GHz ISM band is removed due to restricted usage in certain areas?",
        o: ["Channel 11", "Channel 15", "Channel 20", "Channel 26"],
        a: [3],
        e: "HART is restricted to the 2.4 GHz ISM band with channel 26 removed, due to its restricted usage in certain areas.",
        src: "HART & WirelessHART: Congestion Control"
      },
      {
        q: "The HART network layer is equivalent to which OSI layers?",
        o: ["Physical + Data Link", "Network + Transport + Session", "Transport + Application", "Session + Presentation + Application"],
        a: [1],
        e: "Network layer (HART) = Network + Transport + Session layers (OSI).",
        src: "HART & WirelessHART: Network & Transport Layers"
      },
      {
        q: "Which statements correctly compare WirelessHART and ZigBee?",
        o: ["WirelessHART uses TDMA at the MAC layer", "ZigBee uses CSMA/CA", "WirelessHART hops after every message", "ZigBee is a true mesh where every node is a router"],
        a: [0, 1, 2],
        e: "WirelessHART hops channels after every message and uses TDMA; ZigBee uses CSMA/CA and a tree topology, which makes nodes along the trunk critical. WirelessHART is the true mesh network.",
        src: "WirelessHART vs. ZigBee"
      },
      {
        q: "NFC is an offshoot of:",
        o: ["Bluetooth", "RFID", "ZigBee", "Wi-Fi"],
        a: [1],
        e: "Near field communication, or NFC, is an offshoot of radio-frequency identification (RFID).",
        src: "NFC: Introduction"
      },
      {
        q: "The NFC type 'FeliCa' is commonly found in:",
        o: ["USA", "Europe", "Japan", "India"],
        a: [2],
        e: "FeliCa is commonly found in Japan.",
        src: "NFC: Introduction"
      },
      {
        q: "NFC's data-transmission frequency is:",
        o: ["2.4 GHz", "868 MHz", "13.56 MHz", "125 kHz"],
        a: [2],
        e: "NFC's data-transmission frequency is 13.56 MHz.",
        src: "NFC: Specifications"
      },
      {
        q: "Which of the following are valid NFC data rates?",
        o: ["106 Kbps", "212 Kbps", "424 Kbps", "1 Mbps"],
        a: [0, 1, 2],
        e: "NFC can transmit data at a rate of either 106, 212 or 424 Kbps.",
        src: "NFC: Specifications"
      },
      {
        q: "The NFC communication range is:",
        o: ["Less than 20 cm", "Around 10 m", "Up to 100 m", "About 1 km"],
        a: [0],
        e: "Communication range is less than 20 cm. Tags typically store between 96 and 512 bytes of data.",
        src: "NFC: Specifications"
      },
      {
        q: "Which NFC mode of operation lets an NFC device be used like a contactless credit card?",
        o: ["Peer-to-peer", "Read/Write", "Card emulation", "Sniff"],
        a: [2],
        e: "Card emulation: NFC device can be used like a contactless credit card. Peer-to-peer lets two smartphones swap data; Read/Write lets an active device pick up info from a passive one.",
        src: "NFC: Modes of Operation"
      },
      {
        q: "Bluetooth uses spread spectrum hopping at a nominal rate of:",
        o: ["100 hops/sec", "800 hops/sec", "1600 hops/sec", "3200 hops/sec"],
        a: [2],
        e: "Bluetooth uses spread spectrum hopping, full-duplex signal at a nominal rate of 1600 hops/sec, in the 2.4 to 2.485 GHz ISM band.",
        src: "Bluetooth: Features"
      },
      {
        q: "Which Bluetooth radio class is most commonly found in mobile devices, with a range of about 10 meters?",
        o: ["Class 1", "Class 2", "Class 3", "Class 4"],
        a: [1],
        e: "Class 3: up to 1 m; Class 2 (mobile devices): 10 m; Class 1 (industrial): 100 m.",
        src: "Bluetooth: Features"
      },
      {
        q: "Which Bluetooth mode makes a slave inactive until the master tells it to wake back up?",
        o: ["Active", "Sniff", "Hold", "Park"],
        a: [3],
        e: "Park: a slave will become inactive until the master tells it to wake back up. Hold is a power-saving mode where a device sleeps for a defined period.",
        src: "Bluetooth: Modes"
      },
      {
        q: "Which Bluetooth protocol is a cable replacement protocol that emulates EIA-232 (RS-232) control signals?",
        o: ["L2CAP", "RFCOMM", "SDP", "Baseband"],
        a: [1],
        e: "RFCOMM is a cable replacement protocol generating a virtual serial data stream; it emulates EIA-232 over the baseband and supports up to 60 simultaneous connections.",
        src: "Bluetooth: Protocol Stack"
      },
      {
        q: "Which are services provided by L2CAP?",
        o: ["Protocol multiplexing capability", "Segmentation and reassembly operation", "Group abstractions", "Frequency hop selection"],
        a: [0, 1, 2],
        e: "L2CAP provides protocol multiplexing, segmentation and reassembly, and group abstractions. Hop selection is a Baseband service.",
        src: "Bluetooth: L2CAP"
      },
      {
        q: "A Bluetooth Piconet can contain up to how many slaves clustered around a single master?",
        o: ["Three", "Five", "Seven", "Ten"],
        a: [2],
        e: "A Piconet can contain up to seven slaves clustered around a single master.",
        src: "Bluetooth: Piconets"
      },
      {
        q: "Linked Piconets that form a physically extensible communication infrastructure are known as:",
        o: ["Scatternet", "Supernet", "Mesh cluster", "Star-net"],
        a: [0],
        e: "Devices in adjacent Piconets provide a bridge, allowing assemblies of linked Piconets to form a Scatternet.",
        src: "Bluetooth: Features of Piconet"
      },
      {
        q: "How many nodes can a Z-Wave mesh network support?",
        o: ["64", "128", "232", "65,000"],
        a: [2],
        e: "Mesh network topology is the main mode of operation, and can support 232 nodes in a network.",
        src: "Z-Wave: Introduction"
      },
      {
        q: "In Z-Wave, the Network (Home) ID length and Node ID length are respectively:",
        o: ["4 bytes and 1 byte", "2 bytes and 2 bytes", "8 bytes and 1 byte", "1 byte and 4 bytes"],
        a: [0],
        e: "Network ID length = 4 Bytes, Node ID length = 1 Byte. Nodes with different Home IDs cannot communicate.",
        src: "Z-Wave"
      },
      {
        q: "In GFSK, passing baseband pulses through a Gaussian filter to smoothen them is known as:",
        o: ["Pulse shaping", "Channel blacklisting", "Healing", "Data whitening"],
        a: [0],
        e: "The filtering operation smoothens the pulses and is known as pulse shaping; it limits the modulated spectrum width.",
        src: "Z-Wave: GFSK"
      },
      {
        q: "Why are mobile devices excluded from a Z-Wave network?",
        o: ["Z-Wave uses a source routed static network", "Z-Wave uses only star topology", "Mobile devices cannot use RF", "Z-Wave has no controller"],
        a: [0],
        e: "As Z-Wave uses a source routed static network, mobile devices are excluded and only static devices are considered.",
        src: "Z-Wave"
      },
      {
        q: "In ISA100.11A, the network and transport layers are based on:",
        o: ["TCP or UDP / IPv6", "IEEE 802.15.4 only", "Ethernet frames", "Bluetooth L2CAP"],
        a: [0],
        e: "Network and transport layers are based on TCP or UDP / IPv6; physical and MAC layers are based on IEEE 802.15.4.",
        src: "ISA100.11A: Introduction"
      },
      {
        q: "In ISA100.11A security, which are the twin data security steps in each node?",
        o: ["Data link layer encrypts each hop", "Transport layer secures peer-to-peer communications", "Physical layer scrambles bits", "Application layer disables keys"],
        a: [0, 1],
        e: "Twin data security steps: data link layer encrypts each hop; transport layer secures peer-to-peer communications. A network security manager manages and distributes keys.",
        src: "ISA100.11A: Security"
      },
      {
        q: "In ISA100.11A usage classes, which class corresponds to 'Safety: Always critical'?",
        o: ["Class 0", "Class 1", "Class 3", "Class 5"],
        a: [0],
        e: "Category Safety, Class 0, is 'Always critical'.",
        src: "ISA100.11A: Usage Classes"
      },
      {
        q: "Which is an example of an operating system used in sensor nodes, as mentioned in the notes?",
        o: ["TinyOS", "Windows Server", "macOS", "Solaris"],
        a: [0],
        e: "Sensor nodes are multifunctional, have short transmission ranges, have an OS (e.g. TinyOS) and are battery powered.",
        src: "WSN: Sensor Nodes"
      },
      {
        q: "In cooperation in wireless ad hoc and sensor networks, what happens with 'total non-cooperation'?",
        o: ["Nodes quickly exhaust their energy", "Network throughput goes down rapidly", "All relay requests are accepted", "Security is guaranteed"],
        a: [1],
        e: "Total cooperation: nodes quickly exhaust limited energy. Total non-cooperation: no relay requests accepted, so the network throughput goes down rapidly.",
        src: "Cooperation in Wireless Ad Hoc and Sensor Networks"
      },
      {
        q: "Which type of misbehaving node is typified by unwillingness to cooperate whenever there is a personal cost, with packet dropping as its main attack?",
        o: ["Failed node", "Badly failed node", "Selfish node", "Malicious node"],
        a: [2],
        e: "Selfish nodes are unwilling to cooperate when there is a personal cost; packet dropping is their main attack. Malicious nodes deliberately disrupt routing.",
        src: "Node Behavior in WSNs"
      },
      {
        q: "Which two popular schemes re-establish connectivity between dumb nodes and other nodes?",
        o: ["CoRD and CoRAD", "SMAC and PW-MAC", "AODV and RPL", "PATS and FIS"],
        a: [0],
        e: "CoRD and CoRAD are two popular schemes that re-establish the connectivity between dumb nodes and others.",
        src: "Dynamic Misbehavior: Dumb Behavior"
      },
      {
        q: "Information theoretic self-management (InTSeM) controls a node's transmission rate by adjusting its:",
        o: ["Transmission power", "Sleep time", "Antenna gain", "Routing table"],
        a: [1],
        e: "InTSeM controls the transmission rate of a node by adjusting a node's sleep time.",
        src: "Information Theoretic Self-Management of WSNs"
      },
      {
        q: "The priority-based allocation of time slots (PATS) algorithm in WBANs gives higher preference to LDPUs with higher:",
        o: ["Fitness", "Battery voltage only", "Distance from the sink", "Packet size"],
        a: [0],
        e: "A fitness parameter is formulated from criticality of health data, energy dissipation factor and time since last transmission; LDPUs with higher fitness get higher preference.",
        src: "Applications of WSNs: Healthcare"
      }
    ]
  },
  4: {
    title: "Sensor Networks, UAV Networks & M2M",
    questions: [
      {
        q: "In target tracking, which formulation sends data reports toward the sink only when there is a query to be answered (often using a tree structure)?",
        o: ["Push-based formulation", "Poll-based formulation", "Guided formulation", "Event-based formulation"],
        a: [1],
        e: "Poll-based: nodes register the presence of the target; data reports go to the sink only on a query (tree structure). Push-based periodically notifies the sink (cluster structure); Guided uses beacon nodes defining a trajectory (face structure).",
        src: "Sensor Networks: Target Tracking"
      },
      {
        q: "In the AID agricultural intrusion detection prototype, which sensor detects an intruder entering through the field boundary?",
        o: ["Passive Infrared (PIR) sensor", "Ultrasonic sensor", "Soil moisture sensor", "Camera sensor"],
        a: [0],
        e: "When an intruder enters the field through the boundary, the PIR sensor detects the object; the ultrasonic sensor senses its distance.",
        src: "WSNs in Agriculture: AID"
      },
      {
        q: "Which statements about Wireless Multimedia Sensor Networks (WMSNs) are correct?",
        o: ["Camera sensor nodes have a directional sensing range", "Scalar sensor nodes have an omni-directional sensing range", "WMSNs consist of fewer CS nodes and a large number of SS nodes", "Camera sensor nodes are cheaper than scalar sensor nodes"],
        a: [0, 1, 2],
        e: "CS nodes are expensive, resource hungry, directional; SS nodes are low cost, omni-directional. WMSNs have fewer CS nodes and many SS nodes.",
        src: "Wireless Multimedia Sensor Networks"
      },
      {
        q: "In topology management of WMSNs, coverage of the event is provided using:",
        o: ["Coalition Formation Game between CS and SS nodes", "AODV routing", "Channel blacklisting", "Random walk"],
        a: [0],
        e: "Coverage of the event is provided by using a Coalition Formation Game between the CS and SS nodes.",
        src: "Topology Management in WMSNs"
      },
      {
        q: "Electromagnetic communication for nanonetworks centres around which channel?",
        o: ["2.4 GHz", "0.1 to 10 Terahertz", "13.56 MHz", "60 GHz"],
        a: [1],
        e: "EM communication for nanonetworks centres around the 0.1–10 Terahertz channel.",
        src: "Nanonetworks: Electromagnetic-based Communication"
      },
      {
        q: "In molecular communication between nanodevices, information is packed into:",
        o: ["Vesicles", "Frames", "Photons", "Beacons"],
        a: [0],
        e: "Molecules are used as information, packed into vesicles; a gap junction works as a mediator between cells and vesicles.",
        src: "Nanonetworks: Molecular Communication"
      },
      {
        q: "In underwater acoustic sensor networks, which are among the major scatterers of underwater sound?",
        o: ["Solitons (non-linear internal waves)", "Coral reefs", "Satellite signals", "Surface buoys"],
        a: [0],
        e: "Non-linear internal waves, i.e. solitons, are one of the major scatterers of underwater sound.",
        src: "Underwater Acoustic Sensor Networks"
      },
      {
        q: "Mandal et al. used which mobility model in which nodes move in a 3D ocean column?",
        o: ["Random waypoint model", "Oceanic forces mobility model (OFMM)", "Gauss-Markov model", "Manhattan model"],
        a: [1],
        e: "A physical mobility model named the oceanic forces mobility model (OFMM) incorporates realistic oceanic forces; nodes move in a 3D ocean column.",
        src: "Underwater Sensor Networks: Oceanic forces"
      },
      {
        q: "How many surface anchor nodes are required for the 3-dimensional localization scheme in underwater networks?",
        o: ["1", "3", "5", "10"],
        a: [1],
        e: "The silent and energy-efficient scheme needs fewer initiator (anchor) nodes: only 3 surface anchor nodes are required.",
        src: "3-Dimensional Localization"
      },
      {
        q: "Tic-tac-toe-arch is:",
        o: ["A self-organizing virtual architecture for underwater sensor networks", "A UAV routing protocol", "A cloud deployment model", "An NFC tag format"],
        a: [0],
        e: "Tic-tac-toe-arch: a self-organizing virtual architecture for underwater sensor networks using dynamic formation of virtual topology.",
        src: "A Self-Organizing Virtual Architecture"
      },
      {
        q: "Which are the two types of reporting in WSNs, as listed in the notes?",
        o: ["Event driven", "On demand", "Random", "Broadcast-only"],
        a: [0, 1],
        e: "Two types of reporting: event driven (e.g. forest fire monitoring) and on demand (e.g. inventory control system).",
        src: "WSN Coverage"
      },
      {
        q: "Localized coverage algorithms are a special type of distributed algorithm where:",
        o: ["All data is collected at a central point", "Only a subset of nodes participate in sensing, communication and computation", "No node communicates", "Nodes use GPS only"],
        a: [1],
        e: "Localized algorithms are a special type of distributed algorithms where only a subset of nodes participate in sensing, communication and computation.",
        src: "WSN Coverage"
      },
      {
        q: "Which of the following are coverage problem classes in static WSNs?",
        o: ["Area coverage", "Point coverage", "Barrier coverage", "Cloud coverage"],
        a: [0, 1, 2],
        e: "Most coverage problems in static WSNs can be classified as area coverage, point coverage and barrier coverage.",
        src: "Coverage Problems in Static WSNs"
      },
      {
        q: "Who proved that if the communication range Rc is at least twice the sensing range Rs, then coverage implies connectivity?",
        o: ["Zhang and Hou", "Burke et al.", "Jornet and Akyildiz", "Mandal et al."],
        a: [0],
        e: "Zhang and Hou proved that if Rc ≥ 2·Rs, coverage implies connectivity.",
        src: "Area Coverage"
      },
      {
        q: "In K-barrier coverage, each point is covered by:",
        o: ["Exactly one sensor", "At least k sensors", "At most k sensors", "No sensors"],
        a: [1],
        e: "1-barrier: at least 1 sensor; 2-barrier: at least 2 sensors; K-barrier: at least k sensors.",
        src: "Barrier Coverage"
      },
      {
        q: "In the OGDC algorithm, what happens to a node whose coverage area is completely covered?",
        o: ["It becomes the starting node", "It goes to sleep", "It increases its transmission power", "It moves to a new location"],
        a: [1],
        e: "A node sleeps if its coverage area is completely covered; all covered nodes go to sleep mode.",
        src: "Optimal Geographical Density Control (OGDC)"
      },
      {
        q: "MANETs follow self-CHOP properties. What does CHOP stand for?",
        o: ["Configure, Heal, Optimize, Protect", "Connect, Host, Operate, Process", "Control, Handle, Order, Publish", "Cache, Hop, Order, Ping"],
        a: [0],
        e: "Self-CHOP: Self-Configure, Self-Heal, Self-Optimize, Self-Protect.",
        src: "Mobile Wireless Sensor Networks"
      },
      {
        q: "Underwater MWSNs can be linked with:",
        o: ["Autonomous Underwater Vehicles (AUVs)", "Road side units", "Smart meters", "PAN coordinators only"],
        a: [0],
        e: "Underwater MWSNs can be linked with AUVs; terrestrial MWSNs can be linked with UAVs.",
        src: "Underwater MWSNs"
      },
      {
        q: "Participatory sensing was proposed by:",
        o: ["Zhang and Hou, 2003", "Burke et al., 2006", "Misra et al., 2014", "Jornet and Akyildiz, 2013"],
        a: [1],
        e: "Participatory sensing was proposed by Burke et al., 2006.",
        src: "Participatory Sensing"
      },
      {
        q: "In human-centric sensing, humans who are themselves sensed (e.g. personal health monitoring) play the role of:",
        o: ["Sensing targets", "Sensor operators", "Data source", "Data mules"],
        a: [0],
        e: "Roles: sensing targets (humans themselves sensed), sensor operators (use smartphone sensors), data source (disseminate data without sensors).",
        src: "Human-centric Sensing"
      },
      {
        q: "WSNs using data MULEs generally belong to which category?",
        o: ["Delay tolerant wireless sensor networks (DT-WSNs)", "Real-time WSNs", "Wired sensor networks", "Body area networks"],
        a: [0],
        e: "Such WSNs, in general, belong to the category of delay tolerant wireless sensor networks (DT-WSNs).",
        src: "Delay Tolerant Networks"
      },
      {
        q: "Comparing single-UAV and multi-UAV systems, which is correct for a multi-UAV system?",
        o: ["Low survivability", "High scalability", "Omni-directional antenna", "Slow mission speed"],
        a: [1],
        e: "Multi-UAV systems have high survivability, high scalability, fast mission speed and directional antennas.",
        src: "Considerations in UAV Networks"
      },
      {
        q: "In a multi-star UAV configuration:",
        o: ["Every UAV connects directly to the ground station", "UAVs form multiple star topologies and one node from each group connects to the ground station", "No ground station exists", "All UAVs form a flat mesh"],
        a: [1],
        e: "In Multi-star configuration, UAVs form multiple star topologies; one node from each group connects to the ground station.",
        src: "UAV Network Topology: Star"
      },
      {
        q: "In FANETs, which heterogeneous radio interfaces can be considered in A2A links?",
        o: ["XBee-PRO (IEEE 802.15.4)", "Wi-Fi (IEEE 802.11)", "Wired Ethernet", "Optical fibre"],
        a: [0, 1],
        e: "Heterogeneous radio interfaces such as XBee-PRO (IEEE 802.15.4) and Wi-Fi (IEEE 802.11) can be considered in A2A links.",
        src: "Ad-Hoc FANETs"
      },
      {
        q: "In gateway selection in FANETs, each UAV acquires information of all UAVs within:",
        o: ["1 hop", "2 hops", "5 hops", "The entire network"],
        a: [1],
        e: "Gateway selection starts with the most stable node in the sub-area; each UAV acquires information of all UAVs within its 2 hops.",
        src: "Gateway Selection in FANETs"
      },
      {
        q: "Why is a layered gateway in FANETs not suitable for time-critical relaying tasks?",
        o: ["It increases the delay between ground control and higher layers", "It has no gateways", "It uses wired links", "It reduces coverage to zero"],
        a: [0],
        e: "Layered gateways increase the delay between ground control and higher layers, so they are not suitable for time-critical relaying.",
        src: "Layered Gateway in FANETs"
      },
      {
        q: "Which M2M node type has low density deployment, handles multimedia (video) with QoS requirements, and for which mobility is essential?",
        o: ["Low-end sensor nodes", "Mid-end sensor nodes", "High-end sensor nodes", "Data mules"],
        a: [2],
        e: "High-end sensor nodes: low density deployment, handle multimedia with QoS, mobility essential (e.g. smartphones).",
        src: "M2M Node Types"
      },
      {
        q: "Low-end M2M sensor nodes are characterised by:",
        o: ["No IP support", "High density deployment", "Being static and energy efficient", "Handling video with QoS"],
        a: [0, 1, 2],
        e: "Low-end nodes are cheap, static, energy efficient, simple, deployed in high density, resource constrained with no IP support.",
        src: "M2M Node Types: Low-end"
      },
      {
        q: "Which M2M Service Platform component manages app registration by developers and maps apps to devices?",
        o: ["Device Platform", "User Platform", "Application Platform", "Access Platform"],
        a: [3],
        e: "The M2M Access Platform provides app/web access and app management, which manages app registration and the app–device mapping.",
        src: "M2M Access Platform"
      },
      {
        q: "Which M2M platform manages device profiles such as location, device type, address and description?",
        o: ["Device Platform", "User Platform", "Application Platform", "Access Platform"],
        a: [0],
        e: "The M2M Device Platform manages device profiles and provides authentication and authorization key management.",
        src: "M2M Device Platform"
      }
    ]
  },
  5: {
    title: "Interoperability & Arduino Programming",
    questions: [
      {
        q: "Which of the following are listed as current challenges in IoT?",
        o: ["Large scale of co-operation", "Global heterogeneity", "Semantic conflicts", "Unlimited bandwidth"],
        a: [0, 1, 2],
        e: "Challenges: large scale of co-operation, global heterogeneity, unknown IoT device configuration and semantic conflicts.",
        src: "Interoperability in IoT: Current Challenges"
      },
      {
        q: "'Different processing logics applied to the same IoT networked devices or applications' describes which IoT challenge?",
        o: ["Global heterogeneity", "Semantic conflicts", "Unknown IoT device configuration", "Large scale of co-operation"],
        a: [1],
        e: "Semantic Conflicts: different processing logics applied to same IoT networked devices or applications.",
        src: "Interoperability in IoT: Current Challenges"
      },
      {
        q: "Which are examples of sensor node operating systems mentioned in the notes?",
        o: ["TinyOS", "Mantis OS", "RETOS", "Ubuntu"],
        a: [0, 1, 2],
        e: "Sensor node OS examples: TinyOS, SOS, Mantis OS, RETOS. Ubuntu is listed among personal computer OSs.",
        src: "Why Interoperability is required?"
      },
      {
        q: "The two types of interoperability discussed are:",
        o: ["User interoperability and Device interoperability", "Cloud and Edge interoperability", "Wired and Wireless interoperability", "Static and Mobile interoperability"],
        a: [0],
        e: "User interoperability: between a user and a device. Device interoperability: between two different devices.",
        src: "Different Types of Interoperability"
      },
      {
        q: "Which of the following are solutions for generating unique addresses for device identification?",
        o: ["Electronic Product Codes (EPC)", "Universal Product Code (UPC)", "Uniform Resource Identifier (URI)", "eCl@ss"],
        a: [0, 1, 2],
        e: "Unique address solutions: EPC, UPC, URI, IP addresses, IPv6. eCl@ss is a device classification solution.",
        src: "Device identification and categorization for discovery"
      },
      {
        q: "UNSPSC and eCl@ss are examples of:",
        o: ["Device classification solutions", "Routing protocols", "Middleware bridges", "Ontologies"],
        a: [0],
        e: "UNSPSC (United Nations Standard Products and Services Code) and eCl@ss are device classification solutions.",
        src: "Device identification and categorization for discovery"
      },
      {
        q: "Semantic interoperability deals with interoperability between devices and users in terms of:",
        o: ["Message format", "Message's meaning", "Battery capacity", "Radio frequency"],
        a: [1],
        e: "Semantic interoperability concerns the message's meaning; syntactic interoperability concerns message formats.",
        src: "Semantic Interoperability for Device Interaction"
      },
      {
        q: "In collaborative conceptualization theory, the representation cosign = (A, B, C, D). What is B?",
        o: ["Cosign internal identifier", "A natural language", "Context of A", "Definition of the object"],
        a: [1],
        e: "A is a cosign internal identifier, B is a natural language, C is the context of A, and D is a definition of the object.",
        src: "Semantic Interoperability: Collaborative conceptualization"
      },
      {
        q: "A limitation of the ontology-based solution for semantic interoperability is that:",
        o: ["It is limited to the defined domain/context", "It works for all domains", "It needs no definitions", "It only works with Z-Wave"],
        a: [0],
        e: "The ontology-based solution is limited to the defined domain/context, whereas collaborative conceptualization is applicable for different domains/contexts.",
        src: "Semantic Interoperability for Device Interaction"
      },
      {
        q: "UMB creates virtual maps among physical devices of which middleware home networks?",
        o: ["HAVI", "Jini", "LonWorks", "UPnP"],
        a: [0, 1, 2, 3],
        e: "UMB creates virtual maps among the physical devices of middleware home networks such as HAVI, Jini, LonWorks and UPnP.",
        src: "Device Interoperability: UMB"
      },
      {
        q: "In UMB, which component converts physical devices into virtually abstracted ones described by the Universal Device Template (UDT)?",
        o: ["UMB Core (UMB-C)", "UMB Adaptor (UMB-A)", "Middleware Routing Table", "Global Event ID"],
        a: [1],
        e: "UMB-A converts physical devices into virtually abstracted ones as described by the UDT, and translates local middleware messages into global metadata messages.",
        src: "Device Interoperability: UMB Adaptor"
      },
      {
        q: "The major role of the UMB Core is routing the universal metadata message using:",
        o: ["Middleware Routing Table (MRT)", "ARP cache", "DNS records", "Flow tables"],
        a: [0],
        e: "The UMB Core routes the universal metadata message to the destination or other UMB Adaptors by the Middleware Routing Table (MRT).",
        src: "Device Interoperability: UMB Core"
      },
      {
        q: "The clock speed of the Arduino UNO is:",
        o: ["8 MHz", "16 MHz", "32 MHz", "84 MHz"],
        a: [1],
        e: "Arduino UNO: operating voltage 5V, clock speed 16 MHz.",
        src: "Arduino Programming – Part I: Arduino UNO"
      },
      {
        q: "On the Arduino UNO, the USB interface is provided via:",
        o: ["ATMega16U2", "ATMEGA2560", "AT91SAM3X8E", "ESP8266"],
        a: [0],
        e: "The UNO's interface is USB via ATMega16U2.",
        src: "Arduino Programming – Part I: Arduino UNO"
      },
      {
        q: "The Arduino IDE is based on variations of which programming languages?",
        o: ["C and C++", "Java and Kotlin", "Python and Ruby", "JavaScript and PHP"],
        a: [0],
        e: "The Arduino IDE is based on variations of the C and C++ programming language.",
        src: "Arduino Programming – Part I: Arduino IDE"
      },
      {
        q: "Which function in an Arduino sketch is the point where the code starts, just like main() in C/C++?",
        o: ["loop()", "setup()", "begin()", "init()"],
        a: [1],
        e: "setup() is where the code starts; I/O variables and pin modes are initialized there. loop() iterates the task.",
        src: "Arduino Programming – Part I: Sketch Structure"
      },
      {
        q: "In the Arduino IDE, which option checks the code for compilation errors?",
        o: ["Upload", "Verify", "Serial Monitor", "Save"],
        a: [1],
        e: "Verify checks the code for compilation errors; Upload uploads the final code to the board.",
        src: "Arduino Programming – Part I: IDE Overview"
      },
      {
        q: "In the Blinking LED example, the positive terminal of the LED is connected to which digital pin?",
        o: ["Pin 8", "Pin 10", "Pin 12", "Pin 13"],
        a: [2],
        e: "The positive terminal of the LED connects to digital pin 12 and the negative terminal to GND; pinMode(12, OUTPUT) is used.",
        src: "Arduino Programming – Part I: Blink Example"
      },
      {
        q: "The Arduino delay() function accepts time in:",
        o: ["Seconds", "Milliseconds", "Microseconds", "Minutes"],
        a: [1],
        e: "delay() accepts an integer value (time in milliseconds).",
        src: "Arduino Programming – Part I: Function Libraries"
      },
      {
        q: "Which Arduino function resets the pseudo-random number generator with a seed value?",
        o: ["random()", "randomSeed()", "srand()", "seed()"],
        a: [1],
        e: "randomSeed(int v) resets the pseudo-random number generator with seed value v.",
        src: "Arduino Programming – Part II: Random Number"
      },
      {
        q: "Which function converts an actual digital pin to the specific interrupt number?",
        o: ["attachInterrupt()", "digitalPinToInterrupt()", "pinMode()", "analogRead()"],
        a: [1],
        e: "digitalPinToInterrupt(pin) changes the actual digital pin to the specific interrupt number; used inside attachInterrupt(..., ISR, mode).",
        src: "Arduino Programming – Part II: Interrupts"
      },
      {
        q: "Which header file must be included to use Arduino math functions and constants?",
        o: ["MATH.h", "stdio.h", "Servo.h", "DHT.h"],
        a: [0],
        e: "To apply math functions and constants, the \"MATH.h\" header file needs to be included.",
        src: "Arduino Programming – Part II: Math Library"
      },
      {
        q: "What does str.length() return for an Arduino String object?",
        o: ["Length including the null terminator", "Length without considering null", "Number of words", "Memory address"],
        a: [1],
        e: "str.length() returns the length of the string without considering null.",
        src: "Arduino Programming – Part II: String"
      },
      {
        q: "In the traffic control system example, what resistor values are used with the LEDs?",
        o: ["100 Ohm", "330 Ohm", "1 kOhm", "10 kOhm"],
        a: [1],
        e: "Requirements: Arduino board, 3 different colour LEDs, 330 Ohm resistors and jumper wires.",
        src: "Arduino Programming – Part II: Traffic Control System"
      },
      {
        q: "In the traffic control sketch, the LEDs turn on one at a time with a delay of:",
        o: ["1 second", "2 seconds", "5 seconds", "10 seconds"],
        a: [2],
        e: "The LEDs are turned on one at a time with a delay of 5 seconds (delay(5000)).",
        src: "Arduino Programming – Part II: Traffic Control System"
      },
      {
        q: "In the DHT sensor pinout, which pin is the Data pin?",
        o: ["PIN 1", "PIN 2", "PIN 3", "PIN 4"],
        a: [1],
        e: "PIN 1: 3.3V–5V supply; PIN 2: Data; PIN 3: Null; PIN 4: Ground.",
        src: "Sensors and Actuators with Arduino – Part I: DHT"
      },
      {
        q: "Which DHT library functions read the sensor values?",
        o: ["dht.readHumidity()", "dht.readTemperature()", "dht.readPressure()", "dht.readLight()"],
        a: [0, 1],
        e: "The DHT library provides dht.readHumidity() and dht.readTemperature().",
        src: "Sensors and Actuators with Arduino – Part I: DHT Library"
      },
      {
        q: "A servo motor provides rotary motion in the range of:",
        o: ["0 to 90 degrees", "0 to 180 degrees", "0 to 360 degrees continuous", "0 to 45 degrees"],
        a: [1],
        e: "Servo motor: high precision motor providing rotary motion 0 to 180 degrees.",
        src: "Sensors and Actuators with Arduino – Part II: Servo Motor"
      },
      {
        q: "In a servo motor's 3 wires, the yellow wire is for:",
        o: ["Ground", "Power supply", "Signal", "Reset"],
        a: [2],
        e: "Black (or darkest) is ground, red is power supply, yellow is the signal pin.",
        src: "Sensors and Actuators with Arduino – Part II: Servo Motor"
      },
      {
        q: "Which of the following are listed as types of motor actuators?",
        o: ["Stepper motor", "Solenoid", "Relay", "Thermistor"],
        a: [0, 1, 2],
        e: "Types listed: servo motor, stepper motor, hydraulic motor, solenoid, relay, AC motor. A thermistor is a sensor.",
        src: "Sensors and Actuators with Arduino – Part II: Actuators"
      }
    ]
  },
  6: {
    title: "Python Programming, Raspberry Pi & IoT Implementation",
    questions: [
      {
        q: "Which of the following are given as examples of Python IDEs?",
        o: ["Spyder", "PyCharm", "Arduino IDE", "Win32 Disk Imager"],
        a: [0, 1],
        e: "Python IDE examples: Spyder, PyCharm, etc.",
        src: "Python Programming – Part I: Python IDE"
      },
      {
        q: "To indicate different blocks of code, Python follows:",
        o: ["Curly braces", "Rigid indentation", "BEGIN/END keywords", "Semicolons"],
        a: [1],
        e: "\"To indicate different blocks of code, it follows rigid indentation.\"",
        src: "Python Programming – Part I: Starting with Python"
      },
      {
        q: "Given x = 'This is Python', what does print x[0] output?",
        o: ["This", "T", "is", "P"],
        a: [1],
        e: "In the notes' example, print x[0] outputs 'T' and print x[2:4] outputs 'is'.",
        src: "Python Programming – Part I: Data-types"
      },
      {
        q: "In the notes' example, greater(10, 100) returns x, y or y, x depending on the comparison. What is printed by print(val)?",
        o: ["(10, 100)", "(100, 10)", "100", "10"],
        a: [1],
        e: "Since 10 > 100 is false, it returns y, x, so the output is (100, 10).",
        src: "Python Programming – Part I: Functions"
      },
      {
        q: "Variables declared outside any function that can be accessed both inside and outside the function are called:",
        o: ["Local variables", "Global variables", "Static variables", "Private variables"],
        a: [1],
        e: "Global variables are declared out of any function but can be accessed inside as well as outside the function; local variables are declared inside a function.",
        src: "Python Programming – Part I: Variable Scope"
      },
      {
        q: "In the variable scope example (var = 10 outside; var = 100 inside example()), what is printed by calling example() and then print(var)?",
        o: ["100 then 10", "10 then 100", "100 then 100", "10 then 10"],
        a: [0],
        e: "Inside the function the local var = 100 is printed; outside, the global var remains 10.",
        src: "Python Programming – Part I: Variable Scope"
      },
      {
        q: "Which statement imports only a particular function/value from a module?",
        o: ["import math", "from math import pi", "include math.pi", "using math.pi"],
        a: [1],
        e: "\"We can also access only a particular function from a module\": from math import pi.",
        src: "Python Programming – Part I: Modules"
      },
      {
        q: "An error generated during execution of a program is termed as:",
        o: ["Syntax", "Exception", "Module", "Indentation"],
        a: [1],
        e: "\"An error that is generated during execution of a program, is termed as exception.\"",
        src: "Python Programming – Part I: Exception Handling"
      },
      {
        q: "Which are the four basic modes to open a file in Python, as listed in the notes?",
        o: ["r, w, a, r+", "r, w, x, b", "read, write, delete, copy", "r, rw, wa, a+"],
        a: [0],
        e: "r: read, w: write, a: append, r+: both read and write.",
        src: "Python Programming – Part II: File Read Write"
      },
      {
        q: "What is the advantage of using WITH to open a file?",
        o: ["It ensures the file is closed after the operation, even if an exception is encountered", "It makes the file read-only", "It compresses the file", "It avoids the need for a file name"],
        a: [0],
        e: "Using WITH ensures the file is closed after the operation is completed, even if an exception is encountered.",
        src: "Python Programming – Part II: File Read Write"
      },
      {
        q: "In PIL, which image mode value represents grey scale?",
        o: ["'RGB'", "'L'", "'G'", "'CMYK'"],
        a: [1],
        e: "Mode gives the band of the image: 'L' for grey scale, 'RGB' for true colour image.",
        src: "Python Programming – Part II: Image Read/Write"
      },
      {
        q: "In PIL, rotate(90) rotates the image:",
        o: ["Clockwise", "Counter clockwise", "Horizontally flipped", "Vertically flipped"],
        a: [1],
        e: "Rotate(): rotates the image to the specified degrees, counter clockwise.",
        src: "Python Programming – Part II: Image Read/Write"
      },
      {
        q: "Which statements about PIL and Pillow are correct as per the notes?",
        o: ["PIL is supported till Python version 2.7", "Pillow supports the 3.x version of Python", "Pillow is installed via pip", "Pillow works only on Windows"],
        a: [0, 1, 2],
        e: "Install PIL through PIP (sudo pip install pillow). PIL is supported till Python 2.7; Pillow supports Python 3.x.",
        src: "Python Programming – Part II: Image Read/Write"
      },
      {
        q: "In s = socket.socket(socket_family, socket_type, protocol=0), which are valid socket_family values?",
        o: ["AF_UNIX", "AF_INET", "SOCK_STREAM", "SOCK_DGRAM"],
        a: [0, 1],
        e: "socket_family: AF_UNIX or AF_INET; socket_type: SOCK_STREAM or SOCK_DGRAM; protocol defaults to 0.",
        src: "Python Programming – Part II: Networking"
      },
      {
        q: "In the simple server example, which port number is used?",
        o: ["80", "8080", "2017", "5000"],
        a: [2],
        e: "server_address = ('10.14.88.82', 2017) is bound by the server and connected to by the client.",
        src: "Python Programming – Part II: Simple Server"
      },
      {
        q: "Which call makes the server socket wait and return a connection object when a client connects?",
        o: ["sock.bind()", "sock.listen()", "sock.accept()", "sock.send()"],
        a: [2],
        e: "connection, client_address = sock.accept() returns a connection object that represents the connection to that client.",
        src: "Python Programming – Part II: Simple Server"
      },
      {
        q: "Which of the following are official supported operating systems for Raspberry Pi?",
        o: ["Raspbian", "NOOBS", "Windows 10 core", "Risc OS"],
        a: [0, 1],
        e: "Official supported OS: Raspbian, NOOBS. Third-party OS: Ubuntu Mate, Snappy Ubuntu core, Windows 10 core, Pinet, Risc OS.",
        src: "Introduction to Raspberry Pi – Part I: Operating System"
      },
      {
        q: "What minimum micro SD card size is listed in the basic set up for Raspberry Pi?",
        o: ["512 MB", "1 GB", "2 GB", "16 GB"],
        a: [2],
        e: "Basic set up includes HDMI cable, monitor, keyboard, mouse, 5 V power adapter, LAN cable and a min 2 GB micro SD card.",
        src: "Introduction to Raspberry Pi – Part I: Basic Set up"
      },
      {
        q: "Which software is used on a Windows machine to write the Raspbian image to the SD card?",
        o: ["Win32 Disk Imager", "PuTTY", "Arduino IDE", "PyCharm"],
        a: [0],
        e: "Install \"Win32 Disk Imager\", select the device, browse the Raspbian image file, and write.",
        src: "Introduction to Raspberry Pi – Part I: OS Setup"
      },
      {
        q: "Which command opens the configuration tool used to enable SSH and expand the file system on Raspberry Pi?",
        o: ["sudo raspi-config", "sudo apt-get update", "raspistill -o", "sudo nano config"],
        a: [0],
        e: "Type sudo raspi-config; SSH is under Advance option, and Expand Filesystem is also available there.",
        src: "Introduction to Raspberry Pi – Part I: Basic Initial Configuration"
      },
      {
        q: "Any language that will compile for which architecture can be used with Raspberry Pi?",
        o: ["x86", "ARMv6", "MIPS", "AVR"],
        a: [1],
        e: "\"Any language that will compile for ARMv6 can be used with raspberry pi.\"",
        src: "Introduction to Raspberry Pi – Part I: Programming"
      },
      {
        q: "In the nano editor, which shortcut writes the code to the file?",
        o: ["Ctrl+S", "Ctrl+O", "Ctrl+X", "Ctrl+W"],
        a: [1],
        e: "Ctrl+O writes the code to the file; Ctrl+X exits the editor.",
        src: "Introduction to Raspberry Pi – Part II: Blinking LED"
      },
      {
        q: "In the Raspberry Pi blinking LED code, which GPIO pin is set as output?",
        o: ["Pin 7", "Pin 11", "Pin 13", "Pin 17"],
        a: [1],
        e: "GPIO.setmode(GPIO.BOARD) followed by GPIO.setup(11, GPIO.OUT).",
        src: "Introduction to Raspberry Pi – Part II: Blinking LED"
      },
      {
        q: "Which resistor value is used in the Raspberry Pi blinking LED example?",
        o: ["100 ohm", "330 ohm", "1.4 kOhm", "4.7 kOhm"],
        a: [0],
        e: "Requirements: Raspberry Pi, LED, 100 ohm resistor, bread board, jumper cables.",
        src: "Introduction to Raspberry Pi – Part II: Blinking LED"
      },
      {
        q: "Which Python module can be used to process the PiCam?",
        o: ["python-picamera", "opencv-pi", "pygame", "RPi.CAM"],
        a: [0],
        e: "PiCam can be processed using the Python camera module python-picamera (sudo apt-get install python-picamera).",
        src: "Introduction to Raspberry Pi – Part II: Capture Image"
      },
      {
        q: "In the temperature dependent auto cooling system, which resistor value is listed in the requirements?",
        o: ["100 ohm", "330 ohm", "4.7K ohm", "10K ohm"],
        a: [2],
        e: "Requirements: DHT sensor, 4.7K ohm resistor, relay, jumper wires, Raspberry Pi, mini fan.",
        src: "Implementation of IoT with Raspberry Pi – Part 1"
      },
      {
        q: "The three output terminals of the relay (left to right) are:",
        o: ["NO, Common, NC", "VCC, GND, Signal", "Input, Output, Ground", "NC, NO, VCC"],
        a: [0],
        e: "Relay: 3 output terminals: NO (normal open), Common, NC (normal close).",
        src: "Implementation of IoT with Raspberry Pi – Part 1: Relay"
      },
      {
        q: "In the auto cooling program, the relay is set when temperature exceeds what threshold?",
        o: ["25", "30", "35", "40"],
        a: [1],
        e: "if temperature > 30: GPIO.output(13, 0)  # relay is active low; it is turned off after 5 seconds.",
        src: "Implementation of IoT with Raspberry Pi – Part 1: Relay"
      },
      {
        q: "In the fan connection, the NO terminal of the relay is connected to:",
        o: ["Positive terminal of the fan", "Negative terminal of the battery", "Ground pin of Raspberry Pi", "Data pin of DHT"],
        a: [0],
        e: "NO terminal → positive terminal of the fan; Common → positive terminal of battery; battery negative → fan negative.",
        src: "Implementation of IoT with Raspberry Pi – Part 1: Fan"
      },
      {
        q: "Which sensor type instance is created in the DHT22 program with the Adafruit library?",
        o: ["Adafruit_DHT.DHT11", "Adafruit_DHT.AM2302", "Adafruit_DHT.BMP180", "Adafruit_DHT.LM35"],
        a: [1],
        e: "sensor = Adafruit_DHT.AM2302 creates an instance of the sensor type, then read_retry(sensor, 17) is called.",
        src: "Implementation of IoT with Raspberry Pi – Part 1: Program"
      }
    ]
  },
  7: {
    title: "Remote Data Logging, SDN & Software-Defined IoT",
    questions: [
      {
        q: "In the remote data logging system, which pin of the DHT sensor is connected to Raspberry Pi pin 11?",
        o: ["PIN 1 (Power)", "PIN 2 (Data)", "PIN 3 (Null)", "PIN 4 (Ground)"],
        a: [1],
        e: "Pin 1 → 3.3V; pin 2 (Data) → any input pin, here pin 11; pin 4 → ground.",
        src: "Implementation of IoT with Raspberry Pi – Part 2"
      },
      {
        q: "In the simple socket server example, how many queued connections does s.listen(5) allow?",
        o: ["1", "5", "12321", "1024"],
        a: [1],
        e: "s.listen(5) is called after binding the socket to port 12321; the argument is 5.",
        src: "Implementation of IoT with Raspberry Pi – Part 2: Server"
      },
      {
        q: "In the remote data logging client code, how is the message sent to the server built?",
        o: ["str(h)+','+str(t)", "str(t)+';'+str(h)", "h*t", "json.dumps(h,t)"],
        a: [0],
        e: "message = str(h)+','+str(t) — humidity and temperature separated by a comma.",
        src: "Implementation of IoT with Raspberry Pi – Part 2: Client Code"
      },
      {
        q: "In the data logging server code, which call receives the UDP data from the client?",
        o: ["sock.accept()", "sock.recvfrom(4096)", "sock.listen()", "sock.connect()"],
        a: [1],
        e: "data, address = sock.recvfrom(4096) receives data, which is appended to Datalog.txt.",
        src: "Implementation of IoT with Raspberry Pi – Part 2: Server Code"
      },
      {
        q: "Which port number does the UDP data logging server bind to?",
        o: ["2017", "10001", "12321", "8080"],
        a: [1],
        e: "server_address = ('10.14.3.194', 10001).",
        src: "Implementation of IoT with Raspberry Pi – Part 2: Server Code"
      },
      {
        q: "What does 'sunday,monday,tuesday'.split(\",\") return?",
        o: ["['sunday','monday','tuesday']", "'sunday monday tuesday'", "3", "['sunday,monday,tuesday']"],
        a: [0],
        e: "split() splits the string whenever ',' is found, giving 3 different strings.",
        src: "Implementation of IoT with Raspberry Pi – Part 3: Data Splitting"
      },
      {
        q: "In matplotlib, myplot.plot([1,2,3,4]) with a single list — how are the values used?",
        o: ["Values are taken for the y-axis; x-axis values are generated automatically starting from 0", "Values are taken for the x-axis", "It creates a pie chart", "It raises an error"],
        a: [0],
        e: "By default the values are taken for the y-axis; values for the x-axis are generated automatically starting from 0.",
        src: "Implementation of IoT with Raspberry Pi – Part 3: Plotting"
      },
      {
        q: "Which matplotlib function adds a subplot in a figure?",
        o: ["figure()", "grid()", "subplot()", "scatter()"],
        a: [2],
        e: "figure(): new figure; grid(): axis grids; ion(): interactive mode; subplot(): adds subplot; scatter(): scatter plot.",
        src: "Implementation of IoT with Raspberry Pi – Part 3: Plotting"
      },
      {
        q: "In the current (non-SDN) network example, which routing protocol is shown executing at the switches?",
        o: ["OSPF", "BGP", "RIP", "AODV"],
        a: [0],
        e: "The notes show the OSPF protocol executing at the switches, with no centralized control.",
        src: "Software-Defined Networking – Part I"
      },
      {
        q: "Which are listed as limitations of the current network?",
        o: ["Vendor-specific architecture of switches limits dynamic configuration", "Centralized control is not feasible", "Switches lack a global view of the network", "Switches use flow tables"],
        a: [0, 1, 2],
        e: "Switches forward traffic in a distributed manner without a global view; vendor-specific architecture limits dynamic configuration; centralized control is not feasible.",
        src: "Software-Defined Networking – Part I: Limitations"
      },
      {
        q: "In 2006 at Stanford, a team proposed which clean-slate security architecture to control security policies centrally?",
        o: ["SANE", "NOX", "ONOS", "Mininet"],
        a: [0],
        e: "2006: Stanford proposes SANE, a clean-slate security architecture to control security policies in a centralized manner.",
        src: "Software-Defined Networking – Part I: Origin of SDN"
      },
      {
        q: "When was the Open Networking Foundation formed?",
        o: ["June 2009", "March 2011", "Oct 2011", "2008"],
        a: [1],
        e: "March 2011: Open Networking Foundation is formed. (June 2009: Nicira founded; Oct 2011: first Open Networking Summit.)",
        src: "Software-Defined Networking – Part I: Origin of SDN"
      },
      {
        q: "Which of the following are components/attributes of SDN?",
        o: ["Hardware switches", "Controller", "Flow-Rules", "Routing Table at every switch"],
        a: [0, 1, 2],
        e: "Components: hardware switches, controller, applications, flow-rules and APIs. Traditionally routers keep a routing table; SDN maintains a flow table at every switch.",
        src: "Software-Defined Networking – Part I: Components"
      },
      {
        q: "Why is the number of flow-rules at an SDN switch limited?",
        o: ["TCAM size at switches is limited and very cost-expensive", "OpenFlow allows only one rule", "Controllers cannot send rules", "Switches have no memory"],
        a: [0],
        e: "The size of ternary content-addressable memory (TCAM) is limited at the switches and TCAM is very cost-expensive.",
        src: "Software-Defined Networking – Part I: Rule Placement Challenges"
      },
      {
        q: "Typically how much delay is involved in a new rule placement?",
        o: ["3–5 ms", "30–50 ms", "1 s", "0.1 ms"],
        a: [0],
        e: "Typically, 3–5 ms delay is involved in a new rule placement.",
        src: "Software-Defined Networking – Part I: Rule Placement Challenges"
      },
      {
        q: "In OpenFlow, which timeout deletes a rule if NO flow associated with it is received for a particular time?",
        o: ["Hard timeout", "Soft timeout", "Idle reset", "TTL expiry"],
        a: [1],
        e: "Soft timeout deletes an unused rule to empty the rule-space. At hard timeout all rules are deleted (can reset the switch).",
        src: "Software-Defined Networking – Part I: OpenFlow Protocol"
      },
      {
        q: "Which statement reflects the notes' 'SDN is NOT OpenFlow' point?",
        o: ["SDN is a technology/concept; OpenFlow is a protocol between data-plane and control-plane", "OpenFlow is a controller", "SDN is a protocol and OpenFlow is the concept", "They are identical"],
        a: [0],
        e: "SDN is a technology/concept; OpenFlow is a protocol used to communicate between data-plane and control-plane.",
        src: "Software-Defined Networking – Part I: OpenFlow Protocol IV"
      },
      {
        q: "Which OpenFlow switch software turns a commercial wireless router/access point into an OpenFlow enabled switch?",
        o: ["Indigo", "LINC", "Pantou", "Of13softswitch"],
        a: [2],
        e: "Pantou turns a commercial wireless router/access point into an OpenFlow switch; OpenFlow runs on OpenWRT.",
        src: "Software-Defined Networking – Part I: OpenFlow Switch Software"
      },
      {
        q: "Which API is used to communicate among multiple controllers in the control layer?",
        o: ["Southbound API", "Northbound API", "East-Westbound API", "Flow API"],
        a: [2],
        e: "East-Westbound APIs are used among multiple controllers; Southbound: control ↔ infrastructure (OpenFlow); Northbound: control ↔ application.",
        src: "Software-Defined Networking – Part II: APIs in SDN"
      },
      {
        q: "Controllers are logically connected to switches at what distance?",
        o: ["One-hop distance", "Multi-hop distance only", "Zero distance", "Three hops"],
        a: [0],
        e: "Logically, controllers are connected to switches in one-hop distance; physically, in multi-hop distance.",
        src: "Software-Defined Networking – Part II: Controller Placement"
      },
      {
        q: "What is the role of a backup controller in SDN?",
        o: ["A replica of the main controller that takes over if the main controller is down", "A controller that only stores logs", "A switch with extra TCAM", "A firewall"],
        a: [0],
        e: "A replica of the main controller is created; if the main controller is down, the backup controls the network for uninterrupted management.",
        src: "Software-Defined Networking – Part II: Backup Controller"
      },
      {
        q: "Mininet is used to create a virtual network with OpenFlow-enabled switches and is based on which language?",
        o: ["Java", "C", "Python", "Go"],
        a: [2],
        e: "Mininet: creates a virtual network with OpenFlow-enabled switches, based on Python, supports remote and local controllers.",
        src: "Software-Defined Networking – Part II: Switch Deployment"
      },
      {
        q: "Which controller configuration software are marked as 'Popular!' in the notes?",
        o: ["OpenDayLight", "ONOS", "Pox", "Nox"],
        a: [0, 1],
        e: "Controller software: Pox, Nox, FloodLight, OpenDayLight [Popular!], ONOS [Popular!].",
        src: "Software-Defined Networking – Part II: Controller Configuration Software"
      },
      {
        q: "Sensor OpenFlow (Luo et al.) proposed which types of data forwarding?",
        o: ["Value-centric data forwarding", "ID-centric data forwarding", "Energy-centric forwarding", "Location-centric forwarding"],
        a: [0, 1],
        e: "Sensor OpenFlow: value-centric (forward if data exceeds a value) and ID-centric (based on source node ID). Real-life implementation was NOT done.",
        src: "Software-Defined IoT Networking – Part I: Software-Defined WSN"
      },
      {
        q: "Soft-WSN (Bera et al.) supports which kinds of management?",
        o: ["Sensor device management", "Delay management", "Active-Sleep management", "Topology management"],
        a: [0, 1, 2, 3],
        e: "Soft-WSN includes sensor device management (sensor, delay, active-sleep management) and topology management (node-specific and network-specific).",
        src: "Software-Defined IoT Networking – Part I: Soft-WSN"
      },
      {
        q: "Compared to traditional WSN, what happens to the number of control messages using Soft-WSN?",
        o: ["It is higher, due to PACKET-IN messages", "It is lower", "It is zero", "It stays the same"],
        a: [0],
        e: "Control messages are higher in Soft-WSN due to PACKET-IN messages, while packet delivery ratio increases and replicated packets reduce.",
        src: "Software-Defined IoT Networking – Part I: Soft-WSN Results"
      },
      {
        q: "SDN-WISE was proposed by:",
        o: ["Galluccio et al., IEEE INFOCOM '15", "Luo et al., IEEE Comm. Letters '12", "Bera et al., IEEE SJ '16", "Burke et al., 2006"],
        a: [0],
        e: "SDN-WISE (Galluccio et al., IEEE INFOCOM '15) designed a software-defined WSN platform with flow-tables at sensor nodes.",
        src: "Software-Defined IoT Networking – Part I: SDN-WISE"
      }
    ]
  },
  8: {
    title: "SDN for Mobile/IoT & Cloud Computing",
    questions: [
      {
        q: "Which of the following are listed as problems in traditional mobile networks?",
        o: ["Difficult to scale", "Difficult to manage", "Inflexible", "Zero capital expenditure"],
        a: [0, 1, 2],
        e: "Problems: difficult to scale, difficult to manage (misconfigurations), inflexible, and cost-expensive (both CapEx and OpEx are high).",
        src: "SDN for IoT – Part II: Traditional Mobile Network"
      },
      {
        q: "Logically centralized control in SDN for mobile networking is particularly useful for:",
        o: ["Efficient base-station coordination for addressing inter-cell interference", "Removing all base stations", "Increasing TCAM size", "Wired Ethernet only"],
        a: [0],
        e: "Logically centralized control is particularly useful for efficient base-station coordination for addressing inter-cell interference.",
        src: "SDN for Mobile Networking I"
      },
      {
        q: "Why is a modified version of OpenFlow required for rule placement at access devices?",
        o: ["General OpenFlow does not support wireless networks", "OpenFlow is too fast", "Access devices have unlimited TCAM", "Users are always static"],
        a: [0],
        e: "Challenges: general OpenFlow does not support wireless networks; users are mobile; heterogeneous devices are present.",
        src: "Rule Placement at Access Devices"
      },
      {
        q: "In ODIN, LVAP stands for:",
        o: ["Light Virtual AP", "Low Voltage Access Point", "Local VLAN Access Protocol", "Logical Virtual Address Pool"],
        a: [0],
        e: "ODIN converts 802.11 using LVAP: Light virtual AP.",
        src: "ODIN"
      },
      {
        q: "In ODIN, where is the Odin master placed?",
        o: ["At the controller end", "With the physical devices", "At the end user device", "In the data center switches"],
        a: [0],
        e: "Odin agent: placed with the physical devices; Odin master: placed at the controller end.",
        src: "ODIN"
      },
      {
        q: "Which predictor does Mobi-Flow use for location prediction?",
        o: ["Order-K Markov predictor", "Kalman filter", "Linear regression", "Neural network"],
        a: [0],
        e: "Order-K Markov predictor takes the last k location instances to predict the next location; linear programming selects the optimal AP.",
        src: "Mobi-Flow III"
      },
      {
        q: "In data center networking, which type of flow-rules are useful for elephant flows?",
        o: ["Wildcard rules", "Exact match rules", "No rules", "Default route only"],
        a: [1],
        e: "Mice-flow: wildcard rules can be placed. Elephant flow: exact match rules are useful.",
        src: "Data Center Networking"
      },
      {
        q: "Mininet-WiFi supports which networks?",
        o: ["Wired (Ethernet protocol)", "Wireless (WiFi, IEEE 802.11 group)", "Only satellite networks", "Only Bluetooth"],
        a: [0, 1],
        e: "Mininet-WiFi can be used to deploy a network and supports both wired (Ethernet) and wireless (IEEE 802.11) networks.",
        src: "Experimenting with Wireless Network"
      },
      {
        q: "Cloud computing can be envisioned as a step on from:",
        o: ["Utility Computing", "Mainframe batch processing", "Peer-to-peer file sharing", "Analog computing"],
        a: [0],
        e: "\"It can be envisioned as step on from Utility Computing.\"",
        src: "Cloud Computing – Fundamentals"
      },
      {
        q: "Which are listed as essential characteristics of cloud computing in the NIST visual model?",
        o: ["Broad network access", "Measured service", "Resource pooling", "Fixed capacity"],
        a: [0, 1, 2],
        e: "Essential characteristics: broad network access, rapid elasticity, measured service, on-demand self-service, resource pooling.",
        src: "Cloud Computing – Fundamentals: NIST Visual Model"
      },
      {
        q: "'Sharing of resources and costs across a large pool of users' describes which general cloud characteristic?",
        o: ["Ubiquitous", "Multitenancy", "Dynamic load balancing", "Agility"],
        a: [1],
        e: "Multitenancy: sharing of resources and costs across a large pool of users.",
        src: "Cloud Computing – Fundamentals: General Characteristics"
      },
      {
        q: "Which are given as examples of SaaS?",
        o: ["Google Apps", "Salesforce", "Learn.com", "Amazon EC2"],
        a: [0, 1, 2],
        e: "SaaS examples: Google Apps, Salesforce, Learn.com. Amazon EC2 is IaaS.",
        src: "Cloud Computing – Fundamentals: SaaS"
      },
      {
        q: "Which are given as examples of PaaS?",
        o: ["Windows Azure", "Google App Engine", "GoGrid", "Rackspace Cloud Servers"],
        a: [0, 1],
        e: "PaaS examples: Windows Azure, Google App Engine. GoGrid and Rackspace Cloud Servers are IaaS examples.",
        src: "Cloud Computing – Fundamentals: PaaS / IaaS"
      },
      {
        q: "Which cloud type is a 'unified global cloud of clouds based on the Internet' supporting interoperability between providers?",
        o: ["Multi-cloud", "Inter-cloud", "Community cloud", "Distributed cloud"],
        a: [1],
        e: "Inter-cloud: unified global 'cloud of clouds' based on the Internet. Multi-cloud: multiple services via a single heterogeneous architecture.",
        src: "Cloud Computing – Fundamentals: Other Types of Cloud"
      },
      {
        q: "Distributed Cloud has which two types?",
        o: ["Public-resource Computing and Volunteer Cloud", "Private and Hybrid", "IaaS and PaaS", "Edge and Fog"],
        a: [0],
        e: "Distributed cloud: two types: Public-resource Computing and Volunteer Cloud.",
        src: "Cloud Computing – Fundamentals: Other Types of Cloud"
      },
      {
        q: "Which are listed as advantages of a private cloud?",
        o: ["Total control over the system and data", "Minimum security concerns", "No regular maintenance", "Lowest set-up cost"],
        a: [0, 1],
        e: "Private cloud advantages: total control over system and data, minimum security concerns. Disadvantage: regular maintenance.",
        src: "Cloud Computing – Fundamentals: Private Cloud"
      },
      {
        q: "Why is IaaS suitable for companies like Flipkart and Amazon during festival seasons?",
        o: ["It suits fluctuating computing demands", "It removes the need for any servers", "It provides free hardware", "It avoids networking"],
        a: [0],
        e: "IaaS is suitable for serving fluctuating computing demands (e.g. Flipkart, Amazon during festival seasons).",
        src: "Cloud Computing – Service Models: Why IaaS?"
      },
      {
        q: "Which are listed as limitations of SaaS?",
        o: ["Centralized control", "Switching cost", "Limited flexibility", "Vulnerable to software piracy"],
        a: [0, 1, 2],
        e: "Limitations: centralized control, switching cost, limited flexibility, data security and privacy. SaaS is less vulnerable to piracy than traditional software.",
        src: "Cloud Computing – Service Models: Limitations of SaaS"
      },
      {
        q: "In cloud billing, the service provider calculates billing information using:",
        o: ["Accounting records", "Resource prices", "Billing rules", "Customer's hardware serial number"],
        a: [0, 1, 2],
        e: "Billing is calculated using accounting records, resource prices and billing rules.",
        src: "Cloud Computing – Service Management: Accounting and Billing"
      },
      {
        q: "The 'Blue Pill attack on hypervisor' is an example of a threat at which level of security?",
        o: ["Host level security at IaaS", "Network level security", "Application level security at SaaS", "Data remanence"],
        a: [0],
        e: "Host security at IaaS level: primary objective is to secure allocated hosts; example threat: Blue Pill attack on hypervisor.",
        src: "Cloud Computing – Security: Host Level Security"
      },
      {
        q: "According to the notes, user authentication in cloud computing is done at which layer?",
        o: ["IaaS layer", "PaaS layer", "SaaS layer", "Physical layer"],
        a: [1],
        e: "\"User authentication is done at PaaS layer.\"",
        src: "Cloud Computing – Security: Authentication"
      },
      {
        q: "'Belief of an entity's standing by the community' defines:",
        o: ["Trust", "Reputation", "Risk", "Authentication"],
        a: [1],
        e: "Trust: independent expectancy between two entities for a context at a given time. Reputation: belief of an entity's standing by the community.",
        src: "Cloud Computing – Security: Trust and Reputation"
      },
      {
        q: "Which of the following are cloud simulators listed in the notes?",
        o: ["CloudAnalyst", "GreenCloud", "iCanCloud", "Mininet"],
        a: [0, 1, 2],
        e: "Cloud simulators: CloudSim, CloudAnalyst, GreenCloud, iCanCloud, GroudSim, DCSim.",
        src: "Cloud Computing – Case Studies: Cloud Simulators"
      },
      {
        q: "In the CloudSim architecture, which layer handles event scheduling, entity creation and clock management?",
        o: ["User Code (top layer)", "CloudSim (middle layer)", "Core Simulation Engine (bottom layer)", "GUI layer"],
        a: [2],
        e: "Core Simulation Engine (bottom): event scheduling, entity creation, interaction between components, clock management.",
        src: "Cloud Computing – Case Studies: CloudSim Architecture"
      },
      {
        q: "CloudAnalyst is a simulation tool designed based on:",
        o: ["NS2", "CloudSim", "Mininet", "OpenStack"],
        a: [1],
        e: "CloudAnalyst is designed based on CloudSim, provides a GUI and supports geographically distributed large-scale applications.",
        src: "Cloud Computing – Case Studies: CloudAnalyst"
      },
      {
        q: "GreenCloud was developed as an extension of which simulator?",
        o: ["CloudSim", "NS2", "OMNeT++", "Mininet-WiFi"],
        a: [1],
        e: "GreenCloud monitors energy consumption of servers, switches, etc., and was developed as an extension of the packet-level network simulator NS2.",
        src: "Cloud Computing – Case Studies: GreenCloud"
      },
      {
        q: "Which OpenStack component provides Elastic map reduce?",
        o: ["Sahara", "Trove", "Manila", "Barbican"],
        a: [0],
        e: "Sahara: Elastic map reduce; Trove: Database; Manila: Shared file system; Barbican: Key manager.",
        src: "Cloud Computing – Case Studies: OpenStack Components"
      },
      {
        q: "Which Amazon EC2 instance types are 'Compute optimized'?",
        o: ["C4, C3", "T2, M4, M3", "X1, R4, R3", "P2, G2, F1"],
        a: [0],
        e: "General purpose: T2, M4, M3; Compute optimized: C4, C3; Memory optimized: X1, R4, R3; Accelerated: P2, G2, F1.",
        src: "Cloud Computing – Case Studies: Amazon EC2 Instances"
      },
      {
        q: "Which Amazon service monitors CPU, disk and network resource utilization?",
        o: ["Amazon CloudWatch", "Amazon S3", "Elastic IP", "Amazon EBS"],
        a: [0],
        e: "Amazon CloudWatch: CPU, disk, network resource utilization monitoring.",
        src: "Cloud Computing – Case Studies: Features of Amazon EC2"
      }
    ]
  },
  9: {
    title: "OpenStack, Sensor-Cloud & Fog Computing",
    questions: [
      {
        q: "Which OpenStack component provides identity service (authentication and authorization)?",
        o: ["Keystone", "Horizon", "Glance", "Heat"],
        a: [0],
        e: "Keystone: identity service providing authentication and authorization.",
        src: "Introduction to OpenStack: Components"
      },
      {
        q: "Which OpenStack component provides orchestration?",
        o: ["Heat", "Ceilometer", "Cinder", "Swift"],
        a: [0],
        e: "Heat: orchestration. Ceilometer: billing. Cinder: block storage. Swift: object storage.",
        src: "Introduction to OpenStack: Components"
      },
      {
        q: "The OpenStack Ceilometer component is responsible for:",
        o: ["Billing — what service you are using and how long", "Object storage", "Image service", "Networking"],
        a: [0],
        e: "Ceilometer: billing — what service you are using and how long you are using it.",
        src: "Introduction to OpenStack: Components"
      },
      {
        q: "Which OpenStack component enables the other services to communicate with each other and lets you make your own network?",
        o: ["Neutron", "Nova", "Swift", "Keystone"],
        a: [0],
        e: "Neutron provides networking service, enables other services to communicate, and lets you make your own network.",
        src: "Introduction to OpenStack: Components"
      },
      {
        q: "Which OpenStack version is listed as the latest in the notes?",
        o: ["Austin", "Kilo", "Newton", "Ocata"],
        a: [3],
        e: "Versions: Austin, Bexar, Cactus, ... Mitaka, Newton, Ocata (Latest).",
        src: "Introduction to OpenStack"
      },
      {
        q: "Which script is run to uninstall a DevStack OpenStack installation?",
        o: ["stack.sh", "unstack.sh", "clean.sh", "remove.sh"],
        a: [1],
        e: "For uninstallation, go to the devstack directory and run the unstack.sh file.",
        src: "Introduction to OpenStack: Installation"
      },
      {
        q: "Which are listed as benefits of virtualization?",
        o: ["Sharing of resources", "Encapsulation", "Independence from underlying hardware", "Portability (VM migration)"],
        a: [0, 1, 2, 3],
        e: "Benefits: sharing of resources, encapsulation, independence, portability (VM migration).",
        src: "Sensor-Cloud – Part I: Virtualization Concept"
      },
      {
        q: "In the sensor-cloud notes, which is given as an example of SaaS?",
        o: ["Microsoft Office 365", "Windows Azure", "Storage space", "OpenStack Nova"],
        a: [0],
        e: "SaaS example: Microsoft Office 365; PaaS: Windows Azure; IaaS: storage space.",
        src: "Sensor-Cloud – Part I: Cloud Computing Services"
      },
      {
        q: "In a sensor-cloud, who is responsible for maintenance of sensors?",
        o: ["SCSP", "End-user", "WSN-user", "Sensor-owner"],
        a: [0],
        e: "In the actors and roles comparison, deployment, redeployment, maintenance and overhead shift to the SCSP in a sensor-cloud.",
        src: "Sensor-Cloud – Part I: Difference with WSN"
      },
      {
        q: "Which statement about end-users in a sensor-cloud is correct?",
        o: ["They are unaware of which physical sensors are allocated to serve their application", "They purchase and deploy physical sensors", "They charge prices to SCSP", "They maintain sensor batteries"],
        a: [0],
        e: "End-users enjoy Se-aaS through applications and are unknown about what and which physical sensors are allocated.",
        src: "Sensor-Cloud – Part I: Actors"
      },
      {
        q: "In the optimal composition of virtual sensors, CoV-II considers:",
        o: ["Heterogeneous physical sensor nodes across different geographical locations, forming a Virtual Sensor Group", "Homogeneous nodes in the same region", "Only a single physical sensor", "Only cloud servers"],
        a: [0],
        e: "CoV-I: homogeneous nodes within same geographic boundary (Virtual Sensor). CoV-II: heterogeneous nodes across regions (Virtual Sensor Group).",
        src: "Sensor-Cloud – Part II: Composition of Virtual Sensors"
      },
      {
        q: "Which are listed as management issues in sensor-cloud?",
        o: ["Optimal composition of virtual sensor nodes", "Data caching", "Optimal pricing", "Channel blacklisting"],
        a: [0, 1, 2],
        e: "Management issues: optimal composition of virtual sensor nodes, data caching, optimal pricing.",
        src: "Sensor-Cloud – Part II: Management Issues"
      },
      {
        q: "The proposed sensor-cloud pricing scheme comprises which two components?",
        o: ["Pricing attributed to hardware (pH) and to infrastructure (pI)", "Fixed price and variable price", "Upload and download price", "CPU price and memory price"],
        a: [0],
        e: "pH deals with usage of physical sensor nodes; pI deals with the price associated with sensor-cloud infrastructure.",
        src: "Sensor-Cloud – Part II: Optimal Pricing"
      },
      {
        q: "The idea of fog computing is to:",
        o: ["Extend the cloud nearer to the IoT devices", "Replace all IoT devices", "Move all processing to the cloud", "Remove the need for networks"],
        a: [0],
        e: "\"The idea of fog computing is to extend the cloud nearer to the IoT devices\" — an intermediate layer between cloud and devices.",
        src: "Fog Computing: Introduction"
      },
      {
        q: "According to the notes, how much data is generated per day?",
        o: ["2.5 quintillion bytes", "2.5 terabytes", "25 petabytes", "250 exabytes"],
        a: [0],
        e: "\"2.5 quintillion bytes of data is generated per day.\"",
        src: "Fog Computing: Introduction"
      },
      {
        q: "Which data does a fog system analyze at the nearest fog node itself?",
        o: ["Most time-sensitive data (fraction of a second)", "Less time-sensitive data (seconds to minutes)", "Non-time-sensitive data (hours to weeks)", "All data, always"],
        a: [0],
        e: "Most time-sensitive data are analyzed at the nearest node; less time-sensitive data go to the aggregate node; non-time-sensitive data go to the cloud.",
        src: "Fog Computing: Working of Fog"
      },
      {
        q: "Less time-sensitive data in a fog architecture are sent to:",
        o: ["The aggregate fog node", "The nearest fog node only", "Directly to the cloud", "Discarded"],
        a: [0],
        e: "Less time-sensitive data (seconds or minutes) are sent to the aggregate node for analysis, which sends the action back through the nearest node.",
        src: "Fog Computing: Working of Fog"
      },
      {
        q: "Which are given as examples of fog nodes?",
        o: ["Routers", "Embedded servers", "Video surveillance cameras", "Satellites only"],
        a: [0, 1, 2],
        e: "Fog node examples: routers, embedded servers, switches, video surveillance cameras, etc.",
        src: "Fog Computing: Fog nodes"
      },
      {
        q: "When should fog computing be used?",
        o: ["If data should be analyzed within a fraction of a second", "If there are a huge number of devices", "If devices are separated by a large geographical distance", "If there is only one device"],
        a: [0, 1, 2],
        e: "Use fog when data must be analyzed in a fraction of a second, there are huge numbers of devices, devices are far apart, or devices face extreme conditions.",
        src: "Fog Computing: When should we use fog"
      },
      {
        q: "Which is listed as a challenge of fog computing?",
        o: ["Power consumption is higher than a centralized cloud", "It increases latency", "It cannot support mobility", "It needs no security"],
        a: [0],
        e: "Challenges: power consumption (fog uses additional nodes), data security, reliability, fault tolerance, real time analysis, programming architecture.",
        src: "Fog Computing: Challenges"
      },
      {
        q: "Which are listed as applications of fog computing?",
        o: ["Real time health analysis", "Real time rail monitoring", "Pipeline optimization", "Offline batch printing"],
        a: [0, 1, 2],
        e: "Applications: real time health analysis, intelligent power efficient systems, real time rail monitoring, pipeline optimization, wind mill and turbine analysis.",
        src: "Fog Computing: Applications"
      },
      {
        q: "How does fog provide better privacy?",
        o: ["Industries analyze data locally and send only shareable data to the cloud", "By encrypting the cloud only", "By deleting all data", "By using IPv4"],
        a: [0],
        e: "Better privacy: every industry can analyze data locally, store confidential data in local servers and send only shareable data to the cloud.",
        src: "Fog Computing: Advantages"
      }
    ]
  },
  10: {
    title: "Smart Cities, Smart Homes & Connected Vehicles",
    questions: [
      {
        q: "The need for smart cities arose due to:",
        o: ["Rapidly growing urban population", "Fast depleting natural resources", "Changes in environment and climate", "Decreasing urban population"],
        a: [0, 1, 2],
        e: "The need arose due to rapidly growing urban population, fast depleting natural resources, and changes in environment and climate.",
        src: "Smart Cities and Smart Homes – Part I"
      },
      {
        q: "In the smart city application focus areas, 'Citizen participation' is associated with:",
        o: ["Smart Economy", "Smart Governance", "Smart People", "Smart Living"],
        a: [1],
        e: "Smart Economy – competitiveness; Smart Governance – citizen participation; Smart People – social and human capital; Smart Living – quality of life.",
        src: "Smart Cities – Part I: Application Focus Areas"
      },
      {
        q: "Under smart city 'Technological Focus Areas', data cleaning, analytics and prediction belong to:",
        o: ["Data Collection", "Data Transmission", "Data Storage", "Data Processing"],
        a: [3],
        e: "Data Processing: data cleaning, analytics, prediction. Data Storage: local storage, data warehouses.",
        src: "Smart Cities – Part I: Technological Focus Areas"
      },
      {
        q: "Which are listed as smart vehicle current focus areas?",
        o: ["Assistance to drivers during bad weather or low-visibility", "Auto alert generation during crashes", "Self diagnostics", "Auto application of pesticides"],
        a: [0, 1, 2],
        e: "Smart vehicles: driver assistance in bad weather, detection of bad driving patterns, auto alerts during crashes, self diagnostics. Pesticide application is Smart Agriculture.",
        src: "Smart Cities – Part I: Current Focus Areas"
      },
      {
        q: "'Unreliable communication due to vehicle mobility' falls under which IoT challenge in smart cities?",
        o: ["Security and Privacy", "Heterogeneity", "Reliability", "Big data"],
        a: [2],
        e: "Reliability: unreliable communication due to vehicle mobility; device failures still significant.",
        src: "Smart Cities – Part I: IoT Challenges"
      },
      {
        q: "Which data fusion challenge refers to outliers and missing data?",
        o: ["Imperfection", "Ambiguity", "Conflicts", "Alignment"],
        a: [1],
        e: "Imperfection: inaccurate/uncertain data; Ambiguity: outliers, missing data; Conflicts: same sensor type reports different data for same location; Alignment: frame conversion.",
        src: "Smart Cities – Part II: Data Fusion Challenges"
      },
      {
        q: "In the stages of data fusion, 'ensemble of decisions prior to decision making' is which level?",
        o: ["Decision level", "Feature level", "Pixel level", "Signal level"],
        a: [0],
        e: "Decision level: ensemble of decisions; Feature level: fusion at node/device level; Pixel level: at the imaging device; Signal level: at sensor within the local network.",
        src: "Smart Cities – Part II: Stages of Data Fusion"
      },
      {
        q: "Belief functions and transferable belief models are which category of mathematical data fusion methods?",
        o: ["Probability based", "AI based", "Theory of Evidence based", "Signal based"],
        a: [2],
        e: "Probability based: Bayesian, statistics, recursive. AI based: ANN, ML, CNN. Theory of Evidence based: belief functions, transferable belief models.",
        src: "Smart Cities – Part II: Mathematical Methods of Data Fusion"
      },
      {
        q: "Which are listed as benefits of smart parking?",
        o: ["Shortens parking search time", "Reduces traffic congestion", "Reduces fuel consumption and costs", "Increases pollution"],
        a: [0, 1, 2],
        e: "Smart parking shortens search time, reduces congestion, pollution, fuel consumption and costs, and increases urban mobility and revenue.",
        src: "Smart Cities – Part II: Smart Parking"
      },
      {
        q: "Dynamic pricing in smart parking belongs to which functional layer?",
        o: ["Information Collection", "System Deployment", "Service Dissemination", "Data Fusion"],
        a: [2],
        e: "Service Dissemination includes dynamic pricing, strategies, parking choice and vehicular activities.",
        src: "Smart Cities – Part II: Smart Parking Layers"
      },
      {
        q: "Which are sources of ambient energy harvesting listed in the notes?",
        o: ["RF sources", "Wind", "Vibration", "Dedicated deployed sources"],
        a: [0, 1, 2],
        e: "Ambient energy harvesting: RF sources, wind, sun, heat, vibration. Dedicated harvesting uses energy sources intentionally deployed near IoT devices.",
        src: "Smart Cities – Part II: Energy Management"
      },
      {
        q: "In a HAN, what does a multi-protocol gateway do?",
        o: ["Bridges non-IP network to IP network", "Converts AC to DC", "Encrypts Wi-Fi", "Replaces the Internet"],
        a: [0],
        e: "A multi-protocol gateway bridges a non-IP network to an IP network; for new technologies a new mapping is required.",
        src: "Smart Cities and Smart Homes – Part III: HAN Elements"
      },
      {
        q: "The Digital Living Network Alliance (DLNA) is a trade organization created by:",
        o: ["Sony, Intel, and Microsoft", "GE and Philips", "Mitsubishi, Honeywell and Motorola", "Sun Microsystems"],
        a: [0],
        e: "DLNA: trade organization created by Sony, Intel and Microsoft; it connects cable-based networks with wireless networks.",
        src: "Smart Homes – Part III: HAN Standards"
      },
      {
        q: "In LonWorks, every device includes:",
        o: ["A Neuron Chip, a transceiver and application electronics", "Only an RFID tag", "A Raspberry Pi", "A DSRC radio"],
        a: [0],
        e: "Every LonWorks device includes a Neuron Chip (SoC with multiple microprocessors, RAM, ROM, IO), a transceiver and the application electronics.",
        src: "Smart Homes – Part III: HAN Standards (LonWorks)"
      },
      {
        q: "Which HAN architecture is based on the JAVA environment, pursued by Sun Microsystems, and constructs a federation without a central node?",
        o: ["DomoNet", "Jini", "HYDRA", "Amigo"],
        a: [1],
        e: "Jini: Java-based, pursued by Sun Microsystems (now Oracle), builds a federation without a central node. DomoNet uses XML and web-services (SOA) with a central gateway.",
        src: "Smart Homes – Part III: HAN Architectures"
      },
      {
        q: "In the HYDRA HAN initiative, what acts as a proxy between the device and the middleware?",
        o: ["An embedded HYDRA client in each device", "The ZigBee coordinator", "A cloud server", "A Neuron chip"],
        a: [0],
        e: "Each device has an embedded HYDRA client which acts as a proxy between the device and the middleware.",
        src: "Smart Homes – Part III: HAN Initiatives"
      },
      {
        q: "Content Centric Networking (CCN) is derived from:",
        o: ["Information Centric Networking (ICN)", "TCP/IP", "MANET", "SDN"],
        a: [0],
        e: "CCN is derived from the ICN architecture and focuses more on the data than its actual location.",
        src: "Connected Vehicles – Part I: CCN"
      },
      {
        q: "In CCN for VANETs, named data chunks are cached in the:",
        o: ["Content Store (CS)", "Forwarding Information Base (FIB)", "TCAM", "On-board unit"],
        a: [0],
        e: "Uniquely identifiable (named) data chunks are stored in the Content Store, which acts as a cache. Name prefixes build the FIB for routing.",
        src: "Connected Vehicles – Part I: CCN for VANETs"
      },
      {
        q: "Which are listed as VANET features?",
        o: ["High dynamic topology", "Unstable connectivity", "Predictable mobility pattern", "Severely limited computation capability"],
        a: [0, 1, 2],
        e: "VANET features: high dynamic topology, high transmission and computation capability, unstable connectivity, large scale, predictable mobility pattern.",
        src: "Connected Vehicles – Part I: VANET Features"
      },
      {
        q: "Electronic toll collection is which category of VANET application?",
        o: ["Safety", "Efficiency", "Commercial", "Comfort"],
        a: [1],
        e: "Efficiency: congestion management, electronic toll collection, parking availability.",
        src: "Connected Vehicles – Part I: Applications of VANETs"
      },
      {
        q: "In the body and brain in-vehicle architecture, which layer acts as the 'nervous system'?",
        o: ["Sense and Execution layer", "Network and Transmission layer", "Decision layer", "Application layer"],
        a: [1],
        e: "Decision – brain; Network and Transmission – nervous system; Sense and Execution – body (intelligent networking nodes).",
        src: "Connected Vehicles – Part I: Body and Brain Architecture"
      },
      {
        q: "Which IEEE standard is the WAVE Multi-Channel Operations standard?",
        o: ["IEEE 1609.1", "IEEE 1609.2", "IEEE 1609.3", "IEEE 1609.4"],
        a: [3],
        e: "1609.1: Resource Manager; 1609.2: Security Services; 1609.3: Networking Services; 1609.4: Multi-Channel Operations.",
        src: "Connected Vehicles – Part II: IEEE 1609 Family"
      },
      {
        q: "Which are DSRC standards developed by IEEE?",
        o: ["IEEE 802.11p", "IEEE 1609", "SAE J2735", "IEEE 802.15.4"],
        a: [0, 1],
        e: "IEEE developed IEEE 802.11p and IEEE 1609; SAE came up with SAE J2735 and J2945.",
        src: "Connected Vehicles – Part II: Technological Background"
      },
      {
        q: "In ICV development, which phase involves vehicles connected to the cloud?",
        o: ["Phase-1", "Phase-2", "Phase-3", "Phase-4"],
        a: [2],
        e: "Phase-1: infotainment (2G/3G); Phase-2: intelligent transportation (4G LTE or DSRC); Phase-3: vehicles connected to the cloud.",
        src: "Connected Vehicles – Part II: Phases of ICV Development"
      },
      {
        q: "In the in-vehicle domain, communication is mainly through:",
        o: ["Controller Area Network (CAN)", "Vehicular Powerline Networks (VPLN)", "Ethernet", "DSRC to RSUs only"],
        a: [0, 1, 2],
        e: "In-vehicle communication is mainly through CAN, VPLN and Ethernet. DSRC (IEEE 802.11p) is used in the ad-hoc domain.",
        src: "Connected Vehicles – Part II: In-Vehicle Domain"
      },
      {
        q: "In the absence of RSUs, vehicles may communicate with the Internet via:",
        o: ["Cellular networks such as 3G/4G, LTE", "CAN bus", "NFC", "Zigbee only"],
        a: [0],
        e: "In the absence of RSUs, vehicles may communicate with each other or the Internet through cellular networks such as 3G/4G, LTE.",
        src: "Connected Vehicles – Part II: Infrastructure Domain"
      }
    ]
  },
  11: {
    title: "Smart Grid, Industrial IoT & Data Handling",
    questions: [
      {
        q: "Which of the following are alternate names given to the smart grid?",
        o: ["Electricity with a brain", "The energy internet", "The electronet", "The power cloud"],
        a: [0, 1, 2],
        e: "Smart grid is also named: Electricity with a brain, The energy internet, The electronet.",
        src: "Smart Grid – Part I: What is Smart Grid"
      },
      {
        q: "Which are characteristics of the traditional electrical grid?",
        o: ["Energy generation in centralized power plants", "One-directional energy distribution", "Manual monitoring and restoration", "Two-way communication and control"],
        a: [0, 1, 2],
        e: "Traditional grid: centralized generation, one-directional distribution, manual monitoring/restoration, uni-directional communication.",
        src: "Smart Grid – Part I: Introduction"
      },
      {
        q: "Which are listed as components of a smart grid?",
        o: ["Smart Home", "Distribution Intelligence", "Plug-in Electric Vehicle", "Content Store"],
        a: [0, 1, 2],
        e: "Components: Smart Home, Renewable Energy, Consumer Engagement, Distribution Intelligence, Plug-in Electric Vehicle, Operation Center.",
        src: "Smart Grid – Part I: Components of Smart Grid"
      },
      {
        q: "Home fuel cell systems produce heat and power from:",
        o: ["Natural gas", "Solar radiation", "Wind", "Coal"],
        a: [0],
        e: "\"Home fuel cell systems – produce heat and power from natural gas.\"",
        src: "Smart Grid – Part I: Home Power Generation"
      },
      {
        q: "In the case of 'Islanding', a home can have power from:",
        o: ["Distributed resources, i.e. home power generation systems", "Only the main grid", "Neighbouring countries", "Nothing; it goes dark"],
        a: [0],
        e: "\"In case of Islanding, a home can have power from distributed resources, i.e., home power generation systems.\"",
        src: "Smart Grid – Part I: Home Power Generation"
      },
      {
        q: "Consumers' involvement in smart grid consumer engagement is through:",
        o: ["Time-of-Use pricing", "Net metering", "Financial incentives", "Blackout scheduling"],
        a: [0, 1, 2],
        e: "Consumers are involved through Time-of-Use pricing, net metering and financial incentives.",
        src: "Smart Grid – Part I: Consumer Engagement"
      },
      {
        q: "Collected information by the phasor network is analyzed at which centralized system?",
        o: ["SCADA", "MDMS", "HAN", "DAU"],
        a: [0],
        e: "Multiple PMUs form a phasor network; collected information is analyzed at the centralized Supervisory Control And Data Acquisition (SCADA) system.",
        src: "Smart Grid – Part II: Operation Centers"
      },
      {
        q: "Rerouting power flows to avoid overloading a transmission line is part of:",
        o: ["Self-healing of grid / distribution intelligence", "Net metering", "Time-of-Use pricing", "Islanding"],
        a: [0],
        e: "Self-healing: dampen oscillations, avoid unwanted current flows, reroute power flows — this is part of distribution intelligence.",
        src: "Smart Grid – Part II: Operation Centers"
      },
      {
        q: "What is the data rate of the C-Bus protocol for smart home appliances?",
        o: ["480 bits/sec", "3500 bits/sec", "9600 bits/sec", "64000 bits/sec"],
        a: [1],
        e: "C-Bus: 3500 bits/sec, cable lengths up to 1000 m. DECT: 64000; EnOcean: 9600; Universal Power line Bus: 480 bits/sec.",
        src: "Smart Grid – Part II: Smart Grid Communication"
      },
      {
        q: "Which smart home appliance protocol works on twisted pair and was developed based on OpenWebNet?",
        o: ["Thread", "Simplified Cable Solution (SCS)", "EnOcean", "DECT"],
        a: [1],
        e: "SCS: 9.6 Kbits/sec, works on twisted pair, developed based on OpenWebNet.",
        src: "Smart Grid – Part II: Smart Grid Communication"
      },
      {
        q: "Smart grid gateways communicate mostly based on:",
        o: ["WiFi (IEEE 802.11)", "Bluetooth", "NFC", "Z-Wave"],
        a: [0],
        e: "Each gateway connects a few closely located smart meters; gateways communicate mostly based on WiFi (IEEE 802.11).",
        src: "Smart Grid – Part II: Smart Meters and Gateways"
      },
      {
        q: "Which component acts as the centralized coordinator for smart grid communication and decides the price per unit energy?",
        o: ["Data Aggregator Unit (DAU)", "Meter Data Management System (MDMS)", "Gateway", "Smart meter"],
        a: [1],
        e: "MDMS acts as the centralized coordinator, is handled by energy service providers, is part of the operation center and decides price per unit energy.",
        src: "Smart Grid – Part II: MDMS"
      },
      {
        q: "Attacks that target PMU time synchronization are known as:",
        o: ["Time synchronization attacks (TSAs)", "Replay attacks", "Covert attacks", "DoS attacks"],
        a: [0],
        e: "Attacks targeting PMU time synchronization are known as time synchronization attacks (TSAs).",
        src: "Smart Grid – Part II: Smart Grid Security"
      },
      {
        q: "A 'covert attack' in smart grid is:",
        o: ["The closed loop version of replay attacks", "A physical attack on substations", "Energy theft by meter tampering", "A DoS attack"],
        a: [0],
        e: "Under dynamic system attacks: replay attacks, dynamic data injection attacks, and covert attack (closed loop version of replay attacks).",
        src: "Smart Grid – Part II: Smart Grid Security"
      },
      {
        q: "Which are the two cloud-based demand response models proposed for smart grid energy management?",
        o: ["Data-centric communication", "Topic-based group communication", "Peer-to-peer barter", "Manual metering"],
        a: [0, 1],
        e: "Two cloud-based demand response models: data-centric communication and topic-based group communication.",
        src: "Smart Grid – Part II: Energy Management and Cloud"
      },
      {
        q: "IIoT is based on which approach?",
        o: ["Wrap & re-use", "Rip & replace", "Build from scratch", "Outsource all"],
        a: [0],
        e: "IIoT is based on the \"wrap & re-use\" approach, rather than the \"rip & replace\" approach.",
        src: "Industrial IoT – Part I: Introduction"
      },
      {
        q: "Which are design considerations for using an IoT device in industrial applications?",
        o: ["Energy", "Latency", "Throughput", "Colour of the device"],
        a: [0, 1, 2],
        e: "Design objectives: energy, latency, throughput, scalability, topology (interoperability), safety and security.",
        src: "Industrial IoT – Part I: Design Considerations"
      },
      {
        q: "How does IIoT differ from IoT according to the notes?",
        o: ["IIoT focuses on efficiency, safety and security of operation", "IIoT uses M-2-M communication extensively", "IoT is focused on convenience of individuals", "IIoT applications are mainly consumer-level"],
        a: [0, 1, 2],
        e: "IoT: convenience of individuals, limited M2M, consumer-level apps. IIoT: efficiency, safety, security, extensive M2M, industrial apps.",
        src: "Industrial IoT – Part I: Difference between IoT and IIoT"
      },
      {
        q: "In IIoT service management, auxiliary functions that serve primary or other secondary services are called:",
        o: ["Primary services", "Secondary services", "Composite services", "Core services"],
        a: [1],
        e: "Primary services handle primary node functions; secondary services are auxiliary functions providing services to primary or secondary services.",
        src: "Industrial IoT – Part I: Service Management"
      },
      {
        q: "In IIoT, robots are featured with which three capabilities?",
        o: ["Sensing, thinking and acting", "Lifting, welding and painting", "Storing, sending and deleting", "Charging, moving and stopping"],
        a: [0],
        e: "\"In IIoT environment, robots are featured with three capabilities: sensing, thinking and acting.\"",
        src: "Industrial IoT – Part II: Reformation of Robots"
      },
      {
        q: "Comtrol IO Link Master Gateway supports which protocols?",
        o: ["Ethernet/IP", "PROFINET (PNIO)", "Modbus TCP", "Z-Wave"],
        a: [0, 1, 2],
        e: "The Comtrol IO Link Master Gateway supports Ethernet/IP, PROFINET (PNIO) and Modbus TCP.",
        src: "Industrial IoT – Part II: Case Study"
      },
      {
        q: "What share of the total data available in the world is unstructured, according to the notes?",
        o: ["20%", "50%", "80%", "100%"],
        a: [2],
        e: "Structured data accounts for only 20%; unstructured data accounts for 80% of the total data available today.",
        src: "Data Handling and Analytics – Part I: Types of Data"
      },
      {
        q: "How many Vs characterize Big Data in the notes?",
        o: ["3", "5", "7", "10"],
        a: [2],
        e: "Big Data is characterized by 7 Vs: Volume, Velocity, Variety, Variability, Veracity, Visualization, Value.",
        src: "Data Handling and Analytics – Part I: Characteristics of Big Data"
      },
      {
        q: "'140 million tweets per day' is given as an example of which Big Data characteristic?",
        o: ["Volume", "Velocity", "Variety", "Value"],
        a: [1],
        e: "Velocity examples: 140 million tweets per day; NYSE captures 1 TB per trading session. Volume examples: LSST 30 TB/night, 72 hours of YouTube video per minute.",
        src: "Data Handling and Analytics – Part I: Velocity"
      },
      {
        q: "Data whose meaning is constantly changing and depends on context refers to:",
        o: ["Variability", "Veracity", "Variety", "Visualization"],
        a: [0],
        e: "Variability refers to data whose meaning is constantly changing and depends on the context.",
        src: "Data Handling and Analytics – Part I: Variability"
      },
      {
        q: "Pre-processing of relational data mainly follows:",
        o: ["Integration", "Cleaning", "Redundancy mitigation", "Encryption"],
        a: [0, 1, 2],
        e: "Pre-processing of relational data mainly follows integration, cleaning and redundancy mitigation.",
        src: "Data Handling and Analytics – Part I: Data Pre-processing"
      },
      {
        q: "Which are the three main NoSQL database types listed?",
        o: ["Key-value databases", "Column-oriented databases", "Document-oriented databases", "Relational databases"],
        a: [0, 1, 2],
        e: "Three main NoSQL databases: key-value, column-oriented and document-oriented.",
        src: "Data Handling and Analytics – Part I: Data Storage"
      },
      {
        q: "Which Hadoop building block is the 'next-generation MapReduce' that assigns CPU, memory and storage to applications?",
        o: ["Hadoop Common", "HDFS", "YARN", "Job Tracker"],
        a: [2],
        e: "YARN (Yet Another Resource Negotiator) assigns CPU, memory and storage to applications running on a Hadoop cluster.",
        src: "Data Handling Using Hadoop: Building Blocks"
      },
      {
        q: "In HDFS, which node maintains metadata info about files?",
        o: ["Namenode", "Datanode", "Task Tracker", "Slave"],
        a: [0],
        e: "Namenode (centralized) maintains metadata; Datanodes (distributed) store the actual data.",
        src: "Data Handling Using Hadoop: HDFS"
      },
      {
        q: "In Hadoop, the Task Tracker runs on:",
        o: ["Each datanode", "The namenode only", "The client machine", "The cloud"],
        a: [0],
        e: "Job Tracker runs with the Namenode; Task Tracker runs on each datanode and receives tasks from the Job Tracker.",
        src: "Data Handling Using Hadoop: Job and Task Trackers"
      }
    ]
  },
  12: {
    title: "Data Analytics, Agriculture, Healthcare & Activity Monitoring",
    questions: [
      {
        q: "Qualitative analysis can be summarized by which three basic principles (Seidel, 1998)?",
        o: ["Notice things, Collect things, Think about things", "Measure, Compute, Report", "Plan, Do, Check", "Read, Write, Execute"],
        a: [0],
        e: "Seidel (1998): Notice things, Collect things, Think about things.",
        src: "Data Handling and Analytics – Part II: Qualitative Analysis"
      },
      {
        q: "Which are examples of qualitative data according to the notes?",
        o: ["Color", "Smell", "Taste", "Weight"],
        a: [0, 1, 2],
        e: "Qualitative data examples: color, smell, taste. Quantitative data examples: volume, weight.",
        src: "Data Handling and Analytics – Part II: Qualitative vs Quantitative"
      },
      {
        q: "A statistical model is represented as the ordered pair (X, P). What does P denote?",
        o: ["The set of all possible observations", "The set of probability distributions on X", "The number of predictors", "The p-value"],
        a: [1],
        e: "X denotes the set of all possible observations; P refers to the set of probability distributions on X.",
        src: "Data Handling and Analytics – Part II: Statistical models"
      },
      {
        q: "Which properties are required to perform ANOVA?",
        o: ["Independence of case", "Normality", "Homogeneity", "Identical sample values"],
        a: [0, 1, 2],
        e: "Properties: independence of case (random selection), normality of each group, homogeneity (same variance between groups).",
        src: "Data Handling and Analytics – Part II: Analysis of variance"
      },
      {
        q: "Two way analysis of variance is used when:",
        o: ["There is one fixed factor", "Factor variables are more than two", "There are no factors", "Only one observation exists"],
        a: [1],
        e: "One way: one fixed factor. Two way: factor variables are more than two. K-way: factor variables are k.",
        src: "Data Handling and Analytics – Part II: Analysis of variance"
      },
      {
        q: "The F-ratio is approximately 1.0 when:",
        o: ["The null hypothesis is true", "The null hypothesis is false", "The variance is zero", "The sample size is one"],
        a: [0],
        e: "The F ratio is approximately 1.0 when the null hypothesis is true and greater than 1.0 when it is false.",
        src: "Data Handling and Analytics – Part II: F-ratio"
      },
      {
        q: "Which are examples of dispersion measures?",
        o: ["Range", "Average absolute deviation", "Variance and Standard deviation", "Mode"],
        a: [0, 1, 2],
        e: "Examples of dispersion measures: range, average absolute deviation, variance and standard deviation.",
        src: "Data Handling and Analytics – Part II: Data dispersion"
      },
      {
        q: "A contingency table is also known as:",
        o: ["Cross tabulation or crosstab", "Regression table", "Hash table", "Truth table"],
        a: [0],
        e: "A contingency table (also known as a cross tabulation or crosstab) displays the multivariate frequency distribution of variables.",
        src: "Data Handling and Analytics – Part II: Contingence and correlation"
      },
      {
        q: "Which two key variables go into determining statistical significance?",
        o: ["Sample size", "Effect size", "Clock speed", "Data colour"],
        a: [0, 1],
        e: "Two key variables: sample size and effect size.",
        src: "Data Handling and Analytics – Part II: Statistical significance"
      },
      {
        q: "How is precision related to standard error?",
        o: ["Precision is inversely related to standard error", "Precision equals standard error", "Precision is directly proportional to standard error", "They are unrelated"],
        a: [0],
        e: "\"Precision is inversely related to standard error.\"",
        src: "Data Handling and Analytics – Part II: Precision and Error limits"
      },
      {
        q: "The limit of error is defined as:",
        o: ["Critical value × Standard deviation of the statistic", "Mean − Median", "Range ÷ 2", "Variance × Sample size"],
        a: [0],
        e: "Limit of error = Critical value × Standard deviation of the statistic.",
        src: "Data Handling and Analytics – Part II: Precision and Error limits"
      },
      {
        q: "In AgriSens, the repository data server communicates with the deployed IoT gateway in the field using:",
        o: ["GPRS technology", "Bluetooth", "NFC", "Optical fibre"],
        a: [0],
        e: "Repository data server communicates with the field IoT gateway by using GPRS technology.",
        src: "AgriSens: Integrated design for remote server"
      },
      {
        q: "Which soil moisture sensor is shown in the AgriSens integrated sensor design?",
        o: ["EC-05", "DHT22", "LM35", "HC-SR04"],
        a: [0],
        e: "Integrated design for sensors shows the designed water-level sensor and the EC-05 soil moisture sensor.",
        src: "AgriSens: Integrated design for sensors"
      },
      {
        q: "Which noises are listed as affecting AgriSens average packet delivery ratio?",
        o: ["Air flow", "Temperature", "Solar radiation", "Rain"],
        a: [0, 1, 2, 3],
        e: "Results: Avg. PDR 98.75–89.75%; noises: air flow, temperature, solar radiation, rain.",
        src: "AgriSens: Results"
      },
      {
        q: "In the 4-layer IoT healthcare organisation, which layer contains Google Glass and Fitbit tracker as examples?",
        o: ["Sensing layer", "Aggregated layer", "Processing layer", "Cloud platform"],
        a: [0],
        e: "Sensing layer: sensors, RFIDs, WSNs (e.g. Google Glass, Fitbit). Aggregated layer: smartphones, tablets.",
        src: "IoT Healthcare: Components"
      },
      {
        q: "Which is mentioned as an example device for IoT remote healthcare?",
        o: ["Withings BP Monitor", "Raspberry Pi camera", "ZigBee coordinator", "Smart meter"],
        a: [0],
        e: "Remote healthcare examples: Withings BP Monitor and Shimmer Temperature Monitor.",
        src: "IoT Healthcare: Remote Healthcare"
      },
      {
        q: "AmbuSens monitors which physiological parameters?",
        o: ["Electrocardiogram (ECG)", "Heart Rate", "Galvanic Skin Response (GSR)", "Temperature"],
        a: [0, 1, 2, 3],
        e: "AmbuSens physiological parameters: ECG, temperature, heart rate and GSR.",
        src: "AmbuSens: Physiological Parameters"
      },
      {
        q: "Which communication protocol is used in the AmbuSens single hop WBAN?",
        o: ["Bluetooth (IEEE 802.15.1)", "ZigBee (IEEE 802.15.4)", "Wi-Fi (IEEE 802.11)", "LTE"],
        a: [0],
        e: "The single hop WBAN uses Bluetooth, i.e. IEEE 802.15.1.",
        src: "AmbuSens: Development of WBAN"
      },
      {
        q: "How does the AmbuSens health-cloud framework achieve patient-identity masking?",
        o: ["Hashing and reverse hashing of patient ID", "Deleting patient records", "Using paper records", "Publishing IDs openly"],
        a: [0],
        e: "The system is strictly privacy-aware; patient-identity masking involves hashing and reverse hashing of patient ID.",
        src: "AmbuSens: Development of Cloud Framework"
      },
      {
        q: "Which are listed as human activities/gestures in activity monitoring?",
        o: ["Running", "Jumping", "Folding legs", "Sleeping in a cloud"],
        a: [0, 1, 2],
        e: "Important human activities: running, jumping, folding legs, moving hand.",
        src: "Activity Monitoring: Important Human Activities"
      },
      {
        q: "Which statements describe the network-based approach for activity monitoring analysis?",
        o: ["Larger and processing intensive methods can be applied", "Group based analytics possible", "Low power consumption", "No network connection required"],
        a: [0, 1, 2],
        e: "Network based: larger/processing intensive methods, group analytics, low power, needs average to good network. In-place is power intensive and needs no network.",
        src: "Activity Monitoring: Approaches"
      },
      {
        q: "Which handheld device sensors are listed for activity monitoring?",
        o: ["Accelerometer", "Gyroscope", "GPS", "Barometer-only"],
        a: [0, 1, 2],
        e: "Utilization of sensors of handheld devices: accelerometer, gyroscope, GPS, others.",
        src: "Activity Monitoring: Advantages"
      }
    ]
  }
};
