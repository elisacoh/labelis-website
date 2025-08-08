// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Navbar({ hidden }) {
  return (
    <nav className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
      <ul className="nav-links">
        <li><span onClick={() => scrollToSection("home")}>[Home]</span></li>
        <li><span onClick={() => scrollToSection("lab")}>[Lab]</span></li>
        <li><span onClick={() => scrollToSection("about")}>[About]</span></li>
        <li><span onClick={() => scrollToSection("contact")}>[Contact]</span></li>
      </ul>
    </nav>
  );
}

