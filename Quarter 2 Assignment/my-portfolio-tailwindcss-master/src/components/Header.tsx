import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#6b1dfcd0]/50 bg-[#00000017] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Hasan Rafay
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#10ea5961] bg-[#0014075e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 ">
            <a href="/" className="hover:text-green-300 cursor-pointer ">
              About me
            </a>
            <a href={"/myservices"} className="hover:text-green-300 cursor-pointer">
            Services
            </a>
            <a href="/portfolio" className="hover:text-green-300 cursor-pointer">
            Portfolio
            </a>
            <a href="/contact" className="hover:text-green-300 cursor-pointer">
            Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
