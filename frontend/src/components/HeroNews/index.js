import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { stockContext } from "../../context/stockContext";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  TechData,
  TechH1,
  NewsDiv,
  HeadH1,
  HeroContentTweets,
} from "./HeroNews";
import { Line } from "react-chartjs-2";
import { chartContext } from "../../context/chartContext";
import { newsContext } from "../../context/newsContext";
import { tweetsContext } from "../../context/tweetsContext";
import CustomListView from "../CustomListView/CustomListView";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function HeroNews() {
  const { stock } = useContext(stockContext);
  const { chartData } = useContext(chartContext);
  const { newsData } = useContext(newsContext);
  // console.log("==============", newsData);
  const { tweetsData } = useContext(tweetsContext);
  // console.log(tweetsData);

  // console.log(chartData);

  return (
    <HeroContainer id="home">
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>
          <u>News : {stock === "" ? "Stock Name" : stock}</u>
        </HeroH1>
        <HeroP>
          <div>{newsData.items}</div>
        </HeroP>
      </HeroContent>
      <HeroContentTweets>
        <HeroH1>
          <u>Social Media : {stock === "" ? "Stock Name" : stock}</u>
        </HeroH1>
        <HeroP>
          <div>{tweetsData.items}</div>
        </HeroP>
      </HeroContentTweets>
    </HeroContainer>
  );
}

export default HeroNews;
