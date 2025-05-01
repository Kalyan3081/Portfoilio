// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Bootstrap from "../assets/Bootstrap.png";
// import cpp from "../assets/c++.png";
// import Css from "../assets/Css.png";
// import Html from "../assets/Html.png";
// import Javascript from "../assets/Javascript.png";

// const certificatesArr = [Bootstrap, cpp, Css, Html, Javascript];
// const title = "Certificates".split("");

// const Certificate = () => {
//   const [index, setIndex] = useState(0);

//   const nextCertificate = () => {
//     setIndex((prev) => (prev + 1) % certificatesArr.length);
//   };

//   const prevCertificate = () => {
//     setIndex((prev) => (prev - 1 + certificatesArr.length) % certificatesArr.length);
//   };

//   return (


//     <div className="flex flex-col items-center justify-center gap-5 mt-10 relative">
//       <motion.h2 className="text-5xl tracking-wider font-bold text-blue-500 mb-5 flex">
//         {title.map((letter, index) => (
//           <motion.span
//             key={index}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="inline-block"
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </motion.h2>

//       <div className="flex items-center justify-center gap-5">
//         <button
//           onClick={prevCertificate}
//           className="swipeLeftButton absolute left-0 bg-blue-500 text-white text-3xl px-4 py-2 rounded-full hover:bg-blue-600 transition"
//         >
//           ❮
//         </button>

//         <div className="certificates w-[30rem] h-80 border-4 border-gray-300 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={index}
//               src={certificatesArr[index]}
//               alt={`Certificate ${index + 1}`}
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//             />
//           </AnimatePresence>
//         </div>
//         <button
//           onClick={nextCertificate}
//           className="swipeRightButton absolute right-0 bg-blue-500 text-white text-3xl px-4 py-2 rounded-full hover:bg-blue-600 transition"
//         >
//           ❯
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Certificate;
