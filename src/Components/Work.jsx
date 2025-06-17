import { motion } from "framer-motion";
const Work = () => {
  motion;
  return (
    <>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="work h-full sm:min-h-screen w-full pl-4 pr-4 sm:pl-32 sm:pr-32 pt-8 sm:pt-36"
      >
        <div className="work-headtext underline decoration-red-600 underline-offset-6 text-gray-300 font-semibold text-[20px] uppercase tracking-[3.2px] pb-4">
          My Work
        </div>
        <div className="w-full text-center pt-10 text-white">
          <div className="work-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
            {/* Card 1 */}
            <div className="work-item text-left bg-black border border-gray-900  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div>
                <a
                  href="https://rudrapateldev.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full h-48 mb-4 rounded-lg">
                    <img
                      src="image/portfolio.png"
                      className="w-full h-full object-fill rounded-lg hover:scale-105 transition-transform duration-300"
                      alt="portfolio"
                      style={{ display: "block" }}
                    />
                  </div>
                  <div className="p-4 ">
                    <h3 className="text-xl font-semibold mb-2">
                      Personal Portfolio
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Personal portfolio to showcase projects and skills.
                      Responsive and visually appealing.
                    </p>

                    <div className="work-techs text-gray-500 text-sm mt-2">
                      <span className="work-tech">React </span>
                      <span className="work-tech">Framer Motion </span>
                      <span className="work-tech">TailWindCSS </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="work-item text-left bg-black border border-gray-900  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div>
                <a
                  href="https://dentycare.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full h-48 mb-4 rounded-lg">
                    <img
                      src="/image/dentycare.png"
                      className="w-full h-full object-fill rounded-lg hover:scale-105 transition-transform duration-300"
                      alt="dentalcare"
                      style={{ display: "block" }}
                    />
                  </div>
                  <div className="p-4 ">
                    <h3 className="text-xl font-semibold mb-2">DentyCare</h3>
                    <p className="text-gray-300 mb-4">
                      DentyCare a design for a dental clinic website. Created
                      just using HTML and CSS.
                    </p>

                    <div className="work-techs text-gray-500 text-sm mt-2">
                      <span className="work-tech">HTML </span>
                      <span className="work-tech">CSS </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/*  Card 3 */}
            <div className="work-item text-left bg-black border border-gray-900  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div>
                <a
                  href="https://rudrapateldev.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full h-48 mb-4 rounded-lg">
                    <img
                      src="image/portfolio.png"
                      className="w-full h-full object-fill rounded-lg hover:scale-105 transition-transform duration-300"
                      alt="portfolio"
                      style={{ display: "block" }}
                    />
                  </div>
                  <div className="p-4 ">
                    <h3 className="text-xl font-semibold mb-2">
                      Personal Portfolio
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Personal portfolio to showcase projects and skills.
                      Responsive and visually appealing.
                    </p>

                    <div className="work-techs text-gray-500 text-sm mt-2">
                      <span className="work-tech">React </span>
                      <span className="work-tech">Framer Motion </span>
                      <span className="work-tech">TailWindCSS </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Card 4 */}
            <div className="work-item text-left bg-black border border-gray-900  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div>
                <a
                  href="https://rudrapateldev.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full h-48 mb-4 rounded-lg">
                    <img
                      src="image/portfolio.png"
                      className="w-full h-full object-fill rounded-lg hover:scale-105 transition-transform duration-300"
                      alt="portfolio"
                      style={{ display: "block" }}
                    />
                  </div>
                  <div className="p-4 ">
                    <h3 className="text-xl font-semibold mb-2">
                      Personal Portfolio
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Personal portfolio to showcase projects and skills.
                      Responsive and visually appealing.
                    </p>

                    <div className="work-techs text-gray-500 text-sm mt-2">
                      <span className="work-tech">React </span>
                      <span className="work-tech">Framer Motion </span>
                      <span className="work-tech">TailWindCSS </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
