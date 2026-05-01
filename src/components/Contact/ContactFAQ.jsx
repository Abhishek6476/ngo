// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const faqData = [
//   {
//     id: 1,
//     question: "How can I donate to support your mission?",
//     answer:
//       "You can donate securely through our online donation page. Every contribution helps us provide education, healthcare, and community support to those who need it most.",
//   },
//   {
//     id: 2,
//     question: "How do I become a volunteer?",
//     answer:
//       "Simply fill out our volunteer registration form. Our team will contact you with available opportunities based on your interests and availability.",
//   },
//   {
//     id: 3,
//     question: "Can organizations partner with your NGO?",
//     answer:
//       "Absolutely. We welcome partnerships with businesses, institutions, and organizations that share our vision of creating lasting social impact.",
//   },
//   {
//     id: 4,
//     question: "Are donations eligible for tax benefits?",
//     answer:
//       "Yes, eligible donations may qualify for tax exemptions under applicable laws. Please contact us for detailed information and receipts.",
//   },
//   {
//     id: 5,
//     question: "How quickly will I receive a response?",
//     answer:
//       "Our team typically responds to all inquiries within 24–48 business hours. We appreciate your patience and support.",
//   },
// ];

// const ContactFAQ = () => {
//   const [activeId, setActiveId] = useState(1);

//   const toggleFAQ = (id) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
//       <div className="max-w-5xl mx-auto px-6 md:px-12">
//         {/* SECTION HEADER */}
//         <div className="text-center max-w-3xl mx-auto mb-14">
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <hr className="w-16 border-[#C89A31]" />
//             <h4 className="text-[#C89A31] italic text-sm md:text-base">
//               FAQ
//             </h4>
//             <hr className="w-16 border-[#C89A31]" />
//           </div>

//           <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
//             Frequently Asked
//             <span className="text-[#C89A31]"> Questions</span>
//           </h2>

//           <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//             Find quick answers to the most common questions about donations,
//             volunteering, partnerships, and our initiatives.
//           </p>
//         </div>

//         {/* FAQ LIST */}
//         <div className="space-y-6">
//           {faqData.map((faq, index) => (
//             <motion.div
//               key={faq.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
//             >
//               {/* TOP BORDER */}
//               <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

//               {/* QUESTION */}
//               <button
//                 onClick={() => toggleFAQ(faq.id)}
//                 className="w-full flex items-center justify-between text-left p-7"
//               >
//                 <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-5">
//                   {faq.question}
//                 </h3>

//                 <div className="w-14 h-14 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center group-hover:bg-[#C89A31] transition-all duration-500 shrink-0">
//                   {activeId === faq.id ? (
//                     <FaMinus className="text-[#C89A31] group-hover:text-white transition duration-500" />
//                   ) : (
//                     <FaPlus className="text-[#C89A31] group-hover:text-white transition duration-500" />
//                   )}
//                 </div>
//               </button>

//               {/* ANSWER */}
//               <AnimatePresence>
//                 {activeId === faq.id && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     <div className="px-7 pb-7">
//                       <div className="border-t border-gray-100 pt-5">
//                         <p className="text-gray-600 leading-relaxed">
//                           {faq.answer}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* GLOW EFFECT */}
//               <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#C89A31]/5 rounded-full blur-3xl group-hover:bg-[#C89A31]/10 transition-all duration-500" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactFAQ;



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "How can I donate to support your mission?",
    answer:
      "You can donate securely through our online donation page. Every contribution helps us create meaningful impact in communities.",
  },
  {
    id: 2,
    question: "How do I become a volunteer?",
    answer:
      "Fill out our volunteer form, and our team will contact you with suitable opportunities.",
  },
  {
    id: 3,
    question: "Can organizations partner with your NGO?",
    answer:
      "Yes, we actively collaborate with companies and institutions to maximize social impact.",
  },
  {
    id: 4,
    question: "Are donations tax deductible?",
    answer:
      "Eligible donations may qualify for tax benefits under applicable regulations.",
  },
];

const ContactFAQ = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              FAQ
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="text-[#C89A31]"> Questions</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Quick answers to common questions about our organization.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between text-left px-6 py-5"
              >
                <h3 className="text-base md:text-lg font-bold text-gray-900 pr-4 leading-snug">
                  {faq.question}
                </h3>

                <div className="w-11 h-11 rounded-xl bg-[#C89A31]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C89A31] transition-all duration-500">
                  {activeId === faq.id ? (
                    <FaMinus className="text-[#C89A31] group-hover:text-white transition duration-500" />
                  ) : (
                    <FaPlus className="text-[#C89A31] group-hover:text-white transition duration-500" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Glow */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#C89A31]/5 rounded-full blur-3xl group-hover:bg-[#C89A31]/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;