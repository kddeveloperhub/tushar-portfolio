import React, { Suspense } from "react";
import { motion } from "framer-motion";

import coding from "../assets/sample-lottie/coding.json";
import server from "../assets/sample-lottie/server.json";
import cloudHosting from "../assets/sample-lottie/cloud-hosting.json";
import analytics from "../assets/sample-lottie/analytics.json";

import uiAnimation from "../assets/sample-lottie/ui-animation.json";

// Lazy-load Lottie
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
    title: "UI / UX Design",
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
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 max-w-7xl mx-auto text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-500/20 blur-[140px]" />

      {/* Section Header (STATIC) */}
      <div className="relative text-center mb-32">
        <h2 className="text-4xl md:text-5xl font-bold
          bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400
          text-transparent bg-clip-text">
          Services
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          End-to-end solutions designed to build, scale, and maintain
          high-quality digital products.
        </p>
      </div>

      {/* Services Rows */}
      <div className="space-y-32">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: isEven ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-20 items-center"
            >
              {/* Lottie Side */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`flex justify-center ${
                  !isEven ? "md:order-2" : ""
                }`}
              >
                <div
                  className="relative w-64 h-64 rounded-3xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  shadow-xl shadow-indigo-500/10
                  flex items-center justify-center"
                >
                  <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
                    <Lottie
                      animationData={service.animation}
                      loop
                      className="w-52 h-52"
                    />
                  </Suspense>

                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-3xl
                    bg-gradient-to-br from-indigo-500/10 to-pink-500/10
                    opacity-0 hover:opacity-100 transition duration-500 blur-xl"
                  />
                </div>
              </motion.div>

              {/* Content Side */}
              <div className={`${!isEven ? "md:order-1" : ""}`}>
                <h3 className="text-3xl font-semibold mb-6
                  text-transparent bg-clip-text
                  bg-gradient-to-r from-pink-400 to-indigo-400">
                  {service.title}
                </h3>

                <ul className="space-y-4 text-gray-300">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="relative pl-6 leading-relaxed"
                    >
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-indigo-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
