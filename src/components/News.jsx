import React from "react";
import ticketwoman from "../img/gs-kad;n-ticket.jpeg";
import erkekvole from "../img/fileninaslanlari.jpeg";
import veteran from "../img/veteran.jpeg";
import pistolis from "../img/pistolis.jpeg";

import { BsArrowRightCircleFill } from "react-icons/bs";
const News = () => {
  return (
    <>
      <div>
        <h3 className=" text-gs-yellow  md:text-5xl text-3xl font-bold italic text-center border-t-[1px] pt-10">
          Galatasaray NEWS
        </h3>
        <div className="flex items-end lg:justify-end justify-center pt-5">
          {" "}
          <a
            href="##"
            className="  bg-gs-red p-2 mt-4 w-40 btn-store transition-all duration-300 rounded lg:hover:bg-gs-yellow flex justify-center items-center text-white "
          >
            {" "}
            read more <BsArrowRightCircleFill className="ml-2 " />
          </a>
        </div>

        <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 pt-10">
          <div className=" h-[350px] flex flex-col justify-between p-2 shadow-2xl rounded">
            <div className="w-full h-[40%] rounded overflow-hidden">
              {" "}
              <img src={ticketwoman} alt="" />
            </div>
            <div className="p-2 text-center">
              <div className="h-[120px]">
                {" "}
                <h2 className="text-gs-red text-sm font-bold">
                  Galatasaray Women's Basketball Combinations are on sale!
                </h2>
                <p className=" text-[14px] news-text">
                  Our Galatasaray Women's Basketball Team will play in the ING
                  Women's Basketball Super League and EuroCup Women's home team
                  throughout the year 2022-2023.
                </p>
              </div>
            </div>
            <div className=" m-auto">
          <div className="m-auto transition-all pt-2">
              {" "}
              <a
                href="##"
                className=" bg-gs-red p-2 w-40 btn-store transition-all duration-300 rounded lg:hover:bg-gs-yellow flex justify-center items-center text-white "
              >
                Read More <BsArrowRightCircleFill className="ml-2 " />
              </a>
            </div>
          </div>
          </div>
          <div className=" h-[350px]  flex flex-col justify-between p-2 shadow-2xl rounded">
            <div className="w-full h-[40%] rounded overflow-hidden">
              {" "}
              <img src={erkekvole} alt="" />
            </div>
            <div className="p-2 text-center">
              <div className="h-[120px]">
                {" "}
                <h2 className="text-gs-red text-sm font-bold">
                  4th consecutive win from Lions of the Net
                </h2>
                <p className=" text-[14px] news-text">
                  Galatasaray HDI Sigorta Men's Volleyball Team met with Develi
                  Belediye team in the 9th week of AXA Sigorta Efeler League
                  Metin Görgün Season. Our team won the match 3-1 at the Develi
                  Murat Kocatürk Sports Hall.
                </p>
              </div>
            </div>
            <div className="m-auto">
          <div className="m-auto flex items-end transition-all pt-2">
              {" "}
              <a
                href="##"
                className=" bg-gs-red p-2 w-40 btn-store transition-all duration-300 rounded lg:hover:bg-gs-yellow flex justify-center items-center text-white "
              >
                Read More <BsArrowRightCircleFill className="ml-2 " />
              </a>
            </div>
          </div>
          </div>
          <div className=" h-[350px] flex flex-col  p-2 shadow-2xl rounded">
            <div className="w-full h-[40%] rounded overflow-hidden">
              {" "}
              <img src={veteran} alt="" />
            </div>
            <div className="p-2 text-center">
              <div className="h[120px]">
                {" "}
                <h2 className="text-gs-red text-sm font-bold">
                  Friendly Race from our Veteran Rowing Team
                </h2>
                <p className=" text-[14px] news-text">
                  Traditional Galatasaray - Hebros Rowing Races, held for the
                  25th time this year with the contributions of the Galatasaray
                  Athletes Association, were held at our Küçükçekmece Rowing
                  Facilities.
                </p>
              </div>
            </div>
            <div className="m-auto flex items-end">
          <div className="m-auto flex  transition-all pt-10">
              {" "}
              <a
                href="##"
                className=" bg-gs-red p-2 w-40 btn-store transition-all duration-300 rounded lg:hover:bg-gs-yellow flex justify-center items-center text-white "
              >
                Read More <BsArrowRightCircleFill className="ml-2 " />
              </a>
            </div>
          </div>
          </div>
          <div className=" h-[350px] flex flex-col justify-between p-2 shadow-2xl rounded">
            <div className="w-full h-[40%] rounded overflow-hidden">
              {" "}
              <img src={pistolis} alt="" />
            </div>
            <div className="p-2 text-center">
              <div className="h-[120px]">
                {" "}
                <h2 className="text-gs-red text-sm font-bold">
                  Statement from our head coach Andreas Pistiolis
                </h2>
                <p className=" text-[14px] news-text">
                  Emphasizing that we had an important win in a difficult away
                  game, Coach Pistiolis said, “We knew it would be very
                  difficult. It's not easy to play here. We got an important win
                  against a very good team.” he said.
                </p>
              </div>
            </div>
          <div className="flex items-end">
          <div className="m-auto flex items-end transition-all pt-2">
              {" "}
              <a
                href="##"
                className=" bg-gs-red p-2 w-40 btn-store transition-all duration-300 rounded lg:hover:bg-gs-yellow flex justify-center items-center text-white "
              >
                Read More <BsArrowRightCircleFill className="ml-2 " />
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
