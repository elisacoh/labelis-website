// import React from "react";
// import "./LabModule.css"; // ou LabFolder.css
//
// export default function LabFolder({
//   title,
//   description,
//   status,
//   media,
//   isExpanded,
//   onToggle,
// }) {
//   return (
//     <div
//       className={`lab-folder ${isExpanded ? "expanded" : ""}`}
//       onClick={onToggle}
//     >
//       <div className="lab-tab">
//         <span className="lab-status-tag">{status}</span>
//         <span>{title}</span>
//       </div>
//
//       {isExpanded && (
//         <div className="lab-content">
//           <p>{description}</p>
//           {media && <div className="lab-preview">{media}</div>}
//         </div>
//       )}
//     </div>
//   );
// }
