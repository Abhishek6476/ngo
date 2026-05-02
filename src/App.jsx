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
import EducationProgramPage from "./pages/EducationProgramPage";
import HealthcareProgramPage from "./pages/HealthcareProgramPage";
import WomenLeadershipInitiative from "./pages/WomenLeadershipInitiative";
import CommunityProgramPage from "./pages/CommunityProgramPage";
import EmergencyDisasterSupportPage from "./pages/EmergencyDisasterSupportPage";
import SkillDevelopmentForYouthPage from "./pages/SkillDevelopmentForYouthPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

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
            <Route
              path="/empowering-children-through-education"
              element={<EducationProgramPage />}
            />
            <Route
              path="/healthcare-for-every-family"
              element={<HealthcareProgramPage />}
            />
            <Route
              path="/women-leadership-initiative"
              element={<WomenLeadershipInitiative />}
            />
            <Route path="/building-strong-communities" element={<CommunityProgramPage />} />
            <Route path="/emergency-disaster-support" element={<EmergencyDisasterSupportPage />} />
            <Route path="/skill-development-for-youth" element={<SkillDevelopmentForYouthPage />} />
             <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
