import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Client images
import nitishImg from "../assets/nitishsharma.jpg";
import saiImg from "../assets/saikumar.jpeg";
import subhadipImg from "../assets/Subhadip.PNG";

// PDF certificate (proof of website development)
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
        . He delivered a fast, professional, and visually appealing website. Later, we hired an in-house developer for updates, but the first version was entirely built by Tushar.
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
        . He quickly understood our needs and delivered a sleek, professional, and fast-loading website. Very reliable and communicative throughout the project.”
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
        . The website is user-friendly, modern, and responsive. His work as a freelancer helped our business launch a professional digital presence.”
      </>
    ),
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[rgb(0,0,18)] text-white px-6 py-24 overflow-hidden"
    >
      {/* Subtle Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-transparent blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-indigo-400">
          What Clients Say
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Genuine feedback from professionals and entrepreneurs who trusted me
          to bring their digital ideas to life.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={700}
          loop={true}
          centeredSlides={true}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide
              key={idx}
              className="flex justify-center transition-all duration-500 hover:scale-[1.03] hover:rotate-[0.5deg]"
            >
              <div className="relative group bg-gradient-to-br from-gray-900 via-gray-800/90 to-gray-900 border border-white/10 p-8 rounded-3xl shadow-lg w-full max-w-md backdrop-blur-md hover:shadow-2xl hover:shadow-indigo-600/30 transition-all duration-500 ease-out">
                {/* Glow hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition duration-500"></div>

                <div className="relative flex flex-col items-center gap-5 text-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-lg object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <h3 className="text-xl font-semibold mt-2">{t.name}</h3>
                  <p className="text-indigo-400 text-sm font-medium">{t.role}</p>
                  <p className="text-gray-300 text-base italic leading-relaxed mt-4">
                    {t.text}
                  </p>

                  {/* Certificate Button */}
                  {t.certificate && (
                    <a
                      href={t.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold text-sm transition transform hover:scale-105"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Subtle bottom fade for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </section>
  );
}
