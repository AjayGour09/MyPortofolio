import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import img from "../assets/myimg.jpeg";
import { Link } from "react-router-dom";
import About from './About.jsx'

const Home = () => {
  return (
    <section className="min-h-screen bg-base-100 pt-28 transition-colors duration-500">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 gap-12">

        {/* LEFT */}
        <div className="md:w-1/2 w-full text-base-content">

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-primary"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-sm text-red-600 font-semibold">HELLO, THERE WELCOME TO MY SITE</span> <br />
            <p className="text-6xl pt-5 font-monospace"> I'm Ajay Gour</p>
          </motion.h1>

          <motion.p className="mt-6 text-lg md:text-2xl font-medium">
            <Typewriter
              words={[
                "Frontend Developer | UI/UX Designer",
                "Backend Developer",
                "Full Stack MERN Developer"
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={800}
            />
          </motion.p>

          {/* BUTTONS BACK */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary">
              Hire Me
            </Link>

            <Link to="/projects" className="btn btn-outline btn-primary">
              View Projects
            </Link>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 w-full flex justify-center items-center md:-mt-10">

          <div className="relative w-[340px] md:w-[430px] h-[420px] md:h-[520px]">

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent blur-2xl opacity-40"></div>

            <div className="relative rounded-3xl overflow-hidden border border-base-300 shadow-2xl">
              <img
                src={img}
                alt="Ajay"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>
      <About />
    </section>
  );
};

export default Home;
