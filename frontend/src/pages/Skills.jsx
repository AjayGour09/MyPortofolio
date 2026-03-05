import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBolt,
  FaShieldAlt,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiVercel,
  SiNetlify,
  SiTypescript,
  SiNextdotjs,
  SiJest,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const Container = ({ children }) => (
  <div className="max-w-6xl mx-auto px-5 sm:px-8">{children}</div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
    {subtitle ? (
      <p className="mt-2 text-sm md:text-base opacity-70 max-w-2xl">{subtitle}</p>
    ) : null}
  </div>
);

const Chip = ({ icon: Icon, label }) => (
  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-base-300 bg-base-100/30">
    <span className="text-primary text-lg">
      <Icon />
    </span>
    <span className="text-xs font-semibold">{label}</span>
  </span>
);

const SkillRow = ({ icon: Icon, name, note }) => (
  <div className="flex items-start gap-3 rounded-2xl border border-base-300 bg-base-100/25 p-4">
    <div className="w-10 h-10 rounded-2xl grid place-items-center border border-base-300 bg-base-100/30 text-primary text-xl shrink-0">
      <Icon />
    </div>
    <div className="min-w-0">
      <p className="font-bold leading-tight">{name}</p>
      {note ? <p className="mt-1 text-xs opacity-65 leading-snug">{note}</p> : null}
    </div>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-3xl border border-base-300 bg-base-200/35 backdrop-blur-xl shadow-xl ${className}`}
  >
    {children}
  </div>
);

const Divider = () => <div className="my-10 border-t border-base-300" />;

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      subtitle: "UI + Components",
      items: [
        { icon: FaReact, name: "React", note: "Components, hooks, routing, reusable UI" },
        { icon: SiRedux, name: "Redux Toolkit", note: "State management, slices, async flow" },
        { icon: SiTailwindcss, name: "Tailwind + DaisyUI", note: "Responsive layouts + clean UI" },
        { icon: SiJavascript, name: "JavaScript (ES6+)", note: "Async/await, APIs, core concepts" },
        { icon: FaHtml5, name: "HTML5", note: "Semantic structure" },
        { icon: FaCss3Alt, name: "CSS3", note: "Flex/Grid + UI polish" },
      ],
    },
    {
      title: "Backend",
      subtitle: "APIs + Auth",
      items: [
        { icon: FaNodeJs, name: "Node.js", note: "Server-side JS + tooling" },
        { icon: SiExpress, name: "Express.js", note: "REST APIs, middleware, validation" },
        { icon: SiPostman, name: "Postman", note: "API testing + debugging" },
      ],
    },
    {
      title: "Database",
      subtitle: "Schema + CRUD",
      items: [
        { icon: SiMongodb, name: "MongoDB", note: "Collections, CRUD, schema thinking" },
        { icon: TbBrandMysql, name: "MySQL (Basics)", note: "Queries basics" },
      ],
    },
    {
      title: "Tools & Deploy",
      subtitle: "Workflow",
      items: [
        { icon: FaGithub, name: "Git & GitHub", note: "Commits, branching, collaboration" },
        { icon: SiVercel, name: "Vercel", note: "Deploy React apps" },
        { icon: SiNetlify, name: "Netlify", note: "Static deploys" },
      ],
    },
  ];

  const systems = [
    {
      icon: FaShieldAlt,
      title: "Auth System",
      desc: "JWT login/signup, protected routes, role-ready structure + clean API integration.",
      tags: ["JWT", "Protected Routes", "Secure Flow"],
    },
    {
      icon: FaLayerGroup,
      title: "CRUD Dashboard",
      desc: "Forms, validation, search/filter, pagination + clean reusable components.",
      tags: ["CRUD", "Search/Filter", "Pagination"],
    },
    {
      icon: FaBolt,
      title: "API + UX Polish",
      desc: "Loading states, error handling, debounce search, smooth transitions for better UX.",
      tags: ["Debounce", "Loaders", "UX"],
    },
  ];

  const learning = [
    { icon: SiTypescript, name: "TypeScript", note: "Types + safer codebase" },
    { icon: SiNextdotjs, name: "Next.js", note: "SSR/SEO + modern app patterns" },
    { icon: SiJest, name: "Testing (Jest)", note: "Unit tests + confidence shipping" },
  ];

  return (
    <div className="bg-base-100 text-base-content pt-24 pb-24">
      <Container>
        {/* HERO */}
        <Card className="relative overflow-hidden">
          {/* subtle accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
          {/* soft glow only here */}
          <div className="pointer-events-none absolute -top-28 -right-28 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative p-7 md:p-10">
            <div className="grid md:grid-cols-[1.35fr_0.65fr] gap-8 items-start">
              <div>
                <motion.h1
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  className="text-3xl md:text-5xl font-extrabold leading-tight"
                >
                  Skills that ship{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    MERN products
                  </span>
                </motion.h1>

                <motion.p
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  custom={2}
                  className="mt-4 text-sm md:text-base opacity-75 max-w-2xl leading-relaxed"
                >
                  Clear categories + real capabilities. Recruiters scan fast, so everything is
                  aligned and proof-driven (not random % bars).
                </motion.p>

                <motion.div
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  custom={3}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  <Chip icon={FaReact} label="React" />
                  <Chip icon={FaNodeJs} label="Node" />
                  <Chip icon={SiExpress} label="Express" />
                  <Chip icon={SiMongodb} label="MongoDB" />
                  <Chip icon={SiTailwindcss} label="Tailwind" />
                </motion.div>

                <motion.div
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  custom={4}
                  className="mt-7 flex flex-wrap gap-3"
                >
                  <Link to="/projects" className="btn btn-primary rounded-full px-8">
                    View Projects
                  </Link>
                  <Link to="/contact" className="btn btn-outline btn-primary rounded-full px-8">
                    Contact
                  </Link>
                </motion.div>
              </div>

              {/* right mini panel */}
              <motion.div
                variants={fade}
                initial="hidden"
                animate="show"
                custom={5}
                className="rounded-3xl border border-base-300 bg-base-100/25 p-6"
              >
                <p className="text-xs uppercase tracking-widest opacity-60">Currently learning</p>

                <div className="mt-4 grid gap-3">
                  {learning.map((x, i) => (
                    <SkillRow key={i} icon={x.icon} name={x.name} note={x.note} />
                  ))}
                </div>

                <p className="mt-4 text-xs opacity-60">
                  (This is optional — remove if you don’t want “learning” section.)
                </p>
              </motion.div>
            </div>
          </div>
        </Card>

        {/* MAIN LAYOUT */}
        <div className="mt-12 grid lg:grid-cols-[0.95fr_2.05fr] gap-8 items-start">
          {/* LEFT STICKY SUMMARY */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <Card className="p-6">
              <p className="text-xs uppercase tracking-widest opacity-60">Quick summary</p>
              <h3 className="mt-2 text-xl font-extrabold">What I’m strong at</h3>

              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✔</span>
                  <p className="text-sm opacity-80">
                    Building responsive UI with React + Tailwind + DaisyUI
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✔</span>
                  <p className="text-sm opacity-80">
                    Creating REST APIs with Node/Express and integrating frontend
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✔</span>
                  <p className="text-sm opacity-80">
                    MongoDB schema + CRUD patterns + clean folder structure
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="badge badge-outline">Auth</span>
                <span className="badge badge-outline">CRUD</span>
                <span className="badge badge-outline">APIs</span>
                <span className="badge badge-outline">UI Polish</span>
              </div>
            </Card>

            <Card className="p-6">
              <p className="text-xs uppercase tracking-widest opacity-60">Links</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://github.com/AjayGour09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary rounded-full btn-sm"
                >
                  <FaGithub /> GitHub
                </a>
                <Link to="/projects" className="btn btn-primary rounded-full btn-sm">
                  Projects
                </Link>
              </div>
            </Card>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* CATEGORIES */}
            <SectionTitle
              title="Tech categories"
              subtitle="Aligned blocks. Same spacing. Easy to scan."
            />

            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((c, i) => (
                <motion.div
                  key={c.title}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i + 1}
                  className="h-full"
                >
                  <Card className="p-6 md:p-7 h-full">
                    <p className="text-xs uppercase tracking-widest opacity-60">{c.subtitle}</p>
                    <h3 className="mt-2 text-xl font-extrabold">{c.title}</h3>

                    <div className="mt-5 grid gap-3">
                      {c.items.map((it, idx) => (
                        <SkillRow key={idx} icon={it.icon} name={it.name} note={it.note} />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Divider />

            {/* SYSTEMS / PROOF */}
            <SectionTitle
              title="What I can build"
              subtitle="Portfolio feel = skills + proof. These are real deliverables."
            />

            <div className="grid md:grid-cols-3 gap-6">
              {systems.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    variants={fade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i + 1}
                    className="h-full"
                  >
                    <Card className="p-6 h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
                      <div className="w-12 h-12 rounded-2xl grid place-items-center border border-base-300 bg-base-100/30 text-primary text-2xl">
                        <Icon />
                      </div>
                      <h4 className="mt-4 text-lg font-extrabold">{s.title}</h4>
                      <p className="mt-2 text-sm opacity-75 leading-relaxed">{s.desc}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.tags.map((t, idx) => (
                          <span key={idx} className="badge badge-outline">
                            {t}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <Divider />

            {/* CTA */}
            <Card className="p-7 md:p-9">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold">
                    Want proof? Check my projects.
                  </h3>
                  <p className="mt-2 text-sm opacity-70 max-w-2xl">
                    Live demos + GitHub links show real implementation — that’s what recruiters want.
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Link to="/projects" className="btn btn-primary rounded-full px-8">
                    View Projects
                  </Link>
                  <Link to="/contact" className="btn btn-outline btn-primary rounded-full px-8">
                    Contact
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}