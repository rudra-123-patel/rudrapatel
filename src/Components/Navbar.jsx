import React, { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  motion;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="navbar fixed top-0 left-0 w-full sm:w-full z-50 flex px-7 py-6 justify-between items-center backdrop-blur-sm"
        style={{ WebkitBackdropFilter: "blur(12px)" }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="div-text"
        >
          <a
            href="#"
            className="text-4xl flex justify-center items-center text-white font-bold tracking-wider"
          >
            RUDRA
          </a>
        </motion.div>

        {/*  Menu button for mobile */}
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="sm:hidden z-50 relative ml-auto"
        >
          {isOpen ? (
            <img
              className="invert brightness-0 z-999 relative w-8 h-8"
              src="/image/close-fill.png"
              alt="close"
            />
          ) : (
            <img
              className="invert brightness-0 z-999 relative w-8 h-8"
              src="/image/menu-3-line.png"
              alt="menu"
            />
          )}
        </div>

        {/* Desktop Menu */}
        <nav>
          <ul className="hidden sm:flex gap-8">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.3 }}
              >
                <a
                  href={link.href}
                  className="text-3xl text-white hover:text-[#f24545] transition-colors duration-200 border-b-2 border-transparent hover:border-[#f24545]"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0  }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed  right-0 h-full w-full bg-[#f24545] z-40 flex flex-col items-center justify-around sm:hidden"
        >
          <ul className="flex flex-col text-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.3 }}
              >
                <a
                  onClick={() => setIsOpen(false)}
                  href={link.href}
                  className="text-4xl text-gray-200 hover:text-[black] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
