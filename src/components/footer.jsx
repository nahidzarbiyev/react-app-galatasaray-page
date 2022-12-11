import React from "react";
import GSlogo from "../img/GS-logo.png";
import { Link } from "react-router-dom";

// import playerJson from "../api/players.json";

// import { useState }   from "react";

const footer = () => {
  // const [oyuncu,  seyOyuncu] = useState ([]);

  return (
    <>
      <div className="max-w-[1400px] m-auto rounded p-10 ">
        <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-4">
          <div>
            <ul>
              <li className="text-white text-sm  pb-2">
                <h4 className="text-white text-2xl font-bold pb-10">
                  Goalkippers
                </h4>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#01 Fernando Muslera </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##"> #34 Okan Kocuk </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#50 Jankat Yilmaz </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-white text-sm   pb-2">
                <h4 className="text-white text-2xl font-bold pb-10">
                  Defenders
                </h4>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#25 Victor Nelsson </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##"> #42 Abdulkerim Bardakci </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#40 Emin Bayram </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#90 Metehan Baltaci </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#3 Patrick Van Aanholt </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#88 Kazimcan Karatas </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#13 Emre Tasdemir </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#93 Sacha Boey </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#2 Leo Dubois </a>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <ul>
              <li className="text-white text-sm   pb-2">
                <h4 className="text-white text-2xl font-bold pb-10">
                  Midfilders
                </h4>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#5 Lucas Torreira </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##"> #63 Barn Aksaka </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#6 Fredrick midtsjo </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#27 Sergio Oliveira </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#22 Berkan Kutlu </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#64 Juan Mata </a>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <ul>
              <li className="text-white text-sm   pb-2">
                <h4 className="text-white text-2xl font-bold pb-10">
                  Forwards
                </h4>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#7 Kerem Akturkoglu</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##"> #53 Baris Yilmaz</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#611 Yunus Akgun </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#30 Yusuf Demir </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#26 Milot Rashica </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#99 Mauro Icardi </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#9 Haris Seferovic</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#10 Dries Mertens </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">#18 Bafetimbi Gomis </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-white text-sm   pb-2">
                <h4 className="text-white text-2xl font-bold pb-10">
                  Our Products
                </h4>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Gs TV</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##"> Gs store</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Gs Apps </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Ticket and museums </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Gs TV App </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Online Store </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Support & FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-white text-sm   pb-2">
                <h4 className="text-white text-2xl font-bold pb-10">Club</h4>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Nef Stadium</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##"> Florya camps</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Galatasaray highschool</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Academy </a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Branches</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Work at the GsStore </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="text-white text-sm pb-2">
                <h4 className="text-white text-2xl font-bold pb-10">history</h4>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Ali Sami Yen</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##"> 1999-2003 golden era</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Metin Oktay</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Fatih Terim</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">1905-1911 Foundation and survival</a>
              </li>
              <li className="text-white text-sm  transition-all duration-500 hover:opacity-100 opacity-60 pb-2">
                <a href="##">Galatasaray in Europe </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer grid grid-cols-1 ">
          <div className="GS-name bg-gs-red flex md:m-auto flex-wrap justify-center items-center w-80 h-32  border-gray-600 hover:bg-opacity-90 ">
            <Link to="/" className="flex">
              <img src={GSlogo} alt="" className="w-[45px] h-18 " />
              <span className="text-gs-yellow text-3xl font-bold mt-7 ml-2">
                Galata
              </span>
              <span className="text-gs-yellow text-3xl font-bold mt-7 ">
                saray
              </span>
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 ">
            <span className="text-white pl-10 md:text-center lg:text-left">
              &copy; Copyright SK Galatasaray Official Website of SK Galatasaray
            </span>
            <ul className="grid grid-cols-6 md:pt-10 pt-10 lg:pt-0 justify-between text-[10px] md:text-sm lg:text-sm text-white \">
              <li className="transition-all duration-500 hover:opacity-100 opacity-60 pb-2 hover:scale-110">
                <a href="##">Legal Terms</a>
              </li>
              <li className="transition-all duration-500 hover:opacity-100 opacity-60 pb-2 pl-2 hover:scale-110">
                <a href="##">Pivacy policy</a>
              </li>
              <li className="transition-all duration-500 hover:opacity-100 opacity-60 pb-2 pl-2 hover:scale-110">
                <a href="##">Cookies</a>
              </li>
              <li className="transition-all duration-500 hover:opacity-100 opacity-60 pb-2 pl-2 hover:scale-110">
                <a href="##">Accesibility</a>
              </li>
              <li className="transition-all duration-500 hover:opacity-100 opacity-60 pb-2 pl-2 hover:scale-110">
                <a href="##">Contact Us</a>
              </li>
              <li className="transition-all duration-500 hover:opacity-100 opacity-60 pb-2 pl-2 hover:scale-110">
                <a href="##">Support FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
