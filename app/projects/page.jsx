"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      name: "Property Ease - webapp for managing your rental properties",
      duration: "Completed",
      links: "https://prop-ease-git-main-jaydeep-joshis-projects.vercel.app/",
      tech: "Nextjs, Tailwindcss, Mongodb, Cloudinary, Next auth",
      description: [
        "Created a responsive UI with tailwind",
        "Manage the social google  login authentication with next-auth library",
        "create , edit and save properties using mongodb database",
      ],
    },
    {
      name: "Room Bookings",
      duration: "Completed",
      tech: "Next, React, Tailwind, Redux Toolkit",
      links: "https://room-booking-seven-navy.vercel.app/",
      description: [
        "created complete ui along with responsiveness in tailwind",
        "Have used appwrite for backend for add and edit rooms",
        "Used Nextjs middleware functionality for protected routes for secure pages",
      ],
    },
    {
      name: "Berlin - Books and Event Management",
      duration: "Three months",
      tech: "React, Node, MongoDB, Material UI",
      links: "https://birlinn-web.herokuapp.com/admin/regions",
      description: [
        "Created an admin panel with Login, Reset, and Forgot Password modules.",
        "CRUD API integration for adding, editing, and deleting Books and Events.",
        "Used Cloudinary for uploading Images.",
      ],
    },
    {
      name: "Portman - Offering loans to customers",
      duration: "Two months",

      tech: "React, Node, MongoDB, Material UI",
      links: "https://portman-web.herokuapp.com/",
      description: [
        "Created an admin panel with Login, Reset, and Forgot Password modules.",
        "Used server-side rendering in React for integrating with third-party API.",
      ],
    },
    {
      name: "Livezy - Webapp for fitness",
      duration: "Completed",
      tech: "React, Tailwind CSS, Laravel (Backend)",
      links: "https://www.livezy.com/",
      description: [
        "Created pages for the auth side using Tailwind CSS.",
        "Handled authentication, login, and forgot password.",
        "Implemented social login for Google and Facebook.",
        "Integrated APIs for users to select plans, start dates, and fill dynamic fitness questions.",
        "Integrated Razorpay API.",
        "Implemented API for users to pause and resume plans.",
      ],
    },
    {
      name: "Customer Terotam – Assets Management Product",
      duration: "Completed",
      links: "https://customer-sandbox.terotam.com/",
      tech: "React, Ant Design, MobX, React Google Charts, React Google Maps",
      description: [
        "Created a complete Rating and Feedback Module for customers to provide Ratings after complaints are resolved.",
        "Implemented staff tracking using Google Maps and Mapbox.",
        "Created zone-wise, city-wise, location-wise complaint management charts in analytics.",
        "Implemented dynamic complaint status across the portal.",
      ],
    },
    ,
    ,
  ];

  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-center bg-black bg-opacity-60 backdrop-blur-lg z-10">
        <Link className="text-2xl font-bold text-yellow-300" href="/">
          Jaydeep Joshi
        </Link>
      </nav>

      {/* Main Content */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6 py-12 max-w-6xl mx-auto">
        {/* Portfolio Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600"
        >
          Projects
        </motion.h1>

        {/* Projects List */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-4 sm:px-8 md:px-12 z-30">
          {projects.map((project, index) => (
            <a
              href={project.links}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="bg-gray-800 p-8 rounded-xl shadow-xl transform transition-all duration-500 ease-out hover:rotate-6 hover:scale-105 hover:shadow-2xl"
              >
                <h2 className="text-2xl font-semibold text-yellow-400">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm text-gray-400">{project.duration}</p>
                <p className="mt-1 text-sm text-gray-400">{project.tech}</p>
                <ul className="mt-4 space-y-2 text-gray-200 list-disc pl-6">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="text-lg">
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </a>
          ))}
        </div>
      </section>

      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-32 right-40 w-64 h-64 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full opacity-30 blur-3xl animate-pulse delay-4000" />
      </div>
    </main>
  );
}
