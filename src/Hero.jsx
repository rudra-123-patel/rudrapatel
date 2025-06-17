import React from "react";
import Navbar from "./Components/Navbar";
import { motion } from "motion/react";
import "./assets/fonts/Gilroy-Regular.ttf";
import "./assets/fonts/Tanker-Regular.ttf";
import "./assets/fonts/ClashDisplay-Variable.ttf";
import SkillsCard from "./Components/SkillsCard";
import { skills } from "./Data/Skills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Contact from "./Components/Contact";
import ScrollSmoother from "gsap/ScrollSmoother";
import About from "./Components/About";
import Work from "./Components/Work";
import Home from "./Components/Home";

const Hero = () => {
  motion;
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

  useGSAP(() => {
    gsap.from(" .name,.box-text", {
      opacity: 0,
      y: 10,
      duration: 0.6,
      delay: 0.4,
    });

    gsap.from(".home-btn", {
      opacity: 0,
      y: 10,
      duration: 0.7,
      delay: 0.8,
      stagger: true,
    });
  });

  return (
    <>
      {/* Combine wrapper and apply black + pattern directly here */}
      <div className="min-h-screen w-full bg-black bg-[radial-gradient(#232323_1px,transparent_1px)] [background-size:16px_16px]">
        {/* NAVBAR */}
        <div className="navbar">
          <Navbar />
        </div>

        {/* Main content */}
        <div className="main h-full pt-16">
          {/* Home */}
          <div id="home" className="home">
            <Home />
          </div>

          {/* About */}
          <div id="about" className="about h-full">
            <About />
          </div>

          {/* SKILLS */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            id="skills"
            className="skills min-h-screen w-full pl-6 sm:pl-32 pt-44 pr-4 sm:pr-32"
          >
            <div className="about-headtext underline decoration-red-600 underline-offset-6 text-gray-300 font-semibold text-[20px] uppercase tracking-[3.2px] pb-4">
              Key Skills
            </div>
            <div className="skills-left w-auto text-center">
              <motion.div className="skills-card text-center sm:pl-4 md:pl-16 grid grid-cols-2 sm:grid-cols-3 gap-x-6">
                {skills.map((skill) => (
                  <SkillsCard
                    key={skill.title}
                    title={skill.title}
                    icon={skill.icon}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Work */}
          <div id="work" className="work h-full w-full">
            <Work />
          </div>

          {/* Contact */}
          <div id="contact" className="contact mt-20 pb-20">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
