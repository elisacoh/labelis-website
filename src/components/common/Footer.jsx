// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Labelis. All rights reserved.</p>
    </footer>
  );
}
