import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import connect from "../assets/connect.svg";

function ContactMe() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_ocyzb5s",
      "template_2cqqpqh",
      form.current,
      "4iVybjWHDe4yVjy8E"
    ).then(
      (result) => {
        setIsSent(true);
        setLoading(false);
        e.target.reset();
        setTimeout(() => setIsSent(false), 5000); // Reset button after 5s
      },
      (error) => {
        console.log("Error:", error.text);
        setLoading(false);
      }
    );
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3"
        >
          Hire Me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-white mb-2"
        >
          Let's <span className="text-blue-500">Work Together</span>
        </motion.h2>
        <p className="text-slate-400">
          Have a project or idea? I'm open for freelance work — let's build something great.
        </p>
        <p className="text-slate-500 text-sm mt-1">Typically responds within 24 hours.</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">

        {/* Left Side: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img src={connect} alt="Contact Illustration" className="w-3/4 lg:w-full drop-shadow-2xl" />
        </motion.div>

        {/* Right Side: Glass Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2 glass p-8 rounded-2xl shadow-xl"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <div className="group">
              <label htmlFor="name" className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                <BsPerson className="text-blue-400" /> Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                <HiOutlineMail className="text-blue-400" /> Your Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                <BiMessageSquareDetail className="text-blue-400" /> Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading || isSent}
              className={`w-full py-3 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 ${isSent
                  ? "bg-green-500 text-white cursor-default"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/30"
                }`}
            >
              {loading ? (
                <span className="animate-pulse">Sending...</span>
              ) : isSent ? (
                "Message Sent!"
              ) : (
                <>Send Message <FaPaperPlane size={16} /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactMe;