import { motion } from "framer-motion";
import founderImg from "../../assets/founder.webp";

const FounderMessage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={founderImg}
              alt="Founder"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-3 md:bottom-5 right-0 md:-right-3 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-[#C89A31] leading-none">
                Founder
              </h3>
              <p className="text-gray-700 font-medium text-xs mt-1">
                Have Faith Solution
              </p>
            </div>

            {/* Glow Effect */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#C89A31]/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* LABEL */}
            <div className="flex items-center gap-3 mb-5">
              <hr className="w-16 border-[#C89A31]" />
              <h4 className="text-[#C89A31] italic text-sm md:text-base">
                FOUNDER'S MESSAGE
              </h4>
            </div>

            {/* HEADING */}
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6 text-gray-900">
              A Message From
              <span className="text-[#C89A31]"> Our Founder</span>
            </h2>

            {/* MESSAGE */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Have Faith Solution, our mission has always been simple—to
              uplift lives, empower communities, and create opportunities for
              those who need them the most.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that even the smallest act of kindness can spark
              meaningful change. Together, with compassion and dedication, we
              are building a brighter, more inclusive future for all.
            </p>

            {/* QUOTE BOX */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-lg mb-6">
              <p className="text-gray-800 text-lg italic leading-relaxed">
                "True change begins when we choose to serve others with
                compassion, purpose, and unwavering hope."
              </p>
            </div>

            {/* SIGNATURE */}
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Abhishek Yadav
              </h3>
              <p className="text-[#C89A31] font-medium mt-1">
                Founder & Director
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;