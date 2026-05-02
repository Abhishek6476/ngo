// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

//         {/* LOGO + ABOUT */}
//         <div>
//           <h2 className="text-white text-xl font-bold mb-4">
//             NGO<span className="text-[#C89A31]">Name</span>
//           </h2>
//           <p className="text-sm leading-relaxed">
//             We are committed to empowering communities, supporting education,
//             and creating a better future for those in need.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="text-white font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="/" className="hover:text-[#C89A31]">Home</a></li>
//             <li><a href="/about" className="hover:text-[#C89A31]">About</a></li>
//             <li><a href="/programs" className="hover:text-[#C89A31]">Programs</a></li>
//             <li><a href="/gallery" className="hover:text-[#C89A31]">Gallery</a></li>
//             <li><a href="/contact" className="hover:text-[#C89A31]">Contact</a></li>
//           </ul>
//         </div>

//         {/* CONTACT INFO */}
//         <div>
//           <h3 className="text-white font-semibold mb-4">Contact</h3>
//           <p className="text-sm mb-2">📍 Delhi, India</p>
//           <p className="text-sm mb-2">📞 +91 9876543210</p>
//           <p className="text-sm">✉️ support@ngo.org</p>
//         </div>

//         {/* SOCIAL MEDIA */}
//         <div>
//           <h3 className="text-white font-semibold mb-4">Follow Us</h3>
//           <div className="flex gap-3">

//             <a className="p-2 bg-gray-800 rounded-full hover:bg-[#C89A31] transition">
//               <FaFacebookF />
//             </a>

//             <a className="p-2 bg-gray-800 rounded-full hover:bg-[#C89A31] transition">
//               <FaInstagram />
//             </a>

//             <a className="p-2 bg-gray-800 rounded-full hover:bg-[#C89A31] transition">
//               <FaLinkedinIn />
//             </a>

//             <a className="p-2 bg-gray-800 rounded-full hover:bg-[#C89A31] transition">
//               <FaTwitter />
//             </a>

//           </div>
//         </div>

//       </div>

//       {/* BOTTOM */}
//       <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
//         © {new Date().getFullYear()} NGO Name. All rights reserved.
//       </div>

//     </footer>
//   );
// };

// export default Footer;



// import logo from "../assets/logo.png";
// import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//       {/* LOGO */}
//       <div>
//         <img src={logo} alt="logo" className="h-14 mb-3 mix-blend-screen" />
//         <p className="text-gray-300 text-sm">
//           Empowering communities through impactful programs.
//         </p>
//       </div>

//       {/* LINKS */}
//       <div>
//         <h4 className="text-base font-semibold mb-3">Quick Links</h4>
//         <ul className="space-y-1 text-sm">
//            <li><a href="/" className="hover:text-[#C89A31]">Home</a></li>
//             <li><a href="/about" className="hover:text-[#C89A31]">About</a></li>
//             <li><a href="/programs" className="hover:text-[#C89A31]">Programs</a></li>
//             <li><a href="/gallery" className="hover:text-[#C89A31]">Gallery</a></li>
//             <li><a href="/contact" className="hover:text-[#C89A31]">Contact</a></li>
//         </ul>
//       </div>

//       {/* PROGRAMS */}
//       <div>
//         <h4 className="text-base font-semibold mb-3">Programs</h4>
//         <ul className="space-y-1 text-sm">
//           <li><a href="#" className="hover:text-[#C89A31]">Education</a></li>
//           <li><a href="#" className="hover:text-[#C89A31]">Health</a></li>
//           <li><a href="#" className="hover:text-[#C89A31]">Skills</a></li>
//         </ul>
//       </div>

//       {/* CONTACT */}
//       <div>
//         <h4 className="text-base font-semibold mb-3">Contact</h4>
//         <p className="text-sm text-gray-300">Delhi, India</p>
//         <p className="text-sm text-gray-300">+91 9876543210</p>
//       </div>

//     </div>

//     {/* BOTTOM */}
//     <div className="mt-6 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm gap-3">

//       <p className="text-gray-400">
//         © {new Date().getFullYear()} NGO Name
//       </p>

//       <div className="flex gap-4">
//         <a href="#" className="text-gray-400 hover:text-[#C89A31] text-xs">Privacy</a>
//         <a href="#" className="text-gray-400 hover:text-[#C89A31] text-xs">Terms</a>
//       </div>

//     </div>

//   </div>
// </footer>
//   );
// };

// export default Footer;



import logo from "../assets/logo.png";
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* LOGO + SOCIAL */}
          <div>
            <img
              src={logo}
              alt="logo"
              className="h-14 mb-3 mix-blend-screen"
            />
            <p className="text-gray-300 text-sm mb-3">
              Empowering communities through impactful programs.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              <a className="hover:text-[#C89A31]"><FaYoutube /></a>
              <a className="hover:text-[#C89A31]"><FaInstagram /></a>
              <a className="hover:text-[#C89A31]"><FaTwitter /></a>
              <a className="hover:text-[#C89A31]"><FaLinkedin /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-base font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-[#C89A31]">Home</a></li>
              <li><a href="/about" className="hover:text-[#C89A31]">About</a></li>
              <li><a href="/programs" className="hover:text-[#C89A31]">Programs</a></li>
              <li><a href="/gallery" className="hover:text-[#C89A31]">Gallery</a></li>
              <li><a href="/contact" className="hover:text-[#C89A31]">Contact</a></li>
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h4 className="text-base font-semibold mb-3">Programs</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="empowering-children-through-education" className="hover:text-[#C89A31]">Education</a></li>
              <li><a href="healthcare-for-every-family" className="hover:text-[#C89A31]">Health</a></li>
              <li><a href="women-leadership-initiative" className="hover:text-[#C89A31]">Skill Development</a></li>
              <li><a href="building-strong-communities" className="hover:text-[#C89A31]">Women Empowerment</a></li>
              <li><a href="skill-development-for-youth" className="hover:text-[#C89A31]">Skill Development</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-base font-semibold mb-3">Contact</h4>
            <p className="text-sm text-gray-300"> H-44 BSI Bulding Noida Sector-63, India</p>
            <p className="text-sm text-gray-300"> +91 9876543210</p>
            <p className="text-sm text-gray-300"> contact@ngo.org</p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-6 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <p className="text-gray-400">
            © {new Date().getFullYear()} NGO Have Faith Solutions
          </p>

          <div className="flex gap-4">
            <a href="privacyPolicy" className="text-gray-400 hover:text-[#C89A31] text-xs">Privacy</a>
            <a href="terms" className="text-gray-400 hover:text-[#C89A31] text-xs">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;