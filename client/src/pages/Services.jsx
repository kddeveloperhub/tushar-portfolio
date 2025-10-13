import React, { Suspense } from "react";
import coding from "../assets/sample-lottie/coding.json";
import server from "../assets/sample-lottie/server.json";
import cloudHosting from "../assets/sample-lottie/cloud-hosting.json";
import analytics from "../assets/sample-lottie/analytics.json";
import support from "../assets/sample-lottie/support.json";
import uiAnimation from "../assets/sample-lottie/ui-animation.json";

// ✅ Lazy-load Lottie for performance
const Lottie = React.lazy(() => import("lottie-react"));

const services = [
  {
    title: "Website Development",
    points: [
      "Custom Website Design: Tailored designs to fit brand identity.",
      "Responsive Web Development: Mobile-friendly designs that adapt to all devices.",
    ],
    animation: coding,
  },
  {
    title: "Front-End Development",
    points: [
      "HTML/CSS Development: Clean, semantic code for a solid foundation.",
      "JavaScript Development: Interactive elements and features.",
    ],
    animation: uiAnimation,
  },
  {
    title: "Back-End Development",
    points: [
      "Server-Side Programming: APIs, databases, and application logic.",
      "Content Management Systems (CMS): WordPress, Drupal, etc.",
    ],
    animation: server,
  },
  {
    title: "Web Application Development",
    points: [
      "Single Page Applications (SPAs): Fast, seamless user experiences.",
      "Progressive Web Apps (PWAs): Enhanced mobile-like functionality.",
    ],
    animation: cloudHosting,
  },
  {
    title: "UI/UX Design",
    points: [
      "User Research: Understanding user needs and behavior.",
      "Interface Design: Modern, visually pleasing, and functional designs.",
    ],
    animation: uiAnimation,
  },
  {
    title: "SEO Optimization",
    points: [
      "On-Page SEO: Optimized structure and content.",
      "Technical SEO: Performance and accessibility improvements.",
    ],
    animation: analytics,
  },
  {
    title: "Website Maintenance",
    points: [
      "Regular Updates: Keep content and technology fresh.",
      "Security Monitoring: Protect against vulnerabilities.",
    ],
    animation: support,
  },
  {
    title: "Hosting & Domain Services",
    points: [
      "Domain Registration: Choose and register easily.",
      "Reliable Hosting Solutions: Scalable and secure packages.",
    ],
    animation: cloudHosting,
  },
  {
    title: "Consultation Services",
    points: [
      "Project Planning: Define clear goals and timelines.",
      "Technology Consulting: Choose the right tech stack.",
    ],
    animation: support,
  },
  {
    title: "Performance Optimization",
    points: [
      "Speed Optimization: Improve load times.",
      "Code Optimization: Cleaner and more efficient code.",
    ],
    animation: analytics,
  },
  {
    title: "Analytics & Reporting",
    points: [
      "Analytics Setup: Track key metrics effectively.",
      "Performance Reports: Regular updates on progress.",
    ],
    animation: analytics,
  },
  {
    title: "Training & Support",
    points: [
      "User Training: Empower teams to manage content.",
      "Ongoing Support: Always here when needed.",
    ],
    animation: support,
  },
];

export default function Services() {
  return (
    <section id="services" className="my-20 flex flex-col items-center text-center">
      {/* Section Title */}
      <button
        className="text-4xl font-semibold mb-16 px-10 py-3 rounded-full text-white shadow-lg shadow-pink-500/20"
        style={{
          background:
            "radial-gradient(85% 120% at 50% 125%, #ff3bd4 0.74%, #7130c3 65%, #0f1021 100%)",
        }}
      >
        Services
      </button>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full px-6">
        {services.map(({ title, points, animation }) => (
          <div
            key={title}
            className="group p-8 rounded-2xl shadow-lg shadow-indigo-800/20 border border-indigo-900/30 
                       hover:border-pink-500/40 hover:shadow-pink-500/20 transition-all duration-300 
                       flex flex-col items-center bg-gradient-to-b from-[#0f1028] to-[#12123e]"
          >
            {/* Animation Container */}
            <div className="relative w-40 h-40 mb-6 flex items-center justify-center overflow-hidden rounded-xl bg-[#191945] group-hover:bg-[#22225c] transition">
              <Suspense fallback={<div className="text-white text-sm">Loading...</div>}>
                <Lottie
                  animationData={animation}
                  loop={true}
                  className="w-36 h-36 scale-110 group-hover:scale-125 transition-transform duration-500"
                />
              </Suspense>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#ff3bd4] transition-colors duration-300">
              {title}
            </h3>

            {/* Points */}
            <ul className="list-disc list-inside space-y-2 text-left w-full max-w-xs text-gray-300">
              {points.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
