import React from "react";
import nikelogo from "../img/nike_PNG11.png";
import nef from "../img/nef.png";
import socios from "../img/socios-com-logo-vector.png";

const Partner = () => {
  return (
  <>
  
   <div className="max-w-[1400px] m-auto">
   <h2 className="text-white text-3xl font-bold p-5">
        Main Partners
      </h2>
<div className="   grid md:grid-cols-3 grid-cols-1 m-auto mt-5 mb-5">
     
      <div className="nike w-[240px] h-[133px] mt-4  bg-white m-auto ">
        <a href="##">
          {" "}
          <img src={nikelogo} alt="" className=" w-[200px] h-[60px] mt-10 ml-5" />
        </a>
      </div>
      <div className="nike w-[240px] m-auto mt-4 h-[133px]">
        {" "}
        <a href="##">
          <img src={nef} alt="" className="w-full h-full" />
        </a>
      </div>
      <div className="nike m-auto mt-4 w-[240px]">
        {" "}
        <a href="##">
          <img src={socios} alt="" className="w-full" />
        </a>
      </div>
    </div>
   </div>
  
  
  </>
  );
};

export default Partner;
