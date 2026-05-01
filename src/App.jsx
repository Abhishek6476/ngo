// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";



// // function App() {
// //   return (
// //     <BrowserRouter>
// //       {/* Full height container */}
// //       <div className="flex flex-col min-h-screen">
        
// //         <Navbar />

// //         {/* Main content will expand */}
// //         <main className="flex-grow">
// //           <Routes>
        

// //           </Routes>
// //         </main>

// //         <Footer />

// //       </div>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // PAGES
// import Home from "./pages/home";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="flex flex-col min-h-screen">
        
//         {/* NAVBAR */}
//         <Navbar />

//         {/* MAIN CONTENT */}
//         <main className="flex-grow">
//           <Routes>

//             {/* HOME ROUTE */}
//             <Route path="/" element={<Home />} />

//           </Routes>
//         </main>

//         {/* FOOTER */}
//         <Footer />

//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/home";
import GalleryPage from "./pages/GalleryPage";
// import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import Program from "./pages/Program";
import Blog from "./pages/Blog";
import Contactpage from "./pages/Contactpage";
import Donate from "./pages/Donate";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-grow ">
          <Routes>

            {/* HOME ROUTE */}
            <Route path="/" element={<Home />} />
             <Route path="/gallery" element={<GalleryPage />} />
             {/* <Route path="/contact" element={<Contact />} /> */}
             <Route path="/about" element={<AboutPage />} />
             <Route path="/programs" element={<Program />} />
             <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contactpage />} />
               <Route path="/donate" element={<Donate />} />

          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;