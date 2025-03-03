"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-center bg-black bg-opacity-60 backdrop-blur-lg z-10">
        <h1 className="text-2xl font-bold text-indigo-400">Jaydeep Joshi</h1>
      </nav>

      {/* Contact Form Section */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6 py-12 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"
        >
          Contact Me
        </motion.h1>

        <motion.form
          action="https://formspree.io/f/xwpkgryl"
          method="POST"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 space-y-6 max-w-3xl w-full bg-gray-800 p-8 rounded-xl shadow-xl backdrop-blur-md"
        >
          <div className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-lg font-semibold text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 p-4 bg-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Your Full Name"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-lg font-semibold text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 p-4 bg-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Your Email Address"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-lg font-semibold text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="mt-2 p-4 bg-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full py-4 mt-4 bg-indigo-400 text-gray-900 font-semibold text-lg rounded-lg shadow-lg transform transition duration-500 ease-out hover:scale-105 hover:bg-indigo-500 hover:shadow-2xl"
          >
            {formStatus === "success" ? "Message Sent!" : "Send Message"}
          </motion.button>
        </motion.form>

        {formStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 p-6 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md"
          >
            Thank you for reaching out! I will get back to you soon.
          </motion.div>
        )}

        {formStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 p-6 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md"
          >
            Oops! Something went wrong. Please try again.
          </motion.div>
        )}
      </section>
    </main>
  );
}
