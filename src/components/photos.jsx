import React from "react";
import icardi from "../img/icardi.png";
import basketerkek from "../img/bsktgs.webp";
import womanbasket from "../img/womanbasket.webp";
import valeyball from "../img/valeyball.jpeg";

const photos = () => {
  return (
    <>
      <h3 className=" text-gs-yellow  md:text-4xl text-3xll font-extrabold italic text-center  pt-10 pb-10">
        Latest photos
      </h3>
      <div className="grid pt-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
        <a href="##">
        <div className=" min-h-[200px] border-[1px] shadow-2xl">
          <picture>
            <div className="image">
              <img src={womanbasket} alt="" />
            </div>
            <figcaption className=" w-[80%] m-auto h-10">
              <p className="text-xl font-bold text-gs-red text-center">
                our female athletes
              </p>
            </figcaption>
          </picture>
          <div className="flex justify-between p-4">
            <a href="##">
              <p className="flex text-[12px]">
                <span className="flex w-2 m-1 h-2 bg-gs-red"></span>WOMEN{" "}
                <span className="text-[11px] ml-2 mt-1 text-gray-400">
                  (25)
                </span>
              </p>
            </a>
            <span className="text-gray-500 text-[12px]">01 nov 2022</span>
          </div>
        </div>
        </a>
       <a href="##">
       <div className=" min-h-[200px] border-[1px] shadow-2xl">
          <picture>
            <div className="image">
              <img src={basketerkek} alt="" />
            </div>
            <figcaption className=" w-[80%] m-auto h-10">
              <p className="text-xl font-bold text-gs-red text-center">
                "Yenilmez Armada"
              </p>
            </figcaption>
          </picture>
          <div className="flex justify-between p-4">
            <a href="##">
              <p className="flex text-[12px]">
                <span className="flex w-2 m-1 h-2 bg-gs-red"></span>BASKETBALL{" "}
                <span className="text-[11px] ml-2 mt-1 text-gray-400">
                  (20)
                </span>
              </p>
            </a>
            <span className="text-gray-500 text-[12px]">23 nov 2022</span>
          </div>
        </div>
       </a>
        <a href="##">
        <div className=" min-h-[200px] border-[1px] shadow-2xl">
          <picture>
            <div className="image">
              <img src={icardi} alt="" />
            </div>
            <figcaption className=" w-[80%] m-auto h-10">
              <p className="text-xl font-bold text-gs-red text-center">
                Derby{" "}
              </p>
            </figcaption>
          </picture>
          <div className="flex justify-between p-4">
            <a href="##">
              <p className="flex text-[12px]">
                <span className="flex w-2 m-1 h-2 bg-gs-red"></span>FOOTBALL{" "}
                <span className="text-[11px] ml-2 mt-1 text-gray-400">
                  (17)
                </span>
              </p>
            </a>
            <span className="text-gray-500 text-[12px]">22 nov 2022</span>
          </div>
        </div>
        </a>
        <a href="##">
        <div className=" min-h-[200px] border-[1px] shadow-2xl">
          <picture>
            <div className="image">
              <img src={valeyball} alt="" />
            </div>
            <figcaption className=" w-[80%] m-auto h-10">
              <p className="text-xl font-bold text-gs-red text-center">
                Filenin Sultanları
              </p>
            </figcaption>
          </picture>
          <div className="flex justify-between p-4">
            <a href="##">
              <p className="flex text-[12px]">
                <span className="flex w-2 m-1 h-2 bg-gs-red"></span>VOLEYBALL{" "}
                <span className="text-[11px] ml-2 mt-1 text-gray-400">(9)</span>
              </p>
            </a>
            <span className="text-gray-500 text-[12px]">24 nov 2022</span>
          </div>
        </div>
        </a>
      </div>
    </>
  );
};

export default photos;
