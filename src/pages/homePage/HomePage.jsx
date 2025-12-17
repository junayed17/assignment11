import React from "react";
import Slider from "./slider/Slider";
import Coverage from "./Coverage";
import LatestBooks from "./LatestBooks";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <div >
      <Slider />
      <Coverage/>
      <LatestBooks/>
      <WhyChooseUs/>
    </div>
  );
};

export default HomePage;
