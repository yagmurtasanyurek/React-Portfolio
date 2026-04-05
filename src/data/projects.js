import Weather from "../images/weatherforecast.png";
import Todo from "../images/to-do.png";
import Omnifood from "../images/omnifood.png";
import Forkify from "../images/forkifyy.png";

export const projects = [
  {
    id: 1,
    title: "Weather Forecast",
    description:
      "A weather forecast application that provides hourly updates and a 5-day outlook. It displays essential details such as sunrise and sunset times, wind, rain conditions, and daily minimum and maximum temperatures, all presented in a clean and user-friendly interface.",
    image: Weather,
    liveUrl: "https://weatherforecastbyyagmur.netlify.app/",
    githubUrl: "https://github.com/yagmurtasanyurek/Weather-App",
    tags: ["React", "JavaScript", "RTK Query", "Tailwind CSS"],
    accentColor: "#831843",
  },
  {
    id: 2,
    title: "To-Do List App",
    description:
      "A task management application that allows users to add, delete, and mark tasks as completed. The app is designed to keep task tracking simple and efficient, with a clear interface that makes it easy to manage daily to-dos and stay organized.",
    image: Todo,
    liveUrl: "https://somuchtodo.netlify.app/",
    githubUrl: "https://github.com/yagmurtasanyurek/to-do-list",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    accentColor: "#053345",
  },
  {
    id: 3,
    title: "Omnifood Website",
    description:
      "A modern, UI-focused company website for a food subscription service. It includes clear call-to-action sections, a \"how it works\" flow, example meals, a small gallery, pricing plans, and testimonials, with an emphasis on clean layouts, visual hierarchy, and an engaging user experience.",
    image: Omnifood,
    liveUrl: "https://omnifood-yagmur.netlify.app/",
    githubUrl: "https://github.com/yagmurtasanyurek/Omnifood",
    tags: ["HTML", "CSS", "Responsive"],
    accentColor: "#831843",
  },
  {
    id: 4,
    title: "Forkify Recipe App",
    description:
      "A recipe application that allows users to search for recipes, adjust serving sizes, and automatically recalculate ingredient quantities. Users can save favorite recipes for later and add their own recipes, with a focus on clear UI, practical functionality, and smooth interactions.",
    image: Forkify,
    liveUrl: "https://forkify-yagmur.netlify.app/#664c8f193e7aa067e94e868f",
    githubUrl: "https://github.com/yagmurtasanyurek/Forkify",
    tags: ["JavaScript", "MVC Architecture", "API"],
    accentColor: "#053345",
  },
];

export const skills = [
  { name: "React", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Redux / RTK", category: "frontend" },
  { name: "HTML & CSS", category: "frontend" },
  { name: "Git & GitHub", category: "tools" },
  { name: "REST APIs", category: "tools" },
  { name: "Responsive Design", category: "tools" },
  { name: "Vite", category: "tools" },
];
