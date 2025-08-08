import React, {useEffect, useRef} from "react";
import "./Lab.css";
import LabModule from "../ui/LabModule.jsx";
import { motion } from "framer-motion";
import labProjects from "../data/labProjects";



export default function Lab({ expandedIndex, setExpandedIndex }) {
  const previousRef = useRef(null);
  const projects = labProjects;
  const labSectionRef = useRef();
  const labContainerRef = useRef();

  const hasMedia =
    expandedIndex !== null &&
    Array.isArray(projects[expandedIndex]?.media) &&
    projects[expandedIndex].media.length > 0;


  useEffect(() => {
    const folders = document.querySelectorAll(".lab-folder");
    const containerHeight = document.querySelector(".lab-container")?.clientHeight || window.innerHeight;
    const minHeight = 60;

    const nbClosed = projects.length - (expandedIndex !== null ? 1 : 0);
    const availableHeight = containerHeight - (expandedIndex !== null ? 300 : 0);
    const newHeight = Math.max(minHeight, availableHeight / nbClosed);

    folders.forEach((folder, index) => {
      if (index === expandedIndex) {
        folder.style.setProperty("--folder-height", "auto");
      } else {
        folder.style.setProperty("--folder-height", `${newHeight}px`);
      }
    });
  }, [expandedIndex, projects.length]);

  return (
    <section className="lab-section flex items-center gap-0" id="lab" ref={labSectionRef} data-scroll-section>
      <div className={`lab-left ${hasMedia  ? "expanded" : ""}`} data-scroll data-scroll-speed="-2">
        <div className="lab-text">
          <span className="text-top">Big ideas grow from</span>
          <span className="text-bottom">tiny lines of code</span>
        </div>

      {hasMedia && (
        <motion.div
          className="lab-preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
      >
    <motion.img
      src={projects[expandedIndex].media[0]}
      alt="preview"
      layoutId={`preview-${expandedIndex}`}
      initial={{
        scaleX: 0.2,
        scaleY: 0.8,
        opacity: 0,
        y: 100,
        rotateZ: -20,
      }}
      animate={{
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        y: 0,
        rotateZ: 0,
      }}
      transition={{
        duration: 1.2,
        ease: [0.2, 0.8, 0.2, 1],
        delay: 0.2,
      }}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "0px",
      }}
    />
  </motion.div>
)}



      </div>

      <div className="lab-container" ref={labContainerRef}>
        <div className={`project-grid ${expandedIndex !== null ? "no-gap" : ""}`}>
          {projects.map((p, i) => (
            <LabModule
              key={i}
              index={i}
              title={p.title}
              description={p.description}
              fullDescription={p.fullDescription}
              status={p.status}
              media={p.media}
              isExpanded={expandedIndex === i}
              onClick={() => setExpandedIndex((prev) => (prev === i ? null : i))}
              parentRef = {labSectionRef}
              containerRef={labContainerRef}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
              isAboveOrBelow={expandedIndex === i - 1 || expandedIndex === i + 1}
              isHiddenTab={
                expandedIndex !== null &&
                expandedIndex !== i &&
                expandedIndex !== i - 1 &&
                expandedIndex !== i + 1
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
