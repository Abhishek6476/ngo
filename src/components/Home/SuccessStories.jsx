

import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

import story1 from "../../assets/campaign1.jpg";
import story2 from "../../assets/campaign2.jpg";
import story3 from "../../assets/campaign3.jpg";

const stories = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi, India",
    image: story1,
    story:
      "Have Faith Solution gave me access to education and a brighter future. Today, I dream bigger and work harder every day.",
  },
  {
    id: 2,
    name: "Roshni",
    location: "Lucknow, India",
    image: story2,
    story:
      "Through the women empowerment initiative, I gained confidence, skills, and the ability to support my family independently.",
  },
  {
    id: 3,
    name: "Aarav Kumar",
    location: "Patna, India",
    image: story3,
    story:
      "Your support provided me with healthcare, education, and hope. My life has changed in ways I never imagined possible.",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              SUCCESS STORIES
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
            Transforming Lives Through
            <span className="text-[#C89A31]"> Compassion</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Every contribution creates lasting change. Discover the inspiring
            journeys of individuals whose lives have been transformed through
            our initiatives.
          </p>
        </motion.div>

        {/* STORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* TOP BORDER */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* QUOTE ICON */}
              <div className="w-16 h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C89A31] transition-all duration-500">
                <FaQuoteLeft className="text-3xl text-[#C89A31] group-hover:text-white transition duration-500" />
              </div>

              {/* IMAGE */}
              <div className="flex justify-center mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#C89A31]/20 shadow-lg group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* STORY */}
              <p className="text-gray-600 leading-relaxed text-center mb-8 italic text-sm md:text-base">
                "{story.story}"
              </p>

              {/* USER INFO */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {story.name}
                </h3>

                <div className="flex items-center justify-center gap-2 text-[#C89A31] mb-4">
                  <FaMapMarkerAlt />
                  <span className="text-sm font-medium">
                    {story.location}
                  </span>
                </div>

                <FaHeart className="mx-auto text-red-500 text-lg animate-pulse" />
              </div>

              {/* GLOW EFFECT */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#C89A31]/5 rounded-full blur-3xl group-hover:bg-[#C89A31]/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;