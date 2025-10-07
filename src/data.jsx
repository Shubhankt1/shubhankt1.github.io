// All static data used throughout the portfolio is centralized here.
// Keeping this separate from your UI makes the components easier to read and maintain.
export const PROFILE = {
  name: "Shubhank Tyagi",
  title: "IoT & Software Engineer · Full‑Stack · Mobile · Cloud · Embedded",
  tagline: "Turning ideas into code, and code into impact.",
  location: "Boston, MA, USA",
  links: {
    resume: "https://tr.ee/rvJJEE",
    github: "https://github.com/Shubhankt1",
    linkedin: "https://www.linkedin.com/in/iamshubhank",
    email: "mailto:tyagi.shu@northeastern.edu",
  },
};

// Use a raw GitHub URL here so the image renders correctly in both dev and production.
export const PHOTO_URL = "/shubhank-graduation.jpeg";

export const SKILLS = [
  {
    category: "Programming Languages",
    items: [
      "C/C++",
      "Python",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Express.js",
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      "Flutter",
      "Flask",
      "Django",
      "Git",
      "Postman",
      "REST",
      "SDLC",
      "Agile/Scrum",
      "JIRA",
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Terraform",
      "Docker",
      "Ansible",
      "Shell",
      "Firebase",
      "AWS (API Gateway, CloudWatch, CloudFront, EC2, IAM, S3)",
    ],
  },
  {
    category: "Database Design",
    items: [
      "MySQL",
      "SQLite",
      "NoSQL",
      "Elasticsearch",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "ACID",
    ],
  },
  {
    category: "Networking & IoT",
    items: [
      "TCP/IP",
      "UDP",
      "MQTT",
      "CoAP",
      "Wi‑Fi",
      "Bluetooth/BLE",
      "4G/LTE",
      "5G",
      "Arduino",
      "Raspberry Pi",
      "ESP32",
    ],
  },
];

export const ACHIEVEMENTS = [
  { label: "Major Release Speedup (×)", value: 2 },
  { label: "Minor Release Speedup (×)", value: 4 },
  { label: "Build Time Reduction (%)", value: 30 },
  { label: "Global Clients Reached", value: 1700 },
];

export const EXPERIENCE = [
  {
    role: "Mobile Applications Co‑Op",
    company: "Danlaw Inc.",
    period: "Jun 2024 – Aug 2024 · Novi, MI",
    bullets: [
      "Fixed UI inconsistencies and responsiveness for seamless desktop support.",
      "Designed order management + API (Node.js) with JWT/OAuth2.0, RBAC, FedEx integration.",
    ],
  },
  {
    role: "Full Stack Engineer & Release Manager",
    company: "Forwood Safety (Remote, AU)",
    period: "Jan 2023 – Jul 2023",
    bullets: [
      "Modularized Terraform monorepo; 4× faster minors, 2× faster majors.",
      "One-click plugin deployment (Terraform + Ansible).",
      "Resilient DynamoDB/OpenSearch backups; 99.9% integrity, zero prod loss.",
    ],
  },
  {
    role: "Product Engineer",
    company: "Forwood Safety (Remote, AU)",
    period: "Sep 2020 – Jan 2023",
    bullets: [
      "Scalable mobile platform (QR login, offline, i18n) → 5,000+ users.",
      "CV risk management with YOLOv4 ≈ 95% detection; reduced incidents.",
      "Real-time UDP telemetry with microsecond-level performance.",
    ],
  },
  {
    role: "IoT Engineer Intern",
    company: "Aerologiks (Bengaluru, IN)",
    period: "Feb 2020 – Sep 2020",
    bullets: [
      "Flutter app + Django + Raspberry Pi flight modules for real-time control.",
      "Hybrid telemetry: DynamoDB (cloud) + SQLite (edge).",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Northeastern University — College of Engineering & Khoury College",
    degree: "MS in Internet of Things (cum laude), GPA: 3.64/4.0",
    period: "May 2025",
    highlights: [
      "Wireless/Mobile IoT",
      "Machine Learning",
      "Network Security",
      "HW-SW Co-Design",
    ],
  },
  {
    school: "University of Petroleum and Energy Studies",
    degree: "B.Tech in Computer Science Engineering",
    period: "2016 – 2020",
    highlights: [
      "IoT Club ‘Zeal’ — Joint Secretary",
      "CodeChef Hackathon Semifinalist",
    ],
  },
];

export const PROJECTS = [
  {
    title: "MQTTeeny – Lightweight MQTT-style Protocol",
    blurb:
      "C++ + UDP PUB/SUB with CRC-16, QoS, and unit-tested packet layer. Next: broker concurrency, topic routing, sessions.",
    tech: ["C++", "UDP", "CRC-16", "QoS", "CMake"],
    link: "https://github.com/Shubhankt1/mqtteeny",
  },
  {
    title: "Darknet GEMM HW Accelerator",
    blurb:
      "Zynq-style fixed-point accelerator via SystemC/QEMU; memory-mapped registers; optimized data flow for speedup.",
    tech: ["C", "SystemC", "QEMU", "Linux"],
    link: "https://github.com/neu-ece-7368-f24/prj-team-rocket",
  },
  {
    title: "Flutter App Suite",
    blurb:
      "Travel app, Instagram/Spotify clones; CLEAN architecture, BLoC/Riverpod, custom widgets, polished UI/UX.",
    tech: ["Flutter", "BLoC", "Riverpod"],
    link: "https://github.com/Shubhankt1?tab=repositories",
  },
  {
    title: "Electronic RFID Door Lock",
    blurb:
      "C++ on Arduino + RC522 RFID via SPI; FSM control; servo power management, reliability fixes.",
    tech: ["C++", "Arduino", "RC522", "SPI"],
    link: "https://github.com/Shubhankt1/DoorLock",
  },
];
