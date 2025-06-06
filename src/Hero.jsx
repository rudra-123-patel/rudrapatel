import React from "react";
import Navbar from "./Components/Navbar";
import { motion, useScroll } from "motion/react";
import "./assets/fonts/Gilroy-Regular.ttf";
import "./assets/fonts/Tanker-Regular.ttf";
import "./assets/fonts/ClashDisplay-Variable.ttf";
import SkillsCard from "./Components/SkillsCard";
import { skills } from "./Data/Skills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Contact from "./Components/Contact";

const Hero = () => {
  motion;
  const { scrollYProgress } = useScroll();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.from(".name , .box-text", {
      opacity: 0,
      y: -300,
      duration: 0.3,
      stagger: 0.1,
    });
  });

  return (
    <>
      <div className="min-h-screen ">
        {/* PROGRESS BAR */}
        <motion.div
          style={{
            scaleX: scrollYProgress,
          }}
          className="bg-[#f24545] z-99 w-full origin-left h-1.5 rounded-4xl fixed top-0 left-0"
        ></motion.div>

        <div className="min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
          {/* NAVBAR */}
          <Navbar />

          <div className="box">
            <div>
              <div className="name flex text-[200px] font-['clashdisplay'] pl-16 pr-5  text-center tracking-tight">
                RUDRA PATEL
              </div>
            </div>

            <div className="box-text main flex pl-16 text-5xl m-2 font-medium  font-['clashdisplay'] capitalize tracking-tight h-full w-full">
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
                  bottom: 10000,
                }}
                className="drag-box h-[300px] w-[300px] border-2 border-solid ml-5 z-9999 relative backdrop-blur-2xl"
              >
                <span className="absolute top-[45%] right-[25%] z-90 text-black text-lg font-bold ">
                  Drag And Have Fun
                </span>
              </motion.div>
            </div>

            {/* SKILLS */}
            <div className="skills h-full w-full ">
              {" "}
              <motion.div className="text-8xl text-center mt-16">
                <p className="skills-text text-gray-800">Skills</p>
              </motion.div>
              <div className="w-auto ml-[25%] text-center ">
                <motion.div className="skills-card text-center grid grid-cols-4 w-max ">
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
              <div className="grid grid-cols-2 gap-10 p-4 max-w-7xl mx-50 h-full  items-center ">
                {/*Works */}
                <motion.div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000"
                    alt="Project"
                    className="w-full h-64 object-cover"
                  />

                  {/* TEXT OVER IMAGE */}
                  <motion.p
                    initial={{
                      y: 50,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute  bottom-17 text-white text-lg text-center z-10 bg-black/50 px-2 py-1 "
                  >
                    A responsive Design of Pinterest clone using HTML ,
                    TailWindCSS and Javascript.
                  </motion.p>

                  <motion.div
                    transition={{ duration: 1.3 }}
                    className="card-text flex justify-center gap-3 bg-white hover:bg-[#f24545] hover:text-white transition delay-100 duration-150 ease-in-out text-black p-4"
                  >
                    <h3 className="text-3xl font-bold">PINTEREST</h3>
                    <motion.a
                      whileHover={{ rotate: -45 }}
                      href="https://rudrapinterest.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl"
                    >
                      <i className="ri-arrow-right-line"></i>
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* 2nd */}

                <motion.div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000"
                    alt="Project"
                    className="w-full h-64 object-cover"
                  />

                  {/* TEXT OVER IMAGE */}
                  <motion.p
                    initial={{
                      y: 50,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute  bottom-17 text-white text-lg text-center z-10 bg-black/50 px-2 py-1 "
                  >
                    A Dental Care Website Design Using HTML, CSS And JavaScript
                  </motion.p>

                  <motion.div
                    transition={{ duration: 1.3 }}
                    className="card-text flex  justify-center gap-3 bg-white hover:bg-[#f24545] hover:text-white transition delay-100 duration-150 ease-in-out text-black p-4"
                  >
                    <h3 className="text-3xl font-bold">DENTY CARE</h3>
                    <motion.a
                      whileHover={{ rotate: -45 }}
                      href="https://dentycare.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl"
                    >
                      <i className="ri-arrow-right-line"></i>
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* 3rd */}

                <motion.div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000"
                    alt="Project"
                    className="w-full h-64 object-cover"
                  />

                  {/* TEXT OVER IMAGE */}
                  <motion.p
                    initial={{
                      y: 50,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute w-full bottom-17  text-white text-lg text-center z-10 bg-black/50 px-2 py-1 "
                  >
                    A CLone Of Significo Website.
                  </motion.p>

                  <motion.div
                    transition={{ duration: 1.3 }}
                    className="card-text  flex justify-center gap-3 bg-white hover:bg-[#f24545] hover:text-white transition delay-100 duration-150 ease-in-out text-black p-4"
                  >
                    <h3 className="text-3xl font-bold">SIGNIFICO</h3>
                    <motion.a
                      whileHover={{ rotate: -45 }}
                      href="https://clonesignificoo.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl"
                    >
                      <i className="ri-arrow-right-line"></i>
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* 4th */}

                <motion.div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000"
                    alt="Project"
                    className="w-full h-64 object-cover"
                  />

                  {/* TEXT OVER IMAGE */}
                  <motion.p
                    initial={{
                      y: 50,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute  bottom-17 text-white text-lg text-center z-10 bg-black/50 px-2 py-1 "
                  >
                    A Design For Website Where You Can Buy Laptop And
                    Accessories
                  </motion.p>

                  <motion.div
                    transition={{ duration: 1.3 }}
                    className="card-text flex justify-center gap-3 bg-white hover:bg-[#f24545] hover:text-white transition delay-100 duration-150 ease-in-out text-black p-4"
                  >
                    <h3 className="text-3xl font-bold">DEALAPTOP</h3>
                    <motion.a
                      whileHover={{ rotate: -45 }}
                      href="https://github.com/rudra-123-patel/DeaLaptop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl"
                    >
                      <i className="ri-arrow-right-line"></i>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Contact Page */}

            <div className="contact mt-20 pb-20">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
