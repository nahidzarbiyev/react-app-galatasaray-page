import React from "react";
import GamesFeatures from "./GamesFeatures";
import GsStoreSmall from "./GsStoreSmall";
import News from "./News";
import Only from "./Only";

const JournalSection = () => {
  return (
    <div className="max-w-[1400px] m-auto rounded p-10  bg-white">
      <GsStoreSmall />
      <Only />
      <GamesFeatures />
      <News />
    </div>
  );
};

export default JournalSection;
