import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import donateBg from "../../assets/campaign3.jpg";

const DonatePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Show popup immediately after page loads
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleDonate = () => {
    setIsOpen(false);
    navigate("/donate");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Popup */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                <FaTimes />
              </button>

              {/* Top Section */}
              <div className="relative h-52">
                <img
                  src={donateBg}
                  alt="Donate"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                    <FaHeart className="text-3xl animate-pulse" />
                  </div>

                  <h2 className="mb-2 text-3xl font-bold">
                    Make a Difference
                  </h2>

                  <p className="text-sm text-white/95 md:text-base">
                    Your kindness can transform lives forever.
                  </p>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="p-6 text-center">
                <p className="mb-6 leading-relaxed text-gray-600">
                  Support education, healthcare, and hope for families in need.
                  Every contribution creates a lasting impact.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={handleDonate}
                    className="flex-1 rounded-xl bg-[#C89A31] py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#B88728]"
                  >
                    Donate Now
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 transition-all duration-300 hover:border-[#C89A31] hover:text-[#C89A31]"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DonatePopup;