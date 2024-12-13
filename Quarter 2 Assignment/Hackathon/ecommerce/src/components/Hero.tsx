import React from 'react'
import Image from 'next/image'
const hero = () => {
  return (
    <div>
        <div className='flex'>
          <Image src="/banner.jpg" alt='alert' width={1440} height={28} />
        </div>
    <div className="flex justify-center items-center">
  <h1 className="font-poppins font-bold text-[32px] w-[300px] h-[32px] text-center mt-[45] text-[#333333]">Browse The Range</h1>
  </div>
    <div className="flex justify-center items-center mt-[20] text-[#666666]"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>

        <div className='mt-[50px] ml-[10px] mr-[10px] flex justify-center items-center gap-4'>
            <Image src="/dining.png" alt='dining room' width={381} height={480} className='w-[381px] h-[480px]'/> 
            <Image src="/living room.png" alt='dining room' width={381} height={480} className='w-[381px] h-[480px]'/>
            <Image src="/bedroom.png" alt='dining room' width={381} height={480} className='w-[381px] h-[480px]'/>
        </div>
        <div className='flex gap-x-40 justify-evenly ml-[17px] pt-[25px]'>
            <h3 className='font-Poppins font-600 font-bold w-[79px] h-[36px]'>Dining</h3>
            <h3 className='font-Poppins font-600 font-bold w-[79px] h-[36px]'>Living room</h3>
            <h3 className='font-Poppins font-600 font-bold w-[79px] h-[36px]'>Bedroom room</h3>
        </div>

        <div className="flex justify-center items-center">
  <h1 className="font-poppins font-bold text-[32px] w-[300px] h-[32px] text-center mt-[45] text-[#333333]">Our Products</h1>
  </div>
        <div className='mt-[50px] ml-[10px] mr-[10px] flex justify-center items-center gap-4'>
            <Image src="/dining.png" alt='dining room' width={381} height={480} className='w-[381px] h-[480px]'/>
            <Image src="/living room.png" alt='dining room' width={381} height={480} className='w-[381px] h-[480px]'/>
            <Image src="/bedroom.png" alt='dining room' width={381} height={480} className='w-[381px] h-[480px]'/>
        </div>


</div>

  )
}

export default hero;
