import React from "react";
import "./Home.css";
import TypeWriter from "../ui/TypeWriter.jsx";

export default function Home() {
  return (
    <section className="section home-container" id="home">
      <div className="home-content">
        <h1 className="brand">Labelis</h1>
        <h2 className="byline">by Elisa Cohen</h2>
        <div className="subtitle">
            <TypeWriter text="Welcome to my creative playground..." speed={70} />
        </div>
        <div>
            <a href="#lab" className="explore-button">→ Explore the Lab</a>
        </div>
      </div>
    </section>
  );
}
