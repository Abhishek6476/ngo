import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLaptopCode,
  FaUserGraduate,
  FaBriefcase,
  FaHandsHelping,
  FaCheckCircle,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { BsInstagram, BsTwitterX } from "react-icons/bs";

import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpg";
import img6 from "../assets/gallery6.jpg";

const features = [
  {
    icon: FaLaptopCode,
    title: "Technical Training",
    description:
      "Providing industry-relevant technical skills in programming, design, and digital technologies.",
  },
  {
    icon: FaUserGraduate,
    title: "Career Guidance",
    description:
      "Helping young individuals identify career paths and prepare for professional success.",
  },
  {
    icon: FaBriefcase,
    title: "Job Readiness",
    description:
      "Building resume, interview, and workplace skills for employment opportunities.",
  },
  {
    icon: FaHandsHelping,
    title: "Mentorship Support",
    description:
      "Connecting youth with experienced mentors for growth, confidence, and leadership.",
  },
];

const stats = [
  { number: "12,000+", label: "Youth Trained" },
  { number: "350+", label: "Workshops Conducted" },
  { number: "500+", label: "Job Placements" },
  { number: "30+", label: "Cities Reached" },
];

const benefits = [
  "Industry-Focused Training",
  "Professional Certifications",
  "Placement Assistance",
  "Entrepreneurship Support",
  "Soft Skills Development",
  "Leadership Training",
];

