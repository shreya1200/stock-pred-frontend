import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Prediction from "./pages/Prediction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="Prediction" element={<Prediction />} />
      </Routes>
    </Router>
  );
}

export default App;
//using routes instead of switch as it is upgraded in es6
