import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-[2rem] shadow-2xl border border-[#C89A31]/10 overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#C89A31]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#C89A31]/10 rounded-full blur-3xl" />

          <div className="relative z-10 px-8 py-14 md:px-16 md:py-20 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C89A31]/10 text-[#C89A31] text-4xl mb-8"
            >
              <FaEnvelope />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Stay Updated With Our
              <span className="text-[#C89A31]"> Latest Stories</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-10"
            >
              Subscribe to receive inspiring stories, community updates,
              impactful initiatives, and the latest news delivered directly
              to your inbox.
            </motion.p>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#C89A31]/20 focus:border-[#C89A31] text-gray-700"
                />

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C89A31] text-white font-semibold hover:bg-[#b78625] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Subscribe
                  <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.form>

            {/* Small Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-sm text-gray-500"
            >
              No spam, only meaningful updates. Unsubscribe anytime.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;