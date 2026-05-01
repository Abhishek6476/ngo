// import { motion } from "framer-motion";
// import {
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaClock,
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaPaperPlane,
// } from "react-icons/fa";

// const contactInfo = [
//   {
//     icon: FaMapMarkerAlt,
//     title: "Our Location",
//     details: "123 Hope Street, New Delhi, India",
//   },
//   {
//     icon: FaEnvelope,
//     title: "Email Address",
//     details: "contact@havefaithfoundation.org",
//   },
//   {
//     icon: FaPhoneAlt,
//     title: "Phone Number",
//     details: "+91 98765 43210",
//   },
//   {
//     icon: FaClock,
//     title: "Working Hours",
//     details: "Mon - Sat : 9:00 AM - 6:00 PM",
//   },
// ];

// const socialLinks = [
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// ];

// const ContactSection = () => {
//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-14">
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <hr className="w-16 border-[#C89A31]" />
//             <h4 className="text-[#C89A31] italic text-sm md:text-base">
//               CONTACT US
//             </h4>
//             <hr className="w-16 border-[#C89A31]" />
//           </div>

//           <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-gray-900">
//             Let's Build Something
//             <span className="text-[#C89A31]"> Meaningful Together</span>
//           </h2>

//           <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//             We'd love to hear from you. Reach out for volunteering,
//             partnerships, donations, or simply to learn more about our mission.
//           </p>
//         </div>

//         {/* Main Grid */}
//         <div className="grid lg:grid-cols-5 gap-10 items-start">
//           {/* Left Side */}
//           <div className="lg:col-span-3">
//             {/* Contact Cards */}
//             <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
//               {contactInfo.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     className="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
//                   >
//                     {/* Top Border */}
//                     <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

//                     {/* Icon */}
//                     <div className="w-14 h-14 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89A31] transition-all duration-500">
//                       <Icon className="text-2xl text-[#C89A31] group-hover:text-white transition duration-500" />
//                     </div>

//                     {/* Content */}
//                     <h3 className="text-lg font-bold text-gray-900 mb-2">
//                       {item.title}
//                     </h3>

//                     <p className="text-gray-600 text-sm leading-relaxed break-words">
//                       {item.details}
//                     </p>

//                     {/* Glow */}
//                     <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#C89A31]/5 rounded-full blur-3xl group-hover:bg-[#C89A31]/10 transition-all duration-500" />
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* Social Media */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//               className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-md"
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-5">
//                 Follow Us
//               </h3>

//               <div className="flex flex-wrap gap-4">
//                 {socialLinks.map((Icon, index) => (
//                   <a
//                     key={index}
//                     href="#"
//                     className="w-12 h-12 rounded-2xl bg-[#C89A31]/10 text-[#C89A31] flex items-center justify-center text-lg hover:bg-[#C89A31] hover:text-white transition-all duration-300"
//                   >
//                     <Icon />
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 bg-white rounded-3xl p-7 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
//           >
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-7">
//               Send a Message
//             </h3>

//             <form className="space-y-5">
//               <div className="grid md:grid-cols-2 gap-5">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 transition-all"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 transition-all"
//                 />
//               </div>

//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 transition-all"
//               />

//               <textarea
//                 rows="5"
//                 placeholder="Write your message..."
//                 className="w-full px-5 py-4 rounded-2xl border border-gray-200 resize-none focus:outline-none focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 transition-all"
//               />

//               <button
//                 type="submit"
//                 className="group w-full bg-[#C89A31] text-white py-3.5 rounded-2xl font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#b78625] transition-all duration-300"
//               >
//                 Send Message
//                 <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;



import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Our Location",
    details: "123 Hope Street, New Delhi, India",
  },
  {
    icon: FaEnvelope,
    title: "Email Address",
    details: "contact@havefaithfoundation.org",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone Number",
    details: "+91 98765 43210",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    details: "Mon - Sat : 9:00 AM - 6:00 PM",
  },
];

const socialLinks = [
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
];

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              CONTACT US
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Build Something
            <span className="text-[#C89A31]"> Meaningful Together</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We'd love to hear from you. Reach out for volunteering,
            partnerships, donations, or simply to learn more about our mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
  {/* Left Side */}
  <div className="space-y-4">
    {contactInfo.map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative bg-white rounded-2xl p-4 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C89A31]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C89A31] transition-all duration-500">
              <Icon className="text-xl text-[#C89A31] group-hover:text-white transition-all duration-500" />
            </div>

            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.details}
              </p>
            </div>
          </div>
        </motion.div>
      );
    })}

    {/* Social Media */}
   {/* Social Media Icons */}
<div className="flex justify-start gap-3 pt-2">
  {socialLinks.map((Icon, index) => (
    <a
      key={index}
      href="#"
      className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-[#C89A31] flex items-center justify-center shadow-sm hover:bg-[#C89A31] hover:text-white hover:border-[#C89A31] transition-all duration-300"
    >
      <Icon className="text-base" />
    </a>
  ))}
</div>
  </div>

  {/* Right Side Form */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-md"
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      Send a Message
    </h3>

    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 transition-all"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 transition-all"
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 transition-all"
      />

      <textarea
        rows="4"
        placeholder="Write your message..."
        className="w-full px-4 py-3 rounded-xl border border-gray-200 resize-none focus:outline-none focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 transition-all"
      />

      <button
        type="submit"
        className="group w-full bg-[#C89A31] text-white py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#b78625] transition-all duration-300"
      >
        Send Message
        <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </form>
  </motion.div>
</div>
      </div>
    </section>
  );
};

export default ContactSection;