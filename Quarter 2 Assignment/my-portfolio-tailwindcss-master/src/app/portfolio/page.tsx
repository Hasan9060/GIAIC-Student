import Image from 'next/image';
import project1 from '../../../public/images/project1.png';
import project2 from '../../../public/images/project2.png';
import project3 from '../../../public/images/project3.png';
import project4 from '../../../public/images/project4.png';
import project5 from '../../../public/images/project5.png';
import project6 from '../../../public/images/project6.png';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 lg:my-20 my-28 md:mx-20">
      <h1 className="sm:text-5xl text-4xl text-[#e90074] font-semibold text-center">
        PORTFOLIO
      </h1>
      <p className="text-center text-gray-300 mx-16 text-lg">
        Explore our diverse portfolio showcasing successful projects in web development, mobile app creation, and web design. Each project highlights our commitment to quality, creativity, and functionality, tailored to meet client needs and goals.
      </p>

      <div className="flex md:gap-5 gap-10 flex-wrap justify-center my-10">
        {/* Project 1 */}
        <div className="lg:w-[350px] md:w-[250px] w-full h-[200px] rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
          <Image className="w-full h-full object-cover" src={project1} alt="Project 1" />
        </div>
        {/* Project 2 */}
        <div className="lg:w-[350px] md:w-[250px] w-full h-[200px] rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
          <Image className="w-full h-full object-cover" src={project2} alt="Project 2" />
        </div>
        {/* Project 3 */}
        <div className="lg:w-[350px] md:w-[250px] w-full h-[200px] rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
          <Image className="w-full h-full object-cover" src={project3} alt="Project 3" />
        </div>
        {/* Project 4 */}
        <div className="lg:w-[350px] md:w-[250px] w-full h-[200px] rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
          <Image className="w-full h-full object-cover" src={project4} alt="Project 4" />
        </div>
        {/* Project 5 */}
        <div className="lg:w-[350px] md:w-[250px] w-full h-[200px] rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
          <Image className="w-full h-full object-cover" src={project5} alt="Project 5" />
        </div>
        {/* Project 6 */}
        <div className="lg:w-[350px] md:w-[250px] w-full h-[200px] rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
          <Image className="w-full h-full object-cover" src={project6} alt="Project 6" />
        </div>
      </div>

      <button className="bg-[#e90074] text-white py-2 px-10 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:bg-[#660088]">
        See More
      </button>
    </div>
  );
};

export default Page;
