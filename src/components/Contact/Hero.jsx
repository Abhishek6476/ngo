import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          {/* <hr className="w-12 md:w-16 border-[#C89A31]" />
          <h4 className="text-[#C89A31] italic text-sm md:text-base font-medium">
            GET IN TOUCH
          </h4>
          <hr className="w-12 md:w-16 border-[#C89A31]" /> */}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight"
        >
          Contact
          <span className="text-[#C89A31]"> Us</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          We'd love to hear from you. Reach out to us for support,
          partnerships, volunteering opportunities, or any questions
          about our mission and initiatives.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;