import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaSearch,
  FaCrown,
  FaUsers,
  FaImage,
  FaRocket,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.45, ease: "easeOut" },
  }),
};

/**
 * ✅ Add your projects here (as many as you want)
 * - cover: "/projects/xyz.png"  (put image in public/projects)
 * - github: repo link
 * - live: deployed link (optional)
 * - type: "js" | "react" | "mern" | "hackathon"
 * - featured: true for best projects
 */
const PROJECTS = [
  // --- FEATURED (example) ---
  {
    id: "hack-1",
    title: "Hackathon Project",
    desc: "Team-based hackathon project where I led the team and integrated modules.",
    type: "hackathon",
    featured: true,
    role: "Team Leader",
    teamSize: 5,
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/your-username/hackathon",
    live: "https://your-hackathon-live.com",
    cover: "/projects/hackathon.png",
  },
  {
    id: "mern-1",
    title: "Customer Management System",
    desc: "MERN app for customers + reorder flow + clean dashboard UI.",
    type: "mern",
    featured: true,
    tech: ["React", "Node", "Express", "MongoDB", "DaisyUI"],
    github: "https://github.com/your-username/crm",
    live: "https://your-crm-live.com",
    cover: "/projects/crm.png",
  },
  {
    id: "react-1",
    title: "Portfolio Website",
    desc: "Modern portfolio with animations and clean sections.",
    type: "react",
    featured: true,
    tech: ["React", "Tailwind", "Framer Motion", "DaisyUI"],
    github: "https://github.com/your-username/portfolio",
    live: "https://your-portfolio-live.com",
    cover: "/projects/portfolio.png",
  },

  // --- MANY PROJECTS (example) ---
  {
    id: "js-1",
    title: "JS Weather App",
    desc: "Weather app with API integration and UI states.",
    type: "js",
    featured: false,
    tech: ["JavaScript", "HTML", "CSS", "API"],
    github: "https://github.com/your-username/js-weather",
    live: "",
    cover: "/projects/js-weather.png",
  },
  {
    id: "js-2",
    title: "JS Todo App",
    desc: "LocalStorage based todo with filters.",
    type: "js",
    featured: false,
    tech: ["JavaScript", "DOM", "LocalStorage"],
    github: "https://github.com/your-username/js-todo",
    live: "",
    cover: "",
  },
];

const TABS = [
  { key: "all", label: "All" },
  { key: "mern", label: "MERN" },
  { key: "react", label: "React" },
  { key: "js", label: "JavaScript" },
  { key: "hackathon", label: "Hackathon" },
];

function Badge({ children, tone = "outline" }) {
  const cls =
    tone === "primary"
      ? "badge badge-primary badge-outline"
      : tone === "success"
      ? "badge badge-success badge-outline"
      : tone === "warning"
      ? "badge badge-warning badge-outline"
      : "badge badge-outline";
  return <span className={cls}>{children}</span>;
}

function ProjectCard({ p }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className="rounded-3xl border border-white/10 bg-base-200/35 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      {/* Cover */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10" />
        {p.cover ? (
          <img
            src={p.cover}
            alt={p.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-48 grid place-items-center bg-base-100/10">
            <div className="text-center">
              <FaImage className="mx-auto text-2xl opacity-60" />
              <p className="mt-2 text-xs opacity-60">No image</p>
            </div>
          </div>
        )}

        {p.featured ? (
          <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-base-100/25">
            <FaCrown className="text-yellow-300" />
            <span className="text-xs font-bold">Featured</span>
          </div>
        ) : null}

        {p.live ? (
          <div className="absolute top-3 right-3 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-base-100/25">
            <FaRocket className="text-primary" />
            <span className="text-xs font-bold">Live</span>
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-lg md:text-xl font-extrabold line-clamp-1">
              {p.title}
            </h3>
            <p className="mt-2 text-sm opacity-75 leading-relaxed line-clamp-2">
              {p.desc}
            </p>

            {p.type === "hackathon" ? (
              <p className="mt-2 text-sm text-primary flex items-center gap-2">
                <FaUsers />
                Team Project • <b>{p.role || "Contributor"}</b>
                {p.teamSize ? <span className="opacity-70">({p.teamSize})</span> : null}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col items-end gap-2">
            <Badge tone="primary">{p.type.toUpperCase()}</Badge>
            {p.tech?.length ? (
              <span className="text-xs opacity-60">{p.tech.length} tech</span>
            ) : null}
          </div>
        </div>

        {/* Tech */}
        <div className="mt-4 flex flex-wrap gap-2">
          {(p.tech || []).slice(0, 6).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
          {p.tech?.length > 6 ? <Badge>+{p.tech.length - 6}</Badge> : null}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {p.github ? (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary rounded-full btn-sm"
            >
              <FaGithub /> GitHub
            </a>
          ) : null}

          {p.live ? (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-full btn-sm"
            >
              Live <FaExternalLinkAlt className="text-[10px]" />
            </a>
          ) : (
            <span className="text-xs opacity-60 self-center">Not deployed</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState("all");
  const [query, setQuery] = useState("");
  const [onlyLive, setOnlyLive] = useState(false);
  const [onlyGithub, setOnlyGithub] = useState(false);
  const [onlyImages, setOnlyImages] = useState(false);

  const [limit, setLimit] = useState(9);

  const featured = useMemo(
    () => PROJECTS.filter((p) => p.featured).slice(0, 6),
    []
  );

  const filtered = useMemo(() => {
    let list = [...PROJECTS];

    if (tab !== "all") list = list.filter((p) => p.type === tab);
    if (onlyLive) list = list.filter((p) => !!p.live);
    if (onlyGithub) list = list.filter((p) => !!p.github);
    if (onlyImages) list = list.filter((p) => !!p.cover);

    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((p) => {
        const hay = `${p.title} ${p.desc} ${(p.tech || []).join(" ")} ${p.type}`.toLowerCase();
        return hay.includes(q);
      });
    }

    // featured first in list
    list.sort((a, b) => Number(b.featured) - Number(a.featured));

    return list;
  }, [tab, query, onlyLive, onlyGithub, onlyImages]);

  const visible = filtered.slice(0, limit);

  return (
    <div className="bg-base-100 text-base-content pt-24 pb-24 px-6 md:px-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <div className="rounded-3xl border border-white/10 bg-base-200/35 backdrop-blur-xl shadow-2xl p-7 md:p-10">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="mt-4 text-sm md:text-base opacity-75 max-w-3xl">
            I have built many projects in <b>JavaScript</b>, <b>React</b>, and <b>MERN</b> —
            plus a <b>Hackathon team project</b> where I was <b>Team Leader</b>.
          </p>

          {/* Search + toggles */}
          <div className="mt-6 grid md:grid-cols-[1fr_auto] gap-4 items-start">
            <label className="input input-bordered flex items-center gap-2 bg-base-100/20 border-white/10">
              <FaSearch className="opacity-70" />
              <input
                className="grow"
                placeholder="Search projects (auth, dashboard, todo, api...)"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setLimit(9);
                }}
              />
            </label>

            <div className="flex flex-wrap gap-2">
              <label className="cursor-pointer label gap-2 px-3 py-2 rounded-2xl border border-white/10 bg-base-100/15">
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={onlyLive}
                  onChange={(e) => {
                    setOnlyLive(e.target.checked);
                    setLimit(9);
                  }}
                />
                <span className="text-sm">Only Deployed</span>
              </label>

              <label className="cursor-pointer label gap-2 px-3 py-2 rounded-2xl border border-white/10 bg-base-100/15">
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={onlyGithub}
                  onChange={(e) => {
                    setOnlyGithub(e.target.checked);
                    setLimit(9);
                  }}
                />
                <span className="text-sm">Only GitHub</span>
              </label>

              <label className="cursor-pointer label gap-2 px-3 py-2 rounded-2xl border border-white/10 bg-base-100/15">
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={onlyImages}
                  onChange={(e) => {
                    setOnlyImages(e.target.checked);
                    setLimit(9);
                  }}
                />
                <span className="text-sm">Only Images</span>
              </label>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => {
                  setTab(t.key);
                  setLimit(9);
                }}
                className={`btn btn-sm rounded-full ${
                  tab === t.key ? "btn-primary" : "btn-outline btn-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED */}
        {featured.length ? (
          <section className="mt-14">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Featured Projects
                </h2>
                <p className="mt-2 text-sm opacity-70">
                  Best projects (deployed + most complete).
                </p>
              </div>
              <div className="text-xs opacity-60">
                Showing top {featured.length}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {featured.map((p, i) => (
                <motion.div
                  key={p.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i + 1}
                >
                  <ProjectCard p={p} />
                </motion.div>
              ))}
            </div>
          </section>
        ) : null}

        {/* ALL */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">
                All Projects
              </h2>
              <p className="mt-2 text-sm opacity-70">
                Showing <b>{visible.length}</b> of <b>{filtered.length}</b>
              </p>
            </div>
          </div>

          {filtered.length ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence>
                  {visible.map((p, i) => (
                    <motion.div
                      key={p.id}
                      variants={fadeUp}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, y: 10 }}
                      custom={(i % 6) + 1}
                    >
                      <ProjectCard p={p} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {limit < filtered.length ? (
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={() => setLimit((x) => x + 9)}
                    className="btn btn-outline btn-primary rounded-full px-10"
                  >
                    Load more
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-base-200/35 p-10 text-center opacity-80 mt-8">
              No projects found for this filter/search.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}