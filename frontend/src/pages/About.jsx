import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

/* ===================== CountUp ===================== */
const CountUp = ({ value, duration = 0.9, className = "" }) => {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(mv, value, { duration, ease: "easeOut" });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <motion.span className={className}>{rounded}</motion.span>;
};

/* ===================== Improved Progress Ring (no touching) ===================== */
const ProgressRing = ({
  label,
  value,
  percent,
  size = 86,
  stroke = 9,
  sub = "",
}) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, percent));
  const offset = c - (clamped / 100) * c;

  const gradId = `grad-${label.replace(/\s+/g, "").toLowerCase()}`;

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable
      glareMaxOpacity={0.12}
      glareColor="#ffffff"
      glarePosition="all"
      scale={1.03}
      transitionSpeed={1400}
      className="rounded-2xl"
    >
      <div className="relative rounded-2xl bg-base-100/30 border border-white/10 px-4 py-4 text-center overflow-hidden">
        <p className="text-[10px] uppercase tracking-widest opacity-65">
          {label}
        </p>
        {sub ? (
          <p className="text-[10px] opacity-55 -mt-0.5">{sub}</p>
        ) : (
          <div className="h-[14px]" />
        )}

        <div className="mx-auto mt-2 w-fit relative">
          <svg width={size} height={size} className="block">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
                <stop
                  offset="0%"
                  stopColor="rgb(34,211,238)"
                  stopOpacity="0.95"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(168,85,247)"
                  stopOpacity="0.95"
                />
              </linearGradient>
            </defs>

            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="transparent"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth={stroke}
            />

            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="transparent"
              stroke={`url(#${gradId})`}
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={c}
              initial={{ strokeDashoffset: c, filter: "blur(2px)" }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.05, ease: "easeOut" }}
              style={{
                transformOrigin: "50% 50%",
                transform: "rotate(-90deg)",
                opacity: 0.4,
              }}
            />

            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="transparent"
              stroke={`url(#${gradId})`}
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={c}
              initial={{ strokeDashoffset: c }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.05, ease: "easeOut" }}
              style={{
                transformOrigin: "50% 50%",
                transform: "rotate(-90deg)",
              }}
            />
          </svg>

          <div className="absolute inset-0 grid place-items-center">
            <p className="text-xl font-extrabold text-cyan-300 leading-none">
              <CountUp value={value} />
            </p>
          </div>
        </div>

        <p className="mt-2 text-[10px] uppercase tracking-widest opacity-60">
          {clamped}%
        </p>
      </div>
    </Tilt>
  );
};

