// src/components/ui/MouseBubble.jsx
import React, { useEffect } from "react";
import { gsap } from "gsap";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"; // si dispo

import "./MouseBubble.css";

export default function MouseBubble() {
  useEffect(() => {
    const layers = document.querySelectorAll(".layer");
    const length = layers.length;

    const circles = document.querySelectorAll(".layer .basicShape");

    gsap.set(".layer .basicShape", {
      transformOrigin: "center center",
      scale: 2.3,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    layers.forEach((layer, i) => {
      gsap.to(circles[i], {
        duration: Math.random() * 1 + 1,
        yoyo: true,
        repeat: -1,
        scale: 1.3,
        ease: "sine.inOut",
        delay: i * 0.2,
      });

      gsap.to(layer, {
        scale: 1 + 0.1 * (length - i),
        duration: 0.1,
      });
    });

    const onMove = (e) => {
      gsap.set(".layer", {
        transformOrigin: `${e.clientX}px ${e.clientY}px`,
      });

      gsap.to(".layer .basicShape", {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="bubble-bg">
      {[...Array(3)].map((_, i) => (
        <div className="layer" key={i}>
          <svg viewBox="0 0 100 100" className="shape">
            <circle cx="50" cy="50" r="40" className="basicShape" fill="red" />
          </svg>
        </div>
      ))}
    </div>
  );
}
