// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // Images
// import img1 from "../../assets/gallery1.jpg";
// import img2 from "../../assets/gallery2.jpg";
// import img3 from "../../assets/gallery3.jpg";
// import img4 from "../../assets/gallery4.jpg";
// import img5 from "../../assets/gallery5.jpg";
// import img6 from "../../assets/gallery6.jpg";

// const galleryItems = [
//   {
//     id: 1,
//     image: img1,
//     category: "Education",
//     title: "Empowering Young Minds",
//   },
//   {
//     id: 2,
//     image: img2,
//     category: "Healthcare",
//     title: "Health Camp Initiative",
//   },
//   {
//     id: 3,
//     image: img3,
//     category: "Women Empowerment",
//     title: "Building Stronger Women",
//   },
//   {
//     id: 4,
//     image: img4,
//     category: "Community",
//     title: "Community Development Drive",
//   },
//   {
//     id: 5,
//     image: img5,
//     category: "Education",
//     title: "Learning Beyond Classrooms",
//   },
//   {
//     id: 6,
//     image: img6,
//     category: "Healthcare",
//     title: "Medical Support for All",
//   },
// ];

// const categories = [
//   "All",
//   "Education",
//   "Healthcare",
//   "Women Empowerment",
//   "Community",
// ];

// const GallerySection = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedImage, setSelectedImage] = useState(null);

//   const filteredImages =
//     activeCategory === "All"
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === activeCategory);

//   const currentIndex = selectedImage
//     ? filteredImages.findIndex((img) => img.id === selectedImage.id)
//     : 0;

//   const nextImage = () => {
//     const nextIndex = (currentIndex + 1) % filteredImages.length;
//     setSelectedImage(filteredImages[nextIndex]);
//   };

//   const prevImage = () => {
//     const prevIndex =
//       (currentIndex - 1 + filteredImages.length) %
//       filteredImages.length;
//     setSelectedImage(filteredImages[prevIndex]);
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-white to-yellow-50 py-20">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <hr className="w-16 border-[#C89A31]" />
//             <h4 className="text-[#C89A31] italic text-sm md:text-base">
//               OUR GALLERY
//             </h4>
//             <hr className="w-16 border-[#C89A31]" />
//           </div>

//           <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
//             Capturing
//             <span className="text-[#C89A31]"> Impact</span>
//           </h1>

//           <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
//             Explore the moments that define our mission, celebrate our impact,
//             and inspire positive change in communities everywhere.
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-14">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-[#C89A31] text-white shadow-lg"
//                   : "bg-white text-gray-700 hover:bg-[#C89A31] hover:text-white"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Gallery Grid */}
//         <motion.div
//           layout
//           className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
//         >
//           <AnimatePresence>
//             {filteredImages.map((item, index) => (
//               <motion.div
//                 layout
//                 key={item.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.08 }}
//                 className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-3xl shadow-lg"
//                 onClick={() => setSelectedImage(item)}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

//                 <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition duration-500">
//                   <span className="inline-block px-3 py-1 bg-[#C89A31] text-white text-xs rounded-full mb-3">
//                     {item.category}
//                   </span>

//                   <h3 className="text-white text-xl font-bold">
//                     {item.title}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-6 right-6 text-white text-3xl z-50"
//             >
//               <FaTimes />
//             </button>

//             <button
//               onClick={prevImage}
//               className="absolute left-4 md:left-8 text-white text-2xl md:text-4xl z-50"
//             >
//               <FaChevronLeft />
//             </button>

//             <motion.img
//               key={selectedImage.id}
//               src={selectedImage.image}
//               alt={selectedImage.title}
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
//             />

//             <button
//               onClick={nextImage}
//               className="absolute right-4 md:right-8 text-white text-2xl md:text-4xl z-50"
//             >
//               <FaChevronRight />
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default GallerySection;



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Images
import img1 from "../../assets/gallery1.jpg";
import img2 from "../../assets/gallery2.jpg";
import img3 from "../../assets/gallery3.jpg";
import img4 from "../../assets/gallery4.jpg";
import img5 from "../../assets/gallery5.jpg";
import img6 from "../../assets/gallery6.jpg";

const galleryItems = [
  {
    id: 1,
    image: img1,
    category: "Education",
    title: "Empowering Young Minds",
  },
  {
    id: 2,
    image: img2,
    category: "Healthcare",
    title: "Health Camp Initiative",
  },
  {
    id: 3,
    image: img3,
    category: "Women Empowerment",
    title: "Building Stronger Women",
  },
  {
    id: 4,
    image: img4,
    category: "Community",
    title: "Community Development Drive",
  },
  {
    id: 5,
    image: img5,
    category: "Education",
    title: "Learning Beyond Classrooms",
  },
  {
    id: 6,
    image: img6,
    category: "Healthcare",
    title: "Medical Support for All",
  },
];

const categories = [
  "All",
  "Education",
  "Healthcare",
  "Women Empowerment",
  "Community",
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  const currentIndex = selectedImage
    ? filteredImages.findIndex(
        (img) => img.id === selectedImage.id
      )
    : 0;

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) %
      filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <hr className="w-16 border-[#C89A31]" />
            <h4 className="text-[#C89A31] italic text-sm md:text-base">
              OUR GALLERY
            </h4>
            <hr className="w-16 border-[#C89A31]" />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Capturing
            <span className="text-[#C89A31]"> Impact</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Explore the moments that define our mission, celebrate our
            impact, and inspire positive change in communities
            everywhere.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#C89A31] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-[#C89A31] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-3xl shadow-lg"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition duration-500">
                  <span className="inline-block px-3 py-1 bg-[#C89A31] text-white text-xs rounded-full mb-3">
                    {item.category}
                  </span>

                  <h3 className="text-white text-xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl z-50 hover:text-[#C89A31] transition"
            >
              <FaTimes />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 text-white text-2xl md:text-4xl z-50 hover:text-[#C89A31] transition"
            >
              <FaChevronLeft />
            </button>

            <motion.img
              key={selectedImage.id}
              src={selectedImage.image}
              alt={selectedImage.title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            />

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 text-white text-2xl md:text-4xl z-50 hover:text-[#C89A31] transition"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;