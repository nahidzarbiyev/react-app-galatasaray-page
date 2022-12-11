import React from "react";
import uefa from "../img/dddddd.png";
import supercup from "../img/supercup.png";
import tsl from "../img/tsl.png";
import ziraat from "../img/ziraat.png";
import trcup from "../img/turkiyesuperkupa.png";

const titlesandthropies = () => {
  return (
    <>
      <div className="titles flex  justify-center items-center m-auto max-w-[1600px] min-h-[400px]">
        <div w-full>
          <h3 className=" text-gs-yellow  md:text-5xl text-3xl font-bold italic text-center pt-10 pb-20">
            Titles and trophies
          </h3>

          <div className=" w-full grid md:grid-cols-3 lg:grid-cols-5 m-auto gap-16">
            <div>
              <div className="w-[150px] m-auto h-[150px] mb-5">
                <img src={tsl} alt="" className="w-full h-full" />
              </div>
              <p className="text-xl text-center font-bold text-gs-yellow">
                Süper Lig <span className="text-gray-500">(22 record)</span>
              </p>
            </div>
            <div>
              <div className="w-[150px] m-auto h-[150px]">
                <img src={ziraat} alt="" className="w-full h-full" />
              </div>
              <p className="text-xl text-center font-bold text-gs-yellow">
                Turkish Cup <span className="text-gray-500">(18 record)</span>
              </p>
            </div>
            <div>
              <div className="w-[150px] m-auto h-[150px]">
                <img src={trcup} alt="" className="w-full h-full" />
              </div>
              <p className="text-xl text-center font-bold text-gs-yellow">
                Turkish Super Cup{" "}
                <span className="text-gray-500">(16 record)</span>
              </p>
            </div>
            <div>
              <div className="w-[100px] m-auto  h-[150px]">
                <img src={uefa} alt="" className="w-full h-full" />
              </div>
              <p className="text-xl text-center font-bold text-gs-yellow">
                UEFA Cup <span className="text-gray-500">(1)</span>
              </p>
            </div>

            <div>
              <div className="w-[150px] m-auto h-[150px]">
                <img src={supercup} alt="" className="w-full h-full" />
              </div>
              <p className="text-xl text-center font-bold text-gs-yellow">
                UEFA Super Cup <span className="text-gray-500">(1)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default titlesandthropies;
