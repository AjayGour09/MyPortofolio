import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const About = () => {
  const [isPaused, setIsPaused] = useState(false);

  const techStack = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <TbBrandMysql />, name: "MySQL" },
  ];

  return (
    <div className="bg-base-100 text-base-content pt-24 px-6 md:px-20">

      {/* ================= ABOUT ================= */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          I am{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ajay Gour
          </span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg opacity-80">
          Passionate Full Stack Developer graduating in 2026, focused on
          building scalable web applications with modern technologies.
        </p>

        <div className="flex justify-center gap-6 mt-8 text-3xl">
          {[FaGithub, FaInstagram, FaWhatsapp, FaTwitter, FaFacebook].map(
            (Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.3 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                className="cursor-pointer text-primary"
              >
                <Icon />
              </motion.a>
            )
          )}
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technology Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="bg-base-200 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-3 text-primary flex justify-center">
                {tech.icon}
              </div>
              <p className="font-semibold">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold text-center mb-20">
          Education
        </h2>

        <EducationTimeline />
      </section>

      {/* ================= INTERNSHIPS ================= */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Internships</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Btech Wallah (3 Months)",
              desc: "Worked on real-world MERN stack projects.",
              icons: [<FaReact />, <FaNodeJs />, <SiMongodb />],
            },
            {
              title: "Frontend Developer Intern",
              desc: "Developed responsive dashboards and UI components.",
              icons: [<FaReact />, <SiJavascript />, <FaHtml5 />, <FaCss3Alt />],
            },
            {
              title: "Full Stack Intern",
              desc: "Built APIs and connected frontend with backend.",
              icons: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-base-200 p-6 rounded-xl shadow-md"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-3 opacity-80">{item.desc}</p>

              <div className="flex gap-3 mt-4 text-2xl text-primary">
                {item.icons.map((Icon, index) => (
                  <span key={index}>{Icon}</span>
                ))}
              </div>

              <button className="mt-4 px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-500 transition">
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="mb-32 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-16">
          Experience
        </h2>

        <motion.div
          className="flex gap-12"
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        >
          {[1, 2].map((_, repeatIndex) => (
            <div key={repeatIndex} className="flex gap-12">
              {[
                {
                  title: "Frontend Engineering",
                  desc: "Designed scalable and high-performance UI systems using modern React architecture.",
                  skills: ["React", "Tailwind", "Framer Motion", "UI/UX"],
                },
                {
                  title: "Backend Development",
                  desc: "Built secure REST APIs and optimized database structures.",
                  skills: ["Node.js", "Express", "MongoDB", "JWT"],
                },
                {
                  title: "Full Stack Projects",
                  desc: "Delivered complete MERN stack applications with protected routes and deployment.",
                  skills: ["MERN", "Auth", "CRUD", "Deployment"],
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="relative min-w-[400px] min-h-[320px] 
                             rounded-3xl p-[3px] 
                             bg-gradient-to-br 
                             from-cyan-400 via-blue-500 to-purple-600"
                >
                  <div className="rounded-3xl bg-base-100 p-8 h-full flex flex-col justify-between shadow-xl">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 
                                     bg-gradient-to-r from-cyan-400 to-purple-500 
                                     bg-clip-text text-transparent">
                        {exp.title}
                      </h3>
                      <p className="opacity-80 text-sm mb-6">{exp.desc}</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1 text-xs rounded-full 
                                     bg-gradient-to-r 
                                     from-cyan-500/20 to-purple-500/20 
                                     border border-cyan-400/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-8">Let’s Work Together</h2>

        <div className="flex justify-center gap-6">
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="btn btn-primary px-8">
            Hire Me
          </motion.a>

          <motion.a whileHover={{ scale: 1.1 }} href="#" className="btn btn-outline btn-primary px-8">
            Let’s Connect
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default About;

/* ================= EDUCATION COMPONENT ================= */

function EducationTimeline() {
  const educationData = [
    {
      title: "10th (85.50%)",
      school: "Govt Higher Secondary School, Shyampur (Sheopur, MP)",
      desc: "Built strong academic foundation.",
    },
    {
      title: "12th (65%)",
      school: "Govt Higher Secondary School, Shyampur (Sheopur, MP)",
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
          boxShadow: [
            "0 0 10px #00f2ff",
            "0 0 30px #a855f7",
            "0 0 10px #00f2ff",
          ],
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 
                   w-[6px] h-full 
                   bg-gradient-to-b 
                   from-cyan-400 via-purple-500 to-cyan-400 
                   rounded-full"
      />

      {educationData.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative mb-24 flex ${
            i % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 
                          w-5 h-5 bg-cyan-400 rounded-full 
                          shadow-[0_0_20px_#00f2ff] z-10"></div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-base-200 p-6 rounded-xl w-full md:w-[45%] 
                       border border-cyan-400/30 shadow-lg"
          >
            <h3 className="text-xl font-bold text-cyan-400">
              {edu.title}
            </h3>
            <p className="mt-2 opacity-80">{edu.school}</p>
            <p className="mt-3 text-sm opacity-70">{edu.desc}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
