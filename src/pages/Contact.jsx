import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Fade } from "react-awesome-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const serviceId = "service_51yd588";
    const templateId = "template_1x1rm9f";
    const userId = "S0ANtgMyiFFqYZj3Y";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(() => {
        toast.success("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong. Try again!");
      });
  };

  return (
    <Fade direction="right">
      <section className="bg-[#0a0f1c] text-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400">Contact Me</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Have a question or want to work together? Send me a message!
            </p>
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-[#1f2937] p-8 rounded-2xl shadow-lg space-y-6"
            >
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700 focus:outline-none focus:border-green-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700 focus:outline-none focus:border-green-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700 focus:outline-none focus:border-green-400"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-black font-semibold py-3 rounded-full hover:bg-green-400 transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info & Socials */}
            <div className="space-y-6 flex flex-col justify-center">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Let's Connect</h3>
                <p className="text-gray-300 mt-2">
                  You can also reach me through the following platforms:
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <p className="text-gray-300">
                  📧 Email: <span className="text-green-400">mairaju587@gmail.com</span>
                </p>
                <p className="text-gray-300">
                  📍 Location: <span className="text-green-400">Karachi, Pakistan</span>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/mairajuddin07"
                  target="_blank"
                  className="bg-[#1f2937] hover:bg-green-500 p-3 rounded-full transition"
                >
                  🐱
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  className="bg-[#1f2937] hover:bg-green-500 p-3 rounded-full transition"
                >
                  🔗
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  className="bg-[#1f2937] hover:bg-green-500 p-3 rounded-full transition"
                >
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </section>
    </Fade>
  );
}
