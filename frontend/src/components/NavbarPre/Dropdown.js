import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { FaBars } from "react-icons/fa";
import "./Dropdown.css";
import axios from "axios";
import { stockContext } from "../../context/stockContext";
import { chartContext } from "../../context/chartContext";
import { newsContext } from "../../context/newsContext";
import { tweetsContext } from "../../context/tweetsContext";
import { technicalContext } from "../../context/technicalContext";

function Dropdown() {
  const [click, setClick] = useState(false);
  const [data, setData] = useState({});

  const { stock, setStock } = useContext(stockContext);
  const { chartData, setChartData } = useContext(chartContext);
  const { newsData, setNewsData } = useContext(newsContext);
  const { tweetsData, setTweetsData } = useContext(tweetsContext);
  const { technicalData, setTechnicalData } = useContext(technicalContext);

  // const [chartData, setChartData] = useState({});

  const handleClick = async (keyword, name) => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/wel/",
        {
          name: keyword,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      // console.log(res.data);
      setData(res.data);

      const pred = res.data.pred;
      const actual = res.data.actual;
      const news = res.data.news;
      const tweets = res.data.tweets;
      const technicals = res.data.technicals;
      console.log(":::", technicals);

      // // const pred = res.data.pred.map((name) => res.pred[name]);
      // console.log("pred:", pred);
      // // const actual = res.data.actual.map((name) => res.actual[name]);
      // console.log("actual:", actual);
      // console.log("news:", news);
      // // console.log("tweets:", tweets);
      // console.log({ tweets });
      const labels = [...Array(pred.length).keys()];
      setChartData({
        labels: labels,
        datasets: [
          {
            data: pred,
            label: "Predicted",
            borderColor: "rgba(75,192,192,1)",
            fill: false,
          },
          {
            data: actual,
            label: "Actual",
            borderColor: "#742774",
            // backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: false,
          },
        ],
      });

      setStock(name);
      setNewsData({
        items: news,
      });
      setTweetsData({ items: tweets });
      setTechnicalData({
        open: technicals.open,
        low: technicals.low,
        high: technicals.high,
        close: technicals.close,
        adjClose: technicals.adjClose,
        vol: technicals.vol,
        tomorrowsPred: technicals.tomorrowsPred,
      });
    } catch (err) {
      console.log(err);
    }
    // console.log(name);
  };

  // const [chartData, setChartData] = useState({})

  return (
    <>
      <ul
        // onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li
              key={index}
              className={item.cname}
              onClick={() => handleClick(item.keyword, item.title)}
              // onClick={() => console.log(item.keyword)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
