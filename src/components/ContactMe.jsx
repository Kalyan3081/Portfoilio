import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import connect from "../assets/connect.svg"

function ContactMe() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ocyzb5s",
      "template_2cqqpqh",
      form.current,
      "4iVybjWHDe4yVjy8E"
    ).then(
      (result) => {
        console.log("Success:", result.text);
        setIsSent(true);
        e.target.reset();
      },
      (error) => {
        console.log("Error:", error.text);
      }
    );
  };

  return (
    <div className="container mx-auto max-w-4xl p-6">
      <div className="flex justify-center items-center">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 5.1, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          className="text-3xl font-bold text-blue-400"
        >
          Let's
        </motion.h1>
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 5.1, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          className="text-3xl font-bold text-blue-400 ml-2"
        >
          Connect
        </motion.h1>
      </div>
      <div className="text-white rounded-lg shadow-lg flex flex-col lg:flex-row items-center gap-8 p-6">

        {/* Left Side Image */}
        <div className="flex-1 flex justify-center">
          <img src={connect} alt="Contact Me" className="w-full max-w-sm" />
        </div>

        {/* Right Side Contact Form */}
        <div className="flex-1">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

            <div className="flex flex-col">
              <label htmlFor="name" className="flex items-center gap-2 text-lg">
                <BsPerson /> Name
              </label>
              <input type="text" name="user_name" required id="name" className="p-2 mt-1 rounded-md bg-gray-800 border border-gray-600 focus:border-blue-400 outline-none" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="flex items-center gap-2 text-lg">
                <HiOutlineMail /> Email
              </label>
              <input type="email" name="user_email" required id="email" className="p-2 mt-1 rounded-md bg-gray-800 border border-gray-600 focus:border-blue-400 outline-none" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="flex items-center gap-2 text-lg">
                <BiMessageSquareDetail /> Message
              </label>
              <textarea name="message" rows="4" required id="message" className="p-2 mt-1 rounded-md bg-gray-800 border border-gray-600 focus:border-blue-400 outline-none"></textarea>
            </div>

            {/* ✅ Button Changes After Submission */}
            <button
              type="submit"
              className={`mt-4 p-2 text-lg font-semibold rounded-md transition-all ${isSent ? "bg-green-500 text-white" : "bg-blue-500 hover:bg-blue-600"
                }`}
            >
              {isSent ? "Done ✅" : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactMe;
