
import { motion } from "framer-motion";
import admindashboard from "../assets/admindashboard.png"
import swiftsoles from "../assets/swiftsoles.png"
// import blinkit from "../assets/blinkit.png"
import blog from "../assets/blog.png"
import musicplayer from "../assets/musicplayer.png"


const projects = [
  {
    name: "Music Player",
    description: "Music Player",
    image: musicplayer,
    link: "https://musicplayer-rosy-phi.vercel.app/",
  },
  {
    name: "Admin Dashboard",
    description: "Admin Dashboard",
    image: admindashboard,
    link: "https://reactvite-admin-dashboard.netlify.app/",
  },
  {
    name: "Swift Soles",
    description: "swiftsoles",
    image: swiftsoles,
    link: "https://swiftsoles.netlify.app/",
  },
  {
    name: "Blog App - upcoming",
    description: "Blog App - upcoming",
    image: blog,
    link: "https://course-website-ashy.vercel.app/",
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto py-10 mt-5">
      <h2 className="text-3xl sm:text-4xl text-center text-blue-300 font-bold mb-10">
        My Work
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="text-sm mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-all"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default Projects
