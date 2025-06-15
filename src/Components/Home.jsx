import { motion } from "framer-motion";

const Home = () => {
  motion;
  return (
    <>
      <div className="home-main">
        <div className="name mt-16">
          <div className="pl-16 pr-5 text-center text-white tracking-tight">
            <div className="name-text block text-[100px] font-light mb-[-30px]">
              Hi I'm
            </div>
            <div className="name-text font-light block text-[180px] text-transparent bg-gradient-to-b from-[#f24545] to-[#f82424] bg-clip-text">
              Rudra <span className="name-text text-transparent bg-gradient-to-b from-[#f24545] to-[#f82424] bg-clip-text">Patel</span> 
            </div>
          </div>
        </div>

        <div className="box-text flex flex-col text-center pl-10 text-4xl m-2 font-medium capitalize tracking-wider">
          <span className="box-text text-white pb-4">
            A Web Designer & a frontend developer
          </span>
        </div>

        <div className="home-btn mt-8 pl-4 flex tracking-tighter justify-center text-xl">
          <a
            href="#contact"
            className="h-button text-white p-2 px-4 group hover:cursor-pointer"
          >
            GET IN TOUCH
            <div className=" bg-red-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#work" className="h-button text-white p-2 px-4 group ">
            WORK
            <div className="bg-red-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
