

import { useEffect, useState } from "react";

import img1 from "../../assets/gallery1.jpg";
import img2 from "../../assets/gallery2.jpg";
import img3 from "../../assets/gallery3.jpg";
import img4 from "../../assets/gallery4.jpg";
import img5 from "../../assets/gallery5.jpg";
import img6 from "../../assets/gallery6.jpg";
import img7 from "../../assets/gallery1.jpg";
import img8 from "../../assets/gallery2.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

export default function NGOGallerySlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const total = images.length;
    let offset = index - activeIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (Math.abs(offset) > 2) {
      return {
        opacity: 0,
        transform: "scale(0)",
        zIndex: 0,
      };
    }

    return {
      transform: `
        translateX(${offset * 210}px)
        scale(${offset === 0 ? 1.12 : 0.88})
        rotateY(${offset * -25}deg)
      `,
      opacity: offset === 0 ? 1 : 0.65,
      zIndex: 20 - Math.abs(offset),
    };
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-yellow-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
        {/* Top Line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {/* <hr className="w-16 border-[#C89A31]" />
          <h4 className="text-[#C89A31] italic text-sm md:text-base tracking-wide">
            HAVE FAITH SOLUTION
          </h4>
          <hr className="w-16 border-[#C89A31]" /> */}
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
          Our Journey of{" "}
          <span className="text-[#C89A31]">Hope & Impact</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Every image tells a story of compassion, transformation,
          and the lives we continue to uplift together.
        </p>
      </div>

      <div className="relative h-[280px] max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center [perspective:2000px]">
          {images.map((image, index) => (
            <div
              key={index}
              style={getCardStyle(index)}
              className="absolute w-[190px] h-[240px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}