const SkillDevelopmentForYouthPage = () => {
  return (
    <div className="bg-gradient-to-b from-white via-[#fffdf7] to-yellow-50 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#C89A31]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C89A31]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <hr className="w-14 border-[#C89A31]" />
                <span className="text-[#C89A31] italic tracking-wide">
                  YOUTH EMPOWERMENT
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight"
              >
                Skill Development
                <span className="block text-[#C89A31]">For Youth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-lg text-gray-600 leading-relaxed"
              >
                Equipping young minds with practical skills, career guidance,
                and opportunities to build successful futures.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/donate"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C89A31] text-white rounded-2xl font-semibold shadow-xl hover:bg-[#b88924] hover:-translate-y-1 transition-all duration-300"
                >
                  Donate Now
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold border border-gray-200 shadow-md hover:border-[#C89A31] hover:text-[#C89A31] hover:-translate-y-1 transition-all duration-300"
                >
                  Join Program
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-5">
                <img
                  src={img1}
                  alt=""
                  className="rounded-[2rem] h-72 w-full object-cover shadow-2xl"
                />

                <div className="space-y-5 mt-10">
                  <img
                    src={img2}
                    alt=""
                    className="rounded-[2rem] h-40 w-full object-cover shadow-xl"
                  />

                  <img
                    src={img3}
                    alt=""
                    className="rounded-[2rem] h-52 w-full object-cover shadow-xl"
                  />
                </div>
              </div>

              <div className="absolute -bottom-8 left-8 bg-white rounded-3xl shadow-2xl p-6 border border-yellow-100">
                <h4 className="text-3xl font-bold text-gray-900">12,000+</h4>
                <p className="text-gray-600">Youth Empowered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
<section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
    
    {/* Images */}
    <div className="grid grid-cols-2 gap-4 sm:gap-5 order-2 lg:order-1">
      <motion.div
        whileHover={{ y: -8, rotate: -1 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-[1.3rem] sm:rounded-[1.8rem] shadow-2xl group row-span-2"
      >
        <img
          src={img4}
          alt=""
          className="w-full h-full min-h-[320px] sm:min-h-[420px] object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#C89A31]/50 via-[#C89A31]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      <motion.div
        whileHover={{ y: -6, rotate: 2 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-[1.3rem] sm:rounded-[1.8rem] shadow-xl group"
      >
        <img
          src={img5}
          alt=""
          className="w-full h-40 sm:h-52 object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#C89A31]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      <motion.div
        whileHover={{ y: -6, rotate: -2 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-[1.3rem] sm:rounded-[1.8rem] shadow-xl group"
      >
        <img
          src={img6}
          alt=""
          className="w-full h-40 sm:h-52 object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#C89A31]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="order-1 lg:order-2"
    >
      <span className="inline-block px-4 py-2 bg-[#C89A31]/10 text-[#C89A31] rounded-full text-xs sm:text-sm font-semibold mb-4">
        Why It Matters
      </span>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5">
        Empowering Youth
        <span className="block text-[#C89A31]">
          For A Better Tomorrow
        </span>
      </h2>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
        Skills create opportunities. Our programs help young people gain
        confidence, develop expertise, and secure brighter futures.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 6 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#C89A31]/10 flex-shrink-0 flex items-center justify-center group-hover:bg-[#C89A31] transition-all duration-300">
              <FaCheckCircle className="text-[#C89A31] group-hover:text-white text-sm transition-colors duration-300" />
            </div>

            <span className="text-sm sm:text-base text-gray-700 font-medium leading-snug group-hover:text-[#C89A31] transition-colors duration-300">
              {benefit}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* FEATURES */}
   <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
        <hr className="w-10 sm:w-12 md:w-16 border-[#C89A31]" />
        <span className="text-[#C89A31] italic tracking-wide text-xs sm:text-sm md:text-base">
          PROGRAM HIGHLIGHTS
        </span>
        <hr className="w-10 sm:w-12 md:w-16 border-[#C89A31]" />
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
        Program Highlights
      </h2>

      <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
        Preparing youth with the skills and confidence to succeed.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -12 }}
          transition={{ duration: 0.4 }}
          className="group relative bg-white rounded-3xl p-6 sm:p-7 md:p-8 border border-yellow-100 shadow-md hover:shadow-2xl hover:border-[#C89A31]/30 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
        >
          {/* Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C89A31]/5 via-[#C89A31]/10 to-yellow-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon */}
          <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-[#C89A31] transition-all duration-500">
            <feature.icon className="text-2xl sm:text-3xl text-[#C89A31] group-hover:text-white transition-colors duration-500" />
          </div>

          {/* Title */}
          <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight group-hover:text-[#A87416] transition-colors duration-500">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* IMPACT */}
<section className="py-12 sm:py-14 md:py-16 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10, scale: 1.03 }}
          className="group relative text-center bg-white rounded-3xl p-6 sm:p-8 border border-yellow-100 shadow-lg hover:shadow-2xl hover:border-[#C89A31]/30 transition-all duration-500 overflow-hidden"
        >
          {/* Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C89A31]/5 via-yellow-50 to-[#C89A31]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#C89A31] mb-3 group-hover:scale-110 transition-transform duration-500">
              {stat.number}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 font-semibold leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* GALLERY */}
     <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
    {/* Section Header */}
    <div className="text-center mb-10 sm:mb-12 md:mb-14">
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
        <hr className="w-10 sm:w-12 md:w-16 border-[#C89A31]" />
        <span className="text-[#C89A31] italic tracking-wide text-xs sm:text-sm md:text-base">
          GALLERY
        </span>
        <hr className="w-10 sm:w-12 md:w-16 border-[#C89A31]" />
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
        Moments of Growth
      </h2>

      <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Celebrating learning, innovation, and youth success stories.
      </p>
    </div>

    {/* Gallery Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
      {[img1, img5, img6, img4].map((img, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4 }}
          className="group relative overflow-hidden rounded-[1rem] shadow-xl"
        >
          <img
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full h-52 sm:h-60 md:h-64 object-cover transition-all duration-700 group-hover:scale-110"
          />

          {/* Golden Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#C89A31]/60 via-[#C89A31]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Glow Effect */}
          <div className="absolute -bottom-10 -right-10 w-24 sm:w-28 h-24 sm:h-28 bg-[#C89A31]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#C89A31] to-[#D9A93A] text-center py-6 md:py-7 px-6 text-white shadow-xl">
            <div className="absolute -top-14 -left-14 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-14 -right-14 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-semibold mb-2">
                Empower The
                <span className="italic text-yellow-100">
                  {" "}
                  Next Generation
                </span>
              </h2>

              <p className="max-w-2xl mx-auto text-white/90 mb-4 leading-relaxed text-sm md:text-base">
                Your support helps young people gain skills, confidence, and
                opportunities for a brighter future.
              </p>

              <Link
                to="/donate"
                className="inline-flex items-center gap-3 px-6 py-2.5 bg-white text-[#C89A31] font-semibold rounded-lg hover:scale-105 transition duration-300 shadow-lg"
              >
                Donate Now
                <FaArrowRight className="text-sm" />
              </Link>

              <div className="flex justify-center gap-3 mt-4">
                {[BsInstagram, FaWhatsapp, FaFacebookF, BsTwitterX].map(
                  (Icon, index) => (
                    <button
                      key={index}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#C89A31] transition duration-300"
                    >
                      <Icon className="text-sm" />
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillDevelopmentForYouthPage;