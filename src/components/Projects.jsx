import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import ballarikhara from "../assets/ballarikhara.png";
import medvoro from "../assets/medvoro.png";

const projects = [
  {
    name: "Ballari Khara",
    category: "Sweets & Food Ordering Platform",
    description:
      "Full-stack platform for Pawan Sweets, Ballari. Features a product catalog (Sweets, Khara, Dry Fruits), same-day delivery, offers & rewards, and a complete admin dashboard with analytics.",
    image: ballarikhara,
    link: "https://ballarikhara.in/",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    features: ["Product catalog with same-day delivery", "Offers, rewards & loyalty system", "Admin dashboard with analytics"],
    status: "live",
  },
  {
    name: "MedVoro Health",
    category: "Health & Wellness Blog",
    description:
      "SEO-optimised health blog built with Next.js and Sanity CMS. Features category-filtered articles, email newsletter via Brevo, trending posts sidebar, and a fully managed content pipeline.",
    image: medvoro,
    link: "https://medvorohealth.com/",
    tech: ["Next.js", "Sanity CMS", "Brevo", "Tailwind CSS"],
    features: ["Category-filtered articles with SEO", "Email newsletter via Brevo", "Trending posts & fully managed CMS"],
    status: "live",
  },
  {
    name: "MIG Security — VMS Portal",
    category: "Enterprise Security Management Platform",
    description:
      "Full-stack security platform for industrial sites. 3-role mobile app (guard, client, dept), visitor & vehicle management, QR patrol, SOS alerts, attendance & payroll, real-time Socket.IO sync. Live on Google Play Store.",
    image: "/logo.jpeg",
    link: "https://migsecure.in",
    tech: ["React Native", "Expo", "Node.js", "MongoDB", "Next.js", "Socket.IO"],
    features: ["Visitor & vehicle management with approvals", "QR patrol + SOS emergency alerts", "Attendance, payroll & admin web panel"],
    status: "live",
  },
];

const StatusBadge = ({ status }) =>
  status === "live" ? (
    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      Live
    </span>
  ) : (
    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30 backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
      In Development
    </span>
  );

const Projects = () => {
  return (
    <div className="container mx-auto py-20 px-4" id="projects">

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Projects I've Built
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base"
        >
          Real-world freelance projects — from food ordering platforms to health portals and mobile security apps.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl shadow-black/30 flex flex-col"
          >
            {/* Top: Image or Gradient */}
            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden shrink-0">
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                  />
                  {/* Hover overlay — desktop */}
                  <div className="absolute inset-0 bg-slate-950/88 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 text-center">
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg"
                    >
                      Visit Site <FaExternalLinkAlt size={11} />
                    </a>
                  </div>
                </>
              ) : (
                /* No screenshot — gradient placeholder with hover overlay */
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative flex flex-col items-center justify-center gap-3 p-6">
                  <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                    <FaShieldAlt className="text-5xl text-blue-400" />
                  </div>
                  {/* Hover overlay — same as image cards */}
                  <div className="absolute inset-0 bg-slate-950/88 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 text-center">
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg"
                      >
                        Visit Site <FaExternalLinkAlt size={11} />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Status badge — top right */}
              <div className="absolute top-3 right-3 z-10">
                <StatusBadge status={project.status} />
              </div>
            </div>

            {/* Bottom: Info */}
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5">{project.category}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-400 transition-colors mt-1 shrink-0"
                    aria-label={`Visit ${project.name}`}
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                )}
              </div>

              {/* Features */}
              {project.features && (
                <ul className="flex flex-col gap-1">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400 text-xs">
                      <span className="text-blue-500 mt-0.5">›</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-1">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
