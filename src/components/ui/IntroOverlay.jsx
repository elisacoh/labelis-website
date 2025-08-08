import React, { useEffect, useRef, useState } from "react";
import "./IntroOverlay.css";

export default function IntroOverlay({ onFinish }) {
  const videoRef = useRef(null);
  const fadeRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [hasStartedFade, setHasStartedFade] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5 && !hasStartedFade) {
        setHasStartedFade(true);
        fadeRef.current.classList.add("fade-visible");
        setFadeOut(true); // start fade-out animation

        // ⏱️ schedule onFinish after 1.5s (same as white fade duration)
        setTimeout(onFinish, 1500);
      }
    };

    const handleKEyDown = (e) => {
        if (e.key === "Escape" && !hasStartedFade) {
            triggerFadeOut();
        }
    }

    const triggerFadeOut = () => {
        setHasStartedFade(true);
        fadeRef.current?.classList.add("fade-visible");
        setFadeOut(true);
        setTimeout(onFinish, 1500);
    }

    video.addEventListener("timeupdate", handleTimeUpdate);
    window.addEventListener("keydown", handleKEyDown)
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [onFinish, hasStartedFade]);

  return (
    <div className={`intro-overlay ${fadeOut ? "fade-out" : ""}`}>
      <video
        ref={videoRef}
        className="intro-video"
        src="/intro-smoke.mp4"
        autoPlay
        muted
        playsInline
      />

      <div
        ref={fadeRef}
        className={`white-fade ${fadeOut ? "fade-out-white" : ""}`}
      />

      <div className={`intro-text ${fadeOut ? "text-fade-out" : ""}`}>
        <h1 className="brand">Labelis </h1>
        <h2 className="byline">By Elisa Cohen</h2>
      </div>
    </div>
  );
}
