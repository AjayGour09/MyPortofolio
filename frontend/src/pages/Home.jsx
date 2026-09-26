import React from "react";
import { motion } from "framer-motion";

import {
  FaArrowDown,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiVite,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const projects = [
  {
    number: "01",
    title: "Desh Videsh Darpan",
    category: "News / Web Application",
    description:
      "A modern news web application built with React, JavaScript and Tailwind CSS.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://lnkd.in/gGnNsuJK",
    code: "https://lnkd.in/gXw97WhE",
  },
  {
    number: "02",
    title: "HireTest",
    category: "Full Stack / Examination Platform",
    description:
      "A full-stack examination platform with registration, payment flow, admin controls, email communication and interview features.",
    tech: ["React", "TypeScript", "Vite", "Express", "MongoDB"],
    code: "https://github.com/AjayGour09/HireTest",
  },
  {
    number: "03",
    title: "AIInterview",
    category: "AI / Full Stack",
    description:
      "An interview-focused application using authentication, Redux, Firebase, Express and MongoDB.",
    tech: ["React", "Firebase", "Redux", "Express", "MongoDB"],
    code: "https://github.com/AjayGour09",
  },
  {
    number: "04",
    title: "Kirana Store Management",
    category: "Business Management System",
    description:
      "A business-focused system covering customer management, purchase and sales records, stock and credit ledger workflows.",
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
    code: "https://github.com/AjayGour09",
  },
];

const skills = [
  {
    icon: <FaReact />,
    name: "React",
    text: "Component-based interfaces",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    text: "Modern ES6+ development",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    text: "Typed application development",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    text: "Backend development",
  },
  {
    icon: <SiExpress />,
    name: "Express.js",
    text: "REST APIs & server logic",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    text: "Database & CRUD systems",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    text: "Responsive UI systems",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    text: "Authentication & services",
  },
  {
    icon: <SiRedux />,
    name: "Redux",
    text: "Application state",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    text: "Version control",
  },
  {
    icon: <SiVite />,
    name: "Vite",
    text: "Modern frontend tooling",
  },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {text && <p>{text}</p>}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="project-top">
        <span className="project-number">{project.number}</span>

        <div className="project-links">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      <div className="project-category">
        {project.category}
      </div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="tech-list">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="project-footer">
        <span>View project</span>
        <FaArrowRight />
      </div>
    </motion.article>
  );
}

