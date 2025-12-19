import React from "react";
import Slider from "./slider/Slider";
import Coverage from "./Coverage";
import LatestBooks from "./LatestBooks";
import WhyChooseUs from "./WhyChooseUs";
import HowItWork from "./HowItWorks";
import Overview from "./Overview";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <LatestBooks />
      <Coverage />
      <WhyChooseUs />
      <Overview />

      <HowItWork />
    </div>
  );
};

export default HomePage;
