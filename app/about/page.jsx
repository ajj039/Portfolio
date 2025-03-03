"use client";

import React from "react";
import { motion } from "framer-motion";
import Reactjs from "../../public/images/react.jpg";
import Next from "../../public/images/next.jpg";
import Image from "next/image";
import Mongo from "../../public/images/mongodb.png";
import Express from "../../public/images/express.png";
import Node from "../../public/images/node.jpg";
import Js from "../../public/images/javascript.png";
import Python from "../../public/images/python.png";
import Typescript from "../../public/images/typescript.png";
import Html from "../../public/images/html.jpg";
import Css from "../../public/images/css.jpg";
import Tailwind from "../../public/images/tailwindcss.jpg";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";

export default function AboutPage() {
  const certifications = [
    {
      title: "React Essential Training, (Linkedin Learning)",
      href: "/react-essential.pdf",
    },
    {
      title: "MERN Essential Training, (Linkedin Learning)",
      href: "/mern-essential.pdf",
    },
  ];

  const techNames = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
  ];

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-center bg-black bg-opacity-60 backdrop-blur-lg z-10">
        <h1 className="text-2xl font-bold text-indigo-400">Jaydeep Joshi</h1>
      </nav>

      <section className="flex flex-col items-center justify-center text-center mt-32 px-6 py-12 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold leading-tight"
        >
          About Me
        </motion.h1>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-yellow-300">My Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {[
              Html,
              Css,
              Js,
              Reactjs,
              Tailwind,
              Next,
              Typescript,
              Node,
              Express,
              Mongo,
              Python,
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <Image src={tech} alt={tech} className="w-16 mx-auto mb-2" />
                <p>{techNames[index]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-yellow-300">Certifications</h2>
          <ul className="space-y-4 mt-6 text-lg">
            {certifications.map((certi, index) => (
              <li key={index}>
                <span className="font-semibold text-yellow-500">
                  {certi.title}{" "}
                  <a href={certi.href} download>
                    <IoMdDownload className="inline-block ml-3 text-2xl" />
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-yellow-300">My Experience</h2>
          <ul className="space-y-4 mt-6 text-lg">
            <li>
              <span className="font-semibold text-yellow-500">
                Front-end Developer – 03/2022 to 08/2023 (Remote)
              </span>
              <br />
              Six 30 Labs Private Limited, Bangalore
            </li>
            <li>
              <span className="font-semibold text-yellow-500">
                Front-end Developer – 09/2023 to 12/2024 (On-Site)
              </span>
              <br />
              Terotam Techlabs, Ahmedabad, Gujarat
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-yellow-300">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-200">
            Interested in collaborating or just want to chat? Feel free to reach
            out to me!
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="px-8 py-3 text-lg font-medium text-white bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
