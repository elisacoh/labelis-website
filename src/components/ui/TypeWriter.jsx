import { useState, useEffect } from "react";
import "./TypeWriter.css";

export default function TypeWriter({ text, speed = 100 }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false); // 👈 nouvel état pour savoir quand c'est fini

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setDone(true); // 👈 une fois terminé
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="typewriter">
      {displayed}
      {!done && <span className="cursor">|</span>} {/* 👈 on affiche le curseur que si pas fini */}
    </span>
  );
}
