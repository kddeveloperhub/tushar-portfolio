import React, { useState, useEffect } from 'react';
import gamingWebsite from '../assets/Capture.png';
import clothingImage from '../assets/Clothing.png';
import gymImage from '../assets/Gym.png';
import pestControlImage from '../assets/Pest Control.png';
import videoEditorImage from '../assets/Video Editor.png';
import phoneRepairImage from '../assets/Phone Repair Website.png';
import chatAiImage from '../assets/Chat Ai inde html.png';

const projects = [
  {
    title: 'Gaming Website',
    image: gamingWebsite,
    overview: 'A fully responsive gaming website.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['User authentication', 'Real-time chat', 'Leaderboards'],
    challenges: 'Optimizing performance and real-time updates.',
    outcome: 'Successfully launched with positive feedback.',
    future: 'Adding multiplayer game integration.',
  },
  {
    title: 'Clothing Store',
    image: clothingImage,
    overview: 'E-commerce site for fashion apparel.',
    technologies: ['WordPress'],
    features: ['Product catalog', 'Shopping cart', 'Responsive design'],
    challenges: 'Ensuring mobile-friendliness and intuitive navigation.',
    outcome: 'Seamless shopping experience on all devices.',
    future: 'Add payment gateway and order tracking.',
  },
  {
    title: 'Gym Website',
    image: gymImage,
    overview: 'Website for fitness center memberships and training.',
    technologies: ['WordPress'],
    features: ['Trainer schedules', 'Membership plans', 'BMI calculator'],
    challenges: 'Highlighting services effectively.',
    outcome: 'Increased gym sign-ups via online forms.',
    future: 'Add online workout videos.',
  },
  {
    title: 'Pest Control Services',
    image: pestControlImage,
    overview: 'Informational website for pest control company.',
    technologies: ['WordPress'],
    features: ['Service booking', 'FAQ section', 'Contact form'],
    challenges: 'Building trust and authority in the content.',
    outcome: 'Higher lead conversions.',
    future: 'Integrate customer reviews.',
  },
  {
    title: 'Video Editor Portfolio',
    image: videoEditorImage,
    overview: 'Showcase site for a freelance video editor.',
    technologies: ['WordPress'],
    features: ['Video gallery', 'Client testimonials', 'Contact form'],
    challenges: 'Smooth video embedding and loading.',
    outcome: 'Attracted multiple freelance clients.',
    future: 'Add downloadable resume and pricing page.',
  },
  {
    title: 'Phone Repair Service',
    image: phoneRepairImage,
    overview: 'Business site for a local phone repair shop.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Repair request form', 'Google Maps integration'],
    challenges: 'Highlighting credibility and services.',
    outcome: 'Increased foot traffic from online visibility.',
    future: 'Add online diagnostics tool.',
  },
  {
    title: 'AI Chat Assistant',
    image: chatAiImage,
    overview: 'Demo for an AI-powered chatbot interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Chat UI', 'Basic AI replies'],
    challenges: 'Ensuring engaging and intuitive chat design.',
    outcome: 'Interactive prototype for future expansion.',
    future: 'Add NLP and real-time backend integration.',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const handleClose = () => {
    setSelectedProject(null);
    setZoomed(false);
  };

  const toggleZoom = () => {
    setZoomed((prev) => !prev);
  };

  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="my-20 max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-semibold mb-12">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#12123e] rounded-lg shadow hover:shadow-indigo-500 transition cursor-pointer"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
            aria-label={`View details for ${project.title}`}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="rounded-t-lg h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2 hover:text-indigo-400 transition-colors">{project.title}</h3>
              <p className="text-sm text-white mb-2">{project.overview}</p>
              <p className="text-xs text-gray-300">
                <strong>Tech:</strong> {project.technologies.join(', ')}
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-center p-4">
              <p>{project.overview}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 overflow-auto px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Project details: ${selectedProject.title}`}
        >
          <div className="relative bg-gray-900 p-6 rounded-lg max-w-3xl w-full text-left shadow-xl transition-all duration-300">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-8 right-4 text-white text-3xl hover:text-red-500"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Zoom Button */}
            <button
              onClick={toggleZoom}
              className="absolute top-8 left-4 text-white text-sm px-3 py-1 bg-indigo-500 hover:bg-indigo-700 rounded"
            >
              {zoomed ? 'Zoom Out' : 'Zoom In'}
            </button>

            {/* Download Button */}
            <a
              href={selectedProject.image}
              download
              className="absolute top-8 left-32 text-white text-sm px-3 py-1 bg-green-600 hover:bg-green-800 rounded"
            >
              Download
            </a>

            <h3 className="text-2xl font-bold text-indigo-400 mt-12 mb-4">{selectedProject.title}</h3>

            <div className="flex justify-center mb-4 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                loading="lazy"
                className={`rounded-lg transition-transform duration-300 ${
                  zoomed ? 'scale-150' : 'scale-100'
                } max-h-[80vh] object-contain`}
              />
            </div>

            <div className="text-white space-y-2 text-sm md:text-base">
              <p><strong>Overview:</strong> {selectedProject.overview}</p>
              <p><strong>Technologies used:</strong> {selectedProject.technologies.join(', ')}</p>
              <p><strong>Key features:</strong> {selectedProject.features.join(', ')}</p>
              <p><strong>Challenges:</strong> {selectedProject.challenges}</p>
              <p><strong>Outcome:</strong> {selectedProject.outcome}</p>
              <p><strong>Future improvements:</strong> {selectedProject.future}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
