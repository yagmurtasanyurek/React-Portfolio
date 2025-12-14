import Todo from "../images/to-do.png";
import Weather from "../images/weatherforecast.png";
import Forkify from "../images/forkify.png";
import Omnifood from "../images/omnifood.png";
export function Projects() {
  return (
    <section className="relative z-10">
      <h1 className="font-bold text-5xl uppercase ml-30 mb-30">Projects</h1>
      <div className="bg-cyan-950 max-w-3/4 m-auto pt-30 pb-30 ">
        <div className="flex justify-center ">
          <a
            target="_blank"
            href="https://weatherforecastbyyagmur.netlify.app/"
            className="transform transition-all duration-500 hover:-translate-2 flex justify-around gap-10 w-3/4 bg-slate-50 pt-7 px-10 pb-10 shadow-[20px_20px_0px_#831843] hover:shadow-[26px_26px_0px_#831843]"
          >
            <div className="w-60 shrink-0 pb-10 ">
              <img src={Weather} className="w-full h-40 object-cover p-4" />
            </div>
            <div className="">
              <h1 className="uppercase font-bold text-2xl pb-3">
                Weather Forecast
              </h1>
              <p className="pb-5 font-medium">
                A weather forecast application that provides hourly updates and
                a 5-day outlook. It displays essential details such as sunrise
                and sunset times, wind, rain conditions, and daily minimum and
                maximum temperatures, all presented in a clean and user-friendly
                interface.
              </p>
              <div className="flex justify-start gap-2">
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
        <div className="flex justify-center pt-15">
          <a
            target="_blank"
            href="https://somuchtodo.netlify.app/"
            className="transform transition-all duration-500 hover:-translate-2 flex justify-around gap-10 w-3/4 bg-slate-50 pt-7 px-10 pb-10 shadow-[20px_20px_0px_#831843] hover:shadow-[26px_26px_0px_#831843]"
          >
            <div className="w-60 shrink-0 pb-10 ">
              <img src={Todo} className="w-full h-40 object-cover p-4" />
            </div>
            <div className="">
              <h1 className="uppercase font-bold text-2xl pb-3">
                To-Do List App
              </h1>
              <p className="pb-5 font-medium">
                A task management application that allows users to add, delete,
                and mark tasks as completed. The app is designed to keep task
                tracking simple and efficient, with a clear interface that makes
                it easy to manage daily to-dos and stay organized.
              </p>
              <div className="flex justify-start gap-2">
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
        <div className="flex justify-center pt-15 ">
          <a
            target="_blank"
            href="https://omnifood-yagmur.netlify.app/"
            className="transform transition-all duration-500 hover:-translate-2 flex justify-around gap-10 w-3/4 bg-slate-50 pt-7 px-10 pb-10 shadow-[20px_20px_0px_#831843] hover:shadow-[26px_26px_0px_#831843]"
          >
            <div className="w-60 shrink-0 pb-10 ">
              <img src={Omnifood} className="w-full h-40 object-fill p-4" />
            </div>
            <div className="">
              <h1 className="uppercase font-bold text-2xl pb-3">
                Omnifood Website
              </h1>
              <p className="pb-5 font-medium">
                A modern, UI-focused company website for a food subscription
                service. It includes clear call-to-action sections, a “how it
                works” flow, example meals, a small gallery, pricing plans, and
                testimonials, with an emphasis on clean layouts, visual
                hierarchy, and an engaging user experience.
              </p>
              <div className="flex justify-start gap-2">
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
        <div className="flex justify-center pt-15">
          <a
            target="_blank"
            href="https://forkify-yagmur.netlify.app/#664c8f193e7aa067e94e868f"
            className="transform transition-all duration-500 hover:-translate-2 flex justify-around gap-10 w-3/4 bg-slate-50 pt-7 px-10 pb-10 shadow-[20px_20px_0px_#831843] hover:shadow-[26px_26px_0px_#831843]"
          >
            <div className="w-60 shrink-0 pb-10 ">
              <img src={Forkify} className="w-full h-40 object-cover p-4" />
            </div>
            <div className="">
              <h1 className="uppercase font-bold text-2xl pb-3">
                Forkify Recipe Project
              </h1>
              <p className="pb-5 font-medium">
                A recipe application that allows users to search for recipes,
                adjust serving sizes, and automatically recalculate ingredient
                quantities. Users can save favorite recipes for later and add
                their own recipes, with a focus on clear UI, practical
                functionality, and smooth interactions for everyday cooking use
              </p>
              <div className="flex justify-start gap-2">
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
