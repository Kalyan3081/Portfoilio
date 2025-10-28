import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { RiCodeSSlashFill } from "react-icons/ri";
import { AiOutlineFileText } from "react-icons/ai";


function Footer() {
  return (
    <div className="flex flex-row justify-center mt-8">

      <div
        className={`icons gap-4 mb-5 pb-5
    flex justify-center lg:items-end absolute right-5"}`}
      >
        <a href="/Pawan Kalyan.pdf" download="Pawan Kalyan.pdf">
          <AiOutlineFileText className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
        </a>

        <a href="https://github.com/Kalyan3081">
          <AiFillGithub className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
        </a>
        <a href="https://www.linkedin.com/in/pawan-kalyan-79491b22b/">
          <AiFillLinkedin className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
        </a>
        <a href="mailto:pawan.k30082001@gmail.com">
          <AiFillMail className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
        </a>
      </div>

    </div>
  )
}

export default Footer
