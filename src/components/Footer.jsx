export function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center  relative z-10 mt-20 border-t py-15">
      <div className="flex justify-center w-3/4 gap-10 pb-3">
        <a
          className="transform transition-all
             duration-600 
             hover:text-cyan-500 "
          href="mailto:yagmurtasanyurek@gmail.com"
          target="_blank"
        >
          <ion-icon size="large" name="mail-outline"></ion-icon>
        </a>
        <a
          className="transform transition-all
             duration-500 
             hover:text-cyan-500 "
          href="https://www.linkedin.com/in/ya%C4%9Fmur-ta%C5%9Fany%C3%BCrek-5bb90a24b/"
          target="_blank"
        >
          <ion-icon size="large" name="logo-linkedin"></ion-icon>
        </a>
        <a
          className="transform transition-all
             duration-500 
             hover:text-cyan-500 "
          href="https://github.com/yagmurtasanyurek"
          target="_blank"
        >
          <ion-icon size="large" name="logo-github"></ion-icon>
        </a>
      </div>
      <div>
        <p className="font-semibold">&copy; Yağmur Taşanyürek 2025</p>
      </div>
    </footer>
  );
}
