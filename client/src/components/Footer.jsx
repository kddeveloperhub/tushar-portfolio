import React, { useEffect, useState } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer
        className="relative bg-white/5 backdrop-blur-xl
        border-t border-white/10 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ABOUT */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              About Me
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I’m a freelance web developer and designer focused on building
              modern, fast, and SEO-optimized websites that help businesses grow
              and stand out in the digital world.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-indigo-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Contact
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              📞 +91 99881 40768
            </p>
            <p className="text-gray-300 text-sm break-all mb-4">
              ✉️ tushardhawan1607@gmail.com
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 text-lg">
              {[
                {
                  icon: <FaLinkedinIn />,
                  url: "https://www.linkedin.com/in/tushar-dhawan-445b562b7/",
                },
                {
                  icon: <FaGithub />,
                  url: "https://github.com/kddeveloperhub",
                },
                {
                  icon: <FaInstagram />,
                  url: "https://www.instagram.com/td.web_dev/",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5
                  border border-white/10 hover:bg-indigo-500/20
                  hover:text-indigo-400 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-400 pb-8">
          © {new Date().getFullYear()}{" "}
          <span className="text-indigo-400">Tushar Dhawan</span>. All rights
          reserved.
        </div>
      </footer>

      {/* ================= SCROLL TO TOP ================= */}
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50
          p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600
          text-white shadow-[0_0_25px_rgba(99,102,241,0.6)]
          hover:scale-110 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
