// import { motion } from "framer-motion";
// import {
//   FaFileContract,
//   FaUserShield,
//   FaHandshake,
//   FaExclamationTriangle,
// } from "react-icons/fa";

// const TermsAndConditions = () => {
//   const terms = [
//     {
//       title: "Acceptance of Terms",
//       description:
//         "By accessing and using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.",
//     },
//     {
//       title: "Use of Services",
//       description:
//         "Our platform and services must be used only for lawful purposes. You agree not to misuse, disrupt, or attempt unauthorized access to our systems or data.",
//     },
//     {
//       title: "Intellectual Property",
//       description:
//         "All content, logos, graphics, and materials on this website are the exclusive property of Have Faith Solution Pvt. Ltd. and may not be copied or reproduced without written consent.",
//     },
//     {
//       title: "Limitation of Liability",
//       description:
//         "We shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services.",
//     },
//     {
//       title: "Changes to Terms",
//       description:
//         "We reserve the right to modify these Terms and Conditions at any time. Continued use of the website after changes constitutes your acceptance of the revised terms.",
//     },
//   ];

//   return (
//     <main className="flex-grow">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-white via-yellow-50 to-white py-12 md:py-14 px-4">
//         <div className="absolute top-0 left-0 w-60 h-60 bg-[#C89A31]/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C89A31]/10 rounded-full blur-3xl"></div>

//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             {/* Left Content */}
//             <div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#C89A31]/10 text-[#C89A31] font-semibold mb-5"
//               >
//                 <FaFileContract className="text-base" />
//                 Legal Agreement
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 25 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
//               >
//                 Terms &
//                 <span className="block text-[#C89A31]">Conditions</span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 25 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="mt-4 text-base text-gray-600 leading-relaxed max-w-xl"
//               >
//                 Please read these terms carefully before using our website
//                 and services. They govern your access and relationship with us.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 25 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="mt-6 flex flex-wrap gap-3"
//               >
//                 <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-yellow-100">
//                   <FaUserShield className="text-[#C89A31]" />
//                   <span className="text-sm font-medium text-gray-700">
//                     User Protection
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-yellow-100">
//                   <FaHandshake className="text-[#C89A31]" />
//                   <span className="text-sm font-medium text-gray-700">
//                     Fair Usage
//                   </span>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Right Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="bg-white rounded-3xl shadow-2xl border border-yellow-100 p-6 md:p-8">
//                 <div className="w-16 h-16 rounded-full bg-[#C89A31]/10 flex items-center justify-center mx-auto mb-5">
//                   <FaExclamationTriangle className="text-3xl text-[#C89A31]" />
//                 </div>

//                 <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-3">
//                   Important Notice
//                 </h3>

//                 <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed mb-5">
//                   By continuing to use our services, you agree to follow all
//                   applicable laws, policies, and terms outlined below.
//                 </p>

//                 <div className="space-y-2">
//                   {[
//                     "Lawful Website Usage",
//                     "Respect Intellectual Property",
//                     "Acceptance of Updates",
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-3 p-3 rounded-xl bg-yellow-50"
//                     >
//                       <div className="w-2.5 h-2.5 rounded-full bg-[#C89A31]"></div>
//                       <span className="text-sm text-gray-700 font-medium">
//                         {item}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Terms Content */}
//       <section className="bg-white py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold text-gray-900 mb-6"
//           >
//             Terms and Conditions
//           </motion.h2>

//           <p className="text-lg text-gray-600 leading-relaxed mb-12">
//             These Terms and Conditions govern your use of our website,
//             products, and services. By accessing our platform, you agree
//             to these legally binding terms.
//           </p>

//           <div className="space-y-8">
//             {terms.map((term, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-gradient-to-r from-white to-yellow-50 rounded-3xl p-8 border border-yellow-100 shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {index + 1}. {term.title}
//                 </h3>

