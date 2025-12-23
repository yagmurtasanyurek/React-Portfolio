export function Navbar() {
  return (
    <nav className="flex justify-between items-center h-20 border-b-1 text-lg max-[475px]:text-sm md:text-2xl lg:text-3xl mx-4 md:mx-10 uppercase  ">
      <a className="font-bold " href="#">
        Logo
      </a>
      <ul className="flex justify-center items-center h-10 gap-[5vw] md:gap-[7vw] font-bold">
        <li>
          <a href="aboutme" className="">
            About me
          </a>
        </li>
        <li>
          <a href="projects" className="">
            Projects
          </a>
        </li>
        <li>
          <a href="faq" className="">
            FAQ
          </a>
        </li>
        <li>
          <a href="contact" className="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
