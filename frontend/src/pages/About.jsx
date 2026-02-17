import React, { useState } from "react";
import {Link} from 'react-router-dom'
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
  FaLinkedin 
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const About = () => {
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

  // ✅ Social icons with real links
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/AjayGour09" },
    { icon: FaInstagram, url: "https://www.instagram.com/er.__ajay_gour_7/" },
    { icon: FaWhatsapp, url: "https://wa.me/919644029231" },
    { icon: FaTwitter, url: "https://x.com/home" },
    { icon: FaFacebook, url: "https://www.facebook.com/profile.php?id=100070965151399" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/ajay-gour09/" },
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
          {socialLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
              className="cursor-pointer text-primary"
            >
              <item.icon />
            </motion.a>
          ))}
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
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
        <h2 className="text-3xl font-bold text-center mb-20">Education</h2>
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
      <section className="mb-40 py-16 relative">
        <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {[
            {
              title: "Frontend Engineering",
              desc: "Designed scalable, reusable and performance-optimized UI systems using modern React architecture with component-driven development approach.",
              skills: ["React", "Tailwind", "Framer Motion", "UI/UX"],
            },
            {
              title: "Backend Development",
              desc: "Built secure REST APIs with authentication, database optimization, validation middleware and structured server architecture.",
              skills: ["Node.js", "Express", "MongoDB", "JWT"],
            },
            {
              title: "Full Stack Projects",
              desc: "Delivered complete MERN applications including authentication, CRUD operations, protected routing and cloud deployment.",
              skills: ["MERN", "Auth", "CRUD", "Deployment"],
            },
          ].map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, y: -6 }}
              className="w-full md:w-[360px] rounded-3xl p-[3px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl"
            >
              <div className="rounded-3xl bg-base-100 p-8 flex flex-col justify-between shadow-xl h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {exp.title}
                  </h3>
                  <p className="opacity-80 text-sm leading-relaxed mb-6">{exp.desc}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Work Together 🚀</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          I am always excited to collaborate on innovative projects.
          Let’s connect and build something amazing together!
        </p>
        <button className="relative px-8 py-3 mb-[80px] mt-8 border-2 border-purple-500 rounded-lg overflow-hidden group">
          <Link to="/contact" className="relative z-10">Let’s Connect</Link>
          <span className="absolute right-0 top-0 h-full w-1 bg-purple-500 animate-pulse"></span>
        </button>
      </div>
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
          boxShadow: ["0 0 10px #00f2ff", "0 0 30px #a855f7", "0 0 10px #00f2ff"],
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 w-[6px] h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 rounded-full"
      />

      {educationData.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative mb-24 flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_20px_#00f2ff] z-10"
          ></div>

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
