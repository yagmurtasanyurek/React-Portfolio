import ProjectIcon from "../icons/7.svg";
import { useState } from "react";

export function Contact() {
  const [value, setValue] = useState("");
  return (
    <section id="contact" className="relative z-10 pb-40">
      <div className="ml-8 md:ml-10 lg:ml-35 flex items-center gap-4 m-auto  mb-10 md:mb-20 bg-cyan-950 py-7 rounded-l-xl pl-5 md:pl-10 lg:pl-20">
        <img src={ProjectIcon} alt="" className="w-10 h-10" />
        <h1 className="font-bold text-4xl md:text-5xl uppercase  rounded-lg text-white ">
          Contact
        </h1>
      </div>
      <div className="max-w-3xl m-auto ">
        <div className="w-5/6 m-auto mb-7">
          <p className="text-3xl font-bold">Love to hear from you!</p>
        </div>
        <div
          className="w-5/6 m-auto p-10 rounded-lg 
         shadow-[20px_20px_0px_#831843] bg-[#f0f4f4]"
        >
          <form>
            <div className="flex flex-col md:flex-row md:gap-10 mb-5">
              <div className=" w-full flex flex-col md:w-1/2 mb-5 md:mb-0">
                <label className="font-bold uppercase pb-2">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="rounded-lg py-1 px-2 bg-[#e0e0de]"
                />
              </div>
              <div className=" w-full flex flex-col md:w-1/2">
                <label className="font-bold uppercase pb-2">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  rows={50}
                  placeholder="example@gmail.com"
                  className=" rounded-lg py-1 px-2 bg-[#e0e0de]"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3">
              <label className="font-bold uppercase pb-2">Message</label>
              <textarea
                required
                type=""
                rows={5}
                placeholder="Write your message here..."
                className=" rounded-lg py-1 px-2 bg-[#e0e0de]"
              ></textarea>
            </div>
          </form>
          <button
            type="submit"
            className="px-5 py-1
            rounded-2xl
           text-white bg-black"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
