import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';


function HomePage() {
  return (
    <>
      <Hero />
          </>
  );
}

function App() {
  return (
    <Router>
      <div
        className="min-h-screen text-white"
        style={{ backgroundColor: 'rgb(0, 0, 18)' }}
      >
        <Navbar />

        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/projects" element={<Projects />} />
            
          </Routes>
        </main>

       <div className="separator-animated animated-true mt-20 mb-10"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
