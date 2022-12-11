import React from "react";
import { FaTshirt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import muslera from "../img/muslera.webp";
import dubois from "../img/dubois.webp";
import aanholt from "../img/aanholt.webp";
import ross from "../img/ross.webp";
import torreira from "../img/torreira.webp";
import midtjo from "../img/mids-yenii.webp";
import kerem from "../img/kerem-yenii.webp";
import seferovic from "../img/seferovic-yenii.webp";
import mertens from "../img/MERTENS_3.webp";
import yunus from "../img/yunus-yenii.webp";
import emre from "../img/EMRETASDEMIR_3.webp";
import gomis from "../img/gomis-2.webp";
import berkan from "../img/berkan-kutluu.webp";
import nelsson from "../img/nelsson-yenii.webp";
import rashica from "../img/RASHICA_3.webp";
import sergio from "../img/sergioo-yeni.webp";
import yusuf from "../img/yusuf-demir-anasayfa-yeni.webp";
import okan from "../img/okan-yenii.webp";
import emin from "../img/emin-bayram-yenii.webp";
import abdulkerim from "../img/abdulkerim-bardakci-yenii.webp";
import jankat from "../img/jankat-yenii.webp";
import baris from "../img/bariss-yeni.webp";
import baran from "../img/baran-yenii.webp";
import mata from "../img/mata-anasayfa-yeni.webp";
import hamza from "../img/hamza-yenii.webp";
import kazim from "../img/kazim-yenii.webp";
import baltaci from "../img/metehan-yneii.webp";
import boey from "../img/boey-yazili-yeni.webp";
import icardi from "../img/ICARDI_4.webp";

// import required modules
import { Pagination } from "swiper";

const players = () => {
  return (
    <>
      <div className="w-full pt-20 pb-20">
        <h1 className=" md:text-4xl text-3xl text-gs-yellow font-bold text-center ">
          PLAYERS
        </h1>

        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={muslera} alt="" />

              <div className="w-full  justify-items-center h-full  bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #1 Fernando Muslera
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center  text-8xl absolute top-[50%] left-[%]  " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        goalkipper
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        434
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        1/1
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.84
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={dubois} alt="" />

              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #2 Léo Dubois
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defender (Left, Right), Midfielder (Right
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        1
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/1
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.71
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={aanholt} alt="" />
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #3 Patrick van Aanholt
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defender (Left), Midfielder (Left)
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        48
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/2
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.57
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={ross} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #4 Mathias Ross
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defender - (Centre-Back)
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        3
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        2/0
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        7.02
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={torreira} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #5 Lucas Torreira
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defensive Midfielder{" "}
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        13
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.84
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={midtjo} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #6 Fredrik Midtsjø
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Midfielder (Centre, Right)
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        5
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/1
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.45
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={kerem} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #7 Kerem Aktürkoglu
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        {" "}
                        Attacking Midfielder (Left, Right)
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        92
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        22/9
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.94
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={seferovic} alt="" className="playerImg" />
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #9 Haris Seferovic
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        {" "}
                        Attacking Midfielder (Left, Right), Forward
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        4
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        1/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.13
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={mertens} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #10 Dries Mertens
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Attacking Midfielder (Centre, Left, Right), Forward
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        10
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        2/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.97
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={yunus} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #11 Yunus Akgün
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Attacking Midfielder (Centre, Right
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        36
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        10/12
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.89
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={emre} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #13 Emre Tasdemir
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        {" "}
                        Defender (Left), Midfielder (Left)
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        16
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        1/2
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.82
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={gomis} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #18 Bafétimbi Gomis
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Forward
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        46
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        42/5
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.60
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={berkan} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #22 Berkan Kutlu
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defensive Midfielder{" "}
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        42
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        0/3
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.23
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={nelsson} alt="" className="playerImg" />
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #25 Victor Nelsson
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defender (Centre)
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        57
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        1/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        7.07
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={rashica} alt="" className="playerImg"  />
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #26 Milot Rashica
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Attacking Midfielder (Centre, Left, Right), Forward
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        4
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/2
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.94
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={sergio} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #27 Sérgio Oliveira
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defensive Midfielder
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        11
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/2
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        7.22
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={yusuf} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #30 Yusuf Demir
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Forward
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        2
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.47
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={okan} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #34 Okan Kocuk
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        goalkipper
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        34
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.80
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={abdulkerim} alt="" className="playerImg" />
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #42 Abdülkerim Bardakçi
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defender (centre)
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        10
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        1/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.66
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={jankat} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #50 Jankat Yilmaz
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        goalkipper
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={baris} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #53 Baris Yilmaz
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Attacking Midfielder (Right)
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        29
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        1/1
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.44
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={baran} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #63 Baran Aksaka
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defensive Midfield
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={emin} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #40 Emin Bayram
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defender
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        3
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.56
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={hamza} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #81 Hamza Akman
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Midfielder
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        1
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.11
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={kazim} alt="" className="playerImg" />
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #88 Kazimcan Karatas
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defender (Left), Midfielder (Left)
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        4
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.92
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={mata} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #64 Juan Mata
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Attacking Midfielder (Centre, Left, Right)
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        3
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        1/1
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        6.52
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={boey} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #93 Sacha Boey
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defender (Right)
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        27
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/2
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        7.23
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={baltaci} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #90 Metehan Baltaci
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Defender
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        1
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -/-
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        -
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" swippermain relative">
            <a href="##">
              <img src={icardi} alt="" className="playerImg"/>
              <div className="w-full justify-items-center h-full bg-zinc-800/80 hoverCard">
                <p className="text-[1vw] text-gs-yellow mb-auto pt-10 font-extrabold">
                  #99 Mauro Icardi
                </p>
                <a
                  href="##"
                  className=" h-10 mb-auto text-gs-yellow  trnasition-colors duration-300 hover:text-gs-red"
                >
                  {" "}
                  <FaTshirt className=" pl-10 text-center   text-8xl " />
                  <span className=" font-extrabold pb-20 text-[1vw] text-center ">
                    Go To GSstore
                  </span>
                </a>
                <div className="player-performance ">
                  <ul className="flex justify-start">
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      position: <br />{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        Forward
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      matches:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        5
                      </span>
                    </li>
                    <li className="text-[1vw] text-gs-yellow pr-3">
                      Goal/Assist:{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        5/3
                      </span>
                    </li>

                    <li className="text-[1vw] text-gs-yellow pr-3">
                      22/23 raiting{" "}
                      <span className="text-[1vw] text-end text-gray-500 font-semibold">
                        7.78
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default players;
