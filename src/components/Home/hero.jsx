

import { useEffect, useState } from "react";

// IMPORT IMAGES
import img1 from "../../assets/ngo1.png";
import img2 from "../../assets/ngo2.png";
import img3 from "../../assets/ngo3.png";
import img4 from "../../assets/ngo2.png";

const images = [img1, img2, img3, img4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] sm:h-[60vh] md:h-screen overflow-hidden">

      {/* SLIDER IMAGES */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="hero"
          className={`absolute w-full object-cover transition-all duration-[4000ms] ease-in-out 
          ${index === current ? "opacity-100 scale-110" : "opacity-0 scale-100"}`}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

    </div>
  );
};

export default Hero;