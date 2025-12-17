import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
} from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";

// Assets
import resumePng from "../assets/resume.jpg";
import cert10thPdf from "../assets/certificate_10th.pdf";
import cert12thPdf from "../assets/certificate_12th.pdf";
import advancedWebdevCertPdf from "../assets/advanced_webdev_certificate.pdf";
import pythonWorkshopCertPng from "../assets/python_workshop_certificate.jpg";

// Experience Images (Certificates)
import internshipCertImg from "../assets/Certificate.jpg";
import trainingCertImg from "../assets/Tranning Certificate.jpg";

export default function About() {
  const pageRef = useRef(null);

  /* ================= ROUTE TRANSITION ================= */
  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  /* ================= SCROLL PROGRESS ================= */
  const { scrollYProgress } = useScroll();

  /* ================= CURSOR GLOW ================= */
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

 useEffect(() => {
  const move = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  window.addEventListener("mousemove", move);
  return () => window.removeEventListener("mousemove", move);
}, [cursorX, cursorY]);


  /* ================= DATA ================= */

  const experience = [
    {
      role: "Web Development Intern",
      company: "Zidio Development",
      duration: "April 2025 – July 2025",
      description:
        "Worked as a Web Development Intern where I built responsive websites, improved UI components, and contributed to real-world projects. Gained hands-on experience with modern frontend workflows, performance optimization, and professional collaboration.",
      image: internshipCertImg,
    },
    {
      role: "Web Development Trainee",
      company: "Zidio Development",
      duration: "April 2025 – July 2025",
      description:
        "Completed structured training in Web Development focusing on HTML, CSS, JavaScript, and project-based learning. Strengthened core development concepts, debugging skills, and best practices for deployment.",
      image: trainingCertImg,
    },
  ];

  const education = [
    {
      title: "10th (CBSE)",
      institute: "Alpine Public School, Bhawanigarh",
      year: "2020 – 2021",
      score: "60.2%",
      cert: cert10thPdf,
    },
    {
      title: "12th (CBSE)",
      institute: "Satyabharti Sr. Sec. School, Jhaneri",
      year: "2022 – 2023",
      score: "76.8%",
      cert: cert12thPdf,
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institute: "Multani Mal Modi College, Patiala",
      year: "Final Year",
      score: "Ongoing",
      cert: null,
    },
  ];

  const certifications = [
    { title: "Advanced Web Development & Designing", file: advancedWebdevCertPdf },
    { title: "Python Workshop", file: pythonWorkshopCertPng },
  ];

  return (
    <motion.section
      ref={pageRef}
      className="relative max-w-6xl mx-auto px-6 py-24 text-white overflow-hidden"
    >
      {/* Scroll Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px]
        bg-gradient-to-r from-teal-400 to-violet-500
        origin-left z-50"
      />

      {/* Cursor Glow */}
      <motion.div
        className="fixed w-96 h-96 rounded-full
        bg-violet-500/20 blur-[120px] pointer-events-none"
        style={{ translateX: cursorX, translateY: cursorY }}
      />

      {/* Noise Overlay */}
      <div className="noise-overlay pointer-events-none fixed inset-0 z-40" />

      {/* Intro */}
      <section className="text-center mb-28 relative z-10">
        <motion.h1
          whileHover={{ rotateX: 8, rotateY: -8 }}
          className="text-5xl font-bold
          bg-gradient-to-r from-teal-400 via-sky-400 to-violet-400
          text-transparent bg-clip-text"
        >
          About Me
        </motion.h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          I’m <strong>Tushar</strong>, a Web Developer, Web Designer & Graphic
          Designer passionate about building fast, visually appealing, and
          user-focused digital experiences.
        </p>
      </section>

      {/* Journey */}
      <section className="grid md:grid-cols-2 gap-10 mb-28 relative z-10">
        <Card title="My Journey">
          I started with curiosity about how websites work. Over time, I
          realized that impactful digital products combine clean design,
          strong performance, and excellent user experience.
        </Card>

        <Card title="Problems I Solve">
          <ul className="space-y-2">
            <li>🚀 Slow or outdated websites</li>
            <li>🎨 Weak UI & poor user experience</li>
            <li>📉 Low engagement & conversions</li>
            <li>🧩 Inconsistent branding</li>
          </ul>
        </Card>
      </section>

      {/* Experience */}
      <Section title="Experience">
        <div className="space-y-16 max-w-5xl mx-auto">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                <h3 className="text-2xl font-semibold text-teal-400">
                  {exp.role}
                </h3>
                <p className="text-gray-300 mt-1">{exp.company}</p>
                <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-3xl overflow-hidden
                bg-white/5 backdrop-blur-lg
                border border-white/10 shadow-lg"
              >
                <img
                  src={exp.image}
                  alt={exp.role}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Timeline */}
      <Section title="Education">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />
          <div className="space-y-16">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-1/2 top-6 w-4 h-4 rounded-full
                bg-gradient-to-r from-teal-400 to-violet-500
                -translate-x-1/2 shadow-lg" />

                <div className="md:w-1/2">
                  <Card>
                    <h4 className="font-semibold text-teal-400">{edu.title}</h4>
                    <p className="text-sm text-gray-300">{edu.institute}</p>
                    <p className="text-sm text-gray-400">{edu.year}</p>
                    <p className="text-sm text-gray-400">Score: {edu.score}</p>

                    {edu.cert && (
                      <a
                        href={edu.cert}
                        download
                        className="inline-block mt-3 text-sm text-sky-400 underline"
                      >
                        Download Certificate
                      </a>
                    )}
                  </Card>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        <div className="grid sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <Card key={i} center>
              <p className="text-gray-200 mb-3">{cert.title}</p>
              <a
                href={cert.file}
                download
                className="text-sky-400 underline text-sm"
              >
                Download Certificate
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mt-28 flex flex-col sm:flex-row gap-6 justify-center">
        <Magnetic>
          <a
            href={resumePng}
            download
            className="px-8 py-3 rounded-full font-semibold
            text-black bg-gradient-to-r from-teal-400 to-sky-400"
          >
            📄 Download CV
          </a>
        </Magnetic>

        <Magnetic>
          <Link to="/contact">
            <button className="px-8 py-3 rounded-full font-semibold
            text-white bg-gradient-to-r from-violet-500 to-indigo-600">
              🤝 Let’s Work Together
            </button>
          </Link>
        </Magnetic>
      </section>
    </motion.section>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, children }) {
  return (
    <section className="mb-28 relative z-10">
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      {children}
    </section>
  );
}

function Card({ title, children, center }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`bg-white/5 backdrop-blur-lg
      border border-white/10 rounded-3xl p-6 ${
        center ? "text-center" : ""
      }`}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-violet-400">
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
}

function Magnetic({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      whileHover={{ scale: 1.08 }}
    >
      {children}
    </motion.div>
  );
}
