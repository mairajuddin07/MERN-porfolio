import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <header className="bg-[#0a0f1c] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
          MERN Stack Dev
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-yellow-400 transition">HOME</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">ABOUT</Link>
          <Link to="/services" className="hover:text-yellow-400 transition">SERVICES</Link>
          <Link to="/projects" className="hover:text-yellow-400 transition">PROJECTS</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">CONTACT</Link>
        </nav>

        {/* Toggle Button */}
        <button
          className="md:hidden bg-yellow-400 text-black px-3 py-2 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0f1c] py-4"
          >
            <nav className="flex flex-col items-center space-y-4">
              <Link
                to="/"
                className="hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                to="/projects"
                className="hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
