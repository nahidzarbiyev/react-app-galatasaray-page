import React from "react";

import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const socialmedia = () => {
  return (
    <>
      <h1 className=" md:text-2xl text-xl text-white font-bold text-center p-10 ">
        Follow us on Social Media
      </h1>{" "}
      <div className="max-w-[1600px] min-w-[380px] m-auto">
        <div class="grid max-w-[1000px] m-auto md:grid-cols-3 grid-cols-2  xl:grid-cols-6 gap-28 ">
          <a href="##">
            {" "}
            <div className="w-32 flex flex-col justify-center h-[80px] transition-all ml-2 duration-500 lg:hover:scale-110 rounded bg-twitter">
              <FaTwitter className="text-white  text-3xl m-2" />
              <p className="text-[10px] text-white pl-2">Twitter</p>
              <span className="text-sm font-bold text-white pl-2">
                @GalatasaraySK
              </span>
            </div>
          </a>
          <a href="##">
            {" "}
            <div className="w-32 flex flex-col justify-center h-[80px] transition-all ml-2  duration-500 lg:hover:scale-110 rounded bg-facebook">
              <FaFacebook className="text-white text-3xl m-2" />
              <p className="text-[10px] text-white pl-2">Facebook</p>
              <span className="text-sm font-bold text-white pl-2">
                @GalatasaraySK
              </span>
            </div>
          </a>
          <a href="##">
            <div className="w-32 h-[80px] flex flex-col justify-center transition-all ml-2  duration-500 lg:hover:scale-110 rounded  bg-spotify">
              <FaSpotify className="text-white text-3xl m-2" />
              <p className="text-[10px] text-white pl-2">Spotify</p>
              <span className="text-sm font-bold text-white pl-2">
                @Galatasaray
              </span>
            </div>
          </a>
          <a href="##">
            <div className="w-32 h-[80px] flex flex-col justify-center transition-all ml-2  duration-500 lg:hover:scale-110  rounded bg-youtube">
              <FaYoutube className="text-white text-3xl m-2" />
              <p className="text-[10px] text-white pl-2">YouTube</p>
              <span className="text-sm font-bold text-white pl-2">
                @Galatasaray
              </span>
            </div>
          </a>
          <a href="##">
            {" "}
            <div className="w-32 h-[80px] flex flex-col justify-center transition-all ml-2  duration-500 lg:hover:scale-110 rounded bg-tiktok">
              <FaTiktok className="text-white text-3xl m-2" />
              <p className="text-[10px] text-white pl-2">Tiktok</p>
              <span className="text-sm font-bold text-white pl-2">
                @Galatasaray
              </span>
            </div>
          </a>
          <a href="##">
            <div className="w-32 h-[80px] flex flex-col justify-center bg-gradient-to-tr from-instagram via-instagram-third to-instagram-second transition-all duration-500 lg:hover:scale-110 rounded">
              <FaInstagram className="text-white text-3xl m-2" />
              <p className="text-[10px] text-white pl-2">Tiktok</p>
              <span className="text-sm font-bold text-white pl-2">
                @Galatasaray
              </span>
            </div>
          </a>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default socialmedia;
