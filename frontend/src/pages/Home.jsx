import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import img from "../assets/myimg.jpeg";
import { Link } from "react-router-dom";
import About from "./About.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const Home = () => {
  return (
    <section className="min-h-screen bg-base-100 pt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* LEFT */}
          <div className="text-base-content">
            {/* small badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-base-300 bg-base-200/60 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-success"></span>
              <p className="text-sm font-medium">
                Available for internships / freelance
              </p>
            </motion.div>

            {/* heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Ajay Gour
              </span>
              .
            </motion.h1>

            {/* one-liner */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-4 text-base md:text-lg text-base-content/80 max-w-xl"
            >
              I build clean, fast and responsive web apps with modern UI,
              smooth animations and scalable backend APIs.
            </motion.p>

            {/* typewriter */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-6 text-lg md:text-2xl font-semibold"
            >
              <span className="text-base-content/70">I’m a </span>
              <span className="text-primary">
                <Typewriter
                  words={[
                    "MERN Stack Developer",
                    "Frontend Developer (React)",
                    "Backend Developer (Node/Express)",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={900}
                />
              </span>
            </motion.div>

            {/* quick stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="mt-8 grid grid-cols-3 gap-3 max-w-md"
            >
              <div className="rounded-2xl border border-base-300 bg-base-200/40 p-4">
                <p className="text-xl font-bold">MERN</p>
                <p className="text-xs text-base-content/60 mt-1">Stack</p>
              </div>
              <div className="rounded-2xl border border-base-300 bg-base-200/40 p-4">
                <p className="text-xl font-bold">Projects</p>
                <p className="text-xs text-base-content/60 mt-1">
                  Live + GitHub
                </p>
              </div>
              <div className="rounded-2xl border border-base-300 bg-base-200/40 p-4">
                <p className="text-xl font-bold">UI</p>
                <p className="text-xs text-base-content/60 mt-1">
                  Animations
                </p>
              </div>
            </motion.div>

            {/* buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="mt-8 flex gap-4 flex-wrap items-center"
            >
              <Link to="/contact" className="btn btn-primary">
                Hire Me
              </Link>

              <Link to="/projects" className="btn btn-outline btn-primary">
                View Projects
              </Link>

              {/* optional */}
              <a
                href="#"
                className="btn btn-ghost"
                onClick={(e) => e.preventDefault()}
              >
                Download Resume
              </a>
            </motion.div>

            {/* small note */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={7}
              className="mt-4 text-sm text-base-content/60"
            >
              Based in India • Open to opportunities
            </motion.p>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-[320px] md:w-[440px] h-[420px] md:h-[540px]"
            >
              {/* glow */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-primary via-secondary to-accent blur-2xl opacity-35"></div>

              {/* card */}
              <div className="relative rounded-[2rem] overflow-hidden border border-base-300 bg-base-200/40 shadow-2xl">
                <img
                  src={img}
                  alt="Ajay"
                  className="w-full h-full object-cover"
                />

                {/* bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-semibold">Ajay Gour</p>
                  <p className="text-white/80 text-sm">
                    MERN • React • Node • MongoDB
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <About />
    </section>
  );
};

export default Home;