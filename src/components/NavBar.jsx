export function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-10 h-20 border-b-1 text-2xl uppercase  ">
      <a className="font-bold " href="#">
        Logo
      </a>
      <ul className="flex justify-center items-center h-10 gap-[7vw] font-bold">
        <li>
          <a href="#" className="">
            About me
          </a>
        </li>
        <li>
          <a href="#" className="">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="">
            FAQ
          </a>
        </li>
        <li>
          <a href="#" className="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
