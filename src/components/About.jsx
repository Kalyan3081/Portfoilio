import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiNextdotjs, SiJavascript, SiTailwindcss, SiSanity } from "react-icons/si";
import { MdPhoneAndroid } from "react-icons/md";
import profilePic from "../assets/dpp.jpg";

const skills = [
  { icon: <FaReact className="text-blue-400" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <DiMongodb className="text-green-400" />, name: "MongoDB" },
  { icon: <SiExpress className="text-white" />, name: "Express" },
  { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
  { icon: <SiSanity className="text-red-500" />, name: "Sanity CMS" },
  { icon: <MdPhoneAndroid className="text-purple-400" />, name: "React Native" },
];

const stats = [
  { value: "3+", label: "Projects Delivered" },
  { value: "9+", label: "Technologies" },
  { value: "24h", label: "Avg. Response Time" },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Who I Am
          </motion.h2>
        </div>

        {/* Photo + Bio */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-14">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <div className="relative">
              <img
                src={profilePic}
                alt="Pawan Kalyan — Freelance Developer"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover border-2 border-blue-500/30 shadow-2xl shadow-blue-500/10"
              />
              <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">Available</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-center lg:text-left"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">Pawan Kalyan</h3>
              <p className="text-blue-400 text-sm font-medium mt-1">Freelance MERN Stack & React Native Developer</p>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              I build fast, scalable web applications and cross-platform mobile apps that solve real business problems.
              From food-tech and healthcare to security management — I handle everything end-to-end: UI design, database architecture, APIs, and deployment.
            </p>
            <p className="text-slate-400 text-sm">
              Based in India · Open to remote projects worldwide
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/20"
              >
                Get in Touch
              </a>
              <a
                href="/Pawan Kalyan.pdf"
                download
                className="px-5 py-2.5 rounded-full border border-slate-700 text-slate-300 font-medium text-sm hover:border-blue-500 hover:text-blue-400 transition-all"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-5 rounded-2xl bg-slate-900/60 border border-slate-800"
            >
              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {stat.value}
              </p>
              <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            Tech Stack
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -3 }}
                className="flex flex-col items-center gap-2 bg-slate-900/60 rounded-xl p-3 border border-slate-800 cursor-default"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-xs text-slate-400 text-center leading-tight">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
