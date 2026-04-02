import React, { useState } from "react";
import { motion } from "framer-motion";

// images
import gamingWebsite from "../assets/Capture.png";
import phoneRepairImage from "../assets/Phone Repair Website.png";
import chatAiImage from "../assets/Chat Ai index html.png";
import ayukaImage from "../assets/ayuka.png";
import schoolImage from "../assets/school.png";
import excelImage from "../assets/excel.png";
import blogImage from "../assets/blog.png";
import saiImage from "../assets/sai.png";

// videos
import excelVideo from "../assets/excel.mp4";
import blogVideo from "../assets/blogging.mp4";
import saiVideo from "../assets/saikumar.mp4";
import schoolVideo from "../assets/school.mp4";
import ayukaVideo from "../assets/ayuka.mp4";

// add one common thumbnail

// live image
import clothingImage from "../assets/cloths.png";

const categories = ["All", "Full Stack", "Frontend", "Static"];

const projects = [
  // STATIC
  {
    title: "Gaming Website",
    type: "static",
    category: "Static",
    image: gamingWebsite,
    link: "/projects/gaming/index.html",
    overview: "A fully responsive gaming website.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Phone Repair Service",
    type: "static",
    category: "Static",
    image: phoneRepairImage,
    link: "/projects/repair/index.html",
    overview: "Business site for a local phone repair shop.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "AI Chat Assistant",
    type: "static",
    category: "Static",
    image: chatAiImage,
    link: "/projects/chat-ai/index.html",
    overview: "Demo for an AI chatbot UI.",
    tech: ["HTML", "CSS", "JavaScript"],
  },

  // VIDEO PROJECTS (🔥 no autoplay now)
  {
    title: "Excel Analytics Platform",
    type: "video",
    image: excelImage,
    category: "Full Stack",
    video: excelVideo,
    overview: "Full stack analytics platform with dashboard.",
    tech: ["React", "Firebase"],
  },
  {
    title: "Blogging Platform",
    type: "video",
    image: blogImage,
    category: "Full Stack",
    video: blogVideo,
    overview: "Full stack blogging system with authentication.",
    tech: ["React", "Firebase"],
  },
  {
    title: "Sai Kumar Website",
    type: "video",
    image: saiImage,
    category: "Frontend",
    video: saiVideo,
    overview:
      "Developed a modern business website using React. Currently inactive.",
    tech: ["React"],
  },
  {
    title: "School Website",
    type: "video",
    image: schoolImage,
    category: "Frontend",
    video: schoolVideo,
    overview: "Developed school website UI using React.",
    tech: ["React"],
  },
  {
    title: "Ayuka Developers Website",
    type: "video",
    image: ayukaImage,
    category: "Frontend",
    video: ayukaVideo,
    overview:
      "Selected by Ayuka Developers. Built storytelling-based UI.",
    tech: ["React"],
  },

  // LIVE
  {
    title: "Clothing Website",
    type: "live",
    category: "Full Stack",
    image: clothingImage,
    live: "https://styleaura00.netlify.app/",
    overview: "Live e-commerce clothing website.",
    tech: ["React", "Firebase"],
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto text-white">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          My Projects
        </h2>
      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border ${active === cat
                ? "bg-indigo-600 border-indigo-600"
                : "border-white/20"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filtered.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
          >
            {/* MEDIA */}
            <div className="h-48 overflow-hidden relative">

              {/* IMAGE / THUMB */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">

                {project.type === "static" && (
                  <span
                    onClick={() => window.open(project.link, "_blank")}
                    className="px-4 py-2 bg-indigo-600 rounded-full text-sm cursor-pointer"
                  >
                    🚀 View Site
                  </span>
                )}

                {project.type === "live" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 rounded-full text-sm"
                  >
                    🌐 Live Demo
                  </a>
                )}

                {project.type === "video" && (
                  <span
                    onClick={() => setActiveVideo(project.video)}
                    className="px-4 py-2 bg-purple-600 rounded-full text-sm cursor-pointer"
                  >
                    ▶ Play Video
                  </span>
                )}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                {project.overview}
              </p>
              <p className="text-xs text-gray-400">
                <strong>Tech:</strong> {project.tech.join(", ")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <video
            key={activeVideo}
            src={activeVideo}
            controls
            autoPlay
            className="max-w-4xl w-full rounded-lg"
          />

          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 bg-red-600 px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}