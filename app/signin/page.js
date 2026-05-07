import React from "react";

const page = () => {
  return (
    <div
      className=" flex p-10  bg-center bg-cover relative min-h-screen w-full justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070')",
      }}
    >
      <div className="absolute inset-0 bg-black/75 " />
      {/* //login card */}
      <form className="bg-[#1A191F] h-90 p-10 w-85 rounded-2xl flex flex-col justify-center gap-3 items-center z-5 lg:w-120 lg:h-100">
        {/* logo, email and password  input */}
        <div className="flex  flex-col items-center justify-center gap-5">
          <h1 className="text-xl font-bold tracking-wider text-white lg:text-3xl ">
            <span className="text-[#ffb800]">BELL</span>FLIX
          </h1>
          <input
            placeholder="Email"
            className="text-white bg-[#222028] rounded-lg  text-center h-10 w-50 border border-gray-400 lg:w-70"
          />
          <input
            placeholder="Password"
            className="text-white bg-[#222028] rounded-lg  text-center h-10 w-50 border border-gray-400 lg:w-70"
          />
        </div>
        {/* remember me */}
        <label className="flex items-center justify-start gap-2 text-white pr-8 pt-1 ">
          <input
            type="checkbox"
            className="accent-[#ffb800] w-4 h-4 cursor-pointer "
          />
          Remember me
        </label>
        {/* sign up button */}

        <button className="text-white bg-[#222028] rounded-lg  text-center h-10 w-50 border-3 border-yellow-400">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default page;
