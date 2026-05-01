// // import { motion } from "framer-motion";
// // import {
// //   FaBullseye,
// //   FaEye,
// //   FaHeart,
// //   FaHandshake,
// //   FaShieldAlt,
// //   FaUsers,
// //   FaArrowRight,
// // } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";

// // import aboutBanner from "../assets/gallery1.jpg";
// // import storyImg from "../assets/gallery2.jpg";
// // import founderImg from "../assets/gallery3.jpg";

// // const values = [
// //   {
// //     id: 1,
// //     title: "Compassion",
// //     icon: FaHeart,
// //     description:
// //       "We serve every individual with empathy, kindness, and genuine care.",
// //   },
// //   {
// //     id: 2,
// //     title: "Integrity",
// //     icon: FaShieldAlt,
// //     description:
// //       "Transparency and honesty guide every decision we make.",
// //   },
// //   {
// //     id: 3,
// //     title: "Collaboration",
// //     icon: FaHandshake,
// //     description:
// //       "Together with communities, partners, and volunteers, we create change.",
// //   },
// //   {
// //     id: 4,
// //     title: "Empowerment",
// //     icon: FaUsers,
// //     description:
// //       "We help individuals build confidence, independence, and brighter futures.",
// //   },
// // ];

// // const AboutPage = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="bg-gradient-to-b from-white to-yellow-50">
// //       {/* HERO SECTION */}
// //       <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
// //         <img
// //           src={aboutBanner}
// //           alt="About Us"
// //           className="absolute inset-0 w-full h-full object-cover"
// //         />

// //         <div className="absolute inset-0 bg-black/60" />

// //         <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
// //           <div>
// //             <motion.h1
// //               initial={{ opacity: 0, y: 40 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-5xl md:text-7xl font-bold text-white mb-6"
// //             >
// //               About <span className="text-[#C89A31]">Us</span>
// //             </motion.h1>

// //             <motion.p
// //               initial={{ opacity: 0, y: 40 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.2, duration: 0.8 }}
// //               className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto"
// //             >
// //               Empowering communities, transforming lives, and creating
// //               sustainable change for a brighter tomorrow.
// //             </motion.p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* OUR STORY */}
// //       <section className="py-20">
// //         <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-14 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -60 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.7 }}
// //           >
// //             <img
// //               src={storyImg}
// //               alt="Our Story"
// //               className="w-full rounded-3xl shadow-2xl"
// //             />
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, x: 60 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.7 }}
// //           >
// //             <div className="flex items-center gap-3 mb-6">
// //               <hr className="w-16 border-[#C89A31]" />
// //               <h4 className="text-[#C89A31] italic">
// //                 OUR STORY
// //               </h4>
// //             </div>

// //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //               Building Hope,
// //               <span className="text-[#C89A31]"> Inspiring Change</span>
// //             </h2>

// //             <p className="text-gray-600 leading-relaxed mb-6">
// //               Have Faith Solution was founded with a simple but powerful vision:
// //               to uplift underserved communities and provide opportunities where
// //               they are needed most.
// //             </p>

// //             <p className="text-gray-600 leading-relaxed">
// //               Through education, healthcare, and empowerment initiatives, we are
// //               committed to creating lasting impact and transforming lives.
// //             </p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* MISSION & VISION */}
// //       <section className="py-20">
// //         <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8">
// //           {[
// //             {
// //               icon: FaBullseye,
// //               title: "Our Mission",
// //               text: "To empower vulnerable communities through education, healthcare, and sustainable development initiatives.",
// //             },
// //             {
// //               icon: FaEye,
// //               title: "Our Vision",
// //               text: "A world where every individual has equal opportunities to thrive with dignity and purpose.",
// //             },
// //           ].map((item, index) => {
// //             const Icon = item.icon;

// //             return (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.2 }}
// //                 className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
// //               >
// //                 <div className="w-20 h-20 rounded-3xl bg-[#C89A31]/10 flex items-center justify-center mb-8">
// //                   <Icon className="text-4xl text-[#C89A31]" />
// //                 </div>

// //                 <h3 className="text-3xl font-bold text-gray-900 mb-5">
// //                   {item.title}
// //                 </h3>

// //                 <p className="text-gray-600 leading-relaxed text-lg">
// //                   {item.text}
// //                 </p>
// //               </motion.div>
// //             );
// //           })}
// //         </div>
// //       </section>

// //       {/* CORE VALUES */}
// //       <section className="py-20">
// //         <div className="max-w-7xl mx-auto px-6 md:px-12">
// //           <div className="text-center mb-16">
// //             <div className="flex items-center justify-center gap-3 mb-5">
// //               <hr className="w-16 border-[#C89A31]" />
// //               <h4 className="text-[#C89A31] italic">
// //                 OUR VALUES
// //               </h4>
// //               <hr className="w-16 border-[#C89A31]" />
// //             </div>

