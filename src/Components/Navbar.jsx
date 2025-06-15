import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  motion;
 
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="navbar fixed top-0 left-0 w-full sm:w-full z-50 flex px-7 py-6 justify-between items-center backdrop-blur-sm"
        style={{ WebkitBackdropFilter: "blur(12px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="div-text "
        >
          <a
            href="#"
            className="text-4xl flex justify-center items-center text-white font-bold tracking-wider"
          >
            RUDRA
          </a>
        </motion.div>
        {/* Desktop Nav */}
        <nav>
          <ul className="hidden sm:flex gap-8 ">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.3 }}
              >
                <a
                  href={link.href}
                  className="text-3xl text-white hover:text-[#f24545] transition-colors duration-200 border-b-2 border-transparent hover:border-[#f24545] "
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      
      </motion.div>
      {/* Mobile Nav */}
    
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full bg-[#181818] z-50 flex flex-col items-center pt-24 sm:hidden"
        >
            

            
        </motion.div>
      
    </>
  );
};

export default Navbar;
