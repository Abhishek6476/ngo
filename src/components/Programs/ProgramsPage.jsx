import React from "react";
import { motion } from "framer-motion";

// Images
import program1 from "../../assets/gallery1.jpg";
import program2 from "../../assets/gallery2.jpg";
import program3 from "../../assets/gallery3.jpg";
import program4 from "../../assets/gallery4.jpg";

import {
  FaGraduationCap,
  FaHeartbeat,
  FaFemale,
  FaHandsHelping,
} from "react-icons/fa";

/* ================= PROGRAM DATA ================= */
const programs = [
  {
    title: "Education Support",
    desc: "Educational support NGOs in India bridge systemic gaps by providing resources, teacher training, and direct academic aid to underserved communities. Leading organisations like Smile Foundation, Pratham, and CRY operate nationally, while numerous local NGOs offer targeted support in specific regions.",
    img: program1,
    icon: FaGraduationCap,
  },
  {
    title: "Healthcare Camps",
    desc: "Healthcare Camps ngo12:24 pmSeveral NGOs in India organize healthcare camps to provide essential medical services to underprivileged communities. Below are details on upcoming and regular healthcare initiatives by prominent organizations.",
    img: program2,
    icon: FaHeartbeat,
  },
  {
    title: "Women Empowerment",
    desc: "Several NGOs in India are dedicated to women's empowerment, focusing on economic independence, vocational training, legal awareness, and healthcare, particularly in regions like Delhi-NCR and rural areas. Key organizations, according to 2025/2026 data, include.",
    img: program3,
    icon: FaFemale,
  },
  {
    title: "Community Development",
    desc: "Community Development Non-Governmental Organizations (NGOs) work to enhance the social, economic, and environmental conditions of local communities, typically focusing on empowerment and sustainability. These organizations often bridge gaps in education, healthcare, infrastructure, and livelihood.",
    img: program4,
    icon: FaHandsHelping,
  },
];

const ProgramsPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-yellow-50">
      {/* INTRO */}
      <section className="py-16 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
          Empowering Lives Through
          <span className="text-[#C89A31]"> Meaningful Programs</span>
        </h2>

        <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">
          Our programs focus on education, healthcare, women empowerment, and
          community development to create lasting change and uplift lives across
          society.
        </p>
      </section>

      {/* PROGRAM LIST */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto space-y-24 px-6">
          {programs.map((p, i) => {
            const Icon = p.icon;

            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="rounded-3xl shadow-xl w-full h-[320px] object-cover"
                  />
                </motion.div>

                {/* CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <div className="flex items-center gap-3 mb-5 text-[#C89A31] text-4xl">
                    <Icon />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {p.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {p.desc}
                  </p>
                  
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
