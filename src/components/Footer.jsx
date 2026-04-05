import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const links = [
  {
    href: "mailto:yagmurtasanyurek@gmail.com",
    icon: HiOutlineMail,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/ya%C4%9Fmur-ta%C5%9Fany%C3%BCrek-5bb90a24b/",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/yagmurtasanyurek",
    icon: FiGithub,
    label: "GitHub",
  },
];

export function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center relative z-10 pt-16 border-t py-12">
      <div className="flex justify-center gap-8 pb-4">
        {links.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ y: -3 }}
            className="text-3xl transition-colors duration-300 hover:text-pink-900"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
      <p className="font-semibold text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Yağmur Taşanyürek
      </p>
    </footer>
  );
}
