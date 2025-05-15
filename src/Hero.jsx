import React from "react";
import Navbar from "./Components/Navbar";
import { motion, useScroll } from "motion/react";
import "./assets/fonts/Gilroy-Regular.ttf";
import "./assets/fonts/Tanker-Regular.ttf";
import "./assets/fonts/ClashDisplay-Variable.ttf";
import SkillsCard from "./Components/SkillsCard";
import { skills } from "./Data/Skills";

const Hero = () => {
  motion;
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="min-h-screen w-full">
        {/* PROGRESS BAR */}
        <motion.div
          style={{
            scaleX: scrollYProgress,
          }}
          className="bg-[#f24545] w-full origin-left h-1.5 rounded-4xl fixed top-0 left-0"
        ></motion.div>

        <div className="min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
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
              <div className="name flex text-[200px] font-['clashdisplay'] pl-16 pr-5  text-center tracking-tight">
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
                <span className="bg-[#f24545] pl-1 pr-2 ">Web designer</span>{" "}
                And{" "}
                <span className="bg-[#f24545] pl-1 pr-2">Web developer</span>{" "}
                from India, specializing in creating beautiful and functional
                websites.
              </div>
              <motion.div
                drag
                whileTap={{ cursor: "grabbing", scale: 0.9 }}
                dragConstraints={{
                  left: -900,
                  right: 0,
                  top: -500,
                  bottom: 1000,
                }}
                className="h-[300px] w-[300px] border-2 border-solid ml-5 z-99 relative backdrop-blur-2xl"
              >
                <span className="absolute top-[45%] right-[25%] z-90 text-black text-lg font-bold ">
                  Drag And Have Fun
                </span>
              </motion.div>
            </motion.div>

            {/* SKILLS */}
            <div className="skills h-full w-full ">
              {" "}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  stiffness: 100,
                  delay: 0.5,
                }}
                className="text-8xl text-center mt-16"
              >
                <p className="skills-text text-gray-800">Skills</p>
              </motion.div>
              <div className="w-auto ml-[25%] text-center ">
                <motion.div className="text-center grid grid-cols-4 w-max ">
                  {skills.map((skill) => (
                    <SkillsCard
                      key={skill.title}
                      title={skill.title}
                      icon={skill.icon}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* work */}
            <div className="work mt-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  stiffness: 100,
                  delay: 0.7,
                }}
                className="text-8xl text-center mb-10"
              >
                <p className="work-text text-gray-800">My Work</p>
              </motion.div>
              <div className="grid grid-cols-2 gap-10 p-4 w-[80rem] h-full ml-30 items-center ">
                {/* Example Work Item */}
                <motion.div className="w-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200">
                  <h3 className="text-3xl font-bold mb-2 pl-1">
                    Pinterest Clone
                  </h3>
                  <p className="text-lg text-gray-700 p-1 mb-2 capitalize">
                    Created a Pinterest clone with Javascript and TailWindCSS
                  </p>
                  <a
                    href="https://rudrapinterest.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 mt-4 text-2xl transition delay-100 duration-300 ease-in-out hover:text-white hover:bg-black  "
                  >
                    Check Project <i class="ri-arrow-right-line"></i>
                  </a>
                </motion.div>
                {/* Add more work items below as needed */}
                <motion.div className="w-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200">
                  <h3 className="text-3xl font-bold mb-2 pl-1">
                    DeaLaptop Landing Page{" "}
                  </h3>
                  <p className="text-lg text-gray-700 mb-2 p-1 capitalize">
                    Landing Page Design for DeaLaptop where you can buy laptop
                    and accessories.
                  </p>
                  <a
                    href="https://github.com/rudra-123-patel/DeaLaptop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 mt-4 text-2xl transition delay-100 duration-300 ease-in-out hover:text-white hover:bg-black "
                  >
                    Check Project <i className="ri-arrow-right-line"></i>
                  </a>
                </motion.div>
                <motion.div className="w-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200">
                  <h3 className="text-3xl font-bold p-1 mb-2">
                    Significo Clone
                  </h3>
                  <p className="text-lg text-gray-700 p-1 mb-2 capitalize">
                    Significo clone website using TailWindCSS and JavaScript.
                  </p>
                  <a
                    href="https://clonesignificoo.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 mt-4 text-2xl transition delay-100 duration-300 ease-in-out hover:text-white hover:bg-black  "
                  >
                    Check Project <i class="ri-arrow-right-line"></i>
                  </a>
                </motion.div>{" "}
                <motion.div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000"
                    alt="Project"
                    className="w-full h-64 object-cover"
                  />

                  <motion.div
                   
                    transition={{
                      duration: 1.3,
                    }}
                    className="card-text flex justify-between bg-white text-black p-4"
                  >
                    <h3 className="text-3xl font-bold ">DENTY CARE</h3>

                    <motion.a
                    whileHover={{
                      rotate:-45
                    }}
                      href="https://rudrapinterest.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl "
                    >
                      <i class="ri-arrow-right-line"></i>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
