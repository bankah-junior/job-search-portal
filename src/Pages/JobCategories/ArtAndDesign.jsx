import React from 'react'
import './jobCategories.css';
import { database, project, uiux, seniorDesigner, seniorUIUXDesigner } from '../../assets/index'
import CatCard from '../../components/Category/catCard/CatCard';
import { Footer, Navbar } from '../../components';

const ArtAndDesign = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="category-hero-section w-full md:h-[40vh]">
        <div className="relative flex flex-col items-center justify-center h-full text-center px-5 md:px-64 py-24 bg-[rgba(248,249,254,0.8)]">
          <h4 className="text-sm font-bold uppercase text-[#0071DC]">JOB BY CATEGORIES</h4>
          <h2 className="text-4xl md:text-6xl font-medium text-[#0a0a1b] mt-4"> Art & Design </h2>          
        </div>
      </section>
      {/* End of Hero Section */}
      
      {/* Current Category Section */}
      <section className='px-5 md:px-64 relative mb-20 py-20'>
        <div className="w-full flex flex-col md:flex-row mb-20 md:space-x-4 space-y-4 md:space-y-0">
          <CatCard image={<img src={database} alt='' />} title={"Database Administrator"} />
        </div>
        <div>
          <h2 className='mb-10 text-3xl font-semibold md:text-4xl md:font-bold'>More From Other Categories</h2>
          <div className="w-full flex flex-col md:flex-row mb-4 md:space-x-4 space-y-4 md:space-y-0">
            <CatCard image={<img src={seniorDesigner} alt='' />} title={"Online English Teachers"} vacancyNum='7' imgBg='bg-[#4c48d9]' />
            <CatCard image={<img src={database} alt='' />} title={"Database Administrator"} />
          </div>
          <div className="w-full flex flex-col md:flex-row mb-4 md:space-x-4 space-y-4 md:space-y-0">
            <CatCard image={<img src={project} alt='' />} title={"IT Project Manager"} vacancyNum='6' imgBg='bg-[#47586d]' />
            <CatCard image={<img src={uiux} alt='' />} title={"Jenior UI/UX Designer"} vacancyNum='5' imgBg='bg-black' />
          </div>
          <div className="w-full flex flex-col md:flex-row mb-4 md:space-x-4 space-y-4 md:space-y-0">
            <CatCard image={<img src={seniorUIUXDesigner} alt='' />} title={"AI/Machine Learning Engineer"} vacancyNum='6' imgBg='bg-[#93d8de]' />
            <CatCard image={<img src={seniorDesigner} alt='' />} title={"SEO Analiyst & Reviewer"} vacancyNum='1' imgBg='bg-[#4c48d9]' />
          </div>
        </div>
      </section>
      {/* End of Current Category Section */}
      
      {/* Next Category Section */}
      <section className='px-5 md:px-64 relative mb-20'></section>
      {/* End of Next Category Section */}
      <Footer />
    </div>
  )
}

export default ArtAndDesign