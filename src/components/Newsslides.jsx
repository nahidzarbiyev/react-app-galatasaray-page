// import React, { useRef, useState } from "react";

import kerem from "../img/akturkoglu.jpg";
import mertens from "../img/mertens.png";
import falcao from "../img/falcao.jpg";
import gelenek from "../img/gelenek.jpeg";
import fiktur from "../img/fikstur.jpeg";
import team from "../img/team.webp";
import gsbasket from "../img/gsbasket.jpeg";
import voleyball from "../img/voleyball.jpeg";
import bilet from "../img/bilet.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";

const Newsslides = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper h-[960px]"
      >
        <SwiperSlide>
          {" "}
          <img src={kerem} alt="" className="relative main-img " />{" "}
          <div className=" w-full  md:block hidden news absolute -bottom-1 bg-gs-red/75">
            <h1 className="text-white  pt-20 ">
              {" "}
              Turkish Spor Toto Super Lig title contenders Galatasaray thrashed
              Medipol <br />
              Basaksehir 7-0 in an away match Saturday in a historic win for the
              Lions
            </h1>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={fiktur} alt="" className="relative main-img" />{" "}
          <div className=" w-full h-[50px] md:block hidden news absolute bottom-12  bg-gs-red/75">
            <h1 className="text-white ">
              <a href="##" className="text-gs-yellow">
                click
              </a>{" "}
              for our post world cup fixture
              <br />
            </h1>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={team} alt="" className="relative main-img" />{" "}
          <div className=" w-full h-[50px] md:block hidden news absolute bottom-12  bg-gs-red/75">
            <p className="text-white">
              {" "}
              <a href="##" className="text-gs-yellow">
                List
              </a>{" "}
              of our Galatasaray players who will go to the World Cup
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={falcao} alt="" className="relative main-img" />{" "}
          <div className=" flex justify-center align-center md:block  w-full h-[100px] news absolute bottom-8  bg-gs-red/75">
            <h1 className="text-white ">
              {" "}
              Rayo Vallecano will come to Istanbul on 28 November and will face
              Galatasaray on 3 December at Nef Stadium. <br /> Villarreal will
              come to Istanbul on 1 December and will play against Galatasaray
              on 6 December. <br />
              <a href="##" className="text-gs-yellow">
                {" "}
                click here for tickets
              </a>
            </h1>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={gelenek} alt="" className="relative main-img" />{" "}
          <div className=" w-full h-[60px] news absolute bottom-0 md:block hidden bg-gs-red/75">
            <p className=" text-white">
              The tradition has not been broken in the derby. We win 2-1 against
              Beşiktaş Jk at home.
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={mertens} alt="" className="relative main-img" />{" "}
          <div className=" w-full h-[60px] news absolute bottom-12 md:block hidden bg-gs-red/75">
            <p className="text-white text-bold">
              "My first months at the club were incredible. <br /> I couldn't
              have wished for a better welcome. No fan and atmosphere schedule.
              Coming soon..."{" "}
              <a href="##" className="text-gs-yellow">
                watch full interview
              </a>{" "}
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={gsbasket} alt="" className="relative main-img" />{" "}
          <div className=" w-full h-[80px] news absolute bottom-12 md:block hidden bg-gs-red/75">
            <p className="text-white">
              #SarayınSultanları is back with a victory from Slavia Banska
              Bystrica! <br />
              Congratulations{" "}
              <a href="##" className="text-gs-yellow">
                Galatasaray Çağdaş Factoring
              </a>
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={voleyball} alt="" className="relative main-img" />{" "}
          <div className=" w-full h-[100px] md:block hidden news absolute bottom-12  bg-gs-red/75">
            <p className="text-white ">
              Representing our country in the CEV Cup, our Galatasaray HDI
              Sigorta Men's Volleyball Team <br /> defeated Austria's Union
              Raiffeisen Waldviertel team 3-0
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={bilet} alt="" className="relative main-img" />{" "}
          <div className=" w-full h-[80px] news md:block hidden absolute bottom-12  bg-gs-red/75">
            <p className="text-white">
              Galatasaray NEF 2022-2023 season combined general sales period has
              started! <br />
              In the new season, the combinations valid for all home matches
              that Galatasaray Nef will play in the ING Basketball Super League{" "}
              <br /> and FIBA Basketball Champions League are on sale for the
              general public.
              <a href="##" className="text-gs-yellow">
                CLICK TO BUY COMBINED
              </a>
            </p>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Newsslides;