//                 <p className="text-gray-600 leading-relaxed text-lg">
//                   {term.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#C89A31] to-[#D9A93A] text-white shadow-2xl">
//             <h3 className="text-3xl font-bold mb-4">
//               Questions About Our Terms?
//             </h3>

//             <p className="text-white/95 text-lg leading-relaxed mb-6">
//               If you need clarification regarding these Terms and Conditions,
//               our team is always ready to assist you.
//             </p>

//             <a
//               href="mailto:contact@havefaithsolution.com"
//               className="inline-flex items-center gap-2 bg-white text-[#C89A31] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
//             >
//               Contact Our Team
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default TermsAndConditions;



import { motion } from "framer-motion";
import {
  FaFileContract,
  FaUserShield,
  FaHandshake,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      description:
        "By accessing and using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.",
    },
    {
      title: "Use of Services",
      description:
        "Our platform and services must be used only for lawful purposes. You agree not to misuse, disrupt, or attempt unauthorized access to our systems or data.",
    },
    {
      title: "Intellectual Property",
      description:
        "All content, logos, graphics, and materials on this website are the exclusive property of Have Faith Solution Pvt. Ltd. and may not be copied or reproduced without written consent.",
    },
    {
      title: "Limitation of Liability",
      description:
        "We shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services.",
    },
    {
      title: "Changes to Terms",
      description:
        "We reserve the right to modify these Terms and Conditions at any time. Continued use of the website after changes constitutes your acceptance of the revised terms.",
    },
  ];

  return (
    <main className="flex-grow">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-yellow-50 to-white py-12 md:py-14 px-4">
        <div className="absolute top-0 left-0 w-60 h-60 bg-[#C89A31]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C89A31]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#C89A31]/10 text-[#C89A31] font-semibold mb-5"
              >
                <FaFileContract className="text-base" />
                Legal Agreement
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                Terms &
                <span className="block text-[#C89A31]">Conditions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-base text-gray-600 leading-relaxed max-w-xl"
              >
                Please read these terms carefully before using our website and
                services. They govern your access and relationship with us.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-yellow-100">
                  <FaUserShield className="text-[#C89A31]" />
                  <span className="text-sm font-medium text-gray-700">
                    User Protection
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-yellow-100">
                  <FaHandshake className="text-[#C89A31]" />
                  <span className="text-sm font-medium text-gray-700">
                    Fair Usage
                  </span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-yellow-100 p-6 md:p-8">
                <div className="w-16 h-16 rounded-full bg-[#C89A31]/10 flex items-center justify-center mx-auto mb-5">
                  <FaExclamationTriangle className="text-3xl text-[#C89A31]" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-3">
                  Important Notice
                </h3>

                <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed mb-5">
                  By continuing to use our services, you agree to follow all
                  applicable laws, policies, and terms outlined below.
                </p>

                <div className="space-y-2">
                  {[
                    "Lawful Website Usage",
                    "Respect Intellectual Property",
                    "Acceptance of Updates",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-yellow-50"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C89A31]"></div>
                      <span className="text-sm text-gray-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Terms and Conditions
          </motion.h2>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl">
            These Terms and Conditions govern your use of our website,
            products, and services. By accessing our platform, you agree to
            these legally binding terms.
          </p>

          <div className="space-y-6">
            {terms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-gradient-to-r from-white to-yellow-50 rounded-2xl p-6 md:p-8 border border-yellow-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {index + 1}. {term.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {term.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
         <div className="mt-14 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#C89A31] to-[#D9A93A] text-white shadow-xl">
  <h3 className="text-2xl md:text-3xl font-bold mb-3">
    Questions About Our Terms?
  </h3>

  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
    If you need clarification regarding these Terms and Conditions,
    our team is always ready to assist you.
  </p>

  {/* UPDATED BUTTON */}
  <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-white text-[#C89A31] px-5 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
  >
    Contact Our Team
  </Link>
</div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;