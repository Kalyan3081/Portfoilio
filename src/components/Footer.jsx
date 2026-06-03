import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineFileText } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-slate-950 border-t border-slate-900 text-center">
      <div className="flex justify-center gap-8 mb-4">
        <a href="/Pawan Kalyan.pdf" download className="text-slate-400 hover:text-white transition-colors"><AiOutlineFileText size={24} /></a>
        <a href="https://www.fiverr.com/kalyan_vijay" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-colors"><SiFiverr size={22} /></a>
        <a href="https://github.com/Kalyan3081" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><AiFillGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/pawan-kalyan-79491b22b/" className="text-slate-400 hover:text-blue-400 transition-colors"><AiFillLinkedin size={24} /></a>
        <a href="mailto:pawan.k30082001@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors"><AiFillMail size={24} /></a>
      </div>
      <p className="text-slate-600 text-sm">
        © {currentYear} Pawan Kalyan. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;