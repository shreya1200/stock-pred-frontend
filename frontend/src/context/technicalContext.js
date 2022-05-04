import { createContext, useState } from "react";

export const technicalContext = createContext();
const TechnicalContextProvider = (props) => {
  const [technicalData, setTechnicalData] = useState({
    open: 1234,
    low: 1234,
    high: 1234,
    close: 1234,
    adjClose: 1234,
    vol: 1234,
    tomorrowsPred: "positive",
  });
  return (
    <technicalContext.Provider
      value={{
        technicalData: technicalData,
        setTechnicalData: setTechnicalData,
      }}
    >
      {props.children}
    </technicalContext.Provider>
  );
};
export default TechnicalContextProvider;
