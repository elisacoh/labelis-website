import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const useLocoScroll = (start = true) => {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("[data-scroll-container]");
    if (!scrollEl) return;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08, // Vitesse du scroll
    });

    return () => {
      scroll.destroy();
    };
  }, [start]);
};

export default useLocoScroll;
