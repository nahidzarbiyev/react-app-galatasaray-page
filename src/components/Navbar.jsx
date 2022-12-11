import React, { useRef } from "react";
import { useState } from "react";
import GSlogo from "../img/GS-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import {CiCircleRemove} from "react-icons/ci"
import { FaTiktok } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai"
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";

const Navbar = () => {
  const loginRef = useRef();
  const  loginDiv = useRef();
  const loginremove = useRef();
  const outlinemenuRef = useRef();
  const menudiv = useRef();
  const autlineclose = useRef();



  const openLogin = (e) => {
    const clickedLogin = e.target;

    if (clickedLogin.classList.contains("l-icon")) {
      loginDiv.current.classList.add("active")
 
    }
  };

  const closelogin = (e) => {

   const removedLogin = e.target;

    if (removedLogin.classList.contains("r-icon")) {
      loginDiv.current.classList.remove("active")
 
    }
  }

  const menuOutlineiconopen = (e)=>{
    const menuicon = e.target;
    if(menuicon.classList.contains("s-menu")){
      menudiv.current.classList.add("active-menu")
    }
  }

  const menuOutlineiconclose = (e)=>{
    const menuiconclose = e.target;
    if(menuiconclose.classList.contains("x-menu")){
      menudiv.current.classList.remove("active-menu")
    }
  }


  const [selected, setSelected] = useState("TR");
  return (
    <>
      <header className="w-full fixed  z-10 h-36 bg-gs-red  ">
        <div className="main-navbar-sec md:block lg:flex lg:max-w-[1900px]  m-auto">
          <div className="GS-name bg-gs-red flex justify-center items-center lg:w-72 m-auto lg:h-36 border-[1px] border-gray-600 hover:bg-opacity-90 ">
            <Link to="/" className="flex lg:p-0 p-4">
              <img src={GSlogo} alt="" className="w-[38px] h-18 " />
              <span className="text-gs-yellow text-3xl font-bold mt-7 ml-2">
                Galata
              </span>
              <span className="text-gs-yellow text-3xl font-bold mt-7 ">
                saray
              </span>
            </Link>

            <div className="absolute left-0 lg:hidden  top-0 z-10">
            <div className="   p-5  z-10 text-5xl ">
            <AiOutlineMenu className="text-gs-yellow s-menu cursor-pointer w-[50px] h-[50px] bg-transparent" ref={outlinemenuRef} onClick={menuOutlineiconopen}/>
            </div>
           

            <div className="w-[100vw] h-[100vh] flex justify-center menu-nav items-center bg-gs-red" ref={menudiv}>
            <div className="   p-5  z-10 text-5xl absolute right-0 top-0 ">
            <AiOutlineClose className="text-gs-yellow x-menu z-10 cursor-pointer w-[50px] h-[50px] bg-transparent" ref={autlineclose} onClick={menuOutlineiconclose}/>
            </div>
               <ul className="text-center  text-gs-yellow text-2xl font-bold">
               <li className="mb-5 "><Link to="/">Home</Link></li>
                <li className="mb-5 "><Link to="/firstteam">First Team</Link></li>
                <li className="mb-5 "><Link to="/neftstadium">Nef Stadium</Link ></li>
                <li className="mb-5 "><Link to="/gsstore">GS store</Link></li>
                <li className="mb-5 "><Link to="/gstv"> GS tv</Link></li>
                <li className="mb-5 "><Link to="/club"> GS Club</Link></li>
                <li className="mb-5 "><Link to="/branches"> Branches</Link></li>
                <li> <div className="search-input  flex  p-0 relative">
                <input
                  type="search "
                  className="outline-none w-[90vw] bg-transparent border-b-2 p-6 h-8 pl-4 pr-8 text-xl rounded "
                />

                <div className="text-gs-yellow font- text-3xl flex justify-end cursor-pointer absolute right-0 top-[2px] ">
                  <AiOutlineSearch  className=""/>
                </div>
              </div></li>
               </ul>
            </div>
          </div>

          </div>
          <div className="GS-nav-comp w-full  border-[1px] border-gray-600">
            <div className="GS-nav-top flex bg-gs-red justify-between ">
              <div className="GS-follow-sec hidden lg:flex items-center justify-start p-2 bg-gs-red ">
                <span className="text-gs-yellow    md:text-[16px]">
                  Follow us on social media
                </span>
                <ul className="flex list-none ">
                  <li>
                    <a href="##">
                      <FaFacebookF className="text-2xl  text-white opacity-80 hover:opacity-100 ml-2" />
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <AiOutlineTwitter className="text-3xl text-white opacity-80 hover:opacity-100 ml-2" />
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <AiOutlineInstagram className="text-3xl text-white opacity-80 hover:opacity-100 ml-2" />
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <FaTiktok className="text-2xl text-white opacity-80 hover:opacity-100 ml-2" />
                    </a>
                  </li>
                </ul>
              </div>

              <ul className="flex list-none m-auto lg:m-0 text-gs-yellow pr-10 pt-2">
                <li className=" mr-4 uppercase font-medium">
                  <span
                    href="##"
                    className="flex items-center cursor-pointer l-icon "
                    ref={loginRef}
                    onClick={openLogin}
                  >
                    {" "}
                    <AiOutlineUser className="text-white text-2xl  " />
                    Login{" "}
                  </span>

                  <div className="absolute  login-box " ref={loginDiv}>
                    <CiCircleRemove className="text-3xl r-icon  absolute right-5 top-5 cursor-pointer transition-all duration-500 focus:hover:scale-110" ref={loginremove} onClick={closelogin}/>
                  <form action="">
                  <h2>Login</h2>
                    <div className="userbox">
                      {" "}
                      <input type="text" required />
                      <label htmlFor=""> username</label>
                    </div>
                    <div className="userbox">
                      {" "}
                      <input type="password" required/>
                      <label htmlFor="">password</label>
                    </div>
                    <div className="button-form" ><a href="##" className="submit-btn">submit</a>

                  <div className="register">
                    Don't I have an account ?
                    <a href="##">Register</a>
                  </div>
                    
                    </div>
                  </form>
                  </div>
                </li>
                <img
                  src={GSlogo}
                  alt=""
                  className="w-3 h-6 md:block hidden mr-2"
                />{" "}
                <li className="  mr-4 uppercase  font-medium">
                  <a href="##" className="md:text-16px text-[10px]">
                    {" "}
                    Register in gs app{" "}
                  </a>
                </li>
                <li className="mr-4 ml-1 uppercase font-medium flex ">
                  {" "}
                  <FaLanguage className="mr-4 text-white text-3xl" />
                  <div>
                    <ReactFlagsSelect
                      className="text-gs-yellow outline-none -m-1 flag-select"
                      countries={["US", "GB", "FR", "DE", "IT", "TR"]}
                      onSelect={(code) => setSelected(code)}
                      selected={selected}
                    />
                  </div>
                </li>
              </ul>
            </div>

            <div className=" GS-nav-bottom hidden h-18 lg:flex lg:justify-between w-full pt-[22px] pb-[22px]  bg-gs-red  border-gray-600">
              <div className="text-gs-yellow font-medium md:text-[1.2vw] border-l-2 pl-2 transition-all   relative drop-down-main ">
                <Link to="/firstteam" className="">
                  First team
                </Link>
                <div className="drop-down-menu absolute top-[75px] -left-10 z-30">
                  <div className=" flex justify-start items-center  w-60 h-60 rounded text-gs-yellow font-medium text-xl ">
                    <ul className="  w-60 h-60  border-r-2 rounded-l-md border-gray-600 bg-gs-red">
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">Latest</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">Schedule</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">tickets</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">results</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">standings</a>
                      </li>
                    </ul>
                    <ul className="  w-60 h-60  border-r-2 rounded-r-md bg-gs-red">
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">Players</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">Photos</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">honours</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">features</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-gs-yellow relative font-medium md:text-[1.2vw] border-l-2 pl-2 transition-all hover:opacity-70 drop-down-main">
                <Link to="/neftstadium">NEF stadium</Link>
                <div className="drop-down-menu absolute top-[75px] -left-10 z-30">
                  <div className=" flex justify-start items-center  w-60 h-60 rounded text-gs-yellow font-medium text-xl ">
                    <ul className="  w-60 h-60  border-r-2 rounded-l-md border-gray-600 bg-gs-red">
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">tours</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">GSstore</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">history</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">Museum</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">members</a>
                      </li>
                    </ul>
                    <ul className="  w-60 h-60  border-r-2 rounded-r-md bg-gs-red">
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">tickets</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">buildings</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">honours</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">features</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-gs-yellow relative font-medium md:text-[1.2vw] border-l-2 pl-2 transition-all  hover:opacity-70 drop-down-main">
                <Link to="/gsstore">GS store</Link>
                <div className="drop-down-menu absolute top-[75px] -left-10 z-30">
                  <div className=" flex justify-start items-center  w-60 h-60 rounded text-gs-yellow font-medium text-xl ">
                    <ul className="  w-60 h-60  border-r-2 rounded-l-md border-gray-600 bg-gs-red">
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">First team</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">Women's</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">Child</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">kits</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">summer season</a>
                      </li>
                    </ul>
                    <ul className="  w-60 h-60  border-r-2 rounded-r-md bg-gs-red">
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">Players</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">new season </a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">retro</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-36 flex items-center justify-center h-12">
                        <a href="##">old seasons</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-gs-yellow relative font-medium md:text-[1.2vw] border-l-2 pl-2 transition-all  hover:opacity-70 drop-down-main">
                {" "}
                <Link to="/gstv"> GS tv</Link>
                <div className="drop-down-menu absolute top-[75px] -left-10 z-30">
                  <div className=" flex justify-start items-center  w-60 h-60 rounded text-gs-yellow font-medium text-xl ">
                    <ul className="  w-60 h-60  border-r-2 rounded-l-md border-gray-600 bg-gs-red">
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-full flex items-center justify-center h-12">
                        <a href="##">Home</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-full flex items-center justify-center h-12">
                        <a href="##">LIVE tv</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-full flex items-center justify-center h-12">
                        <a href="##">Football highlights</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-full flex items-center justify-center h-12">
                        <a href="##">Gs Bsketball matches</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-full flex items-center justify-center h-12">
                        <a href="##">Voleyball leaugue</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-gs-yellow relative font-medium md:text-[1.2vw] border-l-2 pl-2 transition-all hover:opacity-70 drop-down-main">
                <Link to="/club">Club</Link>

                <div className="drop-down-menu absolute top-[75px] -left-10 z-30">
                  <div className=" flex justify-start items-center  w-80 h-80 rounded text-gs-yellow font-medium text-sm ">
                    <ul className="  w-80 h-80  border-r-2 rounded-l-md border-gray-600 bg-gs-red">
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-40 flex items-center justify-center h-8">
                        <a href="##">First team</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-40 flex items-center justify-center h-8">
                        <a href="##">branches</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-40 flex items-center justify-center h-8">
                        <a href="##">history</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-40 flex items-center justify-center h-8">
                        <a href="##">prouds</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-40 flex items-center justify-center h-8">
                        <a href="##">members</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-40 flex items-center justify-center h-8">
                        <a href="##">More than a club</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-40 flex items-center justify-center h-8">
                        <a href="##">Partners</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-40 flex items-center justify-center h-8">
                        <a href="##">İdenty</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-40 flex items-center justify-center h-8">
                        <a href="##">Galatasaray High School</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-40 flex items-center justify-center h-8">
                        <a href="##">Galatasaray Academy</a>
                      </li>
                    </ul>
                    <ul className="  w-80 h-80  border-r-2 rounded-r-md bg-gs-red">
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-42 flex items-center justify-center h-8">
                        <a href="##">Players</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-42 flex items-center justify-center h-8">
                        <a href="##">Photos</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-42 flex items-center justify-center h-8">
                        <a href="##">Florya Metin Oktay Camp</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-42 flex items-center justify-center h-8">
                        <a href="##">Gala events</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-42 flex items-center justify-center h-8">
                        <a href="##">Child Potection System</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-42 flex items-center justify-center h-8">
                        <a href="##">Organization</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-42 flex items-center justify-center h-8">
                        <a href="##">Sporting Management</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-42 flex items-center justify-center h-8">
                        <a href="##">Services</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-42 flex items-center justify-center h-8">
                        <a href="##">Contact</a>
                      </li>
                      <li className="hover:bg-gs-yellow rounded-md hover:text-gs-red w-42 flex items-center justify-center h-8">
                        <a href="##">press</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-gs-yellow relative font-medium md:text-[1.2vw] border-l-2 pl-2 transition-all  hover:opacity-70 drop-down-main">
                <Link to={"/branches"}> Branches</Link>
                <div className="drop-down-menu absolute -left-[60vw] top-[75px] w-full z-30">
                  <div className="flex justify-end w-[80vw] min-h-64 bg-gs-red">
                       <div className=" w-[17%] pl-[3vw] pt-5">
                        <h4 className="md:text-[1.2vw] text-gs-yellow text-bold pt-5">
                          Galatasaray 
                          teams
                        </h4>

                       </div>
                    <ul>
                      
                      
                    </ul>
                    <div className=" w-[17%] pl-[3vw] pt-5">
                      <ul>
                        <li className="md:text-[1.2vw] text-gs-yellow text-bold">
                          Football
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">First Team</a>
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">Women's</a>
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">Gala academy</a>
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">Gs youth</a>
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">Gs summer camp</a>
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">Galata LEGENDS</a>
                        </li>
                      </ul>
                    </div>
                    <div className=" w-[17%] pl-[3vw] pt-5">
                      <ul>
                        <li className="md:text-[1.2vw] text-gs-yellow text-bold">
                          Basketball
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">First team</a>
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">Women's</a>
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">Gala academy</a>
                        </li>
                      </ul>
                    </div>
                    <div className=" w-[17%] pl-[3vw] pt-5">
                      <ul>
                        <li className="md:text-[1.2vw] text-gs-yellow hover text-bold">
                          Voleyball
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">First Team</a>
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">Women's</a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-[17%] pl-[3 vw] pr-10 pt-5">
                      <ul className="">
                        <li className="md:text-[1.2vw] text-gs-yellow text-bold">
                          Waterball
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">First Team</a>
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">Women's</a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-[22%] pl-4 pr-16 pt-5 border-l-2">
                      <ul className="">
                        <li className="md:text-[1.2vw] text-gs-yellow text-bold">
                          GS E-sport
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">PUBG</a>
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">PUBG Women's</a>
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">League of legends </a> 
                        </li>
                        <li className="text-white md:text-[1vw] p-[2px] hover:text-gs-yellow">
                          <a href="##">Gs e-football team</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="search-input  flex  p-0 mr-2 relative">
                <input
                  type="search "
                  className="outline-none w-[300px] p-2 h-8 pl-4 pr-8 text-sm rounded "
                />

                <div className="text-gs-yellow font- text-3xl flex justify-end cursor-pointer absolute right-0 top-[2px] ">
                  <AiOutlineSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
