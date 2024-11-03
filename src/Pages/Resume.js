// src/Resume.js
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import resumeFile from "../assets/resume/SOFTWARE-ENGINEER-ABDUL-BASIT.pdf";

const Resume = () => {
  // Initialize the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* <h2>My Resume</h2> */}
      <div
        style={{ margin: "auto", maxWidth: "80%", border: "1px solid #ddd" }}
      >
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
        >
          <Viewer
            fileUrl={resumeFile}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
      <button
        onClick={() => window.open(resumeFile)}
        style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
