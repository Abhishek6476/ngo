import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaTag } from "react-icons/fa";
import featuredImage from "../../assets/campaign1.jpg";

const FeaturedArticle = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#C89A31]/10 text-[#C89A31] font-semibold mb-4">
            FEATURED STORY
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Inspiring
            <span className="text-[#C89A31]"> Change</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Explore the stories that highlight our journey, celebrate
            community impact, and inspire meaningful transformation.
          </p>
        </motion.div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[#FFF9EC] to-white rounded-[2rem] overflow-hidden shadow-xl"
        >
          {/* Image */}
          <div className="relative h-full min-h-[350px] lg:min-h-[500px] overflow-hidden">
            <img
              src={featuredImage}
              alt="Featured Article"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />

            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 rounded-full bg-[#C89A31] text-white text-sm font-medium shadow-lg">
                Education
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#C89A31]" />
                <span>April 29, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <FaTag className="text-[#C89A31]" />
                <span>Community Impact</span>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              How Education is Transforming Rural Communities
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Discover how our educational initiatives are empowering
              children, supporting families, and building stronger rural
              communities through knowledge, opportunity, and hope.
            </p>

            <button className="group inline-flex items-center gap-3 bg-[#C89A31] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
              Read Full Story
              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticle;