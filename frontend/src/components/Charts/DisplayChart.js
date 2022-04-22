// import axios from "axios";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
import Prediction from "../../pages/Prediction";
import dataGraph from "../NavbarPre/Dropdown";

// console.log(dataGraph);

// const DisplayCharts = () => {
//   const [charData, setChartData] = useState({});
//   const [pred, setPred] = useState([]);
//   const [actual, setActual] = useState([]);
//   const chart = () => {
//     let pred = [];
//     let actual = [];
//     axios
//       .get("http://127.0.0.1:8000/wel/")
//       .then((res) => {
//         console.log(res);
//         for (const dataObj of res.data.data) {
//           pred.push(parseInt(dataObj.pred));
//           actual.push(parseInt(dataObj.actual));
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log(pred, actual);

//     setChartData({
//       labels: ["x-axis"],
//       datasets: [
//         {
//           label: "y-axis",
//           data: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
//           backgroundColor: ["rgba(75,192,192,0.6)"],
//           borderWidth: 4,
//         },
//       ],
//     });
//   };
// };

// useEffect(() => {});

// const data = {
//   labels: ["Red", "Blue"],
//   // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
//   datasets: [
//     {
//       label: { stock },
//       data: res.data,
//       // you can set indiviual colors for each bar
//       backgroundColor: ["rgba(255, 255, 255, 0.6)"],
//       borderWidth: 1,
//     },
//   ],
// };

import "./App.css";
import react, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

console.log(":::::::::::::::", dataGraph);

const DisplayCharts = () => {
  const [graph, setGraph] =
    useState <
    >
    {
      label: [],
      data: [],
    };

  const [secondGraph, setSecondGraph] =
    useState <
     >
    {
      data: [],
    };

  const firstLineGraphData = [{ pred: dataGraph.pred }];

  const secondLineGraphData = [
    {
      value: 7,
    },
    {
      value: 2,
    },
    {
      value: 9,
    },
  ];

  useEffect(() => {
    const data = [];
    const label = [];

    const second_line_data = [];

    firstLineGraphData?.map((v, index) => {
      data.push(v?.value);
      label.push(index);
    });

    secondLineGraphData?.map((v) => {
      second_line_data.push(v?.value);
    });

    setGraph({
      label: label,
      data: data,
    });

    setSecondGraph({
      data: second_line_data,
    });
  }, []);

  const data = {
    labels: dataGraph.name,
    datasets: [
      {
        label: "pred",
        data: dataGraph.pred,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "actual",
        data: dataGraph.actual,
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="App">
        <h3>React Multi Axis Line Chart Example - CodeCheef </h3>
        <div style={{ height: "500px", width: "500px", margin: "0 auto" }}>
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default DisplayChart;
