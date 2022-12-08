import React from "react";
import Hero from "../Hero/Hero";
import Wedo from "../Wedo/Wedo";
import AboutUs from "../AboutUs/AboutUs";
import Shipping from "../Shipping/Shipping";
import Frequently from "../Frequently/Frequently";
import GetTouch from "../GetTouch/GetTouch";
import OurServices from "../OurServices/OurServices";

function Main() {
  return (
    <main>
      <Hero />
      <OurServices />
      <Wedo />
      <AboutUs />
      <Shipping />
      <Frequently />
      <GetTouch />
    </main>
  );
}

export default Main;
