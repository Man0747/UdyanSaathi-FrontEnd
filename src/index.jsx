import React from "react";
import ReactDOM from "react-dom/client";
import AirQualityPage from "./pages/AirQualityPage";
// import WeatherMonitor from "./pages/WeatherMonitor"; // Ensure correct import path
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import WaterQuality from "./pages/WaterQuality"; // Corrected typo and path

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AirQualityPage />} />
        {/* <Route path="/water-quality-index" element={<WaterQuality />} />  */}
        {/* <Route path="/weather2" element={<WeatherMonitor />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
