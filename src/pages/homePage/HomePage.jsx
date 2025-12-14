import React from "react";
import Slider from "./slider/Slider";
import Coverage from "./Coverage";
import LatestBooks from "./LatestBooks";

const HomePage = () => {
  return (
    <div >
      <Slider />
      <Coverage/>
      <LatestBooks/>
    </div>
  );
};

export default HomePage;
