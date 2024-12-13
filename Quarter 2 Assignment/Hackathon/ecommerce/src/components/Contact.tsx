import React from 'react'

const contact = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
  <h1 className="font-poppins font-bold text-[32px] w-[375px] h-[54px] mt-[45] text-center text-[#333333]">Get In Touch With Us</h1>
  </div>
  <div className="flex justify-center items-center mt-[15] text-[#666666] w-[644px] h-[10px] text-center ml-[300px]"><p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p></div>
    
  <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full p-8 md:flex">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 p-4">
          <div>
            <p className="mb-20 grid">
              <span className="font-bold ">Address:</span> <span className='w-[212px] text-gray-600 '>236 5th SE Avenue, New York, NY 10000, United States
              </span></p>
            <p className="mb-20 grid">
              <span className="font-bold">Phone:</span> <span className='w-[212px] text-gray-600'></span> Mobile: +84 546-6789 <br />
              Hotline: +84 456-6789
            </p>
            <p className="grid">
              <span className="font-bold">Working Time:</span> 
              <span className='w-[212px] text-gray-600'>Monday–Friday: 9:00–22:00 <br />
              Saturday–Sunday: 9:00–21:00</span>
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-4 ">
          <form className="space-y-4 ">
            <div>
              <label className="block text-[16px] font-medium" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-7 w-[528.75px] h-[75px] mb-4 border-gray-300 border-2 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-[16px] font-medium " htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="mt-7 w-[528.75px] h-[75px] mb-4 border-gray-300 border-2 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-[16px] font-medium" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="mt-7 w-[528.75px] h-[75px] mb-4 border-gray-300 border-2 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                placeholder="Optional"
              />
            </div>
            <div>
              <label className="block text-[16px] font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="mt-7 w-[528.75px] h-[166px] mb-8 border-gray-300 border-2 rounded-md "
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[237px] h-[55px] bg-[#B88E2F] text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>

    
  )
}

export default contact;
