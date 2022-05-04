// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ChartContextProvider from "./context/chartContext";
import NewsContextProvider from "./context/newsContext";
import StockContextProvider from "./context/stockContext";
import TechnicalContextProvider from "./context/technicalContext";
import TweetsContextProvider from "./context/tweetsContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <StockContextProvider>
    <ChartContextProvider>
      <NewsContextProvider>
        <TweetsContextProvider>
          <TechnicalContextProvider>
            <App />
          </TechnicalContextProvider>
        </TweetsContextProvider>
      </NewsContextProvider>
    </ChartContextProvider>
  </StockContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
