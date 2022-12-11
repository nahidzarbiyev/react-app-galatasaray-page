import React from "react";
import Branchesnews from "./branchesnews";
import Photos from "./photos";

const more = () => {
  return (
    <div className="max-w-[1400px] m-auto rounded p-10  bg-white">
      <Branchesnews />
      <Photos />
    </div>
  );
};

export default more;
