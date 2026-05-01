// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/about" },
//     { name: "Programs", link: "/programs" },
//     { name: "Gallery", link: "/gallery" },
//     { name: "Blog", link: "/blog" },
//     { name: "Contact", link: "/contact" },
//   ];

//   return (
//     <nav className="fixed  left-1/2 -translate-x-1/2 w-[100%] max-w-6xl z-50  bg-yellow-100 shadow-md">
      
//       <div className="px-4 sm:px-6">
//         <div className="flex items-center h-16">

//           {/* LOGO */}
//           <div className="flex-shrink-0">
//             <a href="/" className="flex items-center">
//              <img src={logo} alt="logo" className="h-10 sm:h-12" />
//             </a>
//           </div>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
//             {navLinks.map((item, i) => (
//               <a
//                 key={i}
//                 href={item.link}
//                 className="text-sm font-medium text-gray-700 hover:text-[#F5A623] transition"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           {/* DONATE BUTTON */}
//           <div className="hidden md:flex items-center">
//             <a
//               href="/donate"
//               className="bg-[#F3B10C] text-gray-900 px-5 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-[#D49A0A] transition active:scale-95"
//             >
//               Donate Now
//             </a>
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden ml-auto p-2 text-gray-700 hover:bg-yellow-50 rounded-lg"
//           >
//             {menuOpen ? <X /> : <Menu />}
//           </button>

//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl border-t border-gray-100">
          
//           <div className="flex flex-col px-5 py-6 space-y-5">

//             {navLinks.map((item, i) => (
//               <a
//                 key={i}
//                 href={item.link}
//                 className="text-base font-semibold text-gray-700 hover:text-[#F5A623]"
//               >
//                 {item.name}
//               </a>
//             ))}

//             {/* DONATE BUTTON MOBILE */}
//             <a
//               href="/donate"
//               className="w-full bg-[#F3B10C] text-gray-900 py-3 rounded-xl text-center font-bold shadow-md active:scale-95"
//             >
//               Donate Now
//             </a>

//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Programs", link: "/programs" },
    { name: "Gallery", link: "/gallery" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-yellow-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="logo"
                className="h-10 sm:h-12 w-auto"
              />
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="text-sm font-medium text-gray-700 hover:text-[#C89A31] transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* DONATE BUTTON */}
          <div className="hidden md:block">
            <a
              href="/donate"
              className="bg-[#C89A31] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#a67c25] transition"
            >
              Donate Now
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-4 py-5 space-y-4">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="block text-gray-700 font-medium hover:text-[#C89A31] transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="/donate"
              className="block w-full text-center bg-[#C89A31] text-white py-3 rounded-lg font-semibold hover:bg-[#a67c25] transition"
              onClick={() => setMenuOpen(false)}
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;