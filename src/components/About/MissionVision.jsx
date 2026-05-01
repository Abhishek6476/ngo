// import { motion } from "framer-motion";
// import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

// const cards = [
//   {
//     id: 1,
//     title: "Our Mission",
//     icon: FaBullseye,
//     description:
//       "To empower underserved communities through education, healthcare, skill development, and sustainable initiatives that create lasting positive change.",
//   },
//   {
//     id: 2,
//     title: "Our Vision",
//     icon: FaEye,
//     description:
//       "To build a world where every individual has equal opportunities, dignity, and the resources needed to live a fulfilling life.",
//   },
//   {
//     id: 3,
//     title: "Our Values",
//     icon: FaHeart,
//     description:
//       "Compassion, integrity, transparency, and service are at the heart of everything we do, guiding every action we take.",
//   },
// ];

// const MissionVision = () => {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
//         >
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <hr className="w-16 border-[#C89A31]" />
//             <h4 className="text-[#C89A31] italic text-sm md:text-base font-medium">
//               OUR PURPOSE
//             </h4>
//             <hr className="w-16 border-[#C89A31]" />
//           </div>

//           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
//             Guided by Our
//             <span className="text-[#C89A31]"> Purpose</span>
//           </h2>

//           <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//             Our mission, vision, and values define who we are and inspire
//             everything we do for communities around the world.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {cards.map((card, index) => {
//             const Icon = card.icon;

//             return (
//               <motion.div
//                 key={card.id}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.15,
//                 }}
//                 viewport={{ once: true }}
//                 className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
//               >
//                 {/* Top Border Animation */}
//                 <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

//                 {/* Glow Effect */}
//                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C89A31]/5 rounded-full blur-3xl group-hover:bg-[#C89A31]/10 transition-all duration-500" />

//                 {/* Icon */}
//                 <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-6 group-hover:bg-[#C89A31] transition-all duration-500">
//                   <Icon className="text-3xl text-[#C89A31] group-hover:text-white transition duration-500" />
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                     {card.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed text-base">
//                     {card.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionVision;


import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

const missionData = [
  {
    id: 1,
    title: "Our Mission",
    icon: FaBullseye,
    description:
      "Empowering underserved communities through education, healthcare, and sustainable development initiatives that create meaningful and lasting change.",
  },
  {
    id: 2,
    title: "Our Vision",
    icon: FaEye,
    description:
      "Creating a world where every individual has equal opportunities, dignity, and the resources needed to live a brighter future.",
  },
  {
    id: 3,
    title: "Our Values",
    icon: FaHeart,
    description:
      "Compassion, integrity, transparency, and service guide every action we take in transforming lives and uplifting communities.",
  },
];

const MissionVision = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              OUR PURPOSE
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
            Driven By Our
            <span className="text-[#C89A31]"> Purpose</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our mission, vision, and values define who we are and inspire
            everything we do for communities worldwide.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {missionData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-7 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                {/* TOP BORDER */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-6 group-hover:bg-[#C89A31] transition-all duration-500">
                  <Icon className="text-3xl text-[#C89A31] group-hover:text-white transition duration-500" />
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                  {item.description}
                </p>

                {/* HOVER LINK */}
                {/* <button className="text-[#C89A31] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300">
                  Learn More
                  <span>→</span>
                </button> */}

                {/* GLOW EFFECT */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#C89A31]/5 rounded-full blur-3xl group-hover:bg-[#C89A31]/10 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;