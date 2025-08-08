import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./LabModule.css";
import ReactMarkdown from 'react-markdown';

function FullDescription({ path }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then(setContent);
  }, [path]);

  return (
    <div className="prose max-w-full overflow-y-auto h-[300px] px-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default function LabModule({
  title,
  description,
  fullDescription,
  status,
  media,
  isExpanded,
  onClick,
  index,
  parentRef,
  containerRef,
  expandedIndex,
  isAboveOrBelow,
  isHiddenTab,

}) {

  const handleClick = () => {
    const wasExpanded = isExpanded;
    const container = containerRef?.current;
    const section = parentRef?.current;
    if (!container || !section) return;

    const folders = Array.from(section.querySelectorAll(".lab-folder"));
    const currentFolder = folders[index];
    const tabHeight = currentFolder.querySelector(".lab-tab")?.offsetHeight ?? 32;


    // 🧼 Si un autre était ouvert, on supprime sa height forcée
    if (expandedIndex !== null && expandedIndex !== index) {
      const previousFolder = folders[expandedIndex];
      if (previousFolder) {
        previousFolder.style.height = "";
      }
    }

    onClick(); // toggle

    setTimeout(() => {
      const navOffset = 60;

      if (wasExpanded) {
        currentFolder.style.height = ""; // 🧹 toujours reset height
        window.scrollTo({
          top: -10,
          behavior: "smooth",
        });
        return;
      }

      // 👉 logique pour le premier uniquement pour l’instant
      if (index === 0 && folders.length > 1) {
        const containerHeight = container.clientHeight;
        currentFolder.style.height = `${containerHeight - 64}px`;
        container.scrollTo({
          top:0,
          behavior: "smooth",
        });
      }
      else if (index > 0 && index < folders.length - 1) {
      const above = folders[index - 1];
      const below = folders[index + 1];

      const aboveTop = above.offsetTop;
      const belowBottom = below.offsetTop + below.offsetHeight;
      const centerTarget = (aboveTop + belowBottom) / 2;

      const offset = 60 + 20; // navbar + petit espace

      container.scrollTo({
        top:0,
        behavior: "smooth",
      });

      // Optionnel : ajuster hauteur pour qu'il prenne bien l'espace visible
      const containerHeight = container.clientHeight;
      currentFolder.style.height = `${containerHeight - 64}px`;
    }

    }, 50);

  };



  // const handleClick = () => {
  //   const wasExpanded = isExpanded;
  //   onClick(); // toggle expand/collapse
  //   console.log("window height:", window.innerHeight);
  //   console.log("total scroll height:", document.body.scrollHeight);
  //   const container = containerRef?.current;
  //
  //
  //   setTimeout(() => {
  //     const folder = containerRef.current;
  //     const section = parentRef?.current;
  //     if (!folder || !section) return;
  //
  //     const folders = Array.from(section.querySelectorAll(".lab-folder"));
  //     const totalFolders = folders.length;
  //     const navOffset = 60;
  //
  //     if (wasExpanded) {
  //       // 🔄 Si on vient de fermer => recentre la section globale
  //       const sectionTop = section.offsetTop;
  //       window.scrollTo({
  //         top: sectionTop - navOffset,
  //         behavior: "smooth",
  //       });
  //       return;
  //     }
  //
  //     // 📂 Cas d'ouverture
  //     if (index === 0 && totalFolders > 1) {
  //       // Premier : scroll pour voir lui + celui d'après
  //       const currentTop = folder.offsetTop;
  //       container.scrollTo({
  //         top: currentTop - navOffset,
  //         behavior: "smooth",
  //       });
  //     } else if (index === totalFolders - 1 && totalFolders > 1) {
  //       // Dernier : scroll pour voir lui + celui d'avant
  //       const prev = folders[totalFolders - 2];
  //       const prevTop = prev.offsetTop;
  //       container.scrollTo({
  //         top: prevTop - navOffset,
  //         behavior: "smooth",
  //       });
  //     } else {
  //       // Milieu : scroll pour centrer lui + au-dessus + en-dessous
  //       const above = folders[index - 1];
  //       const below = folders[index + 1];
  //       const aboveTop = above.offsetTop;
  //       const belowBottom = below.offsetTop + below.offsetHeight;
  //       const centerTarget = (aboveTop + belowBottom) / 2;
  //
  //       container.scrollTo({
  //         top: centerTarget - window.innerHeight / 2,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 50); // laisse le DOM s’ouvrir proprement
  // };

  return (
    <div
      ref={containerRef}
      className={`lab-folder ${isExpanded ? "expanded" : ""}`}
      onClick={handleClick}
    >
      <div
        className={`lab-tab ${isHiddenTab ? "hidden-tab" : ""} ${isAboveOrBelow ? "neighbor-tab" : ""}`}
      >
        <span>{title}</span>
        <span className="lab-status-tag">{status}</span>
        <span>{description}</span>
      </div>

      {isExpanded && (
        <div className="lab-content">
          <div className="full-description markdown-content">
            {typeof fullDescription === "string" && fullDescription.endsWith(".md") ? (
              <FullDescription path={fullDescription} />
            ) : (
              <p>{fullDescription}</p>
            )}
          </div>

          {media?.[0] && (
            <motion.img
              src={media[0]}
              alt="project visual"
              layoutId={`preview-${index}`}
              className="lab-hidden-preview"
              style={{
                width: "100px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "8px",
                opacity: 0,
                position: "absolute",
                pointerEvents: "none",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
