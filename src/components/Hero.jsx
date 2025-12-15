import YagmurPhoto from "../images/Yagmur.jpeg";
import FlowerPng from "../images/png-flower-silhouette-art-splattered.png";
export function Hero() {
  return (
    <section className="flex justify-center items-center pt-24 pb-40 ">
      <div className="flex flex-col md:flex-row justify-center gap-10 ">
        {/* first box */}
        <div className=" bg-pink-900 min-w-2xs sm:min-w-lg md:min-w-2xl relative pb-10">
          {/* Background png */}
          <div
            className="absolute inset-0 top-11 bg-no-repeat bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${FlowerPng})` }}
          ></div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl md:text-3xl text-white text-center uppercase pt-5 md:pt-10 z-50 ">
              Yağmur
            </h1>
            <h1 className="font-bold text-2xl md:text-3xl text-white text-center uppercase pb-4 md:pb-8 z-50">
              Taşanyürek
            </h1>
            {/* Photo div */}
            <div className="flex justify-center items-center pb-4 md:pb-8 z-50">
              <div className=" bg-white flex justify-center items-start w-48 md:w-60 h-64 md:h-80 p-3 pb-10 rounded-md shadow-lg overflow-hidden ">
                <img
                  src={YagmurPhoto}
                  alt="Yağmur"
                  className=" w-full h-full object-cover rounded-md "
                />
              </div>
            </div>
            {/* Pharagraph div here */}
            {/*     <div className="z-50">
              <p className="font-semibold text-xl md:text-2xl text-white text-center uppercase pb-10 ">
                Lifelong Learner
              </p>
            </div> */}
          </div>
        </div>
        {/* second box */}
        <div className="inline-flex items-center justify-center bg-cyan-950  md:w-48 z-10 p-10 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold md:-rotate-90 uppercase whitespace-nowrap">
            Front-end developer
          </h1>
        </div>
      </div>
    </section>
  );
}
