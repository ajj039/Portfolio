"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[700px] h-[700px] bg-gradient-radial from-purple-500 to-transparent opacity-40 blur-[200px]" />
        <div className="absolute w-[500px] h-[500px] bg-gradient-radial from-blue-500 to-transparent opacity-30 blur-[150px] left-1/3 top-1/4" />
        <div className="absolute w-[400px] h-[400px] bg-gradient-radial from-pink-500 to-transparent opacity-30 blur-[150px] right-1/3 bottom-1/4" />
      </div>

      <section className="text-center max-w-5xl px-8 relative z-10">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400"
        >
          Welcome, I'm Jaydeep Joshi
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-xl text-gray-400 leading-relaxed"
        >
          A passionate Frontend Developer with <strong>2.6 years</strong> of
          experience, specializing in building immersive and high-performance
          web applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <Link
            href="/projects"
            className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Explore My Work
          </Link>

          <Link
            href="/about"
            className="px-8 py-3 text-lg font-medium text-gray-900 bg-white rounded-xl shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
          >
            Learn More About Me
          </Link>

          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold text-lg rounded-xl shadow-lg transform transition duration-500 ease-out hover:scale-105 hover:shadow-2xl"
          >
            Get My Resume
          </a>
        </motion.div>
      </section>
    </main>
  );
}
