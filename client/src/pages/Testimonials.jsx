import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import nitishImg from '../assets/nitishsharma.jpg';
import saiImg from '../assets/saikumar.jpeg';

const testimonials = [
  {
    image: nitishImg,
    name: 'Nitish Sharma',
    role: 'Founder & CEO, Glancia AI',
    text:
      '“Working with Tushar was an outstanding experience. He understood our vision for Glancia AI and brought it to life with precision and creativity. The site he developed is fast, visually striking, and professional. Highly recommended for anyone seeking top-tier web development.”',
  },
  {
    image: saiImg,
    name: 'Sai Kumar',
    role: 'Entrepreneur, Bangalore',
    text: (
      <>
        “Tushar did an excellent job building our company website —{' '}
        <a
          href="https://primeappconnect.com"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-300 underline hover:text-indigo-400 transition"
        >
          PrimeAppConnect
        </a>
        . He quickly understood our needs and delivered a sleek, professional,
        and fast-loading website. Very reliable and communicative throughout the
        project.”
      </>
    ),
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#000012] text-white px-4 py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-indigo-400">Testimonials</h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={500}
          loop={true}
          centeredSlides={true} // ✅ This centers the slides
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 text-left p-6 rounded-3xl shadow-xl w-full max-w-md hover:shadow-2xl transition duration-300 ease-in-out">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md object-cover"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{t.name}</h3>
                    <p className="text-indigo-400 text-sm mb-4">{t.role}</p>
                    <p className="text-gray-300 text-base italic leading-relaxed">
                      {t.text}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
