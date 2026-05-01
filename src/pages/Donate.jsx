import React from 'react'
import Hero from "../components/Donate/Hero";
import DonationMethods from "../components/Donate/DonationMethods";
import DonationImpact from "../components/Donate/DonationImpact";

function Donate() {
  return (
    <div className='bg-gradient-to-b from-white to-yellow-50'>

    <Hero/>
    <DonationMethods/>
    <DonationImpact/>
    </div>
  )
}

export default Donate