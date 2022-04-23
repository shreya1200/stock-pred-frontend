import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { stockContext } from "../../context/stockContext";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroSectionPreElements";
import { Line } from "react-chartjs-2";
import { chartContext } from "../../context/chartContext";
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

function HeroSectionPre() {
  const { stock } = useContext(stockContext);
  const { chartData } = useContext(chartContext);
  // console.log(chartData);

  return (
    <HeroContainer id="home">
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>{stock === "" ? "Stock Market Made Easy" : stock}</HeroH1>
        <HeroP>
          <div
            style={{
              width: "1000px",
              height: "400px",
            }}
          >
            <Line data={chartData} />
            {/* {chartData !== {} && <Line data={chartData} />} */}
            {/* <div className={styles.container}>
              {chartData && <Line data={chartData} />}
            </div> */}
            "ABC"
          </div>
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSectionPre;
