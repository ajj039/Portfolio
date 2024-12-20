"use client";

import React from "react";
import { motion } from "framer-motion";
import Reactjs from "../../public/images/react.jpg";
import Next from "../../public/images/next.jpg";
import Image from "next/image";

import Express from "../../public/images/express.png";

import Node from "../../public/images/node.jpg";
import Js from "../../public/images/javascript.png";
import Python from "../../public/images/python.png";
import Typescript from "../../public/images/typescript.png";
import Html from "../../public/images/html.jpg";

import Css from "../../public/images/css.jpg";
import Tailwind from "../../public/images/tailwindcss.jpg";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navigation Bar without links */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-black bg-opacity-30 backdrop-blur-md z-10">
        <h1 className="text-2xl font-bold text-yellow-300">Jaydeep Joshi</h1>
      </nav>

      {/* Main Content */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6 py-12 max-w-4xl mx-auto">
        {/* Introduction Section */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold leading-tight"
        >
          About Me
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg text-gray-200"
        >
          I’m a Frontend Developer with <strong>2.6 years of experience</strong>{" "}
          in building engaging and interactive web applications. I’m passionate
          about creating beautiful, user-friendly interfaces and working with
          cutting-edge technologies like React, TypeScript, Next.js, and more.
        </motion.p> */}

        {/* Tech Stack Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-yellow-300">My Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            <div className="text-center">
              <Image src={Html} alt="Html" className="w-16 mx-auto mb-2" />
              <p>HTML</p>
            </div>
            <div className="text-center">
              <Image src={Css} alt="Css" className="w-16 mx-auto mb-2" />
              <p>CSS</p>
            </div>
            <div className="text-center">
              <Image src={Js} alt="JavaScript" className="w-16 mx-auto mb-2" />
              <p>JavaScript</p>
            </div>
            <div className="text-center">
              <Image src={Reactjs} alt="React" className="w-16 mx-auto mb-2" />
              <p>React</p>
            </div>

            <div className="text-center">
              <Image src={Tailwind} alt="React" className="w-16 mx-auto mb-2" />
              <p>Tailwind css</p>
            </div>
            <div className="text-center">
              <Image src={Next} alt="Next.js" className="w-16 mx-auto mb-2" />
              <p>Next.js</p>
            </div>

            <div className="text-center">
              <Image
                src={Typescript}
                alt="TypeScript"
                className="w-16 mx-auto mb-2"
              />
              <p>TypeScript</p>
            </div>
            <div className="text-center">
              <Image src={Node} alt="Node.js" className="w-16 mx-auto mb-2" />
              <p>Node.js</p>
            </div>
            <div className="text-center">
              <Image
                src={Express}
                alt="Express.js"
                className="w-16 mx-auto mb-2"
              />
              <p>Express.js</p>
            </div>
            <div className="text-center">
              <Image src={Python} alt="Python" className="w-16 mx-auto mb-2" />
              <p>Python</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-yellow-300">My Experience</h2>
          <ul className="space-y-4 mt-6 text-lg">
            <li>
              <span className="font-semibold text-yellow-500">
                Front-end Developer – 03/2022 to 11/2022 (On-Site)
              </span>
              <br />
              Nimblechapps, Ahmedabad, Gujarat
            </li>
            <li>
              <span className="font-semibold text-yellow-500">
                Front-end Developer – 12/2022 to 08/2023 (Remote)
              </span>
              <br />
              Six 30 Labs Private Limited, Bangalore
            </li>
            <li>
              <span className="font-semibold text-yellow-500">
                Front-end Developer – 09/2023 to 09/2024 (On-Site)
              </span>
              <br />
              Terotam Techlabs, Ahmedabad, Gujarat
            </li>
          </ul>
        </section>

        {/* Contact Section */}
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

      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-32 right-40 w-64 h-64 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full opacity-30 blur-3xl animate-pulse delay-4000" />
      </div>
    </main>
  );
}
