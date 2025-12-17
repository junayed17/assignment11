import React from "react";
import Slider from "./slider/Slider";
import Coverage from "./Coverage";
import LatestBooks from "./LatestBooks";
import WhyChooseUs from "./WhyChooseUs";
import HowItWork from "./HowItWorks";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <LatestBooks />
      <Coverage />
      <WhyChooseUs/>
      <HowItWork />
    </div>
  );
};

export default HomePage;
