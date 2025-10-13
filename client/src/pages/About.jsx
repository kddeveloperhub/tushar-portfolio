import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 🧾 Assets
import resumePng from '../assets/resume.jpg';
import cert10thPdf from '../assets/certificate_10th.pdf';
import cert12thPdf from '../assets/certificate_12th.pdf';
import advancedWebdevCertPdf from '../assets/advanced_webdev_certificate.pdf';
import pythonWorkshopCertPng from '../assets/python_workshop_certificate.jpg';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const education = [
    {
      title: '10th Pass (2020-2021)',
      school: 'CBSE - Alpine Public School, Bhawanigarh',
      score: 'Percentage: 60.2%',
      cert: cert10thPdf,
      certName: 'certificate_10th.pdf',
    },
    {
      title: '12th Pass (2022-2023)',
      school: 'CBSE - Satyabharti Sr. Sec. School, Jhaneri',
      score: 'Percentage: 76.8%',
      cert: cert12thPdf,
      certName: 'certificate_12th.pdf',
    },
    {
      title: 'Bachelor of Computer Application (B.C.A)',
      school: 'Multani Mal Modi College, Patiala',
      score: 'Currently in 3rd Year',
      cert: null,
    },
  ];

  const certifications = [
    {
      title: 'Advanced Web Development and Designing Course',
      duration: 'Duration: 6 months',
      file: advancedWebdevCertPdf,
      fileName: 'advanced_webdev_certificate.pdf',
    },
    {
      title: 'Python Workshop Certificate',
      duration: '',
      file: pythonWorkshopCertPng,
      fileName: 'python_workshop_certificate.jpg',
    },
  ];

  return (
    <section
      id="about"
      className="my-20 text-white text-center px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="flex flex-col items-center"
      >
        <motion.button
          variants={fadeInUp}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 20px #61dafb, 0 0 40px #61dafb',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-white text-base sm:text-lg font-semibold py-2 px-6 rounded-full"
          style={{
            background:
              'linear-gradient(90deg, #61dafb 0%, #0ef0ad 100%)',
          }}
        >
          About Me
        </motion.button>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-10 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0ef0ad] to-[#61dafb]"
        >
          My Mission
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="max-w-3xl text-lg leading-relaxed mb-10 text-gray-300"
        >
          I believe in the power of the web to transform ideas into reality.
          My mission is to create modern, responsive, and user-friendly
          websites that help brands stand out in the digital world.
        </motion.p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.h3
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0ef0ad] to-[#61dafb]"
        >
          What I Do
        </motion.h3>
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 text-base sm:text-lg text-gray-200"
        >
          {[
            'Custom Web Development',
            'UI/UX Design',
            'SEO Optimization',
            'E-commerce Solutions',
            'CMS Integration',
          ].map((skill, i) => (
            <span
              key={i}
              className="bg-[#1e1e2f] px-4 py-2 rounded-full shadow-md hover:shadow-[#0ef0ad]/40 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Timeline Dots */}
      <div className="relative flex items-center justify-between w-full max-w-4xl mx-auto mt-10 px-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center w-full">
            <div
              className="w-4 h-4 rounded-full z-10"
              style={{ backgroundColor: '#35316f' }}
            ></div>
            {i < 4 && (
              <div
                className="flex-grow h-1"
                style={{ backgroundColor: '#35316f' }}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* 🎓 Education Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="mt-14"
      >
        <motion.h3
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0ef0ad] to-[#61dafb]"
        >
          My Education
        </motion.h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-[#101020]/60 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-[#2b2b4b]"
            >
              <h4 className="text-lg font-bold text-[#0ef0ad]">
                {edu.title}
              </h4>
              <p className="mt-1 text-sm text-gray-200">{edu.school}</p>
              <p className="mt-1 text-sm text-gray-400">{edu.score}</p>
              {edu.cert && (
                <a
                  href={edu.cert}
                  download={edu.certName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-[#0ef0ad] text-black font-semibold px-4 py-2 rounded-full text-sm hover:scale-105 transition"
                >
                  📄 Download PDF
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 📜 Resume Button */}
      <motion.div
        className="mt-10 mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a
          href={resumePng}
          download="Tushar_Dhawan_Resume.png"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 20px #0ef0ad, 0 0 40px #0ef0ad',
          }}
          className="inline-block px-6 py-3 rounded-full font-semibold text-black shadow-lg transition"
          style={{
            background:
              'linear-gradient(90deg, #0ef0ad 0%, #61dafb 100%)',
          }}
        >
          📄 Download Resume
        </motion.a>
      </motion.div>

      {/* 🏅 Certifications */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.h3
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0ef0ad] to-[#61dafb]"
        >
          Certifications
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-6 px-2">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-[#101020]/60 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-[#2b2b4b]"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                {cert.title}
              </h4>
              {cert.duration && (
                <p className="text-sm text-gray-400 mb-3">
                  {cert.duration}
                </p>
              )}
              <a
                href={cert.file}
                download={cert.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#61dafb] underline text-sm hover:text-[#0ef0ad]"
              >
                📥 Download Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 💡 Values */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="mt-14"
      >
        <motion.h3
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0ef0ad] to-[#61dafb]"
        >
          My Values
        </motion.h3>
        <motion.p
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300"
        >
          I value transparency, creativity, and reliability. My approach is
          focused on delivering meaningful, lasting results — not just pretty
          visuals.
        </motion.p>
      </motion.div>

      {/* 💬 Why Choose Me */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="mt-14"
      >
        <motion.h3
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0ef0ad] to-[#61dafb]"
        >
          Why Choose Me?
        </motion.h3>
        <motion.div
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 space-y-4"
        >
          <p>
            <strong>🎯 Tailored Solutions:</strong> Every project is crafted
            around your goals and audience — no cookie-cutter templates.
          </p>
          <p>
            <strong>🔧 Ongoing Support:</strong> I offer continuous updates
            and improvements to keep your online presence strong.
          </p>
        </motion.div>
      </motion.div>

      {/* ✉️ CTA */}
      <motion.div
        className="mt-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h3
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0ef0ad] to-[#61dafb]"
        >
          Let’s Connect
        </motion.h3>
        <motion.p
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-lg leading-relaxed mb-8 text-gray-300"
        >
          Whether you’re a startup or an established business, I’d love to
          collaborate. Let’s elevate your digital presence together!
        </motion.p>

        <Link to="/contact">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px #61dafb, 0 0 40px #0ef0ad',
            }}
            className="px-8 py-3 bg-indigo-600 font-semibold rounded-full text-white hover:bg-indigo-700 transition"
          >
            📬 Let’s Work Together
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
