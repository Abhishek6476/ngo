import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSearch, FaArrowRight } from "react-icons/fa";

import img1 from "../../assets/gallery1.jpg";
import img2 from "../../assets/gallery2.jpg";
import img3 from "../../assets/gallery3.jpg";
import img4 from "../../assets/gallery4.jpg";
import img5 from "../../assets/gallery5.jpg";
import img6 from "../../assets/gallery6.jpg";

const categories = [
  "All",
  "Education",
  "Healthcare",
  "Women Empowerment",
  "Community Development",
  "Disaster Relief",
];

const programs = [
  {
    id: 1,
    title: "Empowering Children Through Education",
    category: "Education",
    description:
      "Providing quality education, learning resources, and brighter opportunities for underprivileged children.",
    image: img1,
    slug: "/empowering-children-through-education",
  },
  {
    id: 2,
    title: "Healthcare for Every Family",
    category: "Healthcare",
    description:
      "Delivering essential medical support, health camps, and wellness services to underserved communities.",
    image: img2,
    slug: "/healthcare-for-every-family",
  },
  {
    id: 3,
    title: "Women Leadership Initiative",
    category: "Women Empowerment",
    description:
      "Helping women become financially independent through skill development and entrepreneurship.",
    image: img3,
    slug: "/women-leadership-initiative",
  },
  {
    id: 4,
    title: "Building Strong Communities",
    category: "Community Development",
    description:
      "Creating sustainable communities through infrastructure, awareness, and social welfare programs.",
    image: img4,
    slug: "/building-strong-communities",
  },
  {
    id: 5,
    title: "Emergency Disaster Support",
    category: "Disaster Relief",
    description:
      "Providing immediate relief, food, shelter, and rehabilitation during natural disasters.",
    image: img5,
    slug: "/emergency-disaster-support",
  },
  {
    id: 6,
    title: "Skill Development for Youth",
    category: "Education",
    description:
      "Preparing young minds with vocational training, career guidance, and digital literacy.",
    image: img6,
    slug: "/skill-development-for-youth",
  },
];

const ProgramsFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrograms = programs.filter((program) => {
    const matchesCategory =
      activeCategory === "All" || program.category === activeCategory;

    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              OUR PROGRAMS
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5">
            Explore Our
            <span className="text-[#C89A31]"> Initiatives</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Discover the impactful programs transforming lives and building
            stronger communities every day.
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C89A31]" />

            <input
              type="text"
              placeholder="Search programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-200 bg-white outline-none focus:border-[#C89A31] focus:ring-4 focus:ring-[#C89A31]/10 transition-all duration-300"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#C89A31] text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#C89A31] hover:text-[#C89A31]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchTerm}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e5e0d3] shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-[#fdfbf4] hover:to-[#f6e7b5] hover:shadow-xl flex flex-col"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#C89A31]/10 text-[#C89A31] text-xs font-semibold mb-3">
                    {program.category}
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {program.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
                    {program.description}
                  </p>

                  <Link
                    to={program.slug}
                    className="group/link inline-flex items-center justify-center gap-2 w-fit px-4 py-2.5 rounded-xl font-semibold bg-yellow-50 text-[#C89A31] border border-yellow-400 hover:bg-[#C89A31] hover:text-white transition-all duration-300"
                  >
                    Learn More
                    <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              No Programs Found
            </h3>
            <p className="text-gray-600">
              Try searching with different keywords.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsFilter;
