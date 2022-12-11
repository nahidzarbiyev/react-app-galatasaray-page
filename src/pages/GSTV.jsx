import React from 'react'
import ardaturan from "../img/turan.jpg";
import terim from "../img/terim.jpg_large";
import wearethebest from "../img/icrd.webp";

import hagi from "../img/hagi.jpg";


const GSTV = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center pt-[200px] flex-col">
       <div className="flex items-end lg:justify-end justify-center  max-w-[1200px] m-auto bg-transparent mt-10 ">
      {" "}
      <a
        href="##"
        className="  bg-gs-yellow p-2 w-60 btn-store transition-all shadow-2xl duration-300 rounded md:hover:bg-gs-red flex justify-center items-center text-white "
      >
        {" "}
        Go to YouTube Channel
      </a>
    </div>

    <div className="max-w-[1200px] m-auto bg-transparentm-auto p-14 lg:mt-10 flex justify-between flex-wrap shadow-2xl">
    <div className="grid lg:pt-10 m-auto md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">  <a href="##">
        {" "}
        <div className="w-[230px] h-[350px] relative shadow-2xl rounded transition-all duration-300 md:hover:scale-110">
          <div className="w-full h-full overflow-hidden rounded ">
            <img src={ardaturan} alt="" className="w-full h-full  rounded" />
          </div>

          <div className=" w-full h-[100%] bg-gradient-to-b from-transparent to-gs-red  absolute bottom-0 rounded ">
            <div className="  w-full h-[100px] bg-gs-red bottom-0 absolute text-gs-yellow font-bold text-3xl  flex flex-col justify-center items-center">
              {" "}
              <h3>Arda Turan</h3>
              <p className="text-sm text-white text-center ">
                Farewell to Arda number 66. Click to watch Arda Turan's career
                history
              </p>
            </div>
          </div>
        </div>
      </a>

      <a href="##">
        {" "}
        <div className="w-[230px] shadow-2xl h-[350px] relative rounded transition-all duration-300 md:hover:scale-110">
          <div className="w-full h-full overflow-hidden rounded ">
            <img
              src={wearethebest}
              alt=""
              className="  w-full  rounded transition-all"
            />
          </div>

          <div className=" w-full h-[100%] bg-gradient-to-b from-transparent to-gs-red  absolute bottom-0 rounded ">
            <div className="  w-full h-[100px] bg-gs-red bottom-0 absolute text-gs-yellow font-bold text-[28px]  flex flex-col justify-center items-center">
              {" "}
              <h3>WE are the best</h3>
              <p className="text-sm text-white text-center ">
                Exclusive interview with our Argentinian star
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href="##">
        {" "}
       
        <div className="w-[230px] shadow-2xl h-[350px] relative rounded transition-all duration-300 md:hover:scale-110">
          <div className="w-full h-full overflow-hidden rounded ">
            <img
              src={terim}
              alt=""
              className="w-full h-full transition-all duration-700 md:hover:scale-110  rounded"
            />
          </div>

          <div className=" w-full h-[100%] bg-gradient-to-b from-transparent to-gs-red  absolute bottom-0 rounded ">
            <div className="  w-full h-[100px] bg-gs-red bottom-0 absolute text-gs-yellow font-bold text-3xl  flex flex-col justify-center items-center">
              {" "}
              <h3>Fatih Terim</h3>
              <p className="text-sm text-white text-center ">
                Don't miss the first episode of the TERİM documentary
              </p>
            </div>
          </div>
        </div>

      </a>
      <a href="##">
        {" "}
        <div className="w-[230px] shadow-2xl h-[350px] relative rounded transition-all duration-300 md:hover:scale-110">
          <div className="w-full h-full overflow-hidden rounded ">
            <img src={hagi} alt="" className="w-full h-full  rounded" />
          </div>

          <div className=" w-full h-[100%] bg-gradient-to-b from-transparent to-gs-red  absolute bottom-0 rounded ">
            <div className="  w-full h-[100px] bg-gs-red bottom-0 absolute text-gs-yellow font-bold text-3xl  flex flex-col justify-center items-center">
              {" "}
              <h3>Georgi Hagi</h3>
              <p className="text-sm text-white text-center">
                Watch Hagin's magnificent goals in Galatasaray years now
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
     </div>
    <div className="lg:flex items-end lg:justify-end justify-center pt-5 max-w-[1000px] m-auto bg-transparent mt-10 ">
      {" "}
      <p className="text-center text-2xl text-white font-bold pr-5">
        subscribe to our youtube channel now and watch more videos about our
        players
      </p>{" "}
      <a
        href="##"
        className="  bg-gs-yellow p-2 w-40 lg:mt-0 mt-4 m-auto btn-store transition-all duration-300 rounded md:hover:bg-gs-red flex justify-center items-center text-white tracking-widest "
      >
        {" "}
        Subscribe
      </a>
    </div>
    </div>
  )
}

export default GSTV