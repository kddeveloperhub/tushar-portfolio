import React, { useState } from 'react';
import logo from '../assets/Untitled-1.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[rgb(18,18,62)] backdrop-blur-md z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-24">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-24 w-auto object-cover" />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul
          className={`md:flex md:items-center md:static absolute bg-gray-800 md:bg-transparent w-full left-0 md:w-auto md:space-x-6 transition-all duration-300 ease-in ${
            open ? 'top-24' : '-top-96'
          }`}
        >
          {['Home', 'About', 'Services', 'Projects', 'Pricing', 'Contact'].map((item) => (
            <li key={item} className="text-lg px-4 py-2 hover:text-indigo-400 cursor-pointer">
              <a
                href={item === 'Home' ? '#hero' : `#${item.toLowerCase()}`}
                onClick={() => setOpen(false)} // close mobile menu
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
