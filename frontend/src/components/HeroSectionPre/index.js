import React, { useContext } from "react";
import { stockContext } from "../../context/stockContext";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroSectionPreElements";

function HeroSectionPre() {
  const { stock } = useContext(stockContext);
  return (
    <HeroContainer id="home">
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>{stock === "" ? "Stock Market Made Easy" : stock}</HeroH1>
        <HeroP>
          Sign up for a new account today and get into the world of stock market
          and get an idea of the trend the stock will follow
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSectionPre;
