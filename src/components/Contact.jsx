import Swal from "sweetalert2";
import ProjectIcon from "../icons/7.svg";

export function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
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
    } catch (error) {
      Swal.fire({
        title: "Network error",
        text: "Please check your connection and try again.",
        icon: "error",
      });
    }
  };

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
          <form onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row md:gap-10 mb-5">
              <div className=" w-full flex flex-col md:w-1/2 mb-5 md:mb-0">
                <label className="font-bold uppercase pb-2">Full Name</label>
                <input
                  required
                  type="text"
                  name="name"
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
                  name="email"
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
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className=" rounded-lg py-1 px-2 bg-[#e0e0de]"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 py-1 mt-1
                rounded-2xl cursor-pointer
                border border-black
                text-white bg-black
                transition-all duration-200
               hover:text-black hover:bg-[#e0e0de]
               hover:shadow-[0.25rem_0.25rem_#000]
               hover:-translate-x-1 hover:-translate-y-1
               active:translate-0
              active:shadow-none "
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
