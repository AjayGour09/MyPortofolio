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
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

/* ===================== Small helpers ===================== */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: "easeOut" },
  }),
};

const clampPct = (n) => Math.max(0, Math.min(100, n));

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

/* ===================== Progress Ring (Premium: no tilt here) ===================== */
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
  const clamped = clampPct(percent);
  const offset = c - (clamped / 100) * c;

  const gradId = `grad-${label.replace(/\s+/g, "").toLowerCase()}`;

  return (
    <div className="relative rounded-2xl bg-base-100/20 border border-white/10 px-4 py-4 text-center overflow-hidden">
      <p className="text-[10px] uppercase tracking-widest opacity-65">{label}</p>
      {sub ? (
        <p className="text-[10px] opacity-55 -mt-0.5">{sub}</p>
      ) : (
        <div className="h-[14px]" />
      )}

      <div className="mx-auto mt-2 w-fit relative">
        <svg width={size} height={size} className="block">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgb(34,211,238)" stopOpacity="0.92" />
              <stop offset="100%" stopColor="rgb(168,85,247)" stopOpacity="0.92" />
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

          {/* soft glow pass */}
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
            transition={{ duration: 0.95, ease: "easeOut" }}
            style={{
              transformOrigin: "50% 50%",
              transform: "rotate(-90deg)",
              opacity: 0.35,
            }}
          />

          {/* main ring */}
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
            transition={{ duration: 0.95, ease: "easeOut" }}
            style={{
              transformOrigin: "50% 50%",
              transform: "rotate(-90deg)",
            }}
          />
        </svg>

        <div className="absolute inset-0 grid place-items-center">
          <p className="text-xl font-extrabold text-cyan-200 leading-none">
            <CountUp value={value} />
          </p>
        </div>
      </div>

      <p className="mt-2 text-[10px] uppercase tracking-widest opacity-60">
        {clamped}%
      </p>
    </div>
  );
};

