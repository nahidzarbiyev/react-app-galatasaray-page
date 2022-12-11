import React from "react";

const Only = () => {
  return (
    <>
      <hr className="" />

      <div className="w-full pt-16 pb-16 border-b-[1px]">
        <h3 className=" text-gs-yellow md:text-5xl text-3xl font-bold italic text-center border-t-[1px] pt-4">
          Only For Lions
        </h3>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-5 pt-10">
          <div className="min-w-[15%] m-5 h-28 rounded p-2 flex justify-center duration-500 transition-all lg:hover:scale-125  items-center text-2xl text-gs-yellow font-bold text-center bg-gs-red">
            <a href="##">
              <p>LIVETV</p>
            </a>
          </div>
          <div className="min-w-[15%] m-5  h-28 rounded p-2 flex justify-center duration-500 transition-all lg:hover:scale-125  items-center text-2xl text-center  font-bold text-white  bg-gradient-to-r from-gs-red to-gs-yellow">
            <a href="##">
              <p>NEW KIT</p>
            </a>
          </div>
          <div className="min-w-[15%] m-5 h-28 rounded p-2 flex justify-center duration-500 transition-all lg:hover:scale-125  items-center text-2xl text-center font-bold bg-gs-yellow text-gs-red">
            <a href="##">
              <p>ULTRASLAN</p>
            </a>
          </div>
          <div className="min-w-[15%] m-5 h-28 rounded p-2 flex justify-center duration-500 transition-all lg:hover:scale-125 items-center text-2xl text-center font-bold bg-gradient-to-tr from-gs-yellow to-gs-red text-white">
            <a href="##">
              <p>FULL MATCHES</p>
            </a>
          </div>
          <div className="min-w-[15%] m-5 h-28 rounded p-2   flex justify-center duration-500 transition-all lg:hover:scale-125 items-center text-2xl text-center font-bold bg-gs-red text-white ">
            <a href="##">
              <p>MATCH DAY CHALLENGE</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Only;
