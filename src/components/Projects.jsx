import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ProjectIcon from "../icons/7.svg";
import { projects } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
  }),
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      className="w-full max-w-6xl mx-auto flex justify-center pb-12 px-6 md:px-10 lg:px-14"
    >
      <div
        className="flex flex-col md:flex-row md:gap-7 w-full max-w-4xl
          md:p-10 bg-slate-50 rounded-lg overflow-hidden
          transition-all duration-300
          hover:-translate-x-1 hover:-translate-y-1"
        style={{
          boxShadow: `16px 16px 0px ${project.accentColor}`,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = `22px 22px 0px ${project.accentColor}`)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = `16px 16px 0px ${project.accentColor}`)
        }
      >
        {/* Image */}
        <div className="relative w-full md:w-60 shrink-0 group overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-56 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-white text-3xl hover:text-amber-200 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-white text-3xl hover:text-amber-200 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 self-center p-8 md:p-0">
          <h2 className="uppercase font-bold text-2xl pb-2">{project.title}</h2>
          <p className="pb-5 font-medium text-gray-700 text-balance leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-amber-50 font-semibold uppercase text-xs"
                style={{ backgroundColor: project.accentColor }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-bold uppercase
                text-white rounded-lg transition-all duration-200
                hover:-translate-y-0.5 hover:opacity-90"
              style={{ backgroundColor: project.accentColor }}
            >
              <FiExternalLink />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-bold uppercase
                border-2 rounded-lg transition-all duration-200
                hover:-translate-y-0.5"
              style={{ borderColor: project.accentColor, color: project.accentColor }}
            >
              <FiGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative z-10 pb-24">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="ml-8 md:ml-10 lg:ml-35 flex items-center gap-4 mb-12 md:mb-20 bg-cyan-950 py-7 rounded-l-xl pl-5 md:pl-10 lg:pl-20"
      >
        <img src={ProjectIcon} alt="" className="w-10 h-10" />
        <h1 className="font-bold text-4xl md:text-5xl uppercase text-white">
          Projects
        </h1>
      </motion.div>

      <div className="w-full lg:w-5/6 max-w-7xl m-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