/* ===================== Internship Section (Premium Neon + cohesive) ===================== */
function InternshipSection({ internships }) {
  const items = useMemo(() => internships || [], [internships]);
  const [active, setActive] = useState(0);

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

  const current = items[active];
  if (!items.length) return null;

  return (
    <section className="mb-36">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Internships</h2>
        <p className="mt-3 text-sm opacity-70 max-w-2xl mx-auto">
          Clean timeline list + featured details + certificate preview (premium neon theme).
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ambient blobs (subtle) */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 grid lg:grid-cols-[360px_1fr] gap-6 items-start">
          {/* Left: List */}
          <div className="rounded-3xl border border-white/10 bg-base-200/45 backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="p-5 border-b border-white/10">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-widest opacity-70">
                  Timeline
                </p>
                <div className="text-xs opacity-70">
                  <span className="font-bold text-cyan-300">{active + 1}</span> /{" "}
                  {items.length}
                </div>
              </div>

              <p className="mt-3 text-[11px] opacity-60">
                Tip: Click items to view details.
              </p>
            </div>

            <div className="p-3">
              {items.map((it, idx) => {
                const isActive = idx === active;
                return (
                  <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    className={`w-full text-left rounded-2xl p-4 mb-2 border transition-all relative overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/15 border-cyan-400/35"
                        : "bg-base-100/20 border-white/5 hover:border-cyan-400/20"
                    }`}
                  >
                    {/* shine only on hover, but subtle */}
                    <motion.div
                      aria-hidden
                      initial={{ x: "-120%", opacity: 0 }}
                      whileHover={{ x: "120%", opacity: 1 }}
                      transition={{ duration: 0.85, ease: "easeOut" }}
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p
                            className={`font-extrabold leading-snug ${
                              isActive ? "text-cyan-200" : "text-base-content"
                            }`}
                          >
                            {it.title}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-widest opacity-60">
                            {it.duration}
                          </p>
                        </div>

                        <span
                          className={`badge badge-outline ${
                            isActive ? "badge-primary" : "badge-ghost"
                          }`}
                        >
                          {it.highlights?.length || 0} tags
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {(it.icons || []).slice(0, 4).map((Icon, i2) => (
                          <span
                            key={i2}
                            className={`w-10 h-10 rounded-2xl grid place-items-center border ${
                              isActive
                                ? "bg-base-100/25 border-cyan-400/20"
                                : "bg-base-100/20 border-white/10"
                            } text-2xl text-primary/90`}
                          >
                            <Icon />
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Featured Detail (Tilt ONLY here) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.99 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.01}
                transitionSpeed={1400}
                glareEnable
                glareMaxOpacity={0.10}
                glareColor="#ffffff"
                glarePosition="all"
                className="rounded-3xl"
              >
                <div className="relative rounded-3xl border border-cyan-400/18 bg-gradient-to-br from-base-200/85 to-base-300/60 backdrop-blur-xl shadow-2xl overflow-hidden">
                  {/* top strip (cyan->purple only) */}
                  <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-purple-500" />

                  {/* subtle glows */}
                  <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

                  {/* shine only for featured */}
                  <motion.div
                    aria-hidden
                    initial={{ x: "-120%", opacity: 0 }}
                    whileHover={{ x: "120%", opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
                  />

                  <div className="relative z-10 p-7 sm:p-9">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-widest opacity-60">
                          Featured Internship
                        </p>

                        <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold leading-tight">
                          <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                            {current.title}
                          </span>
                        </h3>

                        <p className="mt-2 text-[11px] uppercase tracking-widest opacity-60">
                          {current.duration}
                        </p>

                        <p className="mt-4 text-sm opacity-85 leading-relaxed max-w-2xl">
                          {current.desc}
                        </p>

                        <p className="mt-4 text-sm opacity-70">
                          Impact: clean UI • API integration • performance • scalable structure
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {(current.highlights || []).map((h, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-3 py-2 rounded-full border font-bold tracking-wide bg-cyan-400/10 border-cyan-400/20"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex sm:flex-col flex-wrap gap-3 text-2xl text-primary/90">
                        {(current.icons || []).map((Icon, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.10, rotate: 5, y: -2 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 14,
                            }}
                            className="w-12 h-12 rounded-2xl grid place-items-center bg-base-100/25 border border-white/10"
                            title="Tech"
                          >
                            <Icon />
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
                      <button
                        onClick={() => openCert(current.certificateUrl, current.title)}
                        className="btn btn-primary rounded-full btn-sm"
                      >
                        Preview Certificate
                      </button>

                      <button
                        onClick={() => setActive((p) => (p === 0 ? items.length - 1 : p - 1))}
                        className="btn btn-outline btn-primary rounded-full btn-sm"
                      >
                        ← Prev
                      </button>

                      <button
                        onClick={() => setActive((p) => (p + 1) % items.length)}
                        className="btn btn-outline btn-primary rounded-full btn-sm"
                      >
                        Next → <FaExternalLinkAlt className="text-[10px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </AnimatePresence>
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
                className="w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-base-200/80 backdrop-blur-2xl shadow-2xl"
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
                    <iframe title="Certificate Preview" src={modalUrl} className="w-full h-[72vh]" />
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
                    <button onClick={closeCert} className="btn btn-primary rounded-full btn-sm">
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

/* ===================== Education Timeline (Premium slow glow) ===================== */
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
      {/* line: subtle + slow glow */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 10px rgba(34,211,238,0.25)",
            "0 0 22px rgba(168,85,247,0.22)",
            "0 0 10px rgba(34,211,238,0.25)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute left-1/2 -translate-x-1/2 w-[5px] h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 rounded-full opacity-20"
      />

      {educationData.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`relative mb-20 flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg z-10" />
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className="bg-base-200/60 backdrop-blur-md p-6 rounded-2xl w-full md:w-[45%] border border-cyan-400/20 shadow-lg"
          >
            <h3 className="text-xl font-extrabold text-cyan-200">{edu.title}</h3>
            <p className="mt-2 opacity-90">{edu.school}</p>
            <p className="mt-3 text-sm opacity-70">{edu.desc}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ===================== About Component (FULL) ===================== */
const About = () => {
  /* ---------- Data (icons as COMPONENTS for performance) ---------- */
  const internships = [
    {
      title: "Full Stack Intern | Btech Wallah",
      duration: "Jan 2025 - Mar 2025 (3 Months)",
      desc: "Architected real-world MERN applications focusing on scalable folder structures and performance optimization. Contributed to production-level code reviews and implemented state management using Redux Toolkit.",
      highlights: ["API Integration", "State Management", "Scalable UI"],
      icons: [FaReact, FaNodeJs, SiMongodb],
      certificateUrl: "/certificates/btech-wallah.pdf",
    },
    {
      title: "Frontend Developer Intern",
      duration: "Summer 2024",
      desc: "Crafted pixel-perfect, responsive user interfaces. Built dashboards with interactive components and improved UX polish using Tailwind and Framer Motion.",
      highlights: ["Responsive UI", "UI Animations", "Performance"],
      icons: [FaReact, SiJavascript, FaHtml5, FaCss3Alt],
      certificateUrl: "/certificates/frontend-intern.pdf",
    },
    {
      title: "Full Stack Intern | Development Studio",
      duration: "Winter 2023",
      desc: "Engineered secure backend services and RESTful APIs. Implemented JWT authentication and managed database schemas for high-traffic applications.",
      highlights: ["JWT Auth", "REST APIs", "Schema Design"],
      icons: [FaNodeJs, SiExpress, SiMongodb],
      certificateUrl: "/certificates/fullstack-studio.pdf",
    },
  ];

  const techStack = [
    { icon: FaReact, name: "React", level: 90 },
    { icon: SiJavascript, name: "JavaScript", level: 85 },
    { icon: SiTailwindcss, name: "Tailwind", level: 80 },
    { icon: FaNodeJs, name: "Node.js", level: 75 },
    { icon: SiExpress, name: "Express", level: 75 },
    { icon: SiMongodb, name: "MongoDB", level: 80 },
    { icon: FaGithub, name: "GitHub", level: 90 },
    { icon: FaHtml5, name: "HTML5", level: 95 },
    { icon: FaCss3Alt, name: "CSS3", level: 90 },
    { icon: TbBrandMysql, name: "MySQL", level: 70 },
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/AjayGour09" },
    { icon: FaInstagram, url: "https://www.instagram.com/er.__ajay_gour_7/" },
    { icon: FaWhatsapp, url: "https://wa.me/919644029231" },
    { icon: FaTwitter, url: "https://x.com/home" },
    { icon: FaFacebook, url: "https://www.facebook.com/profile.php?id=100070965151399" },
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
        "Implemented responsive design system.",
        "Optimized perceived performance (better loading states).",
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
        "Implemented authentication & authorization (JWT).",
        "Created optimized database queries.",
        "Integrated APIs with frontend cleanly.",
      ],
      stats: { projectsDone: 3, featuresImplemented: 15, usersImpacted: 3000 },
      techIcons: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
    },
    {
      title: "Full Stack Projects",
      desc: "Delivered MERN applications with auth, CRUD, protected routing and deployment.",
      skills: [{ name: "MERN" }, { name: "Auth" }, { name: "CRUD" }, { name: "Deployment" }],
      projects: [
        "Developed production-style MERN apps.",
        "Implemented protected routes + role guards.",
        "Deployed apps and handled env configs.",
      ],
      stats: { projectsDone: 4, featuresImplemented: 18, usersImpacted: 7000 },
      techIcons: [<FaReact />, <FaNodeJs />, <SiMongodb />],
    },
  ];

  /* ===================== Experience state (manual) ===================== */
  const [activeExp, setActiveExp] = useState(0);
  const active = experienceData[activeExp];

  const maxProjects = Math.max(...experienceData.map((x) => x.stats.projectsDone));
  const maxFeatures = Math.max(...experienceData.map((x) => x.stats.featuresImplemented));
  const maxUsers = Math.max(...experienceData.map((x) => x.stats.usersImpacted));
  const pct = (val, max) => (max ? Math.round((val / max) * 100) : 0);

  return (
    <div className="bg-base-100 text-base-content pt-24 px-6 md:px-20 overflow-x-hidden">
      {/* ================= ABOUT HERO ================= */}
      <section className="text-center mb-20">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          I’m{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Ajay Gour
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          className="mt-6 max-w-3xl mx-auto text-lg opacity-80 leading-relaxed"
        >
          MERN Stack Developer focused on building clean, responsive and scalable web apps.
          I love modern UI, smooth animations and production-ready architecture. Graduating in 2026.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={3}
          className="mt-4 text-sm opacity-70"
        >
          Building MERN products • Clean UI • Auth • APIs • Deployment
        </motion.p>

        {/* socials (NO infinite bounce) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={4}
          className="flex justify-center gap-4 mt-8 text-2xl"
        >
          {socialLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 14 }}
                className="w-12 h-12 rounded-2xl border border-white/10 bg-base-200/40 backdrop-blur grid place-items-center text-primary"
                aria-label="social"
              >
                <Icon />
              </motion.a>
            );
          })}
        </motion.div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="mb-26">
        <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i + 1}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-base-200/50 backdrop-blur-sm border border-white/8 rounded-2xl p-6 text-center shadow-md group"
              >
                <div className="text-5xl mb-3 text-primary flex justify-center items-center group-hover:scale-110 transition-transform">
                  <Icon />
                </div>
                <p className="font-bold">{tech.name}</p>

                {/* bar: premium = one color (primary) */}
                <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold text-center mb-20">Education</h2>
        <EducationTimeline />
      </section>

      {/* ================= INTERNSHIPS ================= */}
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
                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <div>
                        <p className={`font-bold ${activeTab ? "text-cyan-300" : "text-base-content"}`}>
                          {exp.title}
                        </p>
                        <p className="text-xs opacity-60 mt-1 line-clamp-2">{exp.desc}</p>
                      </div>

                      <span className={`badge ${activeTab ? "badge-primary" : "badge-ghost"} badge-outline`}>
                        {exp.stats.projectsDone}+
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-[11px] opacity-60 px-3">
              Tip: Keep it readable. Recruiters scan fast.
            </p>
          </div>

          {/* Right Active Card (Tilt ONLY here) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.985 }}
              transition={{ duration: 0.45 }}
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.01}
                transitionSpeed={1400}
                glareEnable
                glareMaxOpacity={0.10}
                glareColor="#ffffff"
                glarePosition="all"
                className="rounded-3xl"
              >
                <div className="bg-gradient-to-br from-base-200/80 to-base-300/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-cyan-400/18 overflow-hidden relative">
                  <div className="h-1 w-full absolute top-0 left-0 bg-gradient-to-r from-cyan-400 to-purple-500" />
                  <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

                  {/* shine only for this featured card */}
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
                        <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                          {active.title}
                        </h3>
                        <p className="mt-3 text-sm opacity-80 leading-relaxed max-w-2xl">
                          {active.desc}
                        </p>

                        <p className="mt-4 text-sm opacity-70">
                          Focus: clean UI • scalable backend • production-ready patterns
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
                          percent={pct(active.stats.featuresImplemented, maxFeatures)}
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
                      <p className="text-sm font-bold text-primary mb-3">Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {active.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-2 text-[11px] font-bold rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-200 flex items-center gap-2"
                          >
                            {skill.icon && <span className="text-base">{skill.icon}</span>}
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                      <div className="rounded-2xl bg-base-100/25 border border-white/10 p-6">
                        <p className="text-sm font-bold text-primary mb-3">Key Contributions</p>
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
                        <p className="text-sm font-bold text-primary mb-3">Tools & Tech</p>
                        <div className="flex flex-wrap gap-3 text-3xl text-primary/90">
                          {active.techIcons.map((icon, j) => (
                            <motion.span
                              key={j}
                              whileHover={{ y: -6, rotate: 6, scale: 1.06 }}
                              transition={{ type: "spring", stiffness: 240, damping: 14 }}
                              className="cursor-default"
                            >
                              {icon}
                            </motion.span>
                          ))}
                        </div>

                        <div className="mt-5">
                          <p className="text-xs uppercase tracking-widest opacity-60">Impact</p>
                          <p className="mt-2 text-sm opacity-80">
                            Performance-first UI + clean architecture + scalable APIs.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-end gap-4">
                      <Link to="/projects" className="btn btn-outline btn-primary rounded-full">
                        See Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="text-center mb-40">
        <h2 className="text-3xl font-bold mb-6">Let's Work Together 🚀</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          I am always excited to collaborate on innovative projects. Let’s connect and build something
          amazing together!
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/contact" className="btn btn-primary rounded-full px-8">
            Let’s Connect
          </Link>

          <a
            href="/AjayGour_Resume.pdf"
            download
            className="btn btn-outline btn-primary rounded-full px-8"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;