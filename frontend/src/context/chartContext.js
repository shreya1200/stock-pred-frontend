import { createContext, useState } from "react";

export const chartContext = createContext();
const ChartContextProvider = (props) => {
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
    ],
  });
  return (
    <chartContext.Provider
      value={{ chartData: chartData, setChartData: setChartData }}
    >
      {props.children}
    </chartContext.Provider>
  );
};
export default ChartContextProvider;
