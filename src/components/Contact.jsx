import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import ProjectIcon from "../icons/7.svg";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Message sent!",
          text: "Thank you for reaching out!",
          icon: "success",
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch {
      Swal.fire({
        title: "Network error",
        text: "Please check your connection and try again.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "rounded-lg py-2 px-3 bg-[#e0e0de] w-full outline-none transition-all duration-200 " +
    "focus:ring-2 focus:ring-pink-900 focus:bg-white";

  return (
    <section id="contact" className="relative z-10 pb-24">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="ml-8 md:ml-10 lg:ml-35 flex items-center gap-4 mb-12 md:mb-20 bg-cyan-950 py-7 rounded-l-xl pl-5 md:pl-10 lg:pl-20"
      >
        <img src={ProjectIcon} alt="" className="w-10 h-10" />
        <h1 className="font-bold text-4xl md:text-5xl uppercase text-white">
          Contact
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-3xl mx-auto px-6"
      >
        <p className="text-3xl font-bold mb-7">Love to hear from you!</p>

        <div className="p-8 md:p-10 rounded-lg shadow-[20px_20px_0px_#831843] bg-[#f0f4f4]">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row md:gap-8 mb-5">
              <div className="w-full flex flex-col md:w-1/2 mb-5 md:mb-0">
                <label className="font-bold uppercase pb-2 text-sm tracking-wide">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className={inputClass}
                />
              </div>
              <div className="w-full flex flex-col md:w-1/2">
                <label className="font-bold uppercase pb-2 text-sm tracking-wide">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <label className="font-bold uppercase pb-2 text-sm tracking-wide">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className={inputClass}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 rounded-2xl cursor-pointer border border-black
                  font-bold uppercase tracking-wide text-sm
                  text-white bg-black
                  transition-all duration-200
                  hover:text-black hover:bg-[#e0e0de]
                  hover:shadow-[0.25rem_0.25rem_#000]
                  hover:-translate-x-1 hover:-translate-y-1
                  active:translate-0 active:shadow-none
                  disabled:opacity-60 disabled:cursor-not-allowed
                  disabled:translate-0 disabled:shadow-none
                  flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