/* ===================== Internship Section (IMPROVED) ===================== */
function InternshipSection({ internships }) {
  const items = internships || [];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const openCert = (url, title) => {
    setModalUrl(url);
    setModalTitle(title);
    setModalOpen(true);
  };
  const closeCert = () => {
    setModalOpen(false);
    setModalUrl("");
    setModalTitle("");
  };

  const next = () => setActive((p) => (p + 1) % items.length);
  const prev = () =>
    setActive((p) => (p === 0 ? items.length - 1 : p - 1));

  // auto rotate
  useEffect(() => {
    if (paused || items.length <= 1) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, items.length]);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") closeCert();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  // progress bar (5s)
  const prog = useMotionValue(0);
  const progW = useTransform(prog, (v) => `${v}%`);

  useEffect(() => {
    if (paused) return;
    prog.set(0);
    const anim = animate(prog, 100, { duration: 5, ease: "linear" });
    return () => anim.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused]);

  if (!items.length) return null;

  return (
    <section className="mb-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Professional Internships</h2>
        <p className="mt-3 text-sm opacity-70 max-w-2xl mx-auto">
          Netflix-style spotlight • Glass neon cyber • Recruiter readable
        </p>
      </div>

      <div
        className="relative max-w-6xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* ambient */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-purple-500/10 rounded-full blur-3xl" />

        {/* top controls */}
        <div className="relative z-20 flex items-center justify-between mb-4">
          <button
            onClick={prev}
            className="btn btn-outline btn-primary rounded-full btn-sm"
          >
            ← Prev
          </button>

          <div className="text-xs opacity-70">
            <span className="font-bold text-cyan-300">{active + 1}</span> /{" "}
            {items.length}
            <span className="hidden sm:inline"> • Hover = pause</span>
          </div>

          <button
            onClick={next}
            className="btn btn-outline btn-primary rounded-full btn-sm"
          >
            Next →
          </button>
        </div>

        {/* progress line */}
        <div className="relative z-20 mb-6 px-2">
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              style={{ width: progW }}
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
            />
          </div>
        </div>

        {/* stage */}
        <div className="relative z-10 h-[520px] [perspective:1400px]">
          {items.map((card, i) => {
            // circular offset
            let offset = i - active;
            const half = Math.floor(items.length / 2);
            if (offset > half) offset -= items.length;
            if (offset < -half) offset += items.length;

            const isCenter = offset === 0;

            return (
              <motion.article
                key={i}
                initial={false}
                animate={{
                  x: offset * 260,
                  scale: isCenter ? 1.1 : 0.78,
                  rotateY: offset * -18,
                  opacity: isCenter ? 1 : 0.22,
                  filter: isCenter ? "blur(0px)" : "blur(1.2px)",
                  z: isCenter ? 60 : -60 - Math.abs(offset) * 20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 20,
                  mass: 0.7,
                }}
                className="absolute left-1/2 top-1/2 w-[88%] sm:w-[540px] -translate-x-1/2 -translate-y-1/2"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Tilt
                  tiltMaxAngleX={isCenter ? 13 : 7}
                  tiltMaxAngleY={isCenter ? 13 : 7}
                  scale={isCenter ? 1.03 : 1}
                  transitionSpeed={1400}
                  glareEnable={isCenter}
                  glareMaxOpacity={0.15}
                  glareColor="#ffffff"
                  glarePosition="all"
                  className="rounded-3xl"
                >
                  <div
                    className={`relative rounded-3xl border overflow-hidden shadow-2xl ${
                      isCenter
                        ? "border-cyan-400/40 bg-gradient-to-br from-base-200/90 to-base-300/70"
                        : "border-white/10 bg-base-200/55"
                    }`}
                  >
                    {/* neon strip */}
                    <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

                    {/* shine */}
                    <motion.div
                      aria-hidden
                      initial={{ x: "-120%", opacity: 0 }}
                      whileHover={isCenter ? { x: "120%", opacity: 1 } : {}}
                      transition={{ duration: 0.85, ease: "easeOut" }}
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
                    />

                    {/* content */}
                    <div className="p-7 sm:p-8">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
                            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                              {card.title}
                            </span>
                          </h3>
                          <p className="mt-2 text-xs tracking-widest uppercase opacity-60">
                            {card.duration}
                          </p>
                        </div>

                        {/* Tech rail */}
                        <div className="flex flex-col gap-3 text-2xl text-primary/90">
                          {card.icons.map((ic, idx) => (
                            <motion.span
                              key={idx}
                              whileHover={
                                isCenter ? { scale: 1.15, rotate: 7, y: -2 } : {}
                              }
                              transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 14,
                              }}
                              className="w-10 h-10 rounded-2xl grid place-items-center bg-base-100/25 border border-white/10"
                            >
                              {ic}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <p className="mt-5 text-sm opacity-85 leading-relaxed">
                        {card.desc}
                      </p>

                      {/* highlights */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {card.highlights.map((h, idx) => (
                          <span
                            key={idx}
                            className={`text-[10px] px-3 py-2 rounded-full border font-bold tracking-wide ${
                              isCenter
                                ? "bg-cyan-400/10 border-cyan-400/20"
                                : "bg-base-100/25 border-white/10"
                            }`}
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* footer */}
                      <div className="mt-7 flex items-center justify-between gap-4">
                        <button
                          onClick={() => openCert(card.certificateUrl, card.title)}
                          className="btn btn-primary rounded-full btn-sm"
                        >
                          Preview Certificate
                        </button>

                        <motion.div
                          initial={{ opacity: 0.65 }}
                          whileHover={isCenter ? { opacity: 1, x: 3 } : {}}
                          className="flex items-center gap-2 text-xs opacity-70"
                        >
                          <span className="font-bold">Swipe</span>
                          <FaExternalLinkAlt className="text-[10px]" />
                        </motion.div>
                      </div>
                    </div>

                    {/* center glow */}
                    {isCenter ? (
                      <>
                        <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
                      </>
                    ) : null}
                  </div>
                </Tilt>
              </motion.article>
            );
          })}
        </div>

        {/* dots */}
        <div className="relative z-20 mt-6 flex justify-center gap-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === active ? "bg-cyan-400 scale-125" : "bg-white/20"
              }`}
              aria-label={`Go to internship ${i + 1}`}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalOpen ? (
            <motion.div
              className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={closeCert}
            >
              <motion.div
                initial={{ y: 18, scale: 0.98, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 18, scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onMouseDown={(e) => e.stopPropagation()}
                className="w-full max-w-4xl rounded-3xl overflow-hidden border border-white/10 bg-base-200/80 backdrop-blur-2xl shadow-2xl"
              >
                <div className="flex items-center justify-between gap-3 p-4 border-b border-white/10">
                  <p className="font-bold text-sm line-clamp-1">
                    {modalTitle || "Certificate"}
                  </p>
                  <button onClick={closeCert} className="btn btn-sm btn-ghost">
                    ✕
                  </button>
                </div>

                <div className="p-4">
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-base-100/30">
                    <iframe
                      title="Certificate Preview"
                      src={modalUrl}
                      className="w-full h-[70vh]"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap justify-end gap-3">
                    <a
                      href={modalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-primary rounded-full btn-sm"
                    >
                      Open in New Tab
                    </a>
                    <button
                      onClick={closeCert}
                      className="btn btn-primary rounded-full btn-sm"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ===================== About Component =====================
const About = () => {
  const internships = [
    {
      title: "Full Stack Intern | Btech Wallah",
      duration: "Jan 2025 - Mar 2025 (3 Months)",
      desc: "Architected real-world MERN applications focusing on scalable folder structures and performance optimization. Contributed to production-level code reviews and implemented state management using Redux Toolkit.",
      highlights: ["API Integration", "State Management", "Scalable UI"],
      icons: [<FaReact />, <FaNodeJs />, <SiMongodb />],
      certificateUrl: "/certificates/btech-wallah.pdf",
    },
    {
      title: "Frontend Developer Intern",
      duration: "Summer 2024",
      desc: "Specialized in crafting pixel-perfect, responsive user interfaces. Developed complex dashboards with real-time data visualization and interactive components using Framer Motion and Tailwind CSS.",
      highlights: ["Responsive Design", "UI Animations", "Performance Tuning"],
      icons: [<FaReact />, <SiJavascript />, <FaHtml5 />, <FaCss3Alt />],
      certificateUrl: "/certificates/frontend-intern.pdf",
    },
    {
      title: "Full Stack Intern | Development Studio",
      duration: "Winter 2023",
      desc: "Engineered secure backend services and RESTful APIs. Implemented JWT authentication and managed database schemas for high-traffic applications, ensuring seamless data flow between server and client.",
      highlights: ["Auth Systems", "REST APIs", "Schema Design"],
      icons: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
      certificateUrl: "/certificates/fullstack-studio.pdf",
    },
  ];

  const techStack = [
    { icon: <FaReact />, name: "React", level: 90 },
    { icon: <SiJavascript />, name: "JavaScript", level: 85 },
    { icon: <SiTailwindcss />, name: "Tailwind", level: 80 },
    { icon: <FaNodeJs />, name: "Node.js", level: 75 },
    { icon: <SiExpress />, name: "Express", level: 75 },
    { icon: <SiMongodb />, name: "MongoDB", level: 80 },
    { icon: <FaGithub />, name: "GitHub", level: 90 },
    { icon: <FaHtml5 />, name: "HTML5", level: 95 },
    { icon: <FaCss3Alt />, name: "CSS3", level: 90 },
    { icon: <TbBrandMysql />, name: "MySQL", level: 70 },
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/AjayGour09" },
    { icon: FaInstagram, url: "https://www.instagram.com/er.__ajay_gour_7/" },
    { icon: FaWhatsapp, url: "https://wa.me/919644029231" },
    { icon: FaTwitter, url: "https://x.com/home" },
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/profile.php?id=100070965151399",
    },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/ajay-gour09/" },
  ];

  const experienceData = [
    {
      title: "Frontend Engineering",
      desc: "Designed scalable UI systems with React & Tailwind.",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "UI/UX" },
        { name: "Framer Motion" },
      ],
      projects: [
        "Built dynamic dashboard for analytics.",
        "Implemented responsive design.",
        "Optimized page load by 30%.",
      ],
      stats: { projectsDone: 5, featuresImplemented: 20, usersImpacted: 5000 },
      techIcons: [<FaReact />, <SiTailwindcss />],
    },
    {
      title: "Backend Development",
      desc: "Built secure REST APIs with Node & Express.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "JWT" },
      ],
      projects: [
        "Implemented authentication & authorization.",
        "Created optimized database queries.",
        "Integrated APIs with frontend.",
      ],
      stats: { projectsDone: 3, featuresImplemented: 15, usersImpacted: 3000 },
      techIcons: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
    },
    {
      title: "Full Stack Projects",
      desc: "Delivered complete MERN applications with authentication, CRUD operations, protected routing, and deployment.",
      skills: [
        { name: "MERN" },
        { name: "Auth" },
        { name: "CRUD" },
        { name: "Deployment" },
      ],
      projects: [
        "Developed e-commerce app.",
        "Implemented JWT authentication.",
        "Deployed app to cloud.",
      ],
      stats: { projectsDone: 4, featuresImplemented: 18, usersImpacted: 7000 },
      techIcons: [<FaReact />, <FaNodeJs />, <SiMongodb />],
    },
  ];

  const [activeExp, setActiveExp] = useState(0);
  const active = experienceData[activeExp];
  const [paused, setPaused] = useState(false);

  const timerMv = useMotionValue(0);
  const timerWidth = useTransform(timerMv, (v) => `${v}%`);

  useEffect(() => {
    if (paused) return;

    timerMv.set(0);
    const timerAnim = animate(timerMv, 100, { duration: 5, ease: "linear" });

    const interval = setInterval(() => {
      setActiveExp((prev) => (prev + 1) % experienceData.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      timerAnim.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, activeExp]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setActiveExp((prev) => (prev + 1) % experienceData.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveExp((prev) =>
          prev === 0 ? experienceData.length - 1 : prev - 1
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const maxProjects = Math.max(...experienceData.map((x) => x.stats.projectsDone));
  const maxFeatures = Math.max(
    ...experienceData.map((x) => x.stats.featuresImplemented)
  );
  const maxUsers = Math.max(...experienceData.map((x) => x.stats.usersImpacted));

  const pct = (val, max) => (max ? Math.round((val / max) * 100) : 0);

  return (
    <div className="bg-base-100 text-base-content pt-24 px-6 md:px-20 overflow-x-hidden">
      {/* ================= ABOUT ================= */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          I am{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ajay Gour
          </span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg opacity-80 leading-relaxed">
          Hi, I’m a MERN Stack Developer passionate about building scalable,
          responsive, and user-friendly web applications. I specialize in React,
          Node.js, Express, and MongoDB. Graduating in 2026, I am eager to
          collaborate on innovative projects.
        </p>

        <div className="flex justify-center gap-6 mt-8 text-3xl">
          {socialLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.4, y: -4 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
              className="cursor-pointer text-primary"
            >
              <item.icon />
            </motion.a>
          ))}
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="mb-26">
        <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-base-200/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center shadow-md group"
            >
              <div className="text-5xl mb-3 text-primary flex justify-center items-center group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <p className="font-bold">{tech.name}</p>
              <div className="mt-4 h-2 w-full bg-gray-700/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold text-center mb-20">Education</h2>
        <EducationTimeline />
      </section>

      {/* ================= INTERNSHIPS (IMPROVED) ================= */}
      <InternshipSection internships={internships} />

      {/* ================= EXPERIENCE ================= */}
      <section className="mb-40">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-[320px_1fr] gap-8 items-start">
          {/* Left Tabs */}
          <div className="bg-base-200/60 backdrop-blur-md border border-white/10 rounded-3xl p-4 shadow-xl overflow-hidden">
            <p className="text-xs uppercase tracking-widest opacity-60 px-3 pt-2 pb-3">
              Choose Domain
            </p>

            {/* Timer bar */}
            <div className="px-3 pb-3">
              <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  style={{ width: timerWidth }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              {experienceData.map((exp, idx) => {
                const activeTab = idx === activeExp;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveExp(idx)}
                    className={`w-full text-left px-4 py-4 rounded-2xl transition-all border relative overflow-hidden ${
                      activeTab
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/15 border-cyan-400/40"
                        : "bg-base-100/20 border-white/5 hover:border-cyan-400/20"
                    }`}
                  >
                    <motion.div
                      aria-hidden
                      initial={{ x: "-120%", opacity: 0 }}
                      whileHover={{ x: "120%", opacity: 1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
                    />

                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <div>
                        <p
                          className={`font-bold ${
                            activeTab ? "text-cyan-300" : "text-base-content"
                          }`}
                        >
                          {exp.title}
                        </p>
                        <p className="text-xs opacity-60 mt-1 line-clamp-2">
                          {exp.desc}
                        </p>
                      </div>

                      <span
                        className={`badge ${
                          activeTab ? "badge-primary" : "badge-ghost"
                        } badge-outline`}
                      >
                        {exp.stats.projectsDone}+
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-[11px] opacity-60 px-3">
              Tip: Use <span className="font-bold">←</span> /{" "}
              <span className="font-bold">→</span> keys • Hover card to pause
            </p>
          </div>

          {/* Right Active Card */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ duration: 0.45 }}
              >
                <Tilt
                  tiltMaxAngleX={9}
                  tiltMaxAngleY={9}
                  scale={1.015}
                  transitionSpeed={1500}
                  glareEnable
                  glareMaxOpacity={0.12}
                  glareColor="#ffffff"
                  glarePosition="all"
                  className="rounded-3xl"
                >
                  <div className="bg-gradient-to-br from-base-200/80 to-base-300/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-cyan-400/20 overflow-hidden relative">
                    <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

                    <motion.div
                      aria-hidden
                      initial={{ x: "-120%", opacity: 0 }}
                      whileHover={{ x: "120%", opacity: 1 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
                    />

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-start justify-between gap-6">
                        <div>
                          <h3 className="text-3xl font-extrabold text-cyan-300">
                            {active.title}
                          </h3>
                          <p className="mt-3 text-sm opacity-80 leading-relaxed max-w-2xl">
                            {active.desc}
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <ProgressRing
                            label="Projects"
                            value={active.stats.projectsDone}
                            percent={pct(active.stats.projectsDone, maxProjects)}
                            sub="done"
                          />
                          <ProgressRing
                            label="Features"
                            value={active.stats.featuresImplemented}
                            percent={pct(
                              active.stats.featuresImplemented,
                              maxFeatures
                            )}
                            sub="shipped"
                          />
                          <ProgressRing
                            label="Users"
                            value={active.stats.usersImpacted}
                            percent={pct(active.stats.usersImpacted, maxUsers)}
                            sub="impacted"
                          />
                        </div>
                      </div>

                      <div className="mt-7">
                        <p className="text-sm font-bold text-primary mb-3">
                          Skills
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {active.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-2 text-[11px] font-bold rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-200 flex items-center gap-2"
                            >
                              {skill.icon && (
                                <span className="text-base">{skill.icon}</span>
                              )}
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="rounded-2xl bg-base-100/25 border border-white/10 p-6">
                          <p className="text-sm font-bold text-primary mb-3">
                            Key Contributions
                          </p>
                          <ul className="space-y-2 text-sm opacity-80">
                            {active.projects.map((proj, j) => (
                              <li key={j} className="flex gap-3">
                                <span className="text-cyan-300 mt-[2px]">✔</span>
                                <span>{proj}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-2xl bg-base-100/25 border border-white/10 p-6">
                          <p className="text-sm font-bold text-primary mb-3">
                            Tools & Tech
                          </p>
                          <div className="flex flex-wrap gap-3 text-3xl text-primary/90">
                            {active.techIcons.map((icon, j) => (
                              <motion.span
                                key={j}
                                whileHover={{ y: -6, rotate: 7, scale: 1.08 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 260,
                                  damping: 14,
                                }}
                                className="cursor-default"
                              >
                                {icon}
                              </motion.span>
                            ))}
                          </div>

                          <div className="mt-5">
                            <p className="text-xs uppercase tracking-widest opacity-60">
                              Impact
                            </p>
                            <p className="mt-2 text-sm opacity-80">
                              Performance-first UI + clean scalable architecture.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center justify-end gap-4">
                        <Link
                          to="/projects"
                          className="btn btn-outline btn-primary rounded-full"
                        >
                          See Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="text-center mb-40">
        <h2 className="text-3xl font-bold mb-6">Let's Work Together 🚀</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          I am always excited to collaborate on innovative projects. Let’s connect
          and build something amazing together!
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-lg font-bold">
            <Link to="/contact">Let’s Connect</Link>
          </button>
          <a
            href="/AjayGour_Resume.pdf"
            download
            className="px-8 py-3 border-2 border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all font-bold text-purple-500"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

// ===================== Education Timeline =====================
function EducationTimeline() {
  const educationData = [
    {
      title: "10th (85.50%)",
      school: "Govt Higher Secondary School, Shyampur",
      desc: "Built strong academic foundation.",
    },
    {
      title: "12th (65%)",
      school: "Govt Higher Secondary School, Shyampur",
      desc: "Developed analytical skills.",
    },
    {
      title: "B.Tech CSE (8.5 CGPA)",
      school: "Technocrats Institute of Technology & Science, Bhopal",
      desc: "Graduation Year: 2026.",
    },
  ];

  return (
    <motion.div className="relative max-w-5xl mx-auto">
      <motion.div
        animate={{
          boxShadow: ["0 0 10px #00f2ff", "0 0 30px #a855f7", "0 0 10px #00f2ff"],
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 w-[6px] h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 rounded-full opacity-40"
      />
      {educationData.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative mb-24 flex ${
            i % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full shadow-lg animate-pulse z-10"></div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-base-200 p-6 rounded-xl w-full md:w-[45%] border border-cyan-400/30 shadow-lg"
          >
            <h3 className="text-xl font-bold text-cyan-400">{edu.title}</h3>
            <p className="mt-2 opacity-80">{edu.school}</p>
            <p className="mt-3 text-sm opacity-70">{edu.desc}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}