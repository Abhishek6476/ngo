import React from 'react'
import Hero from "../components/Contact/Hero";
import ContactPageSections from "../components/Contact/ContactPageSections";
import ContactSection from "../components/Contact/ContactSection";
import ContactFAQ from "../components/Contact/ContactFAQ";
import ContactMap from "../components/Contact/ContactMap";

function Contactpage() {
  return (
    <div className='bg-gradient-to-b from-white to-yellow-50'>

     <Hero/>
     {/* <ContactPageSections/> */}
     <ContactSection/>
     <ContactFAQ/>
     <ContactMap/>
    </div>
  )
}

export default Contactpage