// //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
// //               Principles That
// //               <span className="text-[#C89A31]"> Guide Us</span>
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {values.map((value, index) => {
// //               const Icon = value.icon;

// //               return (
// //                 <motion.div
// //                   key={value.id}
// //                   initial={{ opacity: 0, y: 40 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: index * 0.1 }}
// //                   className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
// //                 >
// //                   <div className="w-16 h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-6">
// //                     <Icon className="text-3xl text-[#C89A31]" />
// //                   </div>

// //                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                     {value.title}
// //                   </h3>

// //                   <p className="text-gray-600 leading-relaxed">
// //                     {value.description}
// //                   </p>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* FOUNDER */}
// //       <section className="py-20">
// //         <div className="max-w-6xl mx-auto px-6 md:px-12">
// //           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
// //             <img
// //               src={founderImg}
// //               alt="Founder"
// //               className="w-full h-full object-cover"
// //             />

// //             <div className="p-10 md:p-14 flex flex-col justify-center">
// //               <h4 className="text-[#C89A31] italic mb-4">
// //                 FOUNDER'S MESSAGE
// //               </h4>

// //               <h2 className="text-4xl font-bold text-gray-900 mb-6">
// //                 Leading With Purpose
// //               </h2>

// //               <p className="text-gray-600 leading-relaxed mb-8">
// //                 "True change begins when compassion meets action. Together, we
// //                 can build stronger communities and brighter futures."
// //               </p>

// //               <div>
// //                 <h3 className="text-2xl font-bold text-gray-900">
// //                   Abhishek Yadav
// //                 </h3>
// //                 <p className="text-[#C89A31] font-medium">
// //                   Founder & Director
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="py-20">
// //         <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
// //           <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">
// //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //               Join Us In
// //               <span className="text-[#C89A31]"> Making A Difference</span>
// //             </h2>

// //             <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
// //               Together, we can create meaningful change and transform lives
// //               across communities.
// //             </p>

// //             <button
// //               onClick={() => navigate("/contact")}
// //               className="inline-flex items-center gap-3 px-8 py-4 bg-[#C89A31] text-white rounded-xl font-semibold hover:bg-[#a67c25] transition-all duration-300"
// //             >
// //               Get Involved
// //               <FaArrowRight />
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default AboutPage;




// import { motion } from "framer-motion";
// import {
//   FaBullseye,
//   FaEye,
//   FaHeart,
//   FaHandshake,
//   FaShieldAlt,
//   FaUsers,
//   FaArrowRight,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// import aboutHero from "../assets/gallery1.jpg";
// import storyImg from "../assets/gallery2.jpg";
// import founderImg from "../assets/gallery2.jpg";

// const values = [
//   {
//     id: 1,
//     title: "Compassion",
//     icon: FaHeart,
//     description:
//       "We serve every individual with empathy, kindness, and genuine care.",
//   },
//   {
//     id: 2,
//     title: "Integrity",
//     icon: FaShieldAlt,
//     description:
//       "Transparency and honesty guide every decision we make.",
//   },
//   {
//     id: 3,
//     title: "Collaboration",
//     icon: FaHandshake,
//     description:
//       "Working together with communities and partners to create lasting impact.",
//   },
//   {
//     id: 4,
//     title: "Empowerment",
//     icon: FaUsers,
//     description:
//       "Helping people build confidence, independence, and better futures.",
//   },
// ];

// const missionVision = [
//   {
//     id: 1,
//     title: "Our Mission",
//     icon: FaBullseye,
//     description:
//       "To uplift vulnerable communities through education, healthcare, and sustainable development initiatives.",
//   },
//   {
//     id: 2,
//     title: "Our Vision",
//     icon: FaEye,
//     description:
//       "A world where every individual has equal opportunities to thrive with dignity and purpose.",
//   },
// ];

// const About = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gradient-to-b from-white to-yellow-50">
//       {/* HERO SECTION */}
//       <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
//         <img
//           src={aboutHero}
//           alt="About Us"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/55" />

//         <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl"
//           >
//             <div className="flex items-center justify-center gap-3 mb-5">
//               <hr className="w-12 md:w-16 border-[#C89A31]" />
//               <h4 className="text-[#C89A31] italic text-sm md:text-base">
//                 ABOUT US
//               </h4>
//               <hr className="w-12 md:w-16 border-[#C89A31]" />
//             </div>

//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
//               Creating Hope,
//               <span className="text-[#C89A31]"> Transforming Lives</span>
//             </h1>

//             <p className="text-gray-200 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
//               Dedicated to empowering communities, uplifting lives, and building
//               a brighter future for generations to come.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* OUR STORY */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-14 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <img
//               src={storyImg}
//               alt="Our Story"
//               className="w-full rounded-3xl shadow-2xl object-cover"
//             />

//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C89A31]/10 rounded-full blur-3xl"></div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center gap-3 mb-5">
//               <hr className="w-16 border-[#C89A31]" />
//               <h4 className="text-[#C89A31] italic text-sm md:text-base">
//                 OUR STORY
//               </h4>
//             </div>

//             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
//               Building Stronger
//               <span className="text-[#C89A31]"> Communities</span>
//             </h2>

//             <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
//               Our organization was founded with a simple vision — to create
//               opportunities, provide support, and inspire hope among underserved
//               communities.
//             </p>

//             <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//               Through education, healthcare, and empowerment programs, we are
//               committed to creating sustainable change that lasts for
//               generations.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* MISSION & VISION */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//           <div className="grid md:grid-cols-2 gap-8">
//             {missionVision.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className="group relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
//                 >
//                   <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

//                   <div className="w-16 h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-6 group-hover:bg-[#C89A31] transition-all duration-500">
//                     <Icon className="text-3xl text-[#C89A31] group-hover:text-white transition duration-500" />
//                   </div>

//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed text-base">
//                     {item.description}
//                   </p>

//                   <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#C89A31]/5 rounded-full blur-3xl group-hover:bg-[#C89A31]/10 transition-all duration-500" />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CORE VALUES */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//           <div className="text-center max-w-3xl mx-auto mb-14">
//             <div className="flex items-center justify-center gap-3 mb-5">
//               <hr className="w-16 border-[#C89A31]" />
//               <h4 className="text-[#C89A31] italic text-sm md:text-base">
//                 OUR VALUES
//               </h4>
//               <hr className="w-16 border-[#C89A31]" />
//             </div>

//             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5">
//               Principles That
//               <span className="text-[#C89A31]"> Guide Us</span>
//             </h2>

//             <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//               The values that inspire every initiative, every decision, and
//               every life we touch.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//             {values.map((value) => {
//               const Icon = value.icon;

//               return (
//                 <motion.div
//                   key={value.id}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className="group relative bg-white rounded-3xl p-7 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
//                 >
//                   <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

//                   <div className="w-16 h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-6 group-hover:bg-[#C89A31] transition-all duration-500">
//                     <Icon className="text-3xl text-[#C89A31] group-hover:text-white transition duration-500" />
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-4">
//                     {value.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed text-sm">
//                     {value.description}
//                   </p>

//                   <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#C89A31]/5 rounded-full blur-3xl group-hover:bg-[#C89A31]/10 transition-all duration-500" />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* FOUNDER SECTION */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//           <div className="grid lg:grid-cols-2 gap-14 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={founderImg}
//                 alt="Founder"
//                 className="w-full rounded-3xl shadow-2xl object-cover"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center gap-3 mb-5">
//                 <hr className="w-16 border-[#C89A31]" />
//                 <h4 className="text-[#C89A31] italic text-sm md:text-base">
//                   FOUNDER'S MESSAGE
//                 </h4>
//               </div>

//               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
//                 Leading With
//                 <span className="text-[#C89A31]"> Purpose</span>
//               </h2>

//               <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 italic">
//                 "True change begins when compassion meets action. Together, we
//                 can transform lives and build stronger communities."
//               </p>

//               <h3 className="text-2xl font-bold text-gray-900">
//                 Abhishek Yadav
//               </h3>

//               <p className="text-[#C89A31] font-semibold">
//                 Founder & Director
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-5xl mx-auto px-6 md:px-12">
//           <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl text-center border border-gray-100">
//             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
//               Join Us In
//               <span className="text-[#C89A31]"> Making A Difference</span>
//             </h2>

//             <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
//               Your support can help us create meaningful change and transform
//               countless lives.
//             </p>

//             <button
//               onClick={() => navigate("/contact")}
//               className="inline-flex items-center gap-3 px-8 py-4 bg-[#C89A31] text-white rounded-xl font-semibold shadow-lg hover:bg-[#a67c25] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//             >
//               Get In Touch
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;



import Hero from "../components/About/Hero";
import Story from "../components/About/Story";
import MissionVision from "../components/About/MissionVision";
import FounderMessage from "../components/About/FounderMessage";
import AboutCTA from "../components/About/AboutCTA";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-yellow-50">
      <Hero />
      <Story/>
      <MissionVision/>
      <FounderMessage/>
      <AboutCTA/>
    </div>
  );
};

export default AboutPage;