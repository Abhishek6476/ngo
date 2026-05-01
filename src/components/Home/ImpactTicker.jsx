
import { FaHeart, FaHandsHelping, FaStar } from "react-icons/fa";

const ImpactTicker = () => {
  const messages = [
    "Empowering Children Through Education",
    "Healthcare For Every Family",
    "Supporting Women Independence",
    "Building Stronger Communities",
    "Creating Hope For Tomorrow",
    "Together We Can Change Lives",
    "Have Faith Solution Donate",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#C89A31] via-[#D8A93A] to-[#C89A31] py-3 shadow-lg">
      
      {/* subtle glow */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 right-10 w-40 h-40 bg-yellow-200/20 rounded-full blur-3xl animate-pulse" />

      {/* ticker */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...messages, ...messages].map((text, index) => (
          <div
            key={index}
            className="flex items-center shrink-0 text-white font-semibold tracking-wide text-xs md:text-sm"
          >
            <FaHeart className="mx-5 text-white/90 animate-pulse" />
            <span className="mx-4">{text}</span>
            <FaStar className="mx-5 text-yellow-100 animate-spin-slow" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactTicker;