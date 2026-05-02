import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFemale,
  FaUserTie,
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
    icon: FaFemale,
    title: "Leadership Training",
    description:
      "Providing women with essential leadership skills, confidence, and decision-making abilities.",
  },
  {
    icon: FaUserTie,
    title: "Professional Mentorship",
    description:
      "Connecting aspiring women leaders with mentors and industry experts.",
  },
  {
    icon: FaBriefcase,
    title: "Economic Independence",
    description:
      "Supporting entrepreneurship, financial literacy, and career advancement opportunities.",
  },
  {
    icon: FaHandsHelping,
    title: "Community Empowerment",
    description:
      "Building strong networks where women inspire, support, and uplift each other.",
  },
];

const stats = [
  { number: "8,000+", label: "Women Empowered" },
  { number: "250+", label: "Leadership Workshops" },
  { number: "100+", label: "Communities Reached" },
  { number: "75+", label: "Women Entrepreneurs" },
];

const benefits = [
  "Leadership Development",
  "Career Advancement",
  "Financial Literacy",
  "Entrepreneurship Support",
  "Mentorship Programs",
  "Community Networking",
];

const WomenLeadershipInitiative = () => {
  return (
    <div className="bg-gradient-to-b from-white via-[#fffdf7] to-yellow-50 overflow-hidden">
      {/* HERO SECTION */}
     <section className="relative py-16 md:py-24 overflow-hidden">
  <div className="absolute top-0 left-0 w-72 h-72 bg-[#C89A31]/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C89A31]/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <hr className="w-10 sm:w-12 md:w-14 border-[#C89A31]" />
          <span className="text-[#C89A31] italic tracking-wide text-xs sm:text-sm md:text-base">
            WOMEN LEADERSHIP INITIATIVE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
        >
          Empowering Women
          <span className="block text-[#C89A31]">
            To Lead Change
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed"
        >
          Supporting women with leadership skills, career opportunities,
          and the confidence to create meaningful change in society.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/donate"
            className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#C89A31] text-white rounded-2xl font-semibold shadow-xl hover:bg-[#b88924] hover:-translate-y-1 transition-all duration-300"
          >
            Donate Women
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contact"
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-gray-900 rounded-2xl font-semibold border border-gray-200 shadow-md hover:border-[#C89A31] hover:text-[#C89A31] hover:-translate-y-1 transition-all duration-300"
          >
            Join Initiative
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative mt-8 lg:mt-0"
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <img
            src={img1}
            alt=""
            className="rounded-[2rem] h-56 sm:h-64 md:h-72 w-full object-cover shadow-2xl"
          />

          <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">
            <img
              src={img2}
              alt=""
              className="rounded-[2rem] h-32 sm:h-36 md:h-40 w-full object-cover shadow-xl"
            />

            <img
              src={img3}
              alt=""
              className="rounded-[2rem] h-40 sm:h-46 md:h-52 w-full object-cover shadow-xl"
            />
          </div>
        </div>

        <div className="absolute -bottom-6 sm:-bottom-8 left-4 sm:left-8 bg-white rounded-3xl shadow-2xl p-4 sm:p-6 border border-yellow-100">
          <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">
            8,000+
          </h4>
          <p className="text-sm sm:text-base text-gray-600">
            Women Empowered
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* OVERVIEW */}
   <section className="py-14 md:py-16 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      <motion.div
        whileHover={{ y: -8, rotate: -1 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.8rem] shadow-2xl group row-span-2"
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
        className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.8rem] shadow-xl group"
      >
        <img
          src={img5}
          alt=""
          className="w-full h-40 sm:h-44 md:h-52 object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#C89A31]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      <motion.div
        whileHover={{ y: -6, rotate: -2 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.8rem] shadow-xl group"
      >
        <img
          src={img6}
          alt=""
          className="w-full h-40 sm:h-44 md:h-52 object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#C89A31]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="inline-block px-4 py-2 bg-[#C89A31]/10 text-[#C89A31] rounded-full text-xs sm:text-sm font-semibold mb-4">
        Why It Matters
      </span>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        Why Women Leadership
        <span className="block text-[#C89A31]">Matters Most</span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
        When women lead, communities prosper. We help women unlock their
        potential, achieve independence, and inspire the next generation.
      </p>

      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 6 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#C89A31]/10 flex-shrink-0 flex items-center justify-center group-hover:bg-[#C89A31] transition-all duration-300">
              <FaCheckCircle className="text-[#C89A31] group-hover:text-white text-sm transition-colors duration-300" />
            </div>

            <span className="text-gray-700 font-medium text-sm md:text-base leading-snug group-hover:text-[#C89A31] transition-colors duration-300">
              {benefit}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* FEATURES */}
     <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
        <hr className="w-10 sm:w-14 md:w-16 border-[#C89A31]" />
        <span className="text-[#C89A31] italic tracking-wide text-xs sm:text-sm md:text-base">
          PROGRAM HIGHLIGHTS
        </span>
        <hr className="w-10 sm:w-14 md:w-16 border-[#C89A31]" />
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        Program Highlights
      </h2>

      <p className="mt-4 sm:mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
        Transforming lives through leadership, mentorship, and opportunity.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -12 }}
          transition={{ duration: 0.4 }}
          className="group relative bg-white rounded-3xl p-6 sm:p-7 md:p-8 border border-yellow-100 shadow-md hover:shadow-2xl hover:border-[#C89A31]/30 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

          <div className="absolute inset-0 bg-gradient-to-br from-[#C89A31]/5 via-[#C89A31]/10 to-yellow-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute -bottom-10 -right-10 w-28 sm:w-32 h-28 sm:h-32 bg-[#C89A31]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

          <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-[#C89A31] transition-all duration-500">
            <feature.icon className="text-2xl sm:text-3xl text-[#C89A31] group-hover:text-white transition-colors duration-500" />
          </div>

          <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#A87416] transition-colors duration-500">
            {feature.title}
          </h3>

          <p className="relative z-10 text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* IMPACT */}
     <section className="py-14 sm:py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center bg-white rounded-3xl p-6 sm:p-7 md:p-8 shadow-lg border border-yellow-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#C89A31] mb-2 sm:mb-3">
            {stat.number}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* GALLERY */}
    <section className="py-14 sm:py-16 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
    <div className="text-center mb-12 sm:mb-14">
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
        <hr className="w-10 sm:w-14 md:w-16 border-[#C89A31]" />
        <span className="text-[#C89A31] italic tracking-wide text-xs sm:text-sm md:text-base">
          GALLERY
        </span>
        <hr className="w-10 sm:w-14 md:w-16 border-[#C89A31]" />
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Women Leading Change
      </h2>

      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
        Inspiring stories of courage, leadership, and transformation.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
      {[img1, img5, img6, img4].map((img, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4 }}
          className="group relative overflow-hidden rounded-2xl shadow-xl"
        >
          <img
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full h-56 sm:h-64 object-cover transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#C89A31]/60 via-[#C89A31]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                Empower Women,
                <span className="italic text-yellow-100">
                  {" "}Transform Futures
                </span>
              </h2>

              <p className="max-w-2xl mx-auto text-white/90 mb-4 leading-relaxed text-sm md:text-base">
                Your support helps women gain leadership skills, financial
                independence, and opportunities to inspire generations.
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
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenLeadershipInitiative;