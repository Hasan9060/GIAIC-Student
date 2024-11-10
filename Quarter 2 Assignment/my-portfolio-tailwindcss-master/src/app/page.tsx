import Image from "next/image";
import shehzad from '../../public/images/HasanRafay.png';
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen px-6 lg:px-20 text-gray-100">
      
      {/* Text Section */}
      <div className="flex flex-col items-start lg:w-1/2 lg:gap-8 gap-5 mt-20 lg:mt-32 lg:mx-12 text-center lg:text-left">
        <h2 className="text-xl lg:text-3xl uppercase tracking-wide text-pink-500">I am a Professional</h2>
        <h1 className="text-3xl lg:text-5xl font-bold text-pink-600 uppercase leading-tight">
          Web Designer & Developer
        </h1>
        <p className="text-base lg:text-lg text-gray-300 lg:max-w-[80%]">
          Hey, I'm <span className="font-semibold text-pink-500">Hasan Rafay</span> from Karachi, Pakistan. I specialize in modern web design and development with a strong focus on visual appeal and functionality, and I have a deep passion for <span className="font-semibold">Artificial Intelligence</span>.
        </p>
        <button className="bg-yellow-500 hover:bg-pink-700 text-black py-2 px-6 rounded-full mt-4 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <Link href='/contact'>Hire Me</Link>
        </button>
      </div>

      {/* Image Section */}
      <div className="relative lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="transform hover:scale-105 transition-all duration-500 lg:w-[420px] md:w-[370px] w-[300px] lg:h-[420px] md:h-[370px] h-[300px] flex items-center justify-center">
          <Image className="transform transition-all duration-[4s] hover:scale-110" src={shehzad} alt="HasanRafay" layout="fill" objectFit="cover" />
          {/* Optional: Animated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50 opacity-0 hover:opacity-100 transition-all duration-700"></div>
        </div>
      </div>
      
    </div>
  );
}
