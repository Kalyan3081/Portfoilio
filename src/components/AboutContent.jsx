import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiNextdotjs, SiJavascript, SiTailwindcss, SiSanity } from "react-icons/si";
import { MdCode, MdPhoneAndroid } from "react-icons/md";
import { HiOutlineServer } from "react-icons/hi";
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

const services = [
  {
    icon: <MdCode size={20} />,
    title: "Web Development",
    desc: "Full-stack web apps with modern, responsive UI",
  },
  {
    icon: <MdPhoneAndroid size={20} />,
    title: "Mobile Apps",
    desc: "Cross-platform apps with React Native",
  },
  {
    icon: <HiOutlineServer size={20} />,
    title: "API & Backend",
    desc: "RESTful APIs with Node.js & MongoDB",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { delay },
});

const AboutContent = () => {
  return (
    <div className="space-y-7 pt-4 pb-6">

      {/* Profile Header */}
      <motion.div {...fadeUp(0)} className="flex items-center gap-4">
        <img
          src={profilePic}
          alt="Pawan Kalyan"
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 ring-4 ring-blue-500/20 shrink-0"
        />
        <div>
          <h2 className="text-xl font-bold text-white">Pawan Kalyan</h2>
          <p className="text-slate-400 text-sm mt-0.5">Freelance Developer</p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-semibold tracking-wide">
              Available for work
            </span>
          </div>
        </div>
      </motion.div>

      <div className="h-px bg-slate-800" />

      {/* About */}
      <motion.div {...fadeUp(0.05)}>
        <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
          About Me
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          I'm a freelance MERN Stack & React Native developer. I build fast,
          scalable web applications and cross-platform mobile apps that solve
          real business problems.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed mt-2">
          I've delivered projects in food-tech, healthcare, and security — and
          I'm always open to exciting new challenges.
        </p>
      </motion.div>

      {/* Tech Stack */}
      <motion.div {...fadeUp(0.1)}>
        <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Tech Stack
        </p>
        <div className="grid grid-cols-3 gap-2.5">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              className="flex flex-col items-center gap-1.5 bg-slate-800/70 rounded-xl p-3 border border-slate-700/50 cursor-default"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-xs text-slate-400 text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services */}
      <motion.div {...fadeUp(0.15)}>
        <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
          What I Build
        </p>
        <div className="space-y-2.5">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-slate-800/40 rounded-xl p-3.5 border border-slate-700/30"
            >
              <span className="text-blue-400 shrink-0 mt-0.5">{s.icon}</span>
              <div>
                <p className="text-white text-sm font-semibold">{s.title}</p>
                <p className="text-slate-400 text-xs mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div {...fadeUp(0.2)} className="space-y-3 pt-1">
        <a
          href="mailto:pawan.k30082001@gmail.com"
          className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/20"
        >
          Let's Work Together →
        </a>
        <a
          href="/Pawan Kalyan.pdf"
          download
          className="block w-full text-center py-3 rounded-xl border border-slate-700 text-slate-300 font-medium text-sm hover:border-blue-500 hover:text-blue-400 transition-all"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default AboutContent;
