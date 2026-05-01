import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import volunteerImg from "../../assets/gallery1.jpg";

const VolunteerCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#C89A31]/10 rounded-full blur-3xl" />

            <img
              src={volunteerImg}
              alt="Join Our Mission"
              className="w-full h-80 rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            {/* TOP LABEL */}
            <div className="flex items-center gap-3 mb-5">
              <hr className="w-16 border-[#C89A31]" />
              <h4 className="text-[#C89A31] italic text-sm md:text-base">
                JOIN OUR MISSION
              </h4>
            </div>

            {/* HEADING */}
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-5 text-gray-900">
              Together We Can
              <span className="text-[#C89A31]"> Create Change</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Every helping hand creates hope. Join us in transforming lives,
              supporting communities, and building a brighter future for those
              who need it most.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 bg-[#C89A31] text-white rounded-md font-medium hover:bg-[#a67c25] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerCTA;