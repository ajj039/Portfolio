import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-6  relative z-10 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-wrap gap-4 justify-center text-lg">
          <a
            href="mailto:jayujoshi59@gmail.com"
            className="hover:text-white transition-colors"
          >
            📧 jayujoshi59@gmail.com
          </a>
          <p className="border-l border-gray-700 pl-4">📞 +91 9328410039</p>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          © {new Date().getFullYear()} Jaydeep Joshi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
