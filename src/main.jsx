import React from "react";
import ReactDOM from "react-dom/client";
import AirQualityPage from "./pages/AirQualityPage";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import WaterQuality from "./pages/WaterQuality"; // Corrected typo
// import WeatherMonitor from "./pages/WeatherMonitor"; // Corrected typo

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AirQualityPage />} />
        {/* <Route path="/water-quality-index" element={<WaterQuality />} /> */}
        {/* <Route path="/weather" element={<WeatherMonitor />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
