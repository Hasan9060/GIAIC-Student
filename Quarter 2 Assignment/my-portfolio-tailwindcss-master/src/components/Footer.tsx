import { FaGithub , FaLinkedin , FaDev } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" flex md:flex-row flex-col justify-between gap-3 mt-10 md:px-20 px-10 py-3 items-center bg-gradient-to-r from-[#00e975] to-[#003988]">
      <p className=" sm:text-[16px] text-[16px]">all right reserved <span className="text-[#660088] font-bold">Hasan Rafay</span> 2024</p>
      <ul className="flex gap-4 text-2xl">
        <li>
            <Link className="hover:text-[#17b6e1]" href="https://github.com/Hasan9060"> <FaGithub />  </Link>
        </li>
        <li>
            <Link className="hover:text-[#17b6e1]" href="https://www.linkedin.com/in/hasanrafay/"> <FaLinkedin /> </Link>
        </li>
        <li>
            <Link className="hover:text-[#17b6e1]" href="https://www.behance.net/syedhasanrafay">  </Link>
        </li>
      </ul>
      <p className=" sm:text-[16px] text-[14px]">hasanrafay2006@gmail.com</p>
    </div>
  )
}

export default Footer
