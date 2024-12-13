const Page = () => {
  return (
    <div className="flex flex-col items-center gap-12 lg:my-20 my-28 md:mx-40 mx-16 bg-gradient-to-r from-blue-500 via-blue-400 to-green-500 py-16 px-6 rounded-lg shadow-lg">
      <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold text-white text-center uppercase tracking-wide">
        CONTACT ME
      </h1>
      <p className="text-center sm:mx-10 mx-4 text-gray-200 text-lg mt-4">
        Get in touch today to discuss your project needs or any inquiries. We are here to provide personalized assistance and expert solutions to bring your digital ideas to life. Reach out now!
      </p>

      <div className="flex sm:flex-row flex-col gap-10 mt-10 w-full">
        {/* Contact Form */}
        <div className="flex flex-col gap-6 w-full sm:w-[60%]">
          <input
            type="text"
            placeholder="Name"
            className="px-6 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-300 text-gray-700"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-6 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-300 text-gray-700"
          />
          <input
            type="text"
            placeholder="Phone"
            className="px-6 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-300 text-gray-700"
          />
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Message"
            className="px-6 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-300 text-gray-700"
          ></textarea>
          <button className="bg-[#e90074] text-white py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
            Send Message
          </button>
        </div>

        {/* Google Map */}
        <div className="flex justify-center items-center sm:w-[40%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d57905.43762618489!2d67.17201167779811!3d24.894916601024892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3eb337d44b3152fb%3A0x22644ac07219ca2a!2sBurhani%20Town%2C%20Khokhrapar%20Yousuf%20Nagar%20Malir%20Cantonment%2C%20Karachi!3m2!1d24.8948444!2d67.2132113!4m5!1s0x3eb337d44b3152fb%3A0x22644ac07219ca2a!2sBurhani%20Town%2C%20Survey%20No.%20455%2C%20456%2C%20Khokhrapar%20Malir%20Cantonment%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!3m2!1d24.8948444!2d67.2132113!5e0!3m2!1sen!2s!4v1731306616805!5m2!1sen!2s"
            width="100%"
            height="350"
            loading="lazy"
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
