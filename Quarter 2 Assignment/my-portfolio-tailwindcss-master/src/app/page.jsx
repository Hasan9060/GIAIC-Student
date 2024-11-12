import Image from "next/image";
import shehzad from '../../public/images/HasanRafay.png';
import Link from "next/link";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen px-6 lg:px-20 text-gray-100">
  
      {/* Text Section */}
      <div className="flex flex-col items-start lg:w-1/2 lg:gap-8 gap-5 mt-20 lg:mt-32 lg:mx-12 text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-bold text-white uppercase leading-tight">
          Delivering an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">exceptional project </span> journey
        </h1>
        <p className="text-lg text-gray-400 my-5 max-w-[600px]">
          Hey, I'm <span className="font-bold"> Hasan Rafay </span>, a dedicated full-stack web developer with a passion for creating dynamic, user-focused websites and applications. Explore my projects to see the innovative solutions I’ve built, and check out my skills to discover the tools and technologies I use to bring ideas to life.
        </p>
        <div className="flex justify-center w-full">
          <button className="bg-yellow-500 hover:bg-pink-700 text-black py-2 px-8 rounded-full mt-4 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <Link href='/contact'>Hire Me</Link>
          </button>
        </div>
        {/* Optional: Animated Overlay */}
        <div>
            <Stats />
           </div>
      </div>
      

      {/* Image Section */}
      <div className="relative lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="transform hover:scale-105 transition-all duration-500 lg:w-[420px] md:w-[370px] w-[300px] lg:h-[420px] md:h-[370px] h-[300px] flex items-center justify-center">
          {/* Fixed width and height for Image */}
          <Image
            className="transform transition-all duration-[4s] hover:scale-110"
            src={shehzad}
            alt="HasanRafay"
            width={420}   // Set fixed width
            height={420}  // Set fixed height
            objectFit="cover"
          />
          {/* Optional: Animated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100 transition-all duration-700"></div>
        </div>
             </div>
             
      </div>   
    
  );
}
