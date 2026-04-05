import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import YagmurPhoto from "../images/Yagmur.jpeg";
import FlowerPng from "../images/png-flower-silhouette-art-splattered.png";
import { skills } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section
      id="aboutme"
      className="flex flex-col items-center pt-32 pb-24 px-6"
    >
      {/* Name + photo block */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-0 w-full max-w-5xl">
        {/* Left: photo card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="bg-pink-900 min-w-2xs sm:min-w-sm md:min-w-md lg:min-w-xl relative pb-10 shrink-0"
        >
          <div
            className="absolute inset-0 top-11 bg-no-repeat bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${FlowerPng})` }}
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl md:text-3xl text-white text-center uppercase pt-5 md:pt-10 z-10">
              Yağmur
            </h1>
            <h1 className="font-bold text-2xl md:text-3xl text-white text-center uppercase pb-4 md:pb-8 z-10">
              Taşanyürek
            </h1>
            <div className="flex justify-center items-center pb-4 md:pb-8 z-10">
              <div className="bg-white flex justify-center items-start w-48 md:w-60 h-64 md:h-80 p-3 pb-10 rounded-md shadow-lg overflow-hidden">
                <img
                  src={YagmurPhoto}
                  alt="Yağmur Taşanyürek"
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: title pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="inline-flex items-center justify-center bg-cyan-950 md:w-40 lg:w-48 z-10 p-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold md:-rotate-90 uppercase whitespace-nowrap">
            Front-end developer
          </h2>
        </motion.div>
      </div>

      {/* Bio */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="mt-10 max-w-2xl text-center"
      >
        <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-800">
          I'm a front-end developer who loves building clean, responsive
          interfaces with React and modern CSS. I care about the details —
          smooth interactions, clear hierarchy, and code that's easy to
          maintain.
        </p>

        <a
          href="/Yagmur_Tasanyurek_Resume.pdf"
          download
          className="inline-flex items-center gap-2 mt-6 px-6 py-2.5
            bg-cyan-950 text-white font-bold uppercase tracking-wide rounded-lg
            shadow-[4px_4px_0px_#831843]
            hover:shadow-[6px_6px_0px_#831843]
            hover:-translate-x-0.5 hover:-translate-y-0.5
            transition-all duration-200"
        >
          <HiDownload className="text-lg" />
          Download CV
        </a>
      </motion.div>

      {/* Skills */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="mt-14 w-full max-w-2xl"
      >
        <h3 className="text-center font-bold uppercase text-sm tracking-widest text-gray-500 mb-5">
          Technologies & Tools
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.06, duration: 0.3 }}
              className={`px-4 py-1.5 rounded-full font-semibold text-sm uppercase tracking-wide border-2 ${
                skill.category === "frontend"
                  ? "border-pink-900 text-pink-900"
                  : "border-cyan-950 text-cyan-950"
              }`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
