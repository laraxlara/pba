import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/LOGO.png';

import { AiOutlineClose } from 'react-icons/ai';

import '../styles/Header.css'

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setNavbar(!navbar);

  return (
    <>
      <div className="bg-white pb-none sm:pb-none lg:pb-none">
        <div className="max-w-screen-2xl px-none md:px-20 mx-auto">
          <header className="flex justify-between items-center py-2 md:py-4 mb-4 md:mb-8 xl:mb-0">
            <Link to="/">
              <img src={logo} className="inline-flex items-center w-[250px]" alt="/" />
            </Link>
            <nav className="hidden lg:flex gap-12">
              <Link to='/' className="text-[#B3A9A2] text-[1.4rem] font-semibold font-['Libre_Caslon_Display']">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-[#B3A9A2] active:text-[#B3A9A2] text-[1.4rem] font-light font-['Libre_Caslon_Display'] transition duration-100">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-[#B3A9A2] active:text-[#B3A9A2] text-[1.4rem] font-light font-['Libre_Caslon_Display'] transition duration-100">Contact</Link>
            </nav>
            <div className="md:hidden">
              {!navbar ? (
                <button type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-[#B3A9A2]-300 text-gray active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2" onClick={handleClick}>
                  Menu
                </button>
              ) : (
                <AiOutlineClose className="w-20 text-[2rem]" onClick={handleClick} />
              )}
            </div>
          </header>
        </div>
        <ul
          className={
            !navbar ? 'hidden' : 'absolute bg-white w-[50%] h-screen right-0 px-8 transition-[2s]'
          }>
          <Link to='/' className="my-8 text-[1.6rem]">Home</Link>
          <Link to='/about' className="my-6 text-[1.6rem]">About</Link>
          <Link to='/contact' className="my-6 text-[1.6rem]">Contact</Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
