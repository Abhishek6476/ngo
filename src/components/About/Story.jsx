import { motion } from "framer-motion";
import storyImg from "../../assets/campaign1.jpg";

const Story = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
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
              src={storyImg}
              alt="Our Story"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-3 md:bottom-5 right-0 md:-right-3 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-[#C89A31] leading-none">
                10+
              </h3>
              <p className="text-gray-700 font-medium text-xs mt-1">
                Years of Service
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
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-5">
              <hr className="w-16 border-[#C89A31]" />
              <h4 className="text-[#C89A31] italic text-sm md:text-base">
                OUR STORY
              </h4>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
              Building Hope,
              <span className="text-[#C89A31]"> Inspiring Change</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-600 mb-6">
              Have Faith Solution was founded with a vision to uplift lives,
              strengthen communities, and create equal opportunities for
              everyone, regardless of their background.
            </p>

            <p className="text-gray-600 mb-6">
              Through education, healthcare, and empowerment initiatives, we
              continue to make a lasting impact, transforming challenges into
              opportunities and hope into reality.
            </p>

            {/* Highlight Box */}
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-lg">
              <p className="text-gray-800 text-lg italic leading-relaxed">
                "Together, we believe every act of kindness can transform a life
                and inspire a brighter tomorrow."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
