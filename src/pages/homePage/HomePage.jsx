import React from "react";
import Slider from "./slider/Slider";
// import Coverage from "./Coverage";
import LatestBooks from "./LatestBooks";
import WhyChooseUs from "./WhyChooseUs";
import HowItWork from "./HowItWorks";
import Overview from "./Overview";
import Partner from "./Partner";
import FAQ from "./FAQ";

const HomePage = () => {
  return (
    <div>
      <title>BookCurier | Home</title>
      <Slider />
      <LatestBooks />
      <WhyChooseUs />
      <Overview />
      <HowItWork />
      <Partner/>
      <FAQ/>
    </div>
  );
};

export default HomePage;
