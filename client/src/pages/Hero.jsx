import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Code, Palette, Sparkles } from "lucide-react";
import heroImage from "../assets/tushar.jpg";

export default function Home() {
  const typedRef = useRef(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  /* ================= TYPED TEXT ================= */
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Freelance Web Developer",
        "UI / UX Designer",
        "Branding & Graphic Designer",
      ],
      typeSpeed: 55,
      backSpeed: 35,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  /* ================= CURSOR GLOW ================= */
  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <main className="text-white overflow-hidden bg-black relative">

      {/* Hide glow on mobile */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none bg-indigo-500/20 blur-[120px]"
        style={{ translateX: cursorX, translateY: cursorY }}
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 py-10 pt-28 sm:pt-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <span className="px-4 py-2 rounded-full bg-white/10 border border-indigo-500/30 text-xs sm:text-sm">
              👋 Hi, I’m Tushar Dhawan
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Web Developer
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                & Creative Designer
              </span>
            </h1>

            <div className="mt-4 text-lg sm:text-xl text-indigo-400">
              <span ref={typedRef}></span>
            </div>

            <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
              I design and develop fast, modern, and SEO-optimized websites
              that help businesses attract users, build trust, and convert
              visitors into customers.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="/projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold text-center shadow-lg"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center">
              <div className="relative group">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-2xl opacity-40 group-hover:opacity-70 transition"></div>

                {/* Image */}
                <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-4 border-indigo-500/40 shadow-lg">
                  <img
                    src={heroImage}
                    alt="Tushar"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Badge */}
                <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm shadow-lg">
                  🚀 Available for Work
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <section className="py-12 border-t border-white/10 text-center px-4">
        <p className="text-gray-400 mb-5 text-sm sm:text-base">
          Tools & Technologies I Work With
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {[
            "React",
            "JavaScript",
            "Firebase",
            "Figma",
            "Photoshop",
            "Illustrator",
          ].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm bg-white/5 border border-indigo-500/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12">
          What I Do Best
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: <Code />,
              title: "Custom Website Development",
              text:
                "Fast, responsive, and scalable websites built with modern technologies and best coding practices.",
            },
            {
              icon: <Palette />,
              title: "UI / UX & Web Design",
              text:
                "User-focused designs that are clean, intuitive, and crafted to improve engagement and usability.",
            },
            {
              icon: <Sparkles />,
              title: "Branding & Graphic Design",
              text:
                "Professional branding and graphics that communicate trust, personality, and visual consistency.",
            },
          ].map((item, i) => (
            <TiltCard key={i}>
              <div className="text-indigo-400 mb-4">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-300">{item.text}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ================= WHY ME ================= */}
      <section className="py-20 bg-white/5 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-10">
            Why Choose Me?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              "Developer + Designer — everything under one roof",
              "SEO-friendly, performance-focused websites",
              "Clean code, attention to detail & modern aesthetics",
            ].map((text, i) => (
              <TiltCard key={i}>{text}</TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center px-4">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6">
          Ready to Start Your Next Project?
        </h2>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold"
        >
          Let’s Work Together <ArrowRight />
        </a>
      </section>
    </main>
  );
}

/* ================= TILT CARD ================= */
function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  return (
    <motion.div
      onMouseMove={(e) => {
        if (window.innerWidth < 768) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.05 }}
      className="p-5 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-indigo-500/20"
    >
      {children}
    </motion.div>
  );
}