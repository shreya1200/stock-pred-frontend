// import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { stockContext } from "../../context/stockContext";
// import {
//   HeroContainer,
//   HeroBg,
//   HeroContent,
//   HeroH1,
//   HeroP,
// } from "./HeroSectionPreElements";
// import { Line } from "react-chartjs-2";
// import { chartContext } from "../../context/chartContext";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Chart } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function HeroSectionPre() {
//   const { stock } = useContext(stockContext);
//   const { chartData } = useContext(chartContext);
//   // console.log(chartData);

//   return (
//     <HeroContainer id="home">
//       <HeroBg></HeroBg>
//       <HeroContent>
//         <HeroH1>{stock === "" ? "Stock Market Made Easy" : stock}</HeroH1>
//         <HeroP>
//           <div
//             style={{
//               width: "1000px",
//               height: "400px",
//             }}
//           >
//             <Line data={chartData} />
//             {/* {chartData !== {} && <Line data={chartData} />} */}
//             {/* <div className={styles.container}>
//               {chartData && <Line data={chartData} />}
//             </div> */}
//             "ABC"
//           </div>
//         </HeroP>
//       </HeroContent>
//     </HeroContainer>
//   );
// }

// export default HeroSectionPre;

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
  NewData,
  TechDataVal,
} from "./HeroSectionPreElements";
import { Line } from "react-chartjs-2";
import { chartContext } from "../../context/chartContext";
import { newsContext } from "../../context/newsContext";
import { tweetsContext } from "../../context/tweetsContext";
import { technicalContext } from "../../context/technicalContext";
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
// import CustomListView from "../CustomListView/CustomListView";

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
  const { technicalData } = useContext(technicalContext);
  console.log(";;;;", technicalData);

  return (
    <HeroContainer id="home">
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>
          <u>{stock === "" ? "Stock Market Made Easy" : stock}</u>
        </HeroH1>
        <HeroP>
          <div
            style={{
              width: "700px",
              height: "400px",
            }}
          >
            <Line data={chartData} />
            {/* {chartData !== {} && <Line data={chartData} />} */}
            {/* <div className={styles.container}>
              {chartData && <Line data={chartData} />}
            </div> */}
          </div>
        </HeroP>
      </HeroContent>
      <TechData>
        <TechH1>
          <u>{stock === "" ? "Details" : stock}</u>
        </TechH1>
        <TechDataVal>
          <ul>
            <li>
              <font color="#742774">
                <b>Open : </b>
              </font>
              <font color="grey" size="3">
                {technicalData.open}
              </font>
            </li>
            <li>
              <font color="#742774">
                <b>Low : </b>
              </font>
              <font color="grey" size="3">
                {technicalData.low}
              </font>
            </li>
            <li>
              <font color="#742774">
                <b>High : </b>
              </font>
              <font color="grey" size="3">
                {technicalData.high}
              </font>
            </li>
            <li>
              <font color="#742774">
                <b>Close : </b>
              </font>
              <font color="grey" size="3">
                {technicalData.close}
              </font>
            </li>
            <li>
              <font color="#742774">
                <b>Adjacent Close : </b>
              </font>
              <font color="grey" size="3">
                {technicalData.adjClose}
              </font>
            </li>
            <li>
              <font color="#742774">
                <b>Volume : </b>
              </font>
              <font color="grey" size="3">
                {technicalData.vol}
              </font>
            </li>
          </ul>
          <br></br>
          <hr width="310px"></hr>
          <hr width="310px"></hr>
          <br></br>
          <b>
            <font color="#4dbcc0">Trend Prediction for tomorrow : </font>
          </b>
          <ul>
            <li>{technicalData.tomorrowsPred}</li>
          </ul>
        </TechDataVal>
        {/* <TechH1>{newsData}</TechH1> */}
      </TechData>
    </HeroContainer>
  );
}

export default HeroSectionPre;
