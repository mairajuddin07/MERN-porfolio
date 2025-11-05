import React from "react";
import { Fade } from "react-awesome-reveal";
import EcomerceImg from "../assets/ecomerce-landingpage.png";
import PortfolioImg from "../assets/portfolio-image.png";
import OrganicImg from "../assets/organic-website.png";



export default function Projects() {
const projects = [
  {
    title: "E-Commerce Website",
    description: "A complete online store built with React, TailwindCSS & Node.js.",
    image: EcomerceImg, 
    link: "https://trends-store.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my work and skills.",
    image: PortfolioImg,
    link: "https://mairaju-portfolio.netlify.app",
  },
  {
    title: "Organic Website",
    description: "A responsive marketing landing page for an organic product.",
    image: OrganicImg,
    link: "https://organic-website-livid.vercel.app/index.html",
  },
];

  return (
    <Fade direction="left">
    <section className="bg-[#111827] text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400">My Projects</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of my featured projects showcasing my skills in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-center px-4 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-400 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Fade>
  );
}
