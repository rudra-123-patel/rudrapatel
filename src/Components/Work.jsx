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
        <div className="w-full text-center text-white">
          <div className="work-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
            {/* Card 1 */}
            <div className="work-item bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Project Title</h3>
              <p className="text-gray-400 mb-4">
                A brief description of the project goes here. Highlight key
                features and technologies used.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
              <div className="work-techs text-gray-500 text-sm mt-2">
                <span className="work-tech">React </span>
                <span className="work-tech">JavaScript </span>
                <span className="work-tech">CSS </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="work-item bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">E-Commerce App</h3>
              <p className="text-gray-400 mb-4">
                An online store with product listings, cart, and checkout. Built
                for seamless shopping experience.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
              <div className="work-techs text-gray-500 text-sm mt-2">
                <span className="work-tech">Next.js </span>
                <span className="work-tech">TypeScript </span>
                <span className="work-tech">TailwindCSS </span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="work-item bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-gray-400 mb-4">
                Personal portfolio to showcase projects and skills. Responsive
                and visually appealing.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
              <div className="work-techs text-gray-500 text-sm mt-2">
                <span className="work-tech">React </span>
                <span className="work-tech">Framer Motion </span>
                <span className="work-tech">SCSS </span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="work-item bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Blog Platform</h3>
              <p className="text-gray-400 mb-4">
                A full-featured blog platform with markdown support and user
                authentication.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
              <div className="work-techs text-gray-500 text-sm mt-2">
                <span className="work-tech">Node.js </span>
                <span className="work-tech">Express </span>
                <span className="work-tech">MongoDB </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
