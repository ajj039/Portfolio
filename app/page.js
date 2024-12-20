"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-800 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-32 right-40 w-64 h-64 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full opacity-30 blur-3xl animate-pulse delay-4000" />
      </div>

      <section className="text-center max-w-4xl px-6 relative z-10">
        {/* Heading with Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white"
        >
          Hello, I’m{" "}
          <span className="text-yellow-300 underline decoration-wavy decoration-indigo-500">
            Jaydeep Joshi
          </span>
        </motion.h1>

        {/* Description with Animation */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg text-gray-200"
        >
          A Frontend Developer with <strong>2.6 years of experience</strong> in
          creating dynamic and responsive webapp.
        </motion.p>

        {/* Buttons with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 space-x-4 space-y-6"
        >
          <Link
            href="/projects"
            className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            View My Work
          </Link>
          {/* <Link
            href="/contact"
            className="px-8 py-3 text-lg font-medium text-blue-600 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Get in Touch
          </Link> */}

          <Link
            href="/about"
            className="px-8 py-3 text-lg font-medium text-blue-600 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            About
          </Link>

          <a
            href="/cv.pdf" // Ensure this matches your CV file's name and path
            download
            className="inline-block px-8 py-3 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-lg shadow-lg transform transition duration-500 ease-out hover:scale-105 hover:bg-yellow-500 hover:shadow-2xl"
          >
            Download My Resume
          </a>
        </motion.div>
      </section>
    </main>
  );
}
