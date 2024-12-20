import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className="absolute top-0   left-0 w-full px-6 py-4 flex justify-between items-center bg-black bg-opacity-30">
        <h1 className="text-2xl font-bold text-yellow-300">Jaydeep Joshi</h1>
        <ul className="flex space-x-6 text-[1.1rem]">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="hover:text-yellow-300 transition"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-300 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
