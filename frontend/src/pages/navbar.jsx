import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import resume from "../assets/FullStackResume.pdf";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolioTheme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    localStorage.setItem("portfolioTheme", selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Ajay Gour
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-base-content font-medium">
          <li>
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-primary">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-primary">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <FiDownload /> Resume
          </a>

          <select
            className="select select-bordered select-sm"
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
