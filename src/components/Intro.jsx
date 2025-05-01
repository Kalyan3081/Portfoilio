import { useState } from "react";
import { useRef } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { RiCodeSSlashFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import Profil from "../assets/profil.png";
import AboutDrawer from "./AboutDrawer";
import ScrollIndicator from "./ScrollIndicator";
import Projects from "./Projects";
import '../index.css'


const Intro = () => {

  const projectsRef = useRef(null);

  const handleScrollDown = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  // console.log("isDrawerOpen:", isDrawerOpen);

  const handleOpenDrawer = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);

  return (
    <>
      <div
        className={`introContainer container mx-auto flex flex-col lg:flex-row mt-5 gap-8 ${isDrawerOpen ? "lg:flex" : "flex"
          }`}>

        <div className="Name flex flex-col items-center text-center mt-6 lg:mt-32">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-blue-200">Pawan Kalyan</h1>
          <button
            className="aboutMe w-28 bg-blue-400 mt-4 p-2 text-sm sm:text-base rounded-md bg-gradient-to-r from-blue-300 to-blue-600 hover:from-blue-600 hover:to-blue-300 mx-4"
            onClick={handleOpenDrawer}
          >
            About Me
          </button>
        </div>


        <div className="imageContainer relative flex justify-center items-center md:ml-0 pb-28 lg:ml-[45px] mt-[25px]">
          <div className="relative">
            <img
              src={Profil}
              className=" image h-64 w-64 rounded-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
          </div>
        </div>




        <div
          className={`icons  
    flex justify-center gap-6 
    md:flex md:justify-center 
    ${isDrawerOpen ? "hidden lg:!hidden" : "lg:flex lg:flex-col lg:gap-12 lg:justify-end lg:items-end lg:absolute lg:right-5"}`}
        >

          <a href="/Resume.pdf"
            download="Resume.pdf">
            <AiOutlineFileText className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
          </a>

          <a href="https://github.com/Kalyan3081">
            <AiFillGithub className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
          </a>
          <a href="https://www.linkedin.com/in/pawan-kalyan-79491b22b/">
            <AiFillLinkedin className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
          </a>
          <a href="mailto:pawan.k30082001@gmail.com">
            <AiFillMail className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
          </a>

        </div>
      </div>


      <div className="flex justify-center mt-10">
        <ScrollIndicator onClick={handleScrollDown} />
      </div>


      {/* Target Section to Scroll Down To */}
      <div ref={projectsRef}>
        <Projects />
      </div>
      {/* <ScrollIndicator/> */}


      <AboutDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} className={`${isDrawerOpen ? "md:mt-20" : ""}`}
      >
        <h3 className="text-center text-teal-500 text-2xl sm:text-3xl lg:text-4xl">
          About Me
        </h3>
        <p className="mt-4 lg:text-gray-500 text-sm sm:text-base md:text-gray-400  text-justify">
          Hello! My name is Pawan Kalyan. I am a passionate web developer. I
          enjoy building interactive, user-friendly, and responsive web
          applications. Technologies and tools that I use to create such
          awesome websites.
        </p>
        <ul className="languages flex flex-wrap justify-center lg:justify-start pt-1 mt-2 md:text-gray-200">
          {[
            "#html",
            "#css",
            "#tailwind",
            "#bootstrap",
            "#javascript",
            "#react.js",
            "#redux",
            "#node.js",
            "#mongoDB",
            "#express.js",
            "#figma",
            "#github",
            "#git",
          ].map((item, index) => (
            <li
              key={index}
              className="m-1 p-1 text-sm border rounded-full border-gray-600"
            >
              {item}
            </li>
          ))}
        </ul>
        <h3 className="text-teal-500 pt-5 text-2xl sm:text-3xl  text-center">
          MERN STACK
        </h3>

        <div className="mernIcons pt-5 flex justify-around sm:justify-between w-full">
          <div className="icon1 flex flex-col items-center">
            <DiMongodb className="text-3xl sm:text-4xl text-green-600" />
            <p className="text-green-600">M</p>
          </div>
          <div className="icon2 flex flex-col items-center">
            <SiExpress className="text-3xl sm:text-4xl text-gray-400" />
            <p className="text-gray-400">E</p>
          </div>
          <div className="icon3 flex flex-col items-center">
            <GrReactjs className="text-3xl sm:text-4xl text-blue-300" />
            <p className="text-blue-300">R</p>
          </div>
          <div className="icon4 flex flex-col items-center">
            <FaNodeJs className="text-3xl sm:text-4xl text-green-300" />
            <p className="text-green-300">N</p>
          </div>
        </div>
      </AboutDrawer>
    </>
  );
};

export default Intro;
