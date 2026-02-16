import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import resume from "../assets/FullStackResume.pdf"

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  // Theme handler
  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    localStorage.setItem("chit-chatTheme", selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("chit-chatTheme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  // Links array for mapping
  const links = ["About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-[#0B0F19]/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Ajay Gour
        </motion.h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-[#F5F5F5] font-medium">
          {links.map((link) => (
            <motion.li
              key={link}
              className="cursor-pointer hover:text-[#A259FF] transition-colors duration-300 relative"
              whileHover={{ scale: 1.1 }}
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Resume Button */}

          <motion.a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FiDownload size={18} /> Resume
          </motion.a>

          {/* Theme Selector */}
          <select
            className="select select-bordered select-sm min-w-[130px] bg-[#121212] text-[#F5F5F5] border-cyan-400 hover:border-purple-500"
            value={theme}
            onChange={handleThemeChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="claude">Claude</option>
            <option value="spotify">Spotify</option>
            <option value="vscode">VSCode</option>
            <option value="black">Black</option>
            <option value="corporate">Corporate</option>
            <option value="ghibli">Ghibli</option>
            <option value="gourmet">Gourmet</option>
            <option value="luxury">Luxury</option>
            <option value="mintlify">Mintlify</option>
            <option value="pastel">Pastel</option>
            <option value="perplexity">Perplexity</option>
            <option value="shadcn">Shadcn</option>
            <option value="slack">Slack</option>
            <option value="soft">Soft</option>
            <option value="valorant">Valorant</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
