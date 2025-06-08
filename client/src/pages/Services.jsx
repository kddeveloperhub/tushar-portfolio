import React, { Suspense } from 'react';
import coding from '../assets/sample-lottie/coding.json';
import server from '../assets/sample-lottie/server.json';
import cloudHosting from '../assets/sample-lottie/cloud-hosting.json';
import analytics from '../assets/sample-lottie/analytics.json';
import support from '../assets/sample-lottie/support.json';
import uiAnimation from '../assets/sample-lottie/ui-animation.json';

// Lazy-load Lottie
const Lottie = React.lazy(() => import('lottie-react'));

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
      "Content Management Systems (CMS): Custom solutions using platforms like WordPress, Drupal, etc.",
    ],
    animation: server,
  },
  {
    title: "Web Application Development",
    points: [
      "Single Page Applications (SPAs): Efficient and fast-loading web apps.",
      "Progressive Web Apps (PWAs): Enhanced mobile experiences.",
    ],
    animation: cloudHosting,
  },
  {
    title: "UI/UX Design",
    points: [
      "User Experience Research: Understanding user needs and behavior.",
      "User Interface Design: Aesthetically pleasing and functional designs.",
    ],
    animation: uiAnimation,
  },
  {
    title: "SEO Optimization",
    points: [
      "On-Page SEO: Optimizing content and structure for search engines.",
      "Technical SEO: Ensuring the website meets technical criteria for indexing.",
    ],
    animation: analytics,
  },
  {
    title: "Website Maintenance",
    points: [
      "Regular Updates: Keeping the site current with content and technology.",
      "Security Monitoring: Protecting against vulnerabilities and attacks.",
    ],
    animation: support,
  },
  {
    title: "Hosting & Domain Services",
    points: [
      "Domain Registration: Assistance with choosing and registering a domain.",
      "Web Hosting Solutions: Reliable hosting packages tailored to needs.",
    ],
    animation: cloudHosting,
  },
  {
    title: "Consultation Services",
    points: [
      "Project Planning: Helping clients define their project goals and scope.",
      "Technology Consulting: Advising on the best technologies for specific projects.",
    ],
    animation: support,
  },
  {
    title: "Performance Optimization",
    points: [
      "Speed Optimization: Techniques to improve loading times.",
      "Code Optimization: Streamlining code for better performance.",
    ],
    animation: analytics,
  },
  {
    title: "Analytics & Reporting",
    points: [
      "Website Analytics Setup: Implementing tools to track performance.",
      "Performance Reporting: Regular updates on website metrics and improvements.",
    ],
    animation: analytics,
  },
  {
    title: "Training & Support",
    points: [
      "User Training: Teaching clients how to manage their websites.",
      "Ongoing Support: Available assistance post-launch.",
    ],
    animation: support,
  },
];

export default function Services() {
  return (
    <section id="services" className="my-20 flex flex-col items-center text-center">
      <button
        className="text-4xl font-semibold mb-12 px-8 py-3 rounded-full text-white"
        style={{
          background: 'radial-gradient(85% 120% at 50% 125%, #ff3bd4 0.74%, #7130c3 65%, #0f1021 100%)',
        }}
      >
        Services
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {services.map(({ title, points, animation }) => (
          <div
            key={title}
            className="p-6 rounded-lg shadow hover:shadow-indigo-500 transition relative flex flex-col items-center"
            style={{ backgroundColor: '#12123e' }}
          >
            <div className="w-24 h-24 mb-4">
              <Suspense fallback={<div className="text-white">Loading...</div>}>
                <Lottie animationData={animation} loop={true} />
              </Suspense>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white transition-colors duration-300 hover:text-[#ff3bd4]">
              {title}
            </h3>

            <ul className="list-disc list-inside space-y-2 text-left w-full max-w-xs text-white">
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
