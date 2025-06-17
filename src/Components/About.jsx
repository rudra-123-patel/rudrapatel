import { motion } from "framer-motion";

const About = () => {
  motion;
  return (
    <>
      <div className="pl-4 sm:pl-32 pr-4 pt-44 sm:pr-32">
        <div className="grid lg:grid-cols-2 gap-24 w-full h-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="about-left"
          >
            <div className="about-headtext underline decoration-red-600 underline-offset-6 text-gray-300 font-semibold text-[20px] uppercase tracking-[3.2px] pb-4">
              About me
            </div>
            <div className="about-maintext text-white poppins-regular pt-6 text-xl text-justify">
              Hey, I’m{" "}
              <span className="font-semibold text-transparent bg-gradient-to-b from-[#ff6464] to-[#e61e1e] bg-clip-text">
                Rudra Patel
              </span>{" "}
              a frontend explorer with a passion for turning wild ideas into smooth, interactive experiences.
              <div className="mb-2" />
              When I’m not wrestling with code, I’m probably fine tuning UI
              details or wondering if I really need that 38th tab open. Using{" "}
              <span className="font-semibold text-blue-300">
                React
              </span> and{" "}
              <span className="font-semibold text-blue-300">TailwindCSS</span>{" "}
              as my trusty tools, I love crafting fast, flexible, and stylish
              websites the kind that make you say, “Whoa, this actually
              works.”
              <div className="mb-4" />
              Let’s collaborate, innovate, and bring your next digital
              masterpiece to life — bugs and all.
            </div>
            <div className="mt-10">
              <button>
                <a
                  href="#contact"
                  className="h-button text-white hover:cursor-pointer border-2 border-black border-l-red-600 border-r-red-600 rounded-xl hover:bg-red-500 hover:border-red-600 p-2 px-4 group transition-colors duration-300"
                >
                  GET IN TOUCH
                </a>
              </button>
            </div>
          </motion.div>
          <div className="about-right">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="about-education"
            >
              <div className="about-headtext underline decoration-red-600 underline-offset-6 text-gray-300 font-semibold text-[20px] uppercase tracking-[3.2px] pb-4">
                Education
              </div>

              <div className=" text-gray-200 pt-6 ">
                <div className="flex flex-col ml-2 sm:ml-6 relative">
                  {/* Bachelor's */}
                  <div className="mb-14 relative">
                    <motion.span
                      initial={{ scale: 0, rotate: 0 }}
                      whileInView={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 1, type: "spring" }}
                      viewport={{ once: true }}
                      s
                      className="absolute left-[-50px] top-4 transform -translate-y-1/2  bg-gradient-to-b text-transparent from-[#ff6464] to-[#e61e1e] bg-clip-text "
                    >
                      <span className="text-4xl hidden sm:inline-block">
                        <i className="ri-arrow-right-double-fill"></i>
                      </span>
                    </motion.span>

                    {/* Content */}
                    <div className="">
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-semibold sm:mr-4">
                          Bachelor's Technology
                        </h3>
                        <span className="bg-gray-800 px-2 py-1 mx-4 text-sm font-semibold">
                          [Undergraduate]
                        </span>
                        <span className="ml-auto text-gray-400">
                          2021 - 2025
                        </span>
                      </div>
                      <p className="text-gray-400">
                        Pursuing my BTech with a strong focus on web
                        development, programming, and computer fundamentals.
                        Gained hands-on experience in React.js, TailWindCSS,
                        JavaScript and software development.
                      </p>
                    </div>
                  </div>

                  {/* Intermediate */}
                  <div className="mb-14 relative">
                    <motion.span
                      initial={{ scale: 0, rotate: 0 }}
                      whileInView={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      viewport={{ once: true }}
                      className="absolute left-[-50px] top-4 transform -translate-y-1/2  bg-gradient-to-b text-transparent from-[#ff6464] to-[#e61e1e] bg-clip-text "
                    >
                      <span className="text-4xl hidden sm:inline-block">
                        <i className="ri-arrow-right-double-fill"></i>
                      </span>
                    </motion.span>

                    {/* Content */}
                    <div className="">
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-semibold mr-4">
                          Intermediate
                        </h3>
                        <span className="bg-gray-800 px-2 py-1 text-sm font-semibold">
                          [12th Grade]
                        </span>
                        <span className="ml-auto text-gray-400">2021</span>
                      </div>
                      <p className="text-gray-400">
                        Completed my intermediate education with a focus on
                        science and mathematics, enhancing my analytical and
                        problem-solving skills, which are crucial for
                        programming and software development.
                      </p>
                    </div>
                  </div>

                  {/* Matriculation */}
                  <div className="mb-14 relative">
                    <motion.span
                      initial={{ scale: 0, rotate: 0 }}
                      whileInView={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      viewport={{ once: true }}
                      className="absolute left-[-50px] top-4 transform -translate-y-1/2  bg-gradient-to-b text-transparent from-[#ff6464] to-[#e61e1e] bg-clip-text "
                    >
                      <span className="text-4xl hidden sm:inline-block">
                        <i className="ri-arrow-right-double-fill"></i>
                      </span>
                    </motion.span>

                    {/* Content */}
                    <div className="">
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-semibold mr-4">
                          Matriculation
                        </h3>
                        <span className="bg-gray-800 px-2 py-1 text-sm font-semibold">
                          [10th Grade]
                        </span>
                        <span className="ml-auto text-gray-400">2019</span>
                      </div>
                      <p className="text-gray-400">
                        Completed my matriculation with a solid foundation in
                        mathematics, science, and computer fundamentals, which
                        sparked my interest in programming and web development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
