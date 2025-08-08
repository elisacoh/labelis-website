// src/hooks/useScrollIndicator.js
import { useEffect } from "react";

export default function useScrollIndicator(timeout = 1200) {
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      document.body.classList.add("scrolling");
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        document.body.classList.remove("scrolling");
      }, timeout);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [timeout]);
}
