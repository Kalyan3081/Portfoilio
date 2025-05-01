import { useEffect } from "react";
import Typed from "typed.js";

function Navbar() {
  useEffect(() => {
    const options = {
      strings: [
        "MERN-stack Developer",
        "Frontend Web Developer",
        "Web Developer",
        "Person with Creative Vision",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed1 = new Typed(".typing", options);

    return () => {
      typed1.destroy();
    };
  }, []);

  return (
    <>
      <nav className="text-center pt-2 text-3xl text-white w-full">
        <div className="text-center lg:text-6xl sm:text-4xl md:text-5xl  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 bg-clip-text tracking-tight text-transparent">
          A <span className="typing text-center   sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 bg-clip-text tracking-tight text-transparent"></span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
