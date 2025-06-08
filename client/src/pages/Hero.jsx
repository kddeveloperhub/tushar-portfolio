import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroImage from '../assets/software-developer-g1372d020e_1280.jpg';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Web Designer', 'Web Developer', 'Graphic Designer'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-10 px-6 py-10"
    >
      {/* Text container */}
      <div className="text-center md:text-left w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Hi, My name is{' '}
          <span className="text-purple-400">Tushar</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold">
          and I am a passionate
        </h2>
        <span
          ref={typedRef}
          className="block text-xl sm:text-2xl font-medium text-purple-400 min-h-[32px]"
        ></span>

        {/* CTA Button */}
        <a href="#contact">
          <button className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold shadow-md">
            Hire Me
          </button>
        </a>
      </div>

      {/* Image container */}
      <div className="w-full md:w-1/2">
        <img
          src={heroImage}
          alt="Tushar Dhawan - Web Developer Hero"
          loading="lazy"
          className="rounded-lg w-full h-auto max-h-[450px] object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
