import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 font-serif text-gray-400 py-6 mt-2 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex gap-4 justify-center text-lg flex-wrap">
          <a href="mailto:jayujoshi59@gmail.com" className="md:border-r-2 pr-3">
            Contact: jayujoshi59@gmail.com
          </a>
          <p>Phone: +91 9328410039</p>
        </div>
        {/* Contact Info */}

        <p className="mt-2">© {new Date().getFullYear()} Jaydeep Joshi</p>
      </div>
    </footer>
  );
};

export default Footer;
