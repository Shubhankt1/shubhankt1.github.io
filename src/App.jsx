import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/**
 * Shubhank – Interactive Portfolio (Pro Edition)
 * React + Tailwind CSS + Framer Motion (single-file)
 *
 * Highlights:
 * - Bigger hero photo with subtle floating + glossy shine overlay (on top)
 * - Glassy navbar, centered Command Palette trigger, mobile menu
 * - Smooth scroll from navbar buttons
 * - Light/Dark theme toggle synced with document root
 * - 3D tilt cards, draggable projects, counters, etc.
 */

/* ----------------------------- Profile & Data ---------------------------- */
const PROFILE = {
  name: "Shubhank Tyagi",
  title: "IoT & Software Engineer · Full-Stack · Mobile · Cloud · Embedded",
  tagline: "Turning ideas into code, and code into impact.",
  location: "Boston, MA, USA",
  links: {
    resume: "/Resume_Shubhank_IoT_Software_v7.pdf",
    github: "https://github.com/Shubhankt1",
    linkedin: "https://www.linkedin.com/in/iamshubhank",
    email: "mailto:tyagi.shu@northeastern.edu",
  },
};

// Raw URL so it shows in canvas/live preview environments
// const PHOTO =
//   "https://raw.githubusercontent.com/Shubhankt1/shubhankt1.github.io/develop/public/assets/shubhank-graduation.jpeg";

const PHOTO = "/shubhank-graduation.jpeg";

const SKILLS = [
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
      "Wi-Fi",
      "Bluetooth/BLE",
      "4G/LTE",
      "5G",
      "Arduino",
      "Raspberry Pi",
      "ESP32",
    ],
  },
];

const ACHIEVEMENTS = [
  { label: "Major Release Speedup (×)", value: 2 },
  { label: "Minor Release Speedup (×)", value: 4 },
  { label: "Build Time Reduction (%)", value: 30 },
  { label: "Global Clients Reached", value: 1700 },
];

const EXPERIENCE = [
  {
    role: "Mobile Applications Co-Op",
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

const EDUCATION = [
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

/* ----------------------------- Utilities/UI ----------------------------- */
// Scroll spy across sections
const useScrollSpy = (ids) => {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top) setActive(top.target.id);
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
};

// Animated counter
const Counter = ({ to = 0, duration = 1.2 }) => {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOn(!!e?.isIntersecting), {
      threshold: 0.4,
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!on) return;
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / (duration * 1000));
      setVal(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    const r = requestAnimationFrame(step);
    return () => cancelAnimationFrame(r);
  }, [on, to, duration]);
  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString()}
    </span>
  );
};

// Tilted 3D card
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const damp = 22;
  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect?.();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 2 - 1;
    const y = ((e.clientY - r.top) / r.height) * 2 - 1;
    setXY({ x, y });
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setXY({ x: 0, y: 0 })}
      style={{
        transformStyle: "preserve-3d",
        rotateX: xy.y * -damp,
        rotateY: xy.x * damp,
      }}
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
};

