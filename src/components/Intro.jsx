import { useState, useRef } from "react";
import { AiOutlineFileText, AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiNextdotjs, SiJavascript } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

// Import components and assets
import coding from "../assets/coding.svg";
import AboutDrawer from "./AboutDrawer";
import AboutContent from "./AboutContent";
import ScrollIndicator from "./ScrollIndicator";
import Projects from "./Projects";
import Navbar from "./Navbar";

const Intro = () => {
  const projectsRef = useRef(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleScrollDown = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <SiFiverr />, href: "https://www.fiverr.com/kalyan_vijay", label: "Fiverr", color: "hover:text-green-400" },
    { icon: <AiFillLinkedin />, href: "https://www.linkedin.com/in/pawan-kalyan-79491b22b/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <AiFillGithub />, href: "https://github.com/Kalyan3081", label: "GitHub", color: "hover:text-white" },
    { icon: <AiFillMail />, href: "mailto:pawan.k30082001@gmail.com", label: "Email", color: "hover:text-red-400" },
    { icon: <AiOutlineFileText />, href: "/Pawan Kalyan.pdf", label: "Resume", color: "hover:text-slate-200" },
  ];

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 bg-grid-white overflow-hidden">

        {/* Background Ambient Glow */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

        {/* Main Content Container */}
        <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-12 z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 h-screen pt-20 lg:pt-0">

          {/* LEFT SIDE: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:w-1/2">

            {/* Freelancer availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs sm:text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Freelance Work
            </motion.div>

            <div className="space-y-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-3xl text-blue-400 font-medium tracking-wide pl-1"
              >
                Hello, I am
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.1] text-shadow-glow whitespace-nowrap"
              >
                Pawan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Kalyan</span>
              </motion.h1>
            </div>

            {/* Subtitle / Typing Effect */}
            <div className="w-full h-10 lg:h-12 flex justify-center lg:justify-start">
              <Navbar />
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 sm:gap-8 pt-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  href={link.href}
                  aria-label={link.label}
                  className={`text-3xl sm:text-4xl text-slate-400 transition-all duration-300 ${link.color}`}
                  target="_blank" rel="noopener noreferrer"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-8 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg sm:text-xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all border border-blue-400/20"
              onClick={() => setDrawerOpen(true)}
            >
              More About Me
            </motion.button>
          </div>

          {/* RIGHT SIDE: Image with "3 Left / 3 Right" Orbit */}
          {/* RIGHT SIDE: Image with "Bracket" ( ) Layout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end lg:w-1/2"
          >
            <div className="relative w-[220px] sm:w-[450px] lg:w-[600px] flex items-center justify-center">

              {/* --- LEFT BRACKET ( --- */}

              {/* 1. MongoDB (Top-Left Tip) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="hidden sm:block absolute sm:left-10 top-[20%] z-20 bg-slate-900/90 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl border border-green-900 shadow-lg shadow-green-500/20"
              >
                <DiMongodb className="text-2xl sm:text-4xl lg:text-6xl text-green-500" />
              </motion.div>

              {/* 2. Express (Middle-Left Apex) */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                className="hidden sm:block absolute sm:-left-12 top-1/2 -translate-y-1/2 z-20 bg-slate-900/90 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl border border-slate-700 shadow-lg shadow-white/10"
              >
                <SiExpress className="text-2xl sm:text-4xl lg:text-6xl text-white" />
              </motion.div>

              {/* 3. React (Bottom-Left Tip) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="hidden sm:block absolute sm:left-10 bottom-[20%] z-20 bg-slate-900/90 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl border border-blue-900 shadow-lg shadow-blue-500/20"
              >
                <FaReact className="text-2xl sm:text-4xl lg:text-6xl text-blue-400" />
              </motion.div>


              {/* --- THE ILLUSTRATION --- */}
              {/* Added padding to ensure icons don't touch the character directly */}
              <img
                src={coding}
                alt="Coding Illustration"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl px-4"
              />


              {/* --- RIGHT BRACKET ) --- */}

              {/* 4. Next.js (Top-Right Tip) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="hidden sm:block absolute sm:right-10 top-[20%] z-20 bg-black/90 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl border border-slate-700 shadow-lg shadow-white/10"
              >
                <SiNextdotjs className="text-2xl sm:text-4xl lg:text-6xl text-white" />
              </motion.div>

              {/* 5. Node.js (Middle-Right Apex) */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
                className="hidden sm:block absolute sm:-right-12 top-1/2 -translate-y-1/2 z-20 bg-slate-900/90 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl border border-green-900 shadow-lg shadow-green-500/20"
              >
                <FaNodeJs className="text-2xl sm:text-4xl lg:text-6xl text-green-500" />
              </motion.div>

              {/* 6. JavaScript (Bottom-Right Tip) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.8 }}
                className="hidden sm:block absolute sm:right-10 bottom-[20%] z-20 bg-slate-900/90 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl border border-yellow-900 shadow-lg shadow-yellow-500/20"
              >
                <SiJavascript className="text-2xl sm:text-4xl lg:text-6xl text-yellow-400" />
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 w-full hidden lg:flex justify-center animate-bounce z-20">
          <ScrollIndicator onClick={handleScrollDown} />
        </div>
      </div>

      <div ref={projectsRef} className="bg-slate-950 min-h-screen">
        <Projects />
      </div>

      <AboutDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <AboutContent />
      </AboutDrawer>
    </>
  );
};

export default Intro;