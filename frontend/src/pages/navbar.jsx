import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);

    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={() => scrollTo("#home")}>
          <span className="logo-mark">A</span>

          <div>
            <span className="logo-name">Ajay Gour</span>
            <span className="logo-sub">Developer / Founder</span>
          </div>
        </Link>

        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://github.com/AjayGour09"
            target="_blank"
            rel="noreferrer"
            className="nav-social"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ajay-gour09/"
            target="_blank"
            rel="noreferrer"
            className="nav-social"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="nav-cta"
          >
            Let's Talk <FaArrowRight />
          </a>
        </nav>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}