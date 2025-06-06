import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  motion;
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="flex px-7 py-6 justify-between items-center "
      >
        <button onClick={toggleNavbar} className="z-[1100]">
          <div className="w-8 h-6 flex flex-col justify-between items-center">
            <motion.span
              className="w-full h-[3px] bg-black block origin-center"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              transition={{ duration: 0.4 }}
            />
            <motion.span
              className="w-full h-[3px] bg-black block origin-center"
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-[3px] bg-black block origin-center"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="div-text"
        >
          <a href="" className="text-4xl ">
            RUDRA
          </a>
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
            initial={{ opacity: 1, x: -1500, borderRadius: "50%" }}
            animate={{ opacity: 1, x: 0, y: 0, borderRadius: "0" }}
            exit={{ opacity: 1, x: -1500, borderRadius: "50%" }}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute top-0 left-0 w-full h-screen bg-[#d26161] text-white flex flex-col items-center justify-center z-[1000]"
          >
            <div className="space-y-4 text-9xl flex flex-col text-center">
              <motion.a
                whileHover={{ color: "black" }}
                onClick={toggleNavbar}
                href="#home"
              >
                Home
              </motion.a>
              <motion.a
                whileHover={{ color: "black" }}
                onClick={toggleNavbar}
                href="#about"
              >
                About
              </motion.a>
              <motion.a
                whileHover={{ color: "black" }}
                onClick={toggleNavbar}
                href="#work"
              >
                Work
              </motion.a>
              <motion.a
                whileHover={{ color: "black" }}
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
