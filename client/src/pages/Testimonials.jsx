import React from 'react';
import { motion } from 'framer-motion';
import nitishImg from '../assets/nitishsharma.jpg';
import saiImg from '../assets/saikumar.jpeg'; // Ensure this file exists

const testimonialCardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * i,
      duration: 0.8,
    },
  }),
};

const testimonialsData = [
  {
    name: 'Nitish Sharma',
    title: 'Founder & CEO, Glancia AI',
    image: nitishImg,
    quote:
      '“Working with Tushar was an outstanding experience. He understood our vision for Glancia AI and brought it to life with precision and creativity. The site he developed is fast, visually striking, and professional. Highly recommended for anyone seeking top-tier web development.”',
  },
  {
    name: 'Sai Kumar',
    title: 'Entrepreneur, Bangalore',
    image: saiImg,
    quote: (
      <>
        “Tushar did an excellent job building our company website —{' '}
        <a
          href="https://primeappconnect.com/"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-300 underline"
        >
          PrimeAppConnect
        </a>
        . He was quick to understand our requirements and delivered a sleek,
        functional, and modern website that exceeded our expectations. Very
        responsive and easy to work with — I’d definitely recommend him to
        anyone looking for a professional web developer.”
      </>
    ),
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="text-white px-4 py-16 flex flex-col items-center justify-center"
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

      {/* Testimonials List */}
      <div className="flex flex-col gap-12 w-full items-center">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="max-w-3xl bg-gray-800 p-8 rounded-2xl shadow-xl text-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={testimonialCardVariant}
          >
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            <h3 className="text-2xl font-bold mb-1">{testimonial.name}</h3>
            <p className="text-indigo-400 mb-6 font-medium">
              {testimonial.title}
            </p>
            <motion.p
              className="text-lg leading-relaxed italic text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {testimonial.quote}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
