import React from "react";
import "./HeroSection.css"; // ✅ Custom CSS file include ki hai

export default function HeroSection() {
  return (
    <section className="bg-[#0a0f1c] text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-6 fade-in-left">
          <h2 className="text-lg text-green-400 font-semibold tracking-wide">
            HI, I'M
          </h2>
          <h1 className="text-5xl font-extrabold text-yellow-400">
            Mairaj Uddin!
          </h1>
          <h3 className="text-xl font-semibold text-green-400">
            PROGRAMMER
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-lg">
            A passionate web developer with a focus on creating engaging and 
            user-friendly websites. With a strong foundation in front-end and 
            back-end technologies, I specialize in building responsive web 
            applications that bring ideas to life.
          </p>

          {/* Download CV Button */}
          <a
            href="/cv.pdf"
            download ="cv.pdf"
            className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-400 transition duration-300"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 fade-in-right">
          <img
            src="profile.jpeg"
            alt="Profile"
            className="rounded-full shadow-2xl w-64 h-64 object-cover border-4 border-green-400"
          />
        </div>
      </div>
    </section>
  );
}
