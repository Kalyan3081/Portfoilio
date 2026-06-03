import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Navbar() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Freelance Developer",
        "MERN Stack Developer",
        "Web &amp; App Developer",
        "Problem Solver",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-400">
        I am a <span ref={el} className="text-blue-400"></span>
      </h2>
    </div>
  );
}

export default Navbar;