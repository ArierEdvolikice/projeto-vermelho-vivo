import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SecondScreen from "./SecondScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second-screen" element={<SecondScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
