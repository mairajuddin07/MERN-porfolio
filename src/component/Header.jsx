import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#0a0f1c] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
          MERN Stack Dev
        </h1>

        {/* Navigation Menu */}
        <nav className="space-x-8 hidden md:flex">
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            ABOUT
          </Link>
          <Link
            to="/services"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            SERVICES
          </Link>
          <Link
            to="/projects"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            PROJECTS
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu (Optional for later) */}
        <button className="md:hidden bg-yellow-400 text-black px-3 py-1 rounded">
          ☰
        </button>
      </div>
    </header>
  );
}
