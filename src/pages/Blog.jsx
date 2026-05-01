import React from 'react'
import Hero from "../components/Blog/hero";
// import FeaturedArticle from "../components/Blog/FeaturedArticle";
import ProgramsFilter from "../components/Blog/ProgramsFilter";
// import NewsletterSection from "../components/Blog/NewsletterSection";

function Blog() {
  return (
    <div className='bg-gradient-to-b from-white to-yellow-50'>

     <Hero/>
     {/* <FeaturedArticle/> */}
     <ProgramsFilter/>
     {/* <NewsletterSection/> */}
    </div>
  )
}

export default Blog