export default function Home() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">
        <div className="hero-grid" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-container">

          <div className="hero-content">

            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="status-dot" />
              Available for opportunities
            </motion.div>

            <motion.p
              className="hero-intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Hi, I'm Ajay Gour.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I build
              <br />
              <span>digital products.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Full Stack Developer focused on building modern web
              applications, practical products and digital experiences
              with the MERN ecosystem.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#projects"
                className="button button-primary"
              >
                Explore my work
                <FaArrowRight />
              </a>

              <a
                href="/FullStackResume.pdf"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                View Resume
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://github.com/AjayGour09"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ajay-gour09/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/er.__ajay_gour_7/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
                Instagram
              </a>
            </motion.div>
          </div>

          {/* ================= DEVELOPER VISUAL ================= */}

          <motion.div
            className="developer-visual"
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
          >

            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="visual-orbit orbit-c" />

            <div className="visual-core">

              <div className="core-glow" />

              <div className="code-window">

                <div className="window-header">
                  <span />
                  <span />
                  <span />

                  <small>ajaygour.dev</small>
                </div>

                <div className="code-body">

                  <div className="code-line">
                    <span className="code-number">01</span>
                    <span className="purple">const</span>
                    <span className="white">
                      developer
                    </span>
                    <span className="purple">=</span>
                  </div>

                  <div className="code-line indent">
                    <span className="blue">{"{"}</span>
                  </div>

                  <div className="code-line indent-two">
                    <span className="green">name:</span>
                    <span className="yellow">
                      "Ajay Gour"
                    </span>
                  </div>

                  <div className="code-line indent-two">
                    <span className="green">
                      role:
                    </span>

                    <span className="yellow">
                      "Full Stack Developer"
                    </span>
                  </div>

                  <div className="code-line indent-two">
                    <span className="green">
                      founder:
                    </span>

                    <span className="yellow">
                      "CodivraTech"
                    </span>
                  </div>

                  <div className="code-line indent-two">
                    <span className="green">
                      stack:
                    </span>

                    <span className="yellow">
                      "MERN"
                    </span>
                  </div>

                  <div className="code-line indent">
                    <span className="blue">{"}"}</span>
                  </div>

                  <div className="code-line">
                    <span className="code-number">
                      08
                    </span>

                    <span className="purple">
                      developer
                    </span>

                    <span className="white">
                      .build();
                    </span>

                    <span className="cursor-blink">
                      ▌
                    </span>
                  </div>

                </div>
              </div>

              <div className="core-label">
                <span>BUILD</span>
                <span>CREATE</span>
                <span>SHIP</span>
              </div>

            </div>

            <div className="floating-tech tech-react">
              <FaReact />
            </div>

            <div className="floating-tech tech-node">
              <FaNodeJs />
            </div>

            <div className="floating-tech tech-js">
              <SiJavascript />
            </div>

          </motion.div>
        </div>

        <a href="#about" className="scroll-indicator">
          <span>Scroll to explore</span>
          <FaArrowDown />
        </a>
      </section>

      {/* ================= FOUNDER ================= */}

      <section className="founder-strip">
        <div className="container founder-inner">

          <span className="founder-label">
            Founder of
          </span>

          <div className="founder-brand">
            <span className="brand-symbol">
              C
            </span>

            <span>CodivraTech</span>
          </div>

          <p>
            Building websites, applications and digital solutions.
          </p>

          <a href="#contact">
            Work with me
            <FaArrowRight />
          </a>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="container">

          <SectionTitle
            eyebrow="01 — About"
            title="Developer mindset. Builder attitude."
            text="I enjoy turning ideas into usable digital products while continuously improving my development skills."
          />

          <div className="about-grid">

            <motion.div
              className="about-main"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <span className="big-quote">
                “
              </span>

              <p className="about-big">
                I don't just want to write code.
                I want to build things that people
                can actually use.
              </p>

              <p className="about-text">
                I'm a Full Stack Developer focused
                on modern web development. My work
                revolves around React, JavaScript,
                Node.js, Express, MongoDB and related
                technologies.
              </p>

              <p className="about-text">
                Alongside development, I'm building
                <strong> CodivraTech</strong> as my
                freelance and digital-product initiative.
              </p>

              <div className="about-signature">
                <span>Ajay Gour</span>
                <small>
                  Developer & Founder
                </small>
              </div>

            </motion.div>

            <div className="about-side">

              <motion.div
                className="info-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span>01</span>
                <h3>Build</h3>
                <p>
                  Responsive interfaces and
                  full-stack applications.
                </p>
              </motion.div>

              <motion.div
                className="info-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span>02</span>
                <h3>Learn</h3>
                <p>
                  Revisiting fundamentals and
                  learning modern technologies.
                </p>
              </motion.div>

              <motion.div
                className="info-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span>03</span>
                <h3>Create</h3>
                <p>
                  Turning ideas into useful
                  projects and products.
                </p>
              </motion.div>

            </div>

          </div>
        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="container">

          <SectionTitle
            eyebrow="02 — Selected Work"
            title="Things I've built."
            text="A selection of real projects and applications I've worked on."
          />

          <div className="projects-grid">

            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
              />
            ))}

          </div>

          <div className="projects-bottom">

            <p>
              More projects and experiments are
              available on my GitHub.
            </p>

            <a
              href="https://github.com/AjayGour09"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Explore GitHub
              <FaArrowRight />
            </a>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="container">

          <SectionTitle
            eyebrow="03 — Toolbox"
            title="Technologies I work with."
            text="My current toolkit across frontend, backend and application development."
          />

          <div className="skills-layout">

            <div className="skills-intro">

              <div className="skills-big-number">
                01
              </div>

              <h3>MERN</h3>

              <p>
                My core web development stack revolves
                around MongoDB, Express.js, React and
                Node.js.
              </p>

              <div className="mini-stack">
                <span>
                  <FaReact />
                </span>

                <span>
                  <FaNodeJs />
                </span>

                <span>
                  <SiMongodb />
                </span>

                <span>
                  <SiExpress />
                </span>
              </div>

            </div>

            <div className="skills-grid">

              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                >

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <div>
                    <h4>
                      {skill.name}
                    </h4>

                    <p>
                      {skill.text}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= CODIVRATECH ================= */}

      <section className="codivra-section">

        <div className="container">

          <div className="codivra-card">

            <div className="codivra-left">

              <span className="eyebrow">
                Founder / Builder
              </span>

              <h2>
                Building
                <br />
                <span>CodivraTech.</span>
              </h2>

              <p>
                CodivraTech is my freelance and
                digital-product initiative focused on
                websites, web applications and
                practical software solutions.
              </p>

              <a
                href="#contact"
                className="button button-light"
              >
                Discuss a project
                <FaArrowRight />
              </a>

            </div>

            <div className="codivra-right">

              <div className="codivra-mark">
                C
              </div>

              <div className="codivra-lines">
                <span />
                <span />
                <span />
                <span />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="container">

          <div className="contact-grid">

            <div>

              <SectionTitle
                eyebrow="04 — Contact"
                title="Have an idea?"
                text="Let's talk about what you want to build."
              />

              <div className="contact-links">

                <a
                  href="https://wa.me/919644029231"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >

                  <span className="contact-icon">
                    <FaWhatsapp />
                  </span>

                  <div>
                    <small>
                      WhatsApp
                    </small>

                    <strong>
                      Start a conversation
                    </strong>
                  </div>

                  <FaArrowRight />

                </a>

                <a
                  href="https://www.linkedin.com/in/ajay-gour09/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >

                  <span className="contact-icon">
                    <FaLinkedin />
                  </span>

                  <div>
                    <small>
                      LinkedIn
                    </small>

                    <strong>
                      Connect with me
                    </strong>
                  </div>

                  <FaArrowRight />

                </a>

                <a
                  href="https://github.com/AjayGour09"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >

                  <span className="contact-icon">
                    <FaGithub />
                  </span>

                  <div>
                    <small>
                      GitHub
                    </small>

                    <strong>
                      View my code
                    </strong>
                  </div>

                  <FaArrowRight />

                </a>

              </div>

            </div>

            <div className="contact-message">

              <span className="contact-number">
                04
              </span>

              <h3>
                Let's create
                <br />
                something useful.
              </h3>

              <p>
                Website, web application, college
                project or digital product — feel
                free to reach out.
              </p>

              <a
                href="https://wa.me/919644029231?text=Hi%20Ajay%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                Message on WhatsApp
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-inner">

          <div>

            <div className="footer-logo">

              <span className="logo-mark">
                A
              </span>

              <span>
                Ajay Gour
              </span>

            </div>

            <p>
              Full Stack Developer · Founder of
              CodivraTech
            </p>

          </div>

          <div className="footer-socials">

            <a
              href="https://github.com/AjayGour09"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ajay-gour09/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/er.__ajay_gour_7/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

          <span className="copyright">
            © {new Date().getFullYear()} Ajay Gour
          </span>

        </div>

      </footer>

    </main>
  );
}