import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Pricing",
    "Testimonials",
    "Contact",
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50
      bg-white/5 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
        
        {/* TEXT LOGO */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 group"
        >
          <span
            className="text-2xl font-bold tracking-wide
            bg-gradient-to-r from-indigo-400 to-purple-500
            text-transparent bg-clip-text"
          >
            🚀 Tushar
          </span>
          <span className="hidden sm:inline text-sm text-gray-400 group-hover:text-indigo-400 transition">
            Web Dev
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = location.pathname === path;

            return (
              <li key={item} className="relative group">
                <Link
                  to={path}
                  className={`text-sm font-medium transition
                  ${
                    active
                      ? "text-indigo-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </Link>

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px]
                  bg-gradient-to-r from-indigo-400 to-purple-500
                  transition-all duration-300
                  ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 w-full bg-black/80 backdrop-blur-xl
        border-t border-white/10 transition-all duration-300
        ${open ? "top-24 opacity-100" : "-top-[500px] opacity-0"}`}
      >
        <ul className="flex flex-col py-6">
          {menuItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = location.pathname === path;

            return (
              <li key={item}>
                <Link
                  to={path}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3 text-lg transition
                  ${
                    active
                      ? "text-indigo-400 bg-white/5"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
