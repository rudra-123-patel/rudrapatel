import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  motion;
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="flex px-7 py-6 justify-between items-center "
      >
        <button onClick={toggleNavbar}>
          <i className="ri-menu-line text-4xl"></i>
        </button>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="div-text"
        >
          <h1 className="text-4xl ">RUDRA</h1>
        </motion.div>
      </motion.div>

      <motion.hr
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="border-gray-200 w-full"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#d26161] text-white flex flex-col items-center justify-center z-[1000]"
          >
            <button
              className="absolute text-4xl top-6 left-6"
              onClick={toggleNavbar}
            >
              <i className="ri-close-line "></i>
            </button>
            <div className="space-y-4 text-9xl flex flex-col text-center">
              <motion.a
                className="inset-0"
                whileHover={{
                  y: 50,
                }}
                onClick={toggleNavbar}
                href="#home"
              >
                Home
              </motion.a>
              <motion.a
                className="inset-0"
                whileHover={{
                  y: 50,
                }}
                onClick={toggleNavbar}
                href="#about"
              >
                About
              </motion.a>
              <motion.a
                className="inset-0"
                whileHover={{
                  y: 50,
                }}
                onClick={toggleNavbar}
                href="#work"
              >
                Work
              </motion.a>
              <motion.a
                className="inset-0"
                whileHover={{
                  y: 50,
                }}
                onClick={toggleNavbar}
                href="#contact"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
