import { motion } from "framer-motion";
import { FaImages, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";

const galleryImages = [
  {
    id: 1,
    image: gallery1,
    title: "Education Support",
    category: "Education",
  },
  {
    id: 2,
    image: gallery2,
    title: "Healthcare Camp",
    category: "Healthcare",
  },
  {
    id: 3,
    image: gallery3,
    title: "Food Distribution",
    category: "Community",
  },
  {
    id: 4,
    image: gallery4,
    title: "Women Empowerment",
    category: "Empowerment",
  },
  {
    id: 5,
    image: gallery5,
    title: "Volunteer Activities",
    category: "Volunteering",
  },
  {
    id: 6,
    image: gallery6,
    title: "Community Development",
    category: "Development",
  },
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
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
              OUR GALLERY
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Moments of
            <span className="text-[#C89A31]"> Change</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Explore the inspiring moments that reflect our commitment,
            compassion, and the lives we continue to transform every day.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="inline-block w-fit px-4 py-1 mb-3 text-xs font-medium bg-[#C89A31] text-white rounded-full">
                  {item.category}
                </span>

                <h3 className="text-white text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-white font-medium">
                  <FaImages />
                  <span>View Photo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <button
            onClick={() => navigate("/gallery")}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold bg-yellow-100 text-[#C89A31] border border-yellow-300 hover:bg-[#C89A31] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            View All Gallery
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;