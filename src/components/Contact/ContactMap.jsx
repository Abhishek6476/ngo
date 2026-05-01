import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";

const ContactMap = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              VISIT US
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Our
            <span className="text-[#C89A31]"> Location</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Visit our office and witness the impact we're creating together
            in communities every day.
          </p>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          {/* Top Border */}
          <div className="h-1 w-full bg-[#C89A31]" />

          {/* Map */}
          <div className="h-[500px] w-full">
            <iframe
              title="NGO Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.6131039485!2d77.06889944241318!3d28.527280343785406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c4c5b4c9d5%3A0x123456789abcdef!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>

          {/* Floating Address Card */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#C89A31]/10 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-2xl text-[#C89A31]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Have Faith Foundation
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    BSI H-44 Sector-63, Noida, India
                  </p>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C89A31] font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Get Directions
                    <FaDirections />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#C89A31]/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;