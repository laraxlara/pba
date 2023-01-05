import React from 'react';
import image from '../images/imgA.jpg';

const AboutUs = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12 font-['Libre_Caslon_Display']">
        <div className="max-w-screen-xl px-4 md:px-8 mx-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="h-60 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                <img src={image} className="w-full h-full object-cover object-center" alt="/" />
              </div>
            </div>
            <div className="md:pt-2">
              <p className="text-[#B3A9A2] text-[2.5rem] lg:text-[3rem] font-bold text-center md:text-left">Be different, be authentic, be yourself</p>
              <h5 className="text-[#5e5e5e] text-2xl sm:text-[1.5rem] font-bold text-center md:text-left mb-4 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus nisi massa, eu pellentesque mauris consectetur vel.</h5>
              <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus nisi massa, eu pellentesque mauris consectetur vel. Maecenas congue arcu cursus odio vulputate maximus. Maecenas mollis enim euismod neque vulputate vestibulum. Nulla tincidunt faucibus neque, non vestibulum nisl blandit non. Donec maximus dapibus ex. Maecenas pellentesque tortor condimentum ultricies fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sagittis magna ac porta mattis. In elit turpis, volutpat ut tempus nec, rutrum in est. </p>
              <a href="/" className="inline-block bg-[#B3A9A2] hover:bg-[#736962] active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
