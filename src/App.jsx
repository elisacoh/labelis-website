// src/App.jsx
import React, { useEffect, useState } from "react";
import useScrollIndicator from "./hooks/useScrollIndicator";

import MouseBubble from "./components/ui/MouseBubble.jsx"
import Navbar from './components/common/Navbar.jsx';
import Home from "./components/sections/Home.jsx";
import About from "./components/sections/About.jsx";
import Lab from "./components/sections/Lab.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from './components/common/Footer.jsx';
import IntroOverlay from "./components/ui/IntroOverlay.jsx";

import './App.css';

function App() {
  useScrollIndicator();
  const [showIntro, setShowIntro] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [labExpandedIndex, setLabExpandedIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setNavbarHidden(currentScrollPos > prevScrollPos && currentScrollPos > 80);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);


  // Scroll snapping activation
  useEffect(() => {
    if (!showIntro) {
      document.body.classList.add('snap-enabled');
    }
    return () => document.body.classList.remove('snap-enabled');
  }, [showIntro]);

  return (
    <>
      {showIntro && <IntroOverlay onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
          <Navbar hidden={labExpandedIndex !== null} />


          <main className="snap-container" data-scroll-container>
            <section className="snap-section"><Home /></section>
            <section className="snap-section"><Lab expandedIndex={labExpandedIndex} setExpandedIndex={setLabExpandedIndex} /></section>
            <section className="snap-section"><About /></section>
            <section className="snap-section"><Contact /></section>
          </main>

          {/*<Footer />*/}

          <div className="scroll-arrows">
            <div className="arrow up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</div>
            <div className="arrow down" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>↓</div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
