// // import heroImg from "../assets/ngo1.jpg"; // apna image yaha use karo

// // const Hero = () => {
// //   return (
// //     <div className="relative w-full h-screen overflow-hidden">

// //       {/* BACKGROUND IMAGE */}
// //       <img
// //         src={heroImg}
// //         alt="hero"
// //         className="w-full h-full object-cover scale-[1.01]"
// //       />

// //       {/* OVERLAY (optional dark effect) */}
// //       <div className="absolute inset-0 bg-black/20"></div>

// //       {/* CONTENT (BOTTOM LEFT) */}
// //       <div className="absolute bottom-16 md:bottom-20 left-6 md:left-20 z-20 flex flex-col gap-4">

// //         {/* HEADING */}
// //         <h1 className="text-white text-2xl md:text-4xl font-bold max-w-xl leading-tight">
// //           Empowering Lives, Building a Better Future
// //         </h1>

// //         {/* BUTTONS */}
// //         <div className="flex gap-3 flex-wrap">

// //           {/* DONATE BUTTON */}
// //           <button className="flex items-center gap-2 text-[13px] font-semibold px-4 py-2 rounded-md border border-gray-100 bg-[#F3B10C] text-black hover:scale-105 transition">
// //             💛 Donate Now
// //           </button>

// //           {/* ABOUT BUTTON */}
// //           <a
// //             href="/about"
// //             className="flex items-center gap-2 text-[13px] font-semibold px-4 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
// //           >
// //             ➤ View About Us
// //           </a>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;



// import { useEffect, useState } from "react";

// // IMPORT IMAGES
// import img1 from "../assets/ngo1.png";
// import img2 from "../assets/ngo2.png";
// import img3 from "../assets/ngo3.png";
// import img4 from "../assets/ngo2.png";

// const images = [img1, img2, img3, img4];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);

//   // AUTO SLIDE
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000); // 4 sec

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">

//       {/* SLIDER IMAGES */}
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           alt="hero"
//           className={`absolute w-full h-full object-cover transition-all duration-[4000ms] ease-in-out 
//           ${index === current ? "opacity-100 scale-110" : "opacity-0 scale-100"}`}
//         />
//       ))}

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* CONTENT */}
//       <div className="absolute bottom-16 md:bottom-20 left-6 md:left-20 z-20 flex flex-col gap-4">

//         {/* <h1 className="text-white text-2xl md:text-4xl font-bold max-w-xl leading-tight">
//           Empowering Lives, Building a Better Future
//         </h1> */}

//         <div className="flex gap-3 flex-wrap">

//           {/* DONATE BUTTON */}
//           <button className="flex items-center gap-2 text-[13px] font-semibold px-4 py-2 rounded-md border border-[#C89A31] bg-[#C89A31] text-white hover:bg-[#a67c25] transition">
//             💛 Donate Now
//           </button>

//           {/* ABOUT BUTTON */}
//           <a
//             href="/about"
//             className="flex items-center gap-2 text-[13px] font-semibold px-4 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
//           >
//             ➤ View About Us
//           </a>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import { useEffect, useState } from "react";

// // IMPORT IMAGES
// import img1 from "../assets/ngo1.png";
// import img2 from "../assets/ngo2.png";
// import img3 from "../assets/ngo3.png";
// import img4 from "../assets/ngo2.png";

// const images = [img1, img2, img3, img4];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden ">

//       {/* SLIDER IMAGES */}
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           alt="hero"
//           className={`absolute w-full  object-cover transition-all duration-[4000ms] ease-in-out 
//           ${index === current ? "opacity-100 scale-110" : "opacity-0 scale-100"}`}
//         />
//       ))}

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-black/30"></div>

//     </div>
//   );
// };

// export default Hero;







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
    <div className="relative w-full h-screen overflow-hidden ">

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