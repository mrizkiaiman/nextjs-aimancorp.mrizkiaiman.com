export const ContactUs = () => {
  return (
    <div className="w-full h-full bg-white grid grid-cols-1 py-12 md:py-40 md:grid-cols-2 md:px-32">
      <img src="/contact-us.svg" className="h-full w-full" alt="contact-us" />
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:pl-24">
        <p className="text-3xl md:text-4xl font-bold tracking-tighter">Contact us</p>
        {/* <div className="h-2 bg-gray-500 w-40 md:w-56 rounded-md mt-4" /> */}
        <div className="py-8 w-full flex flex-col">
          <div className="flex flex-col">
            <label className="pl-4 md:pl-0 block mb-2 text-md md:text-lg font-semibold text-gray-500">Company name</label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border self-center border-gray-300 text-gray-900 text-sm rounded-lg w-11/12 md:w-full p-2.5 outline-none"
              placeholder="John"
              required
            />
          </div>
          <div className="pt-6 flex flex-col">
            <label className="pl-4 md:pl-0 block mb-2 text-md md:text-lg font-semibold text-gray-500">Email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 self-center text-gray-900 text-sm rounded-lg w-11/12 md:w-full p-2.5 outline-none"
              placeholder="John"
              required
            />
          </div>
          <div className="pt-6 flex flex-col">
            <label className="pl-4 md:pl-0 block mb-2 text-md md:text-lg  font-semibold text-gray-500">Additional information</label>
            <textarea
              id="message"
              className="bg-gray-50 border border-gray-300 self-center text-gray-900 text-sm rounded-lg w-11/12 md:w-full p-2.5 h-32 outline-none"
              placeholder="John"
            />
          </div>
          <button className="bg-black rounded-md py-4 px-32 flex justify-center items-center w-1/4 self-center md:self-end mt-8 hover:bg-orange-300 text-white hover:text-black font-bold text-lg ease-in-out duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
