import React from 'react'

import img1 from '../images/img1.png'

const About = () => {
  return (
    <>  
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="lg:w-10/12 w-full font-['Libre_Caslon_Display']">
                <h2 className="w-full font-bold text-[4.6rem] text-gray-800 mt-2">We make your authenticity and uniqueness come on the surface by making a high-quality product</h2>
                <p className="font-normal text-[1.8rem] text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</p>
            </div>   
            <div className="lg:mt-14 sm:mt-10 mt-12">
                <img className="lg:block hidden w-full" src={img1} alt="Personal Branding" />
            </div>   
            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12 font-['Libre_Caslon_Display']">
                    <h2 className="font-bold text-[2rem] text-gray-800">Our Story</h2>
                    <p className="font-normal text-[1.2rem] text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    <p className="font-normal text-[1.2rem] text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2">
                    <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
                </div>
            </div>
        </div>
        <div class="container bg-[#fff] mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>     
              <div class="mb-8 flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-[#adb898] shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div class="order-1 bg-[#B3A9A2] rounded-lg shadow-xl w-5/12 px-6 py-4 font-['Libre_Caslon_Display']">
                  <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                  <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>  
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-[#adb898] shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div class="order-1 bg-[#B3A9A2] rounded-lg shadow-xl w-5/12 px-6 py-4 font-['Libre_Caslon_Display']">
              <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>    
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-[#adb898] shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div class="order-1 bg-[#B3A9A2] rounded-lg shadow-xl w-5/12 px-6 py-4 font-['Libre_Caslon_Display']">
              <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>         
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-[#adb898] shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div class="order-1 bg-[#B3A9A2] rounded-lg shadow-xl w-5/12 px-6 py-4 font-['Libre_Caslon_Display']">
              <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
