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

    // Configuration pour Safari et mobile
    video.playsInline = true;
    video.muted = true;
    video.autoplay = true;
    
    // Force le chargement sur mobile
    video.load();
    const handleTimeUpdate = () => {
      if (video.currentTime >= 5 && !hasStartedFade) {
        setHasStartedFade(true);
        fadeRef.current.classList.add("fade-visible");
        setFadeOut(true); // start fade-out animation

        // ⏱️ schedule onFinish after 1.5s (same as white fade duration)
        setTimeout(onFinish, 1500);
      }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape" && !hasStartedFade) {
            triggerFadeOut();
        }
    }

    const handleTouchStart = (e) => {
      if (!hasStartedFade) {
        triggerFadeOut();
      }
    }
    const triggerFadeOut = () => {
        setHasStartedFade(true);
        fadeRef.current?.classList.add("fade-visible");
        setFadeOut(true);
        setTimeout(onFinish, 1500);
    }

    // Fallback si la vidéo ne se charge pas (notamment sur mobile)
    const handleError = () => {
      console.log("Video failed to load, skipping intro");
      triggerFadeOut();
    }

    const handleCanPlay = () => {
      video.play().catch(() => {
        // Si autoplay échoue, on passe directement à la suite
        triggerFadeOut();
      });
    }
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("error", handleError);
    video.addEventListener("canplay", handleCanPlay);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("error", handleError);
      video.removeEventListener("canplay", handleCanPlay);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
    };
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
        webkit-playsinline="true"
        preload="auto"
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