// Magnetic button
const MagButton = ({ children, href, onClick, className = "" }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const strength = 18;
  const move = (e) => {
    const r = ref.current?.getBoundingClientRect?.();
    if (!r) return;
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x / strength, y: y / strength });
  };
  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={move}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPos({ x: 0, y: 0 });
      }}
      animate={{ x: hover ? pos.x : 0, y: hover ? pos.y : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-slate-300/60 bg-white text-slate-900 hover:bg-slate-50 dark:ring-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 ${className}`}
    >
      {children}
    </motion.a>
  );
};

/* --------------------------- Command Palette UI ------------------------- */
function CommandPaletteOverlay({ open, onClose, onJump, sectionIds }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-black/50 p-4"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-[#0b0d15]"
          >
            <div className="mb-3 text-sm text-slate-700 dark:text-slate-300">
              Jump to…
            </div>
            <ul className="max-h-[50vh] overflow-auto">
              {sectionIds.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      onClose();
                      onJump(id);
                    }}
                    className="w-full rounded-lg px-3 py-2 text-left text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CommandPaletteButton({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/60 p-1 pl-3 pr-2 text-sm text-slate-700 ring-1 ring-slate-200/70 backdrop-blur dark:bg-white/10 dark:text-slate-300 dark:ring-white/10"
      aria-label="Open Command Palette"
      title="Command Palette (⌘/Ctrl+K)"
    >
      <span className="px-1.5">Jump to…</span>
      <span className="rounded-md border border-slate-300/70 px-1.5 py-0.5 text-[11px] text-slate-600 dark:border-white/20 dark:text-slate-300">
        ⌘K
      </span>
    </button>
  );
}

/* --------------------------------- App ---------------------------------- */
export default function App() {
  const sectionIds = [
    "home",
    "about",
    "skills",
    "projects",
    "achievements",
    "experience",
    "education",
    "contact",
  ];
  const active = useScrollSpy(sectionIds);

  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Sync Tailwind dark mode with the root element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Keyboard shortcut for command palette
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.1,
  });

  // Parallax backgrounds
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const goto = useCallback((id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white text-slate-800 selection:bg-violet-500/40 selection:text-white dark:bg-[#0b0d15] dark:text-slate-200">
        {/* Scroll progress */}
        <motion.div
          style={{ scaleX }}
          className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-violet-500 to-cyan-400"
        />

        {/* Navbar (glassy, centered palette trigger) */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-[#0b0d15]/80">
          <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            {/* Left: Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                goto("home");
              }}
              className="font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              {PROFILE.name}
            </a>

            {/* Center: pill nav with animated active indicator (desktop) */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
              <div className="relative inline-flex items-center rounded-full bg-white/60 p-1 ring-1 ring-slate-200/70 backdrop-blur dark:bg-white/10 dark:ring-white/10">
                {sectionIds.map((id) => {
                  const isActive = active === id;
                  return (
                    <button
                      key={id}
                      onClick={(e) => {
                        e.preventDefault();
                        goto(id);
                      }}
                      className={`relative mx-0.5 rounded-full px-3 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navPill"
                          className="absolute inset-0 -z-[1] rounded-full bg-slate-900/5 shadow-sm dark:bg-white/15"
                        />
                      )}
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Command button (mobile hidden), theme toggle, mobile menu */}
            <div className="flex items-center gap-2">
              <CommandPaletteButton onOpen={() => setPaletteOpen(true)} />
              <button
                onClick={() => setDark((d) => !d)}
                className="rounded-lg border border-slate-300/60 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
              >
                {dark ? "Light" : "Dark"}
              </button>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="md:hidden rounded-lg border border-slate-300/60 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
              >
                Menu
              </button>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-[#0b0d15]/95"
            >
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-2 px-6 py-3">
                {sectionIds.map((id) => (
                  <button
                    key={id}
                    onClick={() => {
                      goto(id);
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left rounded-lg px-3 py-2 ${
                      active === id
                        ? "bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white"
                        : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Parallax accents */}
        <motion.div
          aria-hidden
          style={{ y: ySlow }}
          className="pointer-events-none fixed inset-x-0 top-[-20%] h-[45vh] bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.18),transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.25),transparent_55%)]"
        />
        <motion.div
          aria-hidden
          style={{ y: yFast }}
          className="pointer-events-none fixed inset-x-0 bottom-[-20%] h-[45vh] bg-[radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.16),transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.24),transparent_55%)]"
        />

        {/* Landing */}
        <section id="home" className="relative overflow-hidden scroll-mt-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
                {PROFILE.name}
              </h1>
              <p className="mt-3 text-xl text-slate-600 dark:text-slate-300">
                {PROFILE.title}
              </p>
              <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
                {PROFILE.tagline}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <MagButton
                  className="w-full sm:w-auto"
                  href={PROFILE.links.resume}
                >
                  Download Resume
                </MagButton>
                <MagButton
                  className="w-full sm:w-auto"
                  href={PROFILE.links.github}
                >
                  GitHub
                </MagButton>
                <MagButton
                  className="w-full sm:w-auto"
                  href={PROFILE.links.linkedin}
                >
                  LinkedIn
                </MagButton>
              </div>
            </motion.div>

            {/* Hero photo (bigger + gentle shine on TOP) */}
            <div className="flex items-center justify-center">
              <motion.div
                className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {/* Glow ring behind */}
                <motion.div
                  aria-hidden
                  className="absolute -inset-1 z-0 rounded-full blur-xl"
                  style={{
                    backgroundImage:
                      "conic-gradient(from 0deg at 50% 50%, rgba(139,92,246,0.8), rgba(56,189,248,0.7), rgba(139,92,246,0.8))",
                  }}
                  animate={{ rotate: 360, opacity: [0.25, 0.6, 0.25] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* Shine overlay on TOP (reduced alpha) */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-full mix-blend-screen"
                  animate={{ backgroundPositionX: ["-200%", "200%"] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    repeatDelay: 6,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                  }}
                />
                {/* Photo */}
                <motion.img
                  src={PHOTO}
                  alt="Shubhank Tyagi"
                  className="relative z-10 h-full w-full rounded-full object-cover ring-1 ring-black/5 shadow-2xl dark:ring-white/20"
                  animate={{ y: [0, -6, 0, 6, 0] }}
                  whileHover={{ scale: 1.04 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* About */}
        <Section
          id="about"
          title="About Me"
          subtitle="MS in IoT (Northeastern, cum laude). I design protocols, ship apps, and automate deployments."
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300"
          >
            <p>
              Recognized for technical innovation and collaborative
              problem-solving, I’ve delivered measurable outcomes—from
              accelerating release cycles and reducing build times to deploying
              reliable CV and telemetry systems in production.
            </p>
            <p>
              I enjoy systems work (e.g., <strong>MQTTeeny</strong>: UDP PUB/SUB
              with CRC-16 & QoS) and I’m equally comfortable improving developer
              experience, CI/CD, and cloud infrastructure.
            </p>
          </motion.div>
        </Section>

        {/* Skills */}
        <Section
          id="skills"
          title="Skills"
          subtitle="Tools that keep me fast and reliable."
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SKILLS.map((grp) => (
              <TiltCard key={grp.category}>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {grp.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {grp.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-800 dark:bg-white/10 dark:text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section
          id="projects"
          title="Projects"
          subtitle="Drag horizontally to explore."
        >
          <motion.div
            className="overflow-x-auto snap-x snap-mandatory md:overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              drag="x"
              dragElastic={0.04}
              className="flex gap-6 pr-6 md:pr-0"
            >
              {[
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
                    "C++ on Arduino + RC522 RFID via SPI; FSM control; servo power mgmt, reliability fixes.",
                  tech: ["C++", "Arduino", "RC522", "SPI"],
                  link: "https://github.com/Shubhankt1/DoorLock",
                },
              ].map((p) => (
                <motion.a
                  key={p.title}
                  href={p.link}
                  whileHover={{ y: -6 }}
                  className="min-w-[320px] max-w-[340px] snap-start cursor-grab rounded-2xl border border-slate-200 bg-white p-5 shadow-sm active:cursor-grabbing dark:border-white/10 dark:bg-white/5"
                >
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {p.title}
                  </h4>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    {p.blurb}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-2 py-1 text-slate-800 dark:bg-white/10 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* Achievements */}
        <Section
          id="achievements"
          title="Achievements"
          subtitle="Impact at a glance."
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {ACHIEVEMENTS.map((a) => (
              <TiltCard key={a.label}>
                <div className="text-4xl font-bold text-slate-900 dark:text-white">
                  <Counter to={a.value} />
                </div>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {a.label}
                </p>
              </TiltCard>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section
          id="experience"
          title="Experience"
          subtitle="What I’ve shipped and owned."
        >
          <ol className="relative border-s border-slate-200 pl-6 dark:border-white/10">
            {EXPERIENCE.map((job, idx) => (
              <motion.li
                key={`${job.company}-${idx}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="mb-10 ms-4"
              >
                <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border border-slate-300 bg-violet-400/60 dark:border-white/20" />
                <TiltCard>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {job.role} —{" "}
                    <span className="text-slate-600 dark:text-slate-300">
                      {job.company}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {job.period}
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.li>
            ))}
          </ol>
        </Section>

        {/* Education */}
        <Section
          id="education"
          title="Education"
          subtitle="Learning by building and researching."
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {EDUCATION.map((ed, i) => (
              <TiltCard key={`${ed.school}-${i}`}>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {ed.school}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {ed.degree}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {ed.period}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ed.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-800 dark:bg-white/10 dark:text-slate-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          title="Contact"
          subtitle="Let’s build something great."
        >
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const subject = encodeURIComponent(
                `Portfolio contact from ${fd.get("name")}`
              );
              const body = encodeURIComponent(
                `${fd.get("message")}\n\nFrom: ${fd.get("name")} <${fd.get(
                  "email"
                )}>`
              );
              window.location.href = `${PROFILE.links.email}?subject=${subject}&body=${body}`;
            }}
            className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 dark:border-white/10 dark:bg-white/5"
          >
            <div>
              <label
                htmlFor="name"
                className="text-sm text-slate-700 dark:text-slate-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-white/10 dark:bg-[#0b0d15] dark:text-white dark:placeholder:text-slate-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm text-slate-700 dark:text-slate-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-white/10 dark:bg-[#0b0d15] dark:text-white dark:placeholder:text-slate-500"
                placeholder="you@domain.com"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="text-sm text-slate-700 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-white/10 dark:bg-[#0b0d15] dark:text-white dark:placeholder:text-slate-500"
                placeholder="Tell me about your project, timelines, and goals."
              />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-3">
              <a
                href={PROFILE.links.email}
                className="text-sm text-slate-700 underline underline-offset-4 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Or email me directly
              </a>
              <MagButton>Send Message</MagButton>
            </div>
          </motion.form>
        </Section>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500 dark:border-white/5 dark:text-slate-400">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </footer>

        {/* Command Palette overlay (centered) */}
        <CommandPaletteOverlay
          open={paletteOpen}
          onClose={() => setPaletteOpen(false)}
          onJump={(id) => goto(id)}
          sectionIds={sectionIds}
        />
      </div>
    </div>
  );
}

/* --------------------------- Section Wrapper ---------------------------- */
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
              {subtitle}
            </p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
