import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../../../components/HowItWorks ";
import Services from "../../../components/Services";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
    </div>
  );
};

export default Home;
