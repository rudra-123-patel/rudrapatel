import React from "react";
import Navbar from "./Components/Navbar";
import { motion, useScroll } from "motion/react";
import "./assets/fonts/Gilroy-Regular.ttf";
import "./assets/fonts/Tanker-Regular.ttf";
import "./assets/fonts/ClashDisplay-Variable.ttf";
import Contact from "./Components/Contact";
const Hero = () => {
  motion;
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="h-screen w-full">
        {/* PROGRESS BAR */}
        <motion.div
          style={{
            scaleX: scrollYProgress,
          }}
          className="bg-[#f24545] w-full origin-left h-1.5 rounded-4xl fixed top-0 left-0"
        ></motion.div>

        <div className="h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
          {/* NAVBAR */}
          <Navbar />

          <div className="box">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
            >
              <div className="name flex text-[200px] font-['clashdisplay'] pl-16 pr-5 text-center tracking-tight">
                RUDRA PATEL
              </div>
            </motion.div>

            <motion.div
              className="main flex pl-16 text-5xl m-2 font-medium  font-['clashdisplay'] capitalize tracking-tight h-full w-full"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                stagger: true,
                stiffness: 100,
                delay: 0.4,
              }}
            >
              <div className="h-64 w-[70%] mt-16">
                Hello, I am a{" "}
                <span className="bg-[#f24545] p-1 ">Web designer</span> and{" "}
                <span className="bg-[#f24545] p-1">Web developer</span> based in
                India, specializing in creating beautiful and functional
                websites.
              </div>
              <motion.div
                drag
                whileDrag={{ scale: 0.9 }}
                dragConstraints={{
                  left: -900,
                  right: 200,
                  top: -500,
                  bottom: 0,
                }}
                className="h-[300px] w-[300px] border-2 border-solid ml-5 relative backdrop-blur-2xl"
              >
                <span className="absolute top-[45%] right-[25%] z-90 text-black text-lg font-bold ">
                  Drag And Have Fun
                </span>
              </motion.div>
            </motion.div>
          </div>
          <div className="works flex ">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
                delay: 0.5,
              }}
              className="text-8xl font-['clashdisplay'] text-left pl-16 mt-16"
            >
              <a href="#work" className="">
                WORK
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
