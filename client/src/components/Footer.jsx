import React, { useEffect, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#000012] py-12 text-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-2">About me</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I believe in the power of the web to transform ideas into reality.
              My mission is to create innovative, user-friendly websites that help
              businesses thrive in the digital landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Link</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-[#61dafb]">Home</a></li>
              <li><a href="#about" className="hover:text-[#61dafb]">About Us</a></li>
              <li><a href="#services" className="hover:text-[#61dafb]">Services</a></li>
              <li><a href="#projects" className="hover:text-[#61dafb]">Projects</a></li>
              <li><a href="#contact" className="hover:text-[#61dafb]">Contact Me</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-300 text-sm mb-1">+91 9988140768</p>
            <p className="text-sm text-[#61dafb] break-all">
              tushardhawan1607@gmail.com
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 text-white">
              <a href="https://www.linkedin.com/in/tushar-dhawan-445b562b7/" target="_blank" rel="noopener noreferrer" className="hover:text-[#61dafb] text-xl">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/kddeveloperhub" target="_blank" rel="noopener noreferrer" className="hover:text-[#61dafb] text-xl">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/td.web_dev/" target="_blank" rel="noopener noreferrer" className="hover:text-[#61dafb] text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} Tushar Dhawan. All rights reserved.
        </div>
      </footer>

      {/* Scroll-to-top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#61dafb] text-black p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
