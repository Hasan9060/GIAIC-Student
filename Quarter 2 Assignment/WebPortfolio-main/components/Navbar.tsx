import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          { <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="w-full h-full object-contain rounded-full"
          /> }
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Hasan Rafay{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Portfolio{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
      <Link href="https://github.com/Hasan9060">
  <Image
    src="/github.png"
    alt="logo"
    width={40}
    height={40}
  />
</Link>
<Link href="https://www.linkedin.com/in/hasanrafay/">
  <Image
    src="/linkedin.png"
    alt="logo"
    width={40}
    height={40}
  />
</Link>
<Link href="https://chat.whatsapp.com/Dbjope0Q2P18wnybl2P4V7">
  <Image
    src="/whatsapp.png"
    alt="logo"
    width={40}
    height={40}
  />
</Link>
            
      </div>
    </div>
  );
};

export default Navbar;
