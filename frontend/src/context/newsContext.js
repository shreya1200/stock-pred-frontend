import { createContext, useState } from "react";

export const newsContext = createContext();
const NewsContextProvider = (props) => {
  const [newsData, setNewsData] = useState({
    items: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  });
  return (
    <newsContext.Provider
      value={{ newsData: newsData, setNewsData: setNewsData }}
    >
      {props.children}
    </newsContext.Provider>
  );
};
export default NewsContextProvider;
