import React from 'react';
import { motion } from 'framer-motion';

// Asset Imports
import resumePng from '../assets/resume.jpg';
import cert10thPdf from '../assets/certificate_10th.pdf';
import cert12thPdf from '../assets/certificate_12th.pdf';
import advancedWebdevCertPdf from '../assets/advanced_webdev_certificate.pdf';
import pythonWorkshopCertPng from '../assets/python_workshop_certificate.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="my-20 text-white text-center px-4 sm:px-6 max-w-5xl mx-auto"
    >
      {/* Section Button Heading */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: '0 0 15px #61dafb, 0 0 30px #61dafb' }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="text-white text-base sm:text-lg font-semibold py-2 px-6 rounded-full"
        style={{ backgroundColor: '#61dafb' }}
      >
        About Me
      </motion.button>

      {/* Mission Section */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-10 mb-8"
        style={{ color: '#0ef0ad' }}
        whileInView={{ scale: [0.9, 1] }}
        transition={{ duration: 0.5 }}
      >
        My Mission
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-10 px-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        I believe in the power of the web to transform ideas into reality. My mission is to
        create innovative, user-friendly websites that help businesses thrive in the digital landscape.
      </motion.p>

      {/* Services Offered */}
      <motion.h3
        className="text-2xl sm:text-3xl font-semibold mb-6"
        style={{ color: '#0ef0ad' }}
        whileInView={{ scale: [0.9, 1] }}
        transition={{ duration: 0.5 }}
      >
        What I Do
      </motion.h3>
      <div className="text-base sm:text-lg flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 px-2">
        <span>1. Custom Web Development</span>
        <span>2. UI/UX Design</span>
        <span>3. SEO Optimization</span>
        <span>4. E-commerce Solutions</span>
        <span>5. CMS Integration</span>
      </div>

      {/* Visual Timeline */}
      <div className="relative flex items-center justify-between w-full max-w-4xl mx-auto mt-6 px-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center w-full">
            <div className="w-4 h-4 rounded-full z-10" style={{ backgroundColor: '#35316f' }}></div>
            {i < 4 && <div className="flex-grow h-1" style={{ backgroundColor: '#35316f' }}></div>}
          </div>
        ))}
      </div>

      {/* Education Section */}
      <motion.h3
        className="text-2xl sm:text-3xl font-semibold mt-14 mb-6"
        style={{ color: '#0ef0ad' }}
        whileInView={{ scale: [0.9, 1] }}
        transition={{ duration: 0.5 }}
      >
        My Education
      </motion.h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2">
        {[
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
            certName: '',
          },
        ].map((edu, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1e1e2f] rounded-2xl p-5 shadow-xl text-left flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
          >
            <div>
              <h4 className="text-lg font-bold text-[#0ef0ad]">{edu.title}</h4>
              <p className="mt-1 text-sm text-white">{edu.school}</p>
              <p className="mt-1 text-sm text-gray-400">{edu.score}</p>
            </div>
            {edu.cert && (
              <a
                href={edu.cert}
                download={edu.certName}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#0ef0ad] text-black font-semibold px-4 py-2 rounded-full text-sm w-fit"
              >
                📄 Download PDF
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Resume Button */}
      <motion.div className="mt-10 mb-12 text-center">
        <motion.a
          href={resumePng}
          download="Tushar_Dhawan_Resume.png"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, boxShadow: '0 0 15px #0ef0ad' }}
          className="inline-block px-6 py-3 rounded-full font-semibold text-black shadow-lg"
          style={{ backgroundColor: '#0ef0ad' }}
          title="Download Resume"
        >
          📄 Download Resume
        </motion.a>
      </motion.div>

      {/* Certifications */}
      <motion.h3
        className="text-2xl sm:text-3xl font-semibold mb-6"
        style={{ color: '#0ef0ad' }}
        whileInView={{ scale: [0.9, 1] }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h3>
      <div className="grid sm:grid-cols-2 gap-6 px-2">
        {[
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
        ].map((cert, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1e1e2f] rounded-2xl p-5 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
            {cert.duration && <p className="text-sm text-gray-400 mb-3">{cert.duration}</p>}
            <a
              href={cert.file}
              download={cert.fileName}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#61dafb] underline text-sm"
            >
              📥 Download Certificate
            </a>
          </motion.div>
        ))}
      </div>

      {/* Values & Pitch */}
      <motion.h3
        className="text-2xl sm:text-3xl font-semibold mt-14 mb-4"
        style={{ color: '#0ef0ad' }}
        whileInView={{ scale: [0.9, 1] }}
        transition={{ duration: 0.5 }}
      >
        My Values
      </motion.h3>
      <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-10 px-2">
        I am committed to quality, transparency, and collaboration. My goal is to build long-lasting
        relationships with clients, guiding them through every step of their digital journey.
      </p>

      <motion.h3
        className="text-2xl sm:text-3xl font-semibold mb-4"
        style={{ color: '#0ef0ad' }}
        whileInView={{ scale: [0.9, 1] }}
        transition={{ duration: 0.5 }}
      >
        Why You Choose Me?
      </motion.h3>
      <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-4 px-2">
        <strong>Tailored Solutions:</strong> I take the time to understand your business and create
        solutions that align with your goals.
      </p>
      <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-10 px-2">
        <strong>Ongoing Support:</strong> I don’t just build websites; I provide maintenance and
        support to ensure your online presence remains strong.
      </p>

      {/* Call to Action */}
      <motion.h3
        className="text-2xl sm:text-3xl font-semibold mb-4"
        style={{ color: '#0ef0ad' }}
        whileInView={{ scale: [0.9, 1] }}
        transition={{ duration: 0.5 }}
      >
        Let’s Connect
      </motion.h3>
      <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-6 px-2">
        Whether you’re a startup or an established business, I’m here to help.
        Let’s discuss how we can elevate your digital strategy!
      </p>
      <a href="#contact">
        <button className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
          📬 Let’s Work Together
        </button>
      </a>
    </section>
  );
}
