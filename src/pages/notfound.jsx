import React from "react";
import GSlogo from "../img/GS-logo.png";

const notfound = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center pt-[200px] flex-col">
      <div className="flex flex-row items-center justify-center">
        <span className="text-9xl mr-10 text-gs-yellow">4</span>
        <img src={GSlogo} alt="" className="w-[300px]" />
        <span className="text-9xl ml-10 text-gs-yellow">4</span>
      </div>

      <p className="text-9xl text-gs-yellow">not Found</p>
    </div>
  );
};

export default notfound;
