import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { FaBars } from "react-icons/fa";
import "./Dropdown.css";
import axios from "axios";
import { stockContext } from "../../context/stockContext";

function Dropdown() {
  const [click, setClick] = useState(false);
  const [data, setData] = useState({});

  const { stock, setStock } = useContext(stockContext);

  const handleClick = async (keyword, name) => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/wel/",
        {
          name: keyword,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res.data);
      setData(res.data);
      setStock(name);
    } catch (err) {
      console.log(err);
    }
    // console.log(name);
  };

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
