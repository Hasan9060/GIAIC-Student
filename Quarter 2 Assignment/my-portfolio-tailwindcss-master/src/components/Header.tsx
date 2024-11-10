'use client';
import React, { useState } from 'react';

import Link from 'next/link'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className='flex justify-between'>
      <div >
          <div id='logo' className=" z-10 lg:w-[220px] md:w-[150px] w-[120px] h-[100px] lg:h-[200px] md:h-[130px] flex justify-center items-center absolute lg:-top-20 md:-top-12 -top-9  lg:-left-5 md:-left-4 -left-3 bg-gradient-to-r from-[#e90074] to-[#660088] rounded-br-[100%] rounded-bl-[120px]">
          <h1 className="lg:text-5xl md:text-4xl text-3xl lg:mt-12 md:mt-9 mt-5 font-bold">HR</h1>
          </div>
        </div>
        
        <nav className='py-10 px-80 md:block hidden'>
            <ul className='flex gap-16 text-[18px]'>
                <li className='active'>
                    <Link href={"/"}>About Me</Link>
                </li>
                <li>
                    <Link href={"/myservices"}>My Services</Link>
                </li>
                <li>
                    <Link href={"/portfolio"}>Portfolio</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact Me</Link>
                </li>
            </ul>
        </nav>
        
        <button
            className="md:hidden hover:bg-transparent hover:text-[#00e91f] inline-flex items-center justify-center p-2 rounded text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger icon */}
            <svg
              className={`z-10 w-8 h-8 ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

            {/* Close icon */}
            <svg
              className={`z-10 w-8 h-8 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
    </header>
    {isMenuOpen && (
          <div id='toggleNavbar' className="md:hidden my-4 absolute top-0 w-full text-xl bg-[#1c1c1c] bg-opacity-[0.9]  text-white flex flex-col items-center ml-3 space-y-2 py-2">
            <Link className='hover:text-[#e90074]' href="/"  onClick={toggleMenu}> 
                <h1>About</h1>
            </Link>
            <Link className='hover:text-[#e90074]' href="/myservices" onClick={toggleMenu}>
            <h1>My Services</h1>
            </Link>
            <Link className='hover:text-[#e90074]' href="/portfolio" onClick={toggleMenu}>
             <h1>Portfolio</h1>
            </Link>
            <Link className='hover:text-[#e90074]' href="/contact" onClick={toggleMenu}>
             <h1>Contact Me</h1>
            </Link>
            
          </div>
        )}
    </>
  )
}

export default Header
