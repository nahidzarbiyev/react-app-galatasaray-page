import React from "react";

import nef from "../img/nef.jpg";
import terim from "../img/terim.jpg";
import hazirlik from "../img/hazrl.jpg";

const GamesFeatures = () => {
  return (
    <>
      <div>
        <h3 className=" text-gs-red  md:text-5xl text-3xl font-bold italic text-center border-t-[1px] pt-10">
          Games & Features
        </h3>

        <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 pt-10">
          <a href="##">
            {" "}
            <div className="min-w-[33%] cursor-pointer overflow-hidden h-96 relative rounded ">
              <img
                src={nef}
                alt=""
                className="w-full h-full transition-all  "
              />
              <h1 className="absolute  text-gs-yellow  font-bold  md:text-5xl text-3xl italic bottom-12 w-full text-center bg-black/70">
                tour
              </h1>
              <p className="text-white text-sm font-bold bg-black/70 w-full duration-500 transition-all p-2 absolute bottom-0 h-12 lg:opacity-0 hover:opacity-100 ">
                Buy your{" "}
                <a href="##" className="text-gs-yellow">
                  ticket
                </a>{" "}
                and come to our stadium surrounded by memories.
              </p>
            </div>
          </a>
          <a href="##">
            {" "}
            <div className="min-w-[33%] cursor-pointer overflow-hidden h-96 relative rounded">
              <img
                src={terim}
                alt=""
                className="w-full h-full    transition-all "
              />
              <h1 className="absolute  text-gs-yellow  font-bold  md:text-5xl text-3xl italic bottom-12 w-full text-center bg-black/70">
                movie time
              </h1>
              <p className="text-white text-sm font-bold bg-black/70 w-full duration-500 transition-all p-2 absolute bottom-0 h-12 lg:opacity-0 hover:opacity-100 ">
                The documentary of our legend Fatih Terim is now on netflix.{" "}
                <a href="##" className="text-gs-yellow">
                  watch now
                </a>
              </p>
            </div>
          </a>
          <a href="##">
            <div className="min-w-[33%] cursor-pointer overflow-hidden h-96 relative rounded">
              <img
                src={hazirlik}
                alt=""
                className="h-full w-full transition-all cover "
              />
              <h1 className="absolute  text-gs-yellow  font-bold  md:text-5xl text-3xl italic bottom-28 w-full text-center bg-black/70">
                go to match
              </h1>
              <p className="text-white text-sm font-bold bg-black/70 w-full duration-1000 transition-all p-2 absolute bottom-0 h-28 lg:opacity-0 hover:opacity-100 ">
                {" "}
                Rayo Vallecano will come to Istanbul on 28 November and will
                face Galatasaray on 3 December at Nef Stadium. Villarreal will
                come to Istanbul on 1 December and will play against Galatasaray
                on 6 December.
                <a href="##" className="text-gs-yellow">
                  {" "}
                  click here for tickets
                </a>
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default GamesFeatures;
