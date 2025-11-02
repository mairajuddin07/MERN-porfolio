import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building modern, responsive websites and web applications using React, TailwindCSS, and Node.js.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating clean and user-friendly interfaces with a focus on seamless user experience.",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description:
        "Developing robust and scalable APIs with Node.js, Express, and MongoDB.",
      icon: "⚙️",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Custom online store setups with secure payment integration and product management.",
      icon: "🛒",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ensuring your website is always updated, secure, and performing at its best.",
      icon: "🛠️",
    },
  ];

  return (
    <Fade direction="right">
    <section className="bg-[#0a0f1c] text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400">My Services</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the professional services I provide to help you
            bring your ideas to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1f2937] rounded-2xl p-8 shadow-lg hover:bg-green-500 hover:text-black transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Fade>
  );
}
