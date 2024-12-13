import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:my-20 md:my-24 lg:mx-40 md:mx-16 sm:mx-20 mx-12 my-24 gap-10">
      <h1 className="md:text-5xl sm:text-4xl text-3xl uppercase text-[#e90074] font-semibold tracking-wide text-center">
        My Services
      </h1>
      <p className="text-center text-gray-300 text-lg md:px-12 px-6 mt-4">
        Our services include expert web development, seamless mobile app development, and innovative web design to create engaging, high-performance digital solutions tailored to elevate your online presence and user experience.
      </p>

      <div className="service-box flex flex-wrap md:flex-row flex-col gap-12 md:gap-16 mt-10 text-gray-200">
        {/* Web Development Service */}
        <div className="flex flex-col items-center gap-6 p-6 bg-gradient-to-r from-[#e90074] to-[#660088] rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaLaptopCode className="text-white text-[150px]" />
          <h1 className="text-[22px] font-bold text-white">Web Development</h1>
          <p className="text-center text-sm md:text-base">We build responsive, fast, and scalable websites tailored to your needs, ensuring optimal performance and user-friendly experiences for your audience.</p>
        </div>
        
        {/* App Development Service */}
        <div className="flex flex-col items-center gap-6 p-6 bg-gradient-to-r from-[#660088] to-[#e90074] rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <TbDeviceMobileCode className="text-white text-[150px]" />
          <h1 className="text-[22px] font-bold text-white">App Development</h1>
          <p className="text-center text-sm md:text-base">Our mobile app development services deliver custom, feature-rich applications for iOS and Android, providing a seamless and engaging user experience.</p>
        </div>

        {/* Web Design Service */}
        <div className="flex flex-col items-center gap-6 p-6 bg-gradient-to-r from-[#e90074] to-[#660088] rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <MdOutlineDesignServices className="text-white text-[150px]" />
          <h1 className="text-[22px] font-bold text-white">Web Design</h1>
          <p className="text-center text-sm md:text-base">Experience creative web design that prioritizes aesthetics, functionality, and user interaction, making your brand stand out with a unique, professional look.</p>
        </div>
      </div>

      <button className="bg-[#e90074] w-[180px] py-3 rounded-full mt-10 text-white font-semibold hover:bg-[#660088] transition duration-300">
        <Link href="/contact">Hire Me</Link>
      </button>
    </div>
  );
};

export default Page;
