import React from 'react';
import { motion } from 'framer-motion';
import nitishImg from '../assets/nitishsharma.jpg'; // Ensure this image exists

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="text-white px-4 py-12 flex flex-col items-center justify-center"
      style={{ backgroundColor: 'rgb(0, 0, 18)' }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-indigo-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Testimonials
      </motion.h2>

      {/* Testimonial Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl bg-gray-800 p-8 rounded-2xl shadow-xl text-center"
      >
        <motion.img
          src={nitishImg}
          alt="Nitish Sharma"
          className="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        />

        <h3 className="text-2xl font-bold mb-1">Nitish Sharma</h3>
        <p className="text-indigo-400 mb-6 font-medium">Founder & CEO, Glancia AI</p>

        <motion.p
          className="text-lg leading-relaxed italic text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          “Working with Tushar was an outstanding experience. He understood our vision for Glancia AI and brought it to life with precision and creativity. The site he developed is fast, visually striking, and professional. Highly recommended for anyone seeking top-tier web development.”
        </motion.p>
      </motion.div>
    </section>
  );
}
