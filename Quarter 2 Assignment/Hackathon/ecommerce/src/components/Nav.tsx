import React from 'react'
import Image from 'next/image'
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';
const Nav = () => {
  return (
    <div>
      <div className='bg-white'>
        <header className='flex justify-between items-center px-4 py-4 md:px-8 lg:px-16 shadow-md'>
        <div className="flex items-center font-bold text-2xl text-gray-800">
  {/* Logo Image */}
  <Image 
    src="/house logo.png" 
    alt="Furniro" 
    width={47} 
    height={25} 
    className="mr-2" // Adds spacing between the image and text
  />
  
  {/* Logo Text */}
  <span className="mt-1">Furniro</span>
  <nav className="hidden md:flex space-x-8 ml-[300px]">
      <ul className="flex w-[430px] h-[24px] gap-[48px]">
          <Link href={"/"}>
            <li className='font-poppins text-[16px] text-gray-700 font-[500px] w-[48px] h-[24px] text-center hover:text-yellow-500'>Home</li>
          </Link>
          <Link href={"/shop"}>
            <li className='font-poppins text-[16px] text-gray-700 font-[500px] w-[48px] h-[24px] text-center hover:text-yellow-500'>Shop</li>
          </Link>
          <Link href={""}>
            <li className='font-poppins text-[16px] text-gray-700 font-[500px] w-[48px] h-[24px] text-center hover:text-yellow-500'>Blog</li>
          </Link>
          <Link href={'/Contact'}>
            <li className='font-poppins text-[16px] text-gray-700 font-[500px] w-[48px] h-[24px] text-center hover:text-yellow-500'>Contact</li>
      
          </Link>
        </ul>
    </nav>

      <div className='ml-[40px] flex gap-6 justify-evenly'>
        <Image src="/alert.png" alt='alert' width={28} height={28} />
      <IoSearchOutline className='w-[28px] h-[28px]'/>
      <CiHeart className='w-[30px] h-[30px]'/>
      <AiOutlineShoppingCart className='w-[30px] h-[30px]' />

      </div>
</div>
        </header>
        

      

</div>
</div>
  )
}

export default Nav
