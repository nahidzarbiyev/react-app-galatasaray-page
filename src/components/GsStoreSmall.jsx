import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Icsaha from "../img/icsaha.webp";
import deplasman from "../img/deplasman.webp";
import kaleci from "../img/kaleci.webp";

import GSlogo from "../img/GS-logo.png";

const GsStoreSmall = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl italic text-center">
          <span className="text-gs-red">G</span>
          <span className="text-gs-yellow">S</span>Store Nef Stadium
        </h1>
        <div className="flex lg:mt-0 mt-4 lg:justify-end justify-center transition-all">
          {" "}
          <a
            href="##"
            className="bg-gs-red p-2 transition-all duration-300  rounded lg:hover:bg-gs-yellow flex items-center text-white "
          >
            official store GS Store <BsArrowRightCircleFill className="ml-2 " />
          </a>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 pt-10">
          <div className="min-w-[33%] m-4 h-80  rounded shadow-2xl">
            <div className="w-full h-[50%] bg-gs-red rounded">
              <h2 className="text-center font-bold text-3xl text-gs-yellow italic pt-5">
                İç Saha
              </h2>
              <div className="flex justify-end -mt-5 pr-2">
                <img src={GSlogo} alt="" className="w-[38px] h-18 " />{" "}
              </div>
            </div>
            <div className="flex items-center">
              <img src={Icsaha} alt="" className=" min-w-[100px] h-40 md:p-5" />
              <div className="p-5">
                <h2 className=" pt-2 font-bold">Home Kit 22/23</h2>
                <p className=" md:text-base text-xs pt-2">"Parçalı" Galatasaray First Kits</p>
                <div className=" transition-all pt-2">
                  {" "}
                  <a
                    href="##"
                    className=" bg-gs-red p-2 md:w-[80%] w-100% btn-store transition-all duration-300 rounded lg:hover:bg-gs-yellow flex justify-center text-sm items-center text-white "
                  >
                    Go to GS Store <BsArrowRightCircleFill className="ml-2 " />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-[33%] m-4 h-80  rounded shadow-2xl">
            <div className="w-full h-[50%] bg-gs-yellow rounded">
              <h2 className="text-center font-bold text-3xl text-gs-red italic pt-5">
                Deplasman
              </h2>
              <div className="flex justify-end -mt-5 pr-2">
                <img src={GSlogo} alt="" className="w-[38px] h-18 " />{" "}
              </div>
            </div>
            <div className="flex items-center">
              <img src={deplasman} alt="" className="h-40 p-5" />
              <div>
                <h2 className=" pt-2 font-bold">Away Kit 22/23</h2>
                <p className="md:text-base text-xs pt-2">Black Galatasaray Away Kits</p>
                <div className=" transition-all pt-2">
                  {" "}
                  <a
                    href="##"
                    className=" bg-gs-red p-2 md:w-[80%] w-100% btn-store transition-all duration-300 rounded lg:hover:bg-gs-yellow flex justify-center text-sm items-center text-white "
                  >
                    Go to GS Store <BsArrowRightCircleFill className="ml-2 " />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-[33%] m-4 h-80  rounded shadow-2xl">
            <div className="w-full h-[50%] bg-[#72b556] rounded">
              <h2 className="text-center font-bold text-3xl text-white italic pt-5">
                Kaleci
              </h2>
              <div className="flex justify-end -mt-5 pr-2">
                <img src={GSlogo} alt="" className="w-[38px] h-18 " />{" "}
              </div>
            </div>
            <div className="flex  items-center">
              <img src={kaleci} alt="" className="h-40 p-5" />
              <div className="lg:w-[50%]">
                <h2 className=" pt-2 font-bold">Goalkipper 22/23</h2>
                <p className=" md:text-base text-xs pt-2">Green GoalKipper Kits</p>
                <div className=" transition-all pt-2">
                  {" "}
                  <a
                    href="##"
                    className=" bg-gs-red p-2 md:w-[80%] w-100% btn-store transition-all duration-300 rounded lg:hover:bg-gs-yellow flex justify-center text-sm items-center text-white "
                  >
                    Go to GS Store <BsArrowRightCircleFill className="ml-2 " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GsStoreSmall;
