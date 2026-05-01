import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaFemale,
  FaHandsHelping,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

const programs = [
  {
    id: 1,
    title: "Education Support",
    icon: FaGraduationCap,
    description:
      "Providing quality education, scholarships, and learning resources to underprivileged children.",
  },
  {
    id: 2,
    title: "Healthcare Initiatives",
    icon: FaHeartbeat,
    description:
      "Organizing medical camps, health awareness drives, and essential healthcare support.",
  },
  {
    id: 3,
    title: "Women Empowerment",
    icon: FaFemale,
    description:
      "Helping women become financially independent through skill development and leadership.",
  },
  {
    id: 4,
    title: "Community Development",
    icon: FaHandsHelping,
    description:
      "Strengthening communities through sanitation, clean water, and social welfare programs.",
  },
  {
    id: 5,
    title: "Skill Development",
    icon: FaTools,
    description:
      "Equipping youth with vocational training and career opportunities for self-reliance.",
  },
];

const ProgramsOverview = () => {
  return (
    <section className="py-20 bg-white">
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
            WHAT WE DO
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core
            <span className="text-[#C89A31]"> Programs</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            We focus on sustainable initiatives that uplift lives,
            strengthen communities, and create opportunities for
            long-term growth and empowerment.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-6 group-hover:bg-[#C89A31] transition-all duration-500">
                  <Icon className="text-3xl text-[#C89A31] group-hover:text-white transition-all duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Button */}
                <button className="inline-flex items-center gap-2 font-semibold text-[#C89A31] group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <FaArrowRight className="text-sm" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;