import { motion } from "framer-motion";
import "./WaveIntro.css";

export default function WaveIntro() {
  const ripples = [0, 1, 2, 3, 4, 5]; // 3 cercles

  return (
    <div className="wave-intro-overlay">
      {ripples.map((i) => (
        <motion.div
          key={i}
          className={`ripple-circle`}
          // Au lieu de modifier la taille initiale, tu fixes une taille commune
        style={{
          width: "300px",
          height: "300px",
        }}

        // Tu animes avec scale: 0 → 1.5 ou 2 pour créer l’expansion
        initial={{ scale: 0, opacity: 0.6 }}
        animate={{ scale: 2.5, opacity: 0 }}
transition={{
  duration: 3,
  delay: i * 0.5,
  repeat: Infinity,
}}

        />
      ))}
    </div>
  );
}
