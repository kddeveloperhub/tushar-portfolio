import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gamingWebsite from "../assets/Capture.png";
import clothingImage from "../assets/Clothing.png";
import gymImage from "../assets/Gym.png";
import pestControlImage from "../assets/Pest Control.png";
import videoEditorImage from "../assets/Video Editor.png";
import phoneRepairImage from "../assets/Phone Repair Website.png";
import chatAiImage from "../assets/Chat Ai inde html.png";

const projects = [
  {
    title: "Gaming Website",
    image: gamingWebsite,
    overview: "A fully responsive gaming website.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["User authentication", "Real-time chat", "Leaderboards"],
    challenges: "Optimizing performance and real-time updates.",
    outcome: "Successfully launched with positive feedback.",
    future: "Adding multiplayer game integration.",
  },
  {
    title: "Clothing Store",
    image: clothingImage,
    overview: "E-commerce site for fashion apparel.",
    technologies: ["WordPress"],
    features: ["Product catalog", "Shopping cart", "Responsive design"],
    challenges: "Ensuring mobile-friendliness and intuitive navigation.",
    outcome: "Seamless shopping experience on all devices.",
    future: "Add payment gateway and order tracking.",
  },
  {
    title: "Gym Website",
    image: gymImage,
    overview: "Website for fitness center memberships and training.",
    technologies: ["WordPress"],
    features: ["Trainer schedules", "Membership plans", "BMI calculator"],
    challenges: "Highlighting services effectively.",
    outcome: "Increased gym sign-ups via online forms.",
    future: "Add online workout videos.",
  },
  {
    title: "Pest Control Services",
    image: pestControlImage,
    overview: "Informational website for pest control company.",
    technologies: ["WordPress"],
    features: ["Service booking", "FAQ section", "Contact form"],
    challenges: "Building trust and authority in the content.",
    outcome: "Higher lead conversions.",
    future: "Integrate customer reviews.",
  },
  {
    title: "Video Editor Portfolio",
    image: videoEditorImage,
    overview: "Showcase site for a freelance video editor.",
    technologies: ["WordPress"],
    features: ["Video gallery", "Client testimonials", "Contact form"],
    challenges: "Smooth video embedding and loading.",
    outcome: "Attracted multiple freelance clients.",
    future: "Add downloadable resume and pricing page.",
  },
  {
    title: "Phone Repair Service",
    image: phoneRepairImage,
    overview: "Business site for a local phone repair shop.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Repair request form", "Google Maps integration"],
    challenges: "Highlighting credibility and services.",
    outcome: "Increased foot traffic from online visibility.",
    future: "Add online diagnostics tool.",
  },
  {
    title: "AI Chat Assistant",
    image: chatAiImage,
    overview: "Demo for an AI-powered chatbot interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Chat UI", "Basic AI replies"],
    challenges: "Ensuring engaging and intuitive chat design.",
    outcome: "Interactive prototype for future expansion.",
    future: "Add NLP and real-time backend integration.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const handleClose = () => {
    setSelectedProject(null);
    setZoomed(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 max-w-6xl mx-auto text-white"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          My Projects
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A selection of real-world projects showcasing design,
          development, and problem-solving skills.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-2">{project.overview}</p>
              <p className="text-xs text-gray-400">
                <strong>Tech:</strong> {project.technologies.join(", ")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative bg-[#0f1028] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden text-white"
            >
              {/* Sticky Header */}
              <div className="sticky top-0 z-50 flex justify-between items-center bg-[#0f1028]/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
                <h3 className="text-lg font-semibold text-indigo-400">
                  {selectedProject.title}
                </h3>

                <div className="flex gap-2">
                  <button
                    onClick={() => setZoomed(!zoomed)}
                    className="px-3 py-1 text-sm rounded bg-indigo-600 hover:bg-indigo-700"
                  >
                    {zoomed ? "Zoom Out" : "Zoom In"}
                  </button>
                  <a
                    href={selectedProject.image}
                    download
                    className="px-3 py-1 text-sm rounded bg-green-600 hover:bg-green-700"
                  >
                    Download
                  </a>
                  <button
                    onClick={handleClose}
                    className="px-3 py-1 text-sm rounded bg-red-600 hover:bg-red-700"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-60px)] p-6">
                <div className="flex justify-center mb-6">
                  <motion.img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    animate={{ scale: zoomed ? 1.5 : 1 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-lg max-h-[70vh] object-contain"
                  />
                </div>

                <div className="space-y-2 text-sm md:text-base text-gray-300">
                  <p><strong>Overview:</strong> {selectedProject.overview}</p>
                  <p><strong>Technologies:</strong> {selectedProject.technologies.join(", ")}</p>
                  <p><strong>Features:</strong> {selectedProject.features.join(", ")}</p>
                  <p><strong>Challenges:</strong> {selectedProject.challenges}</p>
                  <p><strong>Outcome:</strong> {selectedProject.outcome}</p>
                  <p><strong>Future:</strong> {selectedProject.future}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
