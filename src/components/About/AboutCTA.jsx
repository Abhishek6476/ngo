

// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// const AboutCTA = () => {
//   const navigate = useNavigate();

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const smoothX = useSpring(mouseX, {
//     stiffness: 120,
//     damping: 20,
//   });

//   const smoothY = useSpring(mouseY, {
//     stiffness: 120,
//     damping: 20,
//   });

//   const glowX = useTransform(smoothX, (value) => value - 120);
//   const glowY = useTransform(smoothY, (value) => value - 120);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     mouseX.set(e.clientX - rect.left);
//     mouseY.set(e.clientY - rect.top);
//   };

//   return (
//     <section className="py-16 md:py-20 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
//       <div className="max-w-5xl mx-auto px-6 md:px-10">
//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           onMouseMove={handleMouseMove}
//           className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 px-8 py-12 md:px-14 md:py-14 text-center overflow-hidden"
//         >
//           {/* Mouse Glow Effect */}
//           <motion.div
//             style={{
//               left: glowX,
//               top: glowY,
//             }}
//             className="absolute w-60 h-60 rounded-full bg-[#C89A31]/20 blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//           />

//           {/* Static Glow */}
//           <div className="absolute -top-16 -left-16 w-44 h-44 bg-[#C89A31]/10 rounded-full blur-3xl" />
//           <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-[#C89A31]/10 rounded-full blur-3xl" />

//           {/* Label */}
//           <div className="relative z-10 flex items-center justify-center gap-3 mb-5">
//             <hr className="w-12 border-[#C89A31]" />
//             <h4 className="text-[#C89A31] italic text-sm md:text-base">
//               JOIN OUR MISSION
//             </h4>
//             <hr className="w-12 border-[#C89A31]" />
//           </div>

//           {/* Heading */}
//           <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
//             Together, We Can
//             <span className="text-[#C89A31]"> Transform Lives</span>
//           </h2>

//           {/* Description */}
//           <p className="relative z-10 max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-8">
//             Your support helps create opportunities, inspire hope, and bring
//             lasting change to communities in need.
//           </p>

//           {/* Buttons */}
//           <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
//             <button
//               onClick={() => navigate("/contact")}
//               className="group/btn px-7 py-3.5 bg-[#C89A31] text-white rounded-2xl font-semibold shadow-lg hover:bg-[#b18427] hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3"
//             >
//               Contact Us
//               <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
//             </button>

//             <button
//               onClick={() => navigate("/donate")}
//               className="px-7 py-3.5 bg-white text-gray-900 rounded-2xl font-semibold border border-gray-200 shadow-md hover:border-[#C89A31] hover:text-[#C89A31] hover:-translate-y-1 transition-all duration-300"
//             >
//               Donate Now
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutCTA;



import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AboutCTA = () => {
  const navigate = useNavigate();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const glowX = useTransform(smoothX, (value) => value - 150);
  const glowY = useTransform(smoothY, (value) => value - 150);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="py-16 md:py-10 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 px-8 md:px-16 py-8 md:py-10 text-center overflow-hidden"
        >
          {/* Mouse Follow Glow */}
          <motion.div
            style={{
              left: glowX,
              top: glowY,
            }}
            className="absolute w-72 h-72 rounded-full bg-[#C89A31]/20 blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Background Glow */}
          <div className="absolute -top-20 -left-20 w-56 h-56 bg-[#C89A31]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-[#C89A31]/10 rounded-full blur-3xl" />

          {/* Top Label */}
          <div className="relative z-10 flex items-center justify-center gap-3 mb-5">
            <hr className="w-14 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              JOIN OUR MISSION
            </h4>
            <hr className="w-14 border-[#C89A31]" />
          </div>

          {/* Heading */}
          <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Together, We Can
            <span className="text-[#C89A31]"> Transform Lives</span>
          </h2>

          {/* Description */}
          <p className="relative z-10 max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Your support creates opportunities, inspires hope, and transforms
            lives. Join us in building stronger communities and a brighter
            future for everyone.
          </p>

          {/* CTA Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="group/btn px-8 py-3.5 bg-[#C89A31] text-white rounded-2xl font-semibold shadow-lg hover:bg-[#b18427] hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3"
            >
              Contact Us
              <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => navigate("/donate")}
              className="px-8 py-3.5 bg-white text-gray-900 rounded-2xl font-semibold border border-gray-200 shadow-md hover:border-[#C89A31] hover:text-[#C89A31] hover:-translate-y-1 transition-all duration-300"
            >
              Donate Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;