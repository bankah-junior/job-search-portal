import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'
import { about, account, save, jobs, bluearrow } from "../../assets/index";
import { IconCard, Slider, Title } from '../../components/About';
import { Footer, Navbar } from '../../components';

const About = () => {
  return (
    <div>
      <Navbar />
      {/* Section 1 */}
      <section className="section1 w-full md:h-screen">
        <div className="relative flex flex-col items-center justify-center h-full text-center px-5 md:px-64 py-24 bg-[rgba(248,249,254,0.8)]">
          <h4 className="text-sm font-bold capitalize text-[#0071DC]">ABOUT CAREARI</h4>
          <h2 className="text-4xl md:text-6xl font-medium text-[#0a0a1b] mt-4">
            Our mission is to make <br className='hidden md:block'/> the best job market of <br className='hidden md:block'/> the world.
          </h2>
          <Link to='/post-job' className='bg-[#0071DC] text-white py-2 px-8 rounded-3xl hover:bg-black mt-10 transition-colors duration-200 ease-linear'>
            Post a Job
          </Link>
          <div className="absolute bottom-24 md:bottom-52 right-14 md:right-72 w-20 md:w-24">
            <img src={bluearrow} alt="" />
          </div>
        </div>
      </section>
      {/* End of Section 1 */}

      {/* Section 2 */}
      <section className="section2 px-5 md:px-64 relative mb-20">
        <div className='relative -top-10 md:-top-20'>
          <img src={about} alt="" />
        </div>
        <Slider />
        <div className="flex flex-col items-center justify-center h-full text-center mt-16">
          <Title heading={"OUR NUMBERS"} text1={"The Number Don&apos;t Lie About"} text2={"900+ Job"} />
          <div className="w-full flex flex-col md:flex-row justify-between mt-10 space-y-8 md:space-y-0">
            <div className="flex flex-col items-center justify-center space-y-2 md:border-r-2 border-[#7e7e7e] px-10">
              <h2 className='text-3xl font-bold'>9.0M<span className='text-[#0071DC]'>+</span></h2>
              <p className='text-[#7e7e7e] text-xl'>Job Available</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 md:border-r-2 border-[#7e7e7e] px-10">
              <h2 className='text-3xl font-bold'>187k<span className='text-[#0071DC]'>+</span></h2>
              <p className='text-[#7e7e7e] text-xl'>Jobs This Week</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 md:border-r-2 border-[#7e7e7e] px-10">
              <h2 className='text-3xl font-bold'>123k<span className='text-[#0071DC]'>+</span></h2>
              <p className='text-[#7e7e7e] text-xl'>Companies Here</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 md:border-r-2 border-[#7e7e7e] px-10">
              <h2 className='text-3xl font-bold'>9M<span className='text-[#0071DC]'>+</span></h2>
              <p className='text-[#7e7e7e] text-xl'>Candidates</p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section 2 */}

      {/* Section 3 */}
      <section className="section3 w-full md:h-screen">
        <div className="flex flex-col items-center justify-center h-full text-center px-5 md:px-64 py-24 bg-[rgba(248,249,254,0.8)]">
          <Title heading={"HOW IT WORKS?"} text1={"What Our Customers Are"} text2={"Saying About Us"} />
          <div className="flex flex-col md:flex-row mt-10 md:space-x-4 md:space-y-0 space-y-4">
            <IconCard image={<img src={account} alt="" className='w-10' />} heading={"Create An Accout"} text={"We meet customers in set place to discuss the details about needs and demands before proposing a plan."} />
            <IconCard image={<img src={jobs} alt="" className='w-10' />} heading={"Search Jobs"} text={"Our experts come up with all kinds of initiatives for delivering the best solutions for IT services chosen."} />
            <IconCard image={<img src={save} alt="" className='w-10' />} heading={"Save & Apply"} text={"Once the final plan is approved, everything will be conducted according to the agreed contract."} />
          </div>
        </div>
      </section>
      {/* End of Section 3 */}

      {/* Section 4 */}
      <section className="section4 px-0 md:px-64 py-24">
        <div className="relative flex flex-col items-center justify-center h-full text-center border-[1px] border-gray-300 rounded-xl px-5 md:px-36 py-24 md:py-28 space-y-5">
          <h2 className="text-2xl md:text-4xl font-medium text-[#0a0a1b] mt-4">
            Are You Ready To Start <br className='hidden md:block' /> Your Journey?
          </h2>
          <p className='text-base font-semibold opacity-70'>
            It is a long established fact that a reader will be distracted by the real conten of a page when looking at its layout. The point of using Lorem Ipsum is.
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-5">
            <Link to='/post-job' className='bg-[#0071DC] text-white py-3 px-8 rounded-3xl hover:bg-black mt-10 transition-colors duration-200 ease-linear'>
              Post a Featured Job
            </Link>
            <Link to='/post-job' className='bg-white border-[1px] border-[#0071DC] hover:bg-[#0071DC] hover:text-white py-3 px-8 rounded-3xl mt-5 md:mt-10 transition-colors duration-200 ease-linear'>
              Post a Free Job
            </Link>
          </div>
          <div className="absolute bottom-20 md:bottom-20 left-12 md:left-28 w-24">
            <img src={bluearrow} alt="" />
          </div>
        </div>  
      </section>
      {/* End of Section 4 */}
      <Footer />
    </div>
  )
}

export default About
