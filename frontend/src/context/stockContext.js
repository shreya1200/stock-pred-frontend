import { createContext, useState } from "react";

export const stockContext = createContext();
const StockContextProvider = (props) => {
  const [stock, setStock] = useState("");
  return (
    <stockContext.Provider value={{ stock: stock, setStock: setStock }}>
      {props.children}
    </stockContext.Provider>
  );
};
export default StockContextProvider;
