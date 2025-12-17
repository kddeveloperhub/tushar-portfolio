import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Code, Palette, Sparkles } from "lucide-react";
import heroImage from "../assets/software-developer-g1372d020e_1280.jpg";

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
      {/* ================= CURSOR GLOW ================= */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none
        bg-indigo-500/20 blur-[120px]"
        style={{ translateX: cursorX, translateY: cursorY }}
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-6">
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="px-5 py-2 rounded-full bg-white/10 border border-indigo-500/30 text-sm">
              👋 Hi, I’m Tushar
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold">
               Web Developer
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                & Creative Designer
              </span>
            </h1>

            <div className="mt-4 text-xl text-indigo-400">
              <span ref={typedRef}></span>
            </div>

            <p className="mt-5 text-lg text-gray-300 max-w-xl">
              I design and develop fast, modern, and SEO-optimized websites
              that help businesses attract users, build trust, and convert
              visitors into customers.
            </p>

            <div className="mt-7 flex gap-4">
              <a
                href="/projects"
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="px-7 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20"
              >
                Hire Me
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden bg-white/5 border border-indigo-500/20 shadow-2xl">
              <img
                src={heroImage}
                alt="Tushar – Freelance Web Developer"
                className="w-full max-h-[460px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <section className="py-14 border-t border-white/10 text-center">
        <p className="text-gray-400 mb-5">
          Tools & Technologies I Work With
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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
              className="px-5 py-2 rounded-full bg-white/5 border border-indigo-500/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          What I Do Best
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ================= WHY ME ================= */}
      <section className="py-20 bg-white/5">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-10">Why Choose Me?</h2>
          <div className="grid md:grid-cols-3 gap-6">
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
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Next Project?
        </h2>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
          bg-gradient-to-r from-indigo-600 to-purple-600
          shadow-[0_0_40px_rgba(139,92,246,0.5)] font-semibold"
        >
          Let’s Work Together <ArrowRight />
        </a>
      </section>
    </main>
  );
}

/* ================= 3D TILT CARD ================= */
function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  return (
    <motion.div
      onMouseMove={(e) => {
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
      className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl
      border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.25)]"
    >
      {children}
    </motion.div>
  );
}
