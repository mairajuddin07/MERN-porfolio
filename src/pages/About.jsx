import React from "react";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <Fade direction="left" delay="10">
    <section className="bg-[#111827] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="profile.jpeg" // Apni about image ka path yahan dalain
            alt="About Me"
            className="rounded-2xl shadow-2xl w-80 h-80 object-cover border-4 border-green-400"
          />
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-yellow-400">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I am Mairaj, a dedicated <span className="text-green-400 font-semibold">web developer</span> 
            with a passion for building visually appealing and highly functional 
            websites. My goal is to bring innovative ideas to life through 
            modern web technologies while ensuring smooth user experiences.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I specialize in <span className="text-green-400">React JS</span>, 
            <span className="text-green-400"> TailwindCSS</span>, and 
            <span className="text-green-400"> Node.js</span>. 
            Whether it's creating interactive UIs or developing back-end logic, 
            I love turning challenges into elegant solutions.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#1f2937] text-center p-4 rounded-xl shadow-md hover:bg-green-400 hover:text-black transition">
              HTML & CSS
            </div>
            <div className="bg-[#1f2937] text-center p-4 rounded-xl shadow-md hover:bg-green-400 hover:text-black transition">
              Bootstrap and React-Bootstrap
            </div>
            <div className="bg-[#1f2937] text-center p-4 rounded-xl shadow-md hover:bg-green-400 hover:text-black transition">
              Figma
            </div>
            <div className="bg-[#1f2937] text-center p-4 rounded-xl shadow-md hover:bg-green-400 hover:text-black transition">
              JavaScript
            </div>
            <div className="bg-[#1f2937] text-center p-4 rounded-xl shadow-md hover:bg-green-400 hover:text-black transition">
              React JS
            </div>
            <div className="bg-[#1f2937] text-center p-4 rounded-xl shadow-md hover:bg-green-400 hover:text-black transition">
              TailwindCSS
            </div>
            <div className="bg-[#1f2937] text-center p-4 rounded-xl shadow-md hover:bg-green-400 hover:text-black transition">
              Node.js
            </div>
            <div className="bg-[#1f2937] text-center p-4 rounded-xl shadow-md hover:bg-green-400 hover:text-black transition">
              MongoDB
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fade>
  );
}
