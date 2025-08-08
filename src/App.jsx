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
  const [labExpandedIndex, setLabExpandedIndex] = useState(null);

  return (
    <>
      {showIntro && <IntroOverlay onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
          <Navbar />
          <main>
            <Home />
            <Lab expandedIndex={labExpandedIndex} setExpandedIndex={setLabExpandedIndex} />
            <About />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}

export default App;
