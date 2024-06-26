import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Component1 from "../components/AirQuality/Component1";
import Component2 from "../components/AirQuality/Component2";
import Component3 from "../components/AirQuality/Component3";
import Component4 from "../components/AirQuality/Component4";
import Component5 from "../components/AirQuality/Component5"; 
import Component6 from "../components/AirQuality/Component6";
import Component7 from "../components/AirQuality/Component7";
import Component8 from "../components/AirQuality/Component8";
import Map from "../components/AirQuality/Map";
import { setStationName } from '../components/Connectivity/storageHelper';
function AirQualityPage() {
  const [selectedSearch, setSelectedSearch] = useState('');
  const [dangerAlert, setDangerAlert] = useState(null);

  const handleSearchSelected = (search) => {
    setSelectedSearch(search);
    setStationName(search);
  };

  const [childData, setChildData] = useState(null);

  const handleChildData = (data) => {
    console.log("Data received from child:", data);

    checkPollutionConditions(data);
    setChildData(data);
  };

  const checkPollutionConditions = (data) => {
    const { OZONE, CO, PM10, PM25, NO2, SO2 } = data[0];
    let maxPollutant = null;

    if (OZONE > 30) {
      maxPollutant = {
        level: "Danger",
        message: "Crop burning may be the cause.",
        chemical: "Ozone",
        amount: OZONE,
      };
    }
    if (CO > 60) {
      maxPollutant = {
        level: "Danger",
        message: "Cars may be contributing to the pollution.",
        chemical: "Carbon Monoxide (CO)",
        amount: CO,
      };
    }
    if (PM10 > 200 || PM25 > 200) {
      const maxPM = PM10 > PM25 ? PM10 : PM25;
      maxPollutant = {
        level: "Danger",
        message: "Dust pollution is high.",
        chemical: `Particulate Matter (${maxPM === PM10 ? "PM10" : "PM2.5"})`,
        amount: maxPM,
      };
    }
    if (NO2 > 80) {
      maxPollutant = {
        level: "Danger",
        message: "Factories may be emitting nitrogen dioxide.",
        chemical: "Nitrogen Dioxide (NO2)",
        amount: NO2,
      };
    }
    if (SO2 > 70) {
      maxPollutant = {
        level: "Danger",
        message: "Factories may be emitting sulfur dioxide.",
        chemical: "Sulfur Dioxide (SO2)",
        amount: SO2,
      };
    }

    if (maxPollutant) {
      setDangerAlert(maxPollutant);
    } else {
      setDangerAlert(null);
    }
  };

  console.log("Hello", childData);

  return (
    <>
    <div>
      <Navbar onSearchSelected={handleSearchSelected} />
      {dangerAlert && (
        <div
          role="alert"
          className="alert-container aa px-8 mt-3 rounded-xl animated"
        >
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            {dangerAlert.level}
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{dangerAlert.message}</p>
            <p>
              Chemical: {dangerAlert.chemical}, Amount: {dangerAlert.amount}
            </p>
          </div>
        </div>
      )}
        <div className="home-row-1 m-5 flex flex-row relative">
        <div className="C1 m-3 rounded-2xl s">
          <Component1 selectedSearch={selectedSearch}/>
        </div>
        <div className="C2 m-3 relative rounded-2xl">
          <Component2 selectedSearch={selectedSearch}  onData={handleChildData}/>
        </div>
        
      </div>
      <div className="home-row-2 flex flex-row relative m-5">
        <div className="C3 m-3 rounded-2xl bg-white">
          <Component3 />
        </div>
        <div className="C4 m-3 rounded-2xl bg-white">
          <Component4 />
        </div>
      </div>
    </div>
    <div className="home-row-3 flex flex-row relative m-5">
        <div className="C5 m-3 rounded-2xl bg-white">
          <Component5 />
        </div>
        <div className="C6 m-3 rounded-2xl bg-white">
          <Component6 />
        </div>
      </div>
      <div className="home-row-4 flex flex-row relative m-5">
        <div className="C7 m-3 rounded-2xl bg-white">
          <Component7 />
        </div>
      </div>
      <div className="home-row-5 flex flex-row relative m-5">
        <div className="C8 m-3 rounded-2xl bg-white ">
          <Component8 selectedSearch={selectedSearch}/>
      
          
        </div>
      </div>
      <div className="home-row-6 flex flex-row relative m-5">
        <div className="C8 m-3 rounded-2xl bg-white ">
        </div>
      </div>
      <Map></Map>
      </>
  );
}

export default AirQualityPage;
