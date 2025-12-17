import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Client images
import nitishImg from "../assets/nitishsharma.jpg";
import saiImg from "../assets/saikumar.jpeg";
import subhadipImg from "../assets/Subhadip.PNG";

// PDF certificate
import nitishCertificate from "../assets/Certificate tushar dhawan.pdf";

const testimonials = [
  {
    image: nitishImg,
    name: "Nitish Sharma",
    role: "Founder & CEO, Glancia AI",
    text: (
      <>
        “I initially hired Tushar as a freelancer to build our company website —{" "}
        <a
          href="https://www.glancia-ai.com/"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-300 underline hover:text-indigo-400 transition"
        >
          Glancia AI
        </a>
        . He delivered a fast, professional, and visually appealing website.
        The first version was entirely built by Tushar.”
      </>
    ),
    certificate: nitishCertificate,
  },
  {
    image: saiImg,
    name: "Sai Kumar",
    role: "Entrepreneur, Bangalore",
    text: (
      <>
        “Tushar did an excellent job building our company website —{" "}
        <a
          href="https://primeappconnect.com"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-300 underline hover:text-indigo-400 transition"
        >
          PrimeAppConnect
        </a>
        . He quickly understood our needs and delivered a sleek,
        fast-loading website.”
      </>
    ),
  },
  {
    image: subhadipImg,
    name: "Subhadip",
    role: "Entrepreneur, Tuphoria",
    text: (
      <>
        “Tushar designed and developed our website —{" "}
        <a
          href="https://tuphoria.com/"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-300 underline hover:text-indigo-400 transition"
        >
          Tuphoria
        </a>
        . The website is modern, responsive, and user-friendly.”
      </>
    ),
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[rgb(0,0,18)] text-white px-6 py-28 overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-indigo-400"
        >
          What Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-20 max-w-2xl mx-auto"
        >
          Genuine feedback from professionals who trusted me to bring their
          digital ideas to life.
        </motion.p>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          speed={800}
          loop
          centeredSlides
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5 }}
                className="relative group w-full max-w-md"
              >
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl transition">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                  <div className="relative z-10 flex flex-col items-center text-center gap-5">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
                    />

                    <h3 className="text-xl font-semibold">{t.name}</h3>
                    <p className="text-indigo-400 text-sm font-medium">
                      {t.role}
                    </p>

                    <p className="text-gray-300 italic leading-relaxed">
                      {t.text}
                    </p>

                    {t.certificate && (
                      <a
                        href={t.certificate}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-full
                        bg-green-600/90 hover:bg-green-600 text-sm font-semibold
                        transition hover:scale-105"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
