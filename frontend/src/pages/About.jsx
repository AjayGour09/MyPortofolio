import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

// ===================== About Component =====================
const About = () => {
  // UPDATED INTERNSHIP DATA WITH CERTIFICATE LINKS
  const internships = [
    {
      title: "Full Stack Intern | Btech Wallah",
      duration: "Jan 2025 - Mar 2025 (3 Months)",
      desc: "Architected real-world MERN applications focusing on scalable folder structures and performance optimization. Contributed to production-level code reviews and implemented state management using Redux Toolkit.",
      highlights: ["API Integration", "State Management", "Scalable UI"],
      icons: [<FaReact />, <FaNodeJs />, <SiMongodb />],
      certificateUrl: "/certificates/btech-wallah.pdf", // Replace with your actual path
    },
    {
      title: "Frontend Developer Intern",
      duration: "Summer 2024",
      desc: "Specialized in crafting pixel-perfect, responsive user interfaces. Developed complex dashboards with real-time data visualization and interactive components using Framer Motion and Tailwind CSS.",
      highlights: ["Responsive Design", "UI Animations", "Performance Tuning"],
      icons: [<FaReact />, <SiJavascript />, <FaHtml5 />, <FaCss3Alt />],
      certificateUrl: "/certificates/frontend-intern.pdf", // Replace with your actual path
    },
    {
      title: "Full Stack Intern | Development Studio",
      duration: "Winter 2023",
      desc: "Engineered secure backend services and RESTful APIs. Implemented JWT authentication and managed database schemas for high-traffic applications, ensuring seamless data flow between server and client.",
      highlights: ["Auth Systems", "REST APIs", "Schema Design"],
      icons: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
      certificateUrl: "/certificates/fullstack-studio.pdf", // Replace with your actual path
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
    { icon: FaFacebook, url: "https://www.facebook.com/profile.php?id=100070965151399" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/ajay-gour09/" },
  ];

  const experienceData = [
    {
      title: "Frontend Engineering",
      desc: "Designed scalable UI systems with React & Tailwind.",
      skills: [{ name: "React", icon: <FaReact /> }, { name: "Tailwind", icon: <SiTailwindcss /> }, { name: "UI/UX" }, { name: "Framer Motion" }],
      projects: ["Built dynamic dashboard for analytics.", "Implemented responsive design.", "Optimized page load by 30%."],
      stats: { projectsDone: 5, featuresImplemented: 20, usersImpacted: 5000 },
      techIcons: [<FaReact />, <SiTailwindcss />],
    },
    {
      title: "Backend Development",
      desc: "Built secure REST APIs with Node & Express.",
      skills: [{ name: "Node.js", icon: <FaNodeJs /> }, { name: "Express", icon: <SiExpress /> }, { name: "MongoDB", icon: <SiMongodb /> }, { name: "JWT" }],
      projects: ["Implemented authentication & authorization.", "Created optimized database queries.", "Integrated APIs with frontend."],
      stats: { projectsDone: 3, featuresImplemented: 15, usersImpacted: 3000 },
      techIcons: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
    },
    {
      title: "Full Stack Projects",
      desc: "Delivered complete MERN applications with authentication, CRUD operations, protected routing, and deployment.",
      skills: [{ name: "MERN" }, { name: "Auth" }, { name: "CRUD" }, { name: "Deployment" }],
      projects: ["Developed e-commerce app.", "Implemented JWT authentication.", "Deployed app to cloud."],
      stats: { projectsDone: 4, featuresImplemented: 18, usersImpacted: 7000 },
      techIcons: [<FaReact />, <FaNodeJs />, <SiMongodb />],
    },
  ];

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

      {/* ================= UPDATED INTERNSHIP SECTION WITH CERTIFICATES ================= */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Internships</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {internships.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 45, y: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-gradient-to-br from-base-200 to-base-300 p-8 rounded-2xl shadow-2xl border border-white/5 relative group overflow-hidden flex flex-col justify-between"
            >
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-primary leading-tight">{item.title}</h3>
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="text-2xl text-cyan-400/50"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.div>
                </div>
                <p className="text-xs font-semibold opacity-60 mb-4 tracking-widest uppercase">{item.duration}</p>
                <p className="text-sm leading-relaxed opacity-80 mb-6">{item.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.highlights.map((h, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-1 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex gap-4 text-3xl text-primary/80">
                  {item.icons.map((Icon, index) => (
                    <motion.span 
                      key={index}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 3, delay: index * 0.4 }}
                    >
                      {Icon}
                    </motion.span>
                  ))}
                </div>
                
                {/* Certificate Button */}
                <a 
                  href={item.certificateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-secondary text-primary-content text-xs font-bold py-2 px-4 rounded-full transition-all transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 flex items-center gap-2"
                >
                  Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="mb-40">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="flex gap-8 overflow-x-auto pb-10 px-2 scrollbar-hide">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="flex-none w-[310px] md:w-[360px] bg-base-200/80 backdrop-blur-md rounded-3xl p-7 shadow-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">{exp.title}</h3>
                <p className="mt-2 text-sm opacity-80 italic leading-relaxed">{exp.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 text-[10px] uppercase font-bold rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 flex items-center gap-1">
                      {skill.icon && <span className="text-xs">{skill.icon}</span>}
                      {skill.name}
                    </span>
                  ))}
                </div>
                <div className="mt-5 text-sm font-bold text-primary">Key Contributions:</div>
                <ul className="mt-2 space-y-2 text-sm opacity-75">
                  {exp.projects.map((proj, j) => (
                    <li key={j} className="flex gap-2"><span className="text-cyan-400">•</span> {proj}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-end">
                <div className="flex gap-3 text-2xl text-primary/80">
                  {exp.techIcons.map((icon, j) => <span key={j}>{icon}</span>)}
                </div>
                <div className="text-[11px] opacity-60 text-right">
                  <span className="block font-bold text-cyan-400">{exp.stats.projectsDone} Projects</span>
                  <span>{exp.stats.usersImpacted}+ Users</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="text-center mb-40">
        <h2 className="text-3xl font-bold mb-6">Let's Work Together 🚀</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          I am always excited to collaborate on innovative projects. Let’s connect and build something amazing together!
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-lg font-bold">
            <Link to="/contact">Let’s Connect</Link>
          </button>
          <a href="/AjayGour_Resume.pdf" download className="px-8 py-3 border-2 border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all font-bold text-purple-500">
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
    { title: "10th (85.50%)", school: "Govt Higher Secondary School, Shyampur", desc: "Built strong academic foundation." },
    { title: "12th (65%)", school: "Govt Higher Secondary School, Shyampur", desc: "Developed analytical skills." },
    { title: "B.Tech CSE (8.5 CGPA)", school: "Technocrats Institute of Technology & Science, Bhopal", desc: "Graduation Year: 2026." },
  ];

  return (
    <motion.div className="relative max-w-5xl mx-auto">
      <motion.div
        animate={{ boxShadow: ["0 0 10px #00f2ff", "0 0 30px #a855f7", "0 0 10px #00f2ff"] }}
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
          className={`relative mb-24 flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full shadow-lg animate-pulse z-10"></div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-base-200 p-6 rounded-xl w-full md:w-[45%] border border-cyan-400/30 shadow-lg">
            <h3 className="text-xl font-bold text-cyan-400">{edu.title}</h3>
            <p className="mt-2 opacity-80">{edu.school}</p>
            <p className="mt-3 text-sm opacity-70">{edu.desc}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}