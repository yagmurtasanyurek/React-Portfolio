import Todo from "../images/to-do.png";
import Weather from "../images/weatherforecast.png";
import Forkify from "../images/forkifyy.png";
import Omnifood from "../images/omnifood.png";
import ProjectIcon from "../icons/7.svg";
export function Projects() {
  return (
    <section id="projects" className="relative z-10">
      <div className="flex items-center gap-4 w-full m-auto py-10 mb-5">
        <span className="border-b w-10 lg:w-25 h-1 rounded-lg"></span>
        <img src={ProjectIcon} alt="" className="w-10 h-10" />

        <h1 className="font-bold text-5xl uppercase ">Projects</h1>
      </div>

      <div className="bg-cyan-950 w-full lg:w-5/6 max-w-7xl m-auto py-15 md:py-20">
        <div className="w-full max-w-6xl mx-auto flex justify-center pb-15 px-20 md:px-10 lg:px-20 ">
          <a
            target="_blank"
            href="https://weatherforecastbyyagmur.netlify.app/"
            className="flex flex-col md:flex-row
           md:gap-7
           w-full max-w-4xl
            md:p-4
            md:py-10 md:px-10 
             bg-slate-50 
            transform transition-all
             duration-500 hover:-translate-2 
             shadow-[20px_20px_0px_#831843] 
             hover:shadow-[26px_26px_0px_#831843]
            "
          >
            <div className="w-full md:w-60 ">
              <img
                src={Weather}
                className="w-full h-60 md:h-40 object-cover  md:p-0"
              />
            </div>
            <div className="flex-1 max-w-xl self-center p-10 md:p-0 md:pb-0 ">
              <h1 className="uppercase font-bold text-2xl pb-2  ">
                Weather Forecast
              </h1>

              <p className=" pb-5 font-medium text-balance ">
                A weather forecast application that provides hourly updates and
                a 5-day outlook. It displays essential details such as sunrise
                and sunset times, wind, rain conditions, and daily minimum and
                maximum temperatures, all presented in a clean and user-friendly
                interface.
              </p>
              <div className="flex flex-wrap justify-start gap-2">
                <span className="bg-cyan-950 px-3 py-1 rounded-lg text-amber-50 font-semibold uppercase text-sm">
                  React
                </span>
                <span className="bg-cyan-950 px-3 py-1 rounded-lg text-amber-50 font-semibold uppercase text-sm">
                  JavaScript
                </span>
                <span className="bg-cyan-950 px-3 py-1 rounded-lg text-amber-50 font-semibold uppercase text-sm">
                  RTK Query
                </span>
                <span className="bg-cyan-950 px-3 py-1 rounded-lg text-amber-50 font-semibold uppercase text-sm">
                  Tailwind css
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full max-w-6xl mx-auto flex justify-center pb-15 px-20 md:px-10 lg:px-20 ">
          <a
            target="_blank"
            href="https://somuchtodo.netlify.app/"
            className="flex flex-col md:flex-row
            md:gap-7
             w-full max-w-4xl
              md:p-10
             md:py-10 md:px-10 
             bg-slate-50 
             transform transition-all
             duration-500 hover:-translate-2 
             shadow-[20px_20px_0px_#831843] 
             hover:shadow-[26px_26px_0px_#831843]"
          >
            <div className="w-full md:w-60 ">
              <img
                src={Todo}
                className="w-full h-60 md:h-40 object-cover md:p-0"
              />
            </div>
            <div className="flex-1 max-w-xl self-center p-10 md:p-0 md:pb-0 ">
              <h1 className="uppercase font-bold text-2xl pb-2 ">
                To-Do List App
              </h1>
              <p className="pb-5 font-medium">
                A task management application that allows users to add, delete,
                and mark tasks as completed. The app is designed to keep task
                tracking simple and efficient, with a clear interface that makes
                it easy to manage daily to-dos and stay organized.
              </p>
              <div className="flex flex-wrap justify-start gap-2">
                <span className="bg-cyan-950 px-3 py-1 rounded-lg text-amber-50 font-semibold uppercase text-sm">
                  React
                </span>
                <span className="bg-cyan-950 px-3 py-1 rounded-lg text-amber-50 font-semibold uppercase text-sm">
                  JavaScript
                </span>
                <span className="bg-cyan-950 px-3 py-1 rounded-lg text-amber-50 font-semibold uppercase text-sm">
                  Tailwind css
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full max-w-6xl mx-auto flex justify-center pb-15 px-20 md:px-10 lg:px-20 ">
          <a
            target="_blank"
            href="https://omnifood-yagmur.netlify.app/"
            className="flex flex-col md:flex-row
           md:gap-7
             w-full max-w-4xl
              md:p-10
             md:py-10 md:px-10 
             bg-slate-50 
             transform transition-all
             duration-500 hover:-translate-2 
             shadow-[20px_20px_0px_#831843] 
             hover:shadow-[26px_26px_0px_#831843]"
          >
            <div className="w-full md:w-60">
              <img
                src={Omnifood}
                className="w-full h-60 md:h-40 object-cover md:p-0"
              />
            </div>
            <div className="flex-1 max-w-xl self-center p-10 md:p-0 md:pb-0 ">
              <h1 className="uppercase font-bold text-2xl pb-2 ">
                Omnifood Website
              </h1>
              <p className="pb-5 font-medium text-balance">
                A modern, UI-focused company website for a food subscription
                service. It includes clear call-to-action sections, a “how it
                works” flow, example meals, a small gallery, pricing plans, and
                testimonials, with an emphasis on clean layouts, visual
                hierarchy, and an engaging user experience.
              </p>
              <div className="flex flex-wrap justify-start gap-2">
                <span className="bg-cyan-950 px-3 py-1 rounded-lg text-amber-50 font-semibold uppercase text-sm">
                  CSS
                </span>
                <span className="bg-cyan-950 px-3 py-1 rounded-lg text-amber-50 font-semibold uppercase text-sm">
                  Responsive
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full max-w-6xl mx-auto flex justify-center  px-20 md:px-10 lg:px-20 ">
          <a
            target="_blank"
            href="https://forkify-yagmur.netlify.app/#664c8f193e7aa067e94e868f"
            className="flex flex-col md:flex-row
             md:gap-7
             w-full max-w-4xl
              md:p-10
             md:py-10 md:px-10 
             bg-slate-50 
             transform transition-all
             duration-500 hover:-translate-2 
             shadow-[20px_20px_0px_#831843] 
             hover:shadow-[26px_26px_0px_#831843]"
          >
            <div className="w-full md:w-60">
              <img
                src={Forkify}
                className="w-full h-60 md:h-40 object-cover md:p-0"
              />
            </div>
            <div className="flex-1 max-w-xl self-center p-10 md:p-0 md:pb-0 ">
              <h1 className="uppercase font-bold text-2xl pb-2 ">
                Forkify Recipe Project
              </h1>
              <p className="pb-5 font-medium text-balance ">
                A recipe application that allows users to search for recipes,
                adjust serving sizes, and automatically recalculate ingredient
                quantities. Users can save favorite recipes for later and add
                their own recipes, with a focus on clear UI, practical
                functionality, and smooth interactions for everyday cooking use
              </p>
              <div className="flex flex-wrapjustify-start gap-2">
                <span className="bg-cyan-950 px-3 py-1 rounded-lg text-amber-50 font-semibold uppercase text-sm">
                  JavaScript
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
