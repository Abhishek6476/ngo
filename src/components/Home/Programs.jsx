
import {
  FaGraduationCap,
  FaHeartbeat,
  FaHandsHelping,
  FaFemale,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const programs = [
  {
    id: 1,
    title: "Education Support",
    icon: FaGraduationCap,
    description:
      "Providing quality education and brighter opportunities for underprivileged children.",
  },
  {
    id: 2,
    title: "Healthcare",
    icon: FaHeartbeat,
    description:
      "Ensuring medical care, health awareness, and essential support.",
  },
  {
    id: 3,
    title: "Community Development",
    icon: FaHandsHelping,
    description:
      "Empowering communities through sustainable growth and welfare.",
  },
  {
    id: 4,
    title: "Women Empowerment",
    icon: FaFemale,
    description:
      "Supporting women with education and economic independence.",
  },
];

const Programs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              OUR PROGRAMS
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
            Creating Change Through
            <span className="text-[#C89A31]"> Meaningful Action</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our initiatives are designed to uplift communities, empower
            individuals, and create opportunities for a brighter tomorrow.
          </p>
        </div>

        {/* PROGRAM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.id}
                className="group relative bg-white rounded-3xl p-7 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden flex flex-col"
              >
                {/* TOP BORDER */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center mb-6 group-hover:bg-[#C89A31] transition-all duration-500">
                  <Icon className="text-3xl text-[#C89A31] group-hover:text-white transition duration-500" />
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow">
                  {program.description}
                </p>

                {/* BUTTON */}
                <Link
                  to="/programs"
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#C89A31] text-white font-semibold hover:bg-[#b88728] transition-all duration-300"
                >
                  Learn More
                  <FaArrowRight className="text-sm" />
                </Link>

                {/* GLOW EFFECT */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#C89A31]/5 rounded-full blur-3xl group-hover:bg-[#C89A31]/10 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;