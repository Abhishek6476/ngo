import React from "react";
import Hero from "../components/Programs/Hero";
import ProgramsPage from "../components/Programs/ProgramsPage";
import AboutCTA from "../components/About/AboutCTA";
// import ProgramsOverview from "../components/Programs/ProgramsOverview";

function Program() {
  return (
    <div className="bg-gradient-to-b from-white to-yellow-50">
      <Hero />
      <ProgramsPage />
      <AboutCTA />
      {/* <ProgramsOverview/> */}
    </div>
  );
}

export default Program;
