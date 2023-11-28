// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import AnimatedBackground from "../animations/AnimatedBackground";

const Component2 = ({selectedSearch}) => {
  const [state, setState] = useState({
    value: 60, // Default initial value
    color: 'transparent',
  });

  const [pollution, setPollution] = useState([]);

  useEffect(() => {
    getPollutionData();
  }, [selectedSearch]);

  const getPollutionData = async () => {
    try {
      const apiurl = localStorage.getItem('url');
      const response = await fetch(apiurl);
      const data = await response.json();
      console.log('DATA:', data);
      setPollution(data);

      // Set state.value to the AQI value from the first data entry
      if (data.length > 0) {
        setState((prevState) => ({
          ...prevState,
          value: data[0].AQI,
        }));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const setColorForValue = (value) => {
    let color;

    if (value <= 50) {
      color = '#24c45c';
    } else if (value <= 100) {
      color = '#ecb40c';
    } else if (value <= 200) {
      color = '#fc7414';
    } else if (value <= 300) {
      color = '#ec4444';
    } else if (value <= 400) {
      color = '#7c1c1c';
    } else {
      color = '#5c1c84';
    }

    setState((prevState) => ({
      ...prevState,
      color,
    }));
  };

  useEffect(() => {
    setColorForValue(state.value);
  }, [state.value]);

  // const formatDate = (dateString) => {
  //   const options = {
  //     year: 'numeric',
  //     month: 'short',
  //     day: 'numeric',
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     timeZone: 'UTC',
  //   };

  //   const formattedDate = new Date(dateString).toLocaleString('en-US', options);

  //   return formattedDate;
  // };
  return (
    <>
      <div className="C2-container relative rounded-2xl p-9 ">
        <div className="absolute inset-0 rounded-2xl">
          <AnimatedBackground />
        </div>
        <div className="C2-txt-1 mb-7 flex justify-center ">
        {pollution.map((pol,) =>(
              <p key={pol.id}>Major Air pollutants in {pol.City}</p>
               ))}
        </div>
        <div className="poll-container flex flex-col gap-5">
          <div className="poll-row-1 flex flex-row justify-evenly">
            <div className="ic-1">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="20"
                    viewBox="0 0 46 34"
                    fill="none"
                  >
                     <image
            href="/pm2.5-icon.webp"
            width="36"
            height="40"
            x="0"
            y="0"
            preserveAspectRatio="none"
        />
              </svg>
              {pollution.map((pol) =>(
                  <p key={pol.id} className="ic-txt">
                    {pol.PM25}<span className="ic-span">(PM2.5)</span>
                  </p>
              ))}
            </div>
            <div className="ic-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="20"
                viewBox="0 0 46 34"
                fill="none"
              >
                 <image
            href="/pm10-icon.webp"
            width="36"
            height="40"
            x="0"
            y="0"
            preserveAspectRatio="none"
        />
                  </svg>
                  {pollution.map((pol) =>(
                  <p key={pol.id}className="ic-txt">
                    {pol.PM10}<span className="ic-span">(PM10)</span>
                  </p>
               ))}
            </div>
            <div className="ic-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="20"
                viewBox="0 0 46 34"
                fill="none"
              >
                <image
            href="/so2.webp"
            width="36"
            height="40"
            x="0"
            y="0"
            preserveAspectRatio="none"
        />
                  </svg>
                  {pollution.map((pol) =>(
                  <p key={pol.id}className="ic-txt">
                    {pol.SO2}<span className="ic-span">(SO2)</span>
                  </p>
               ))}
            </div>
          </div>
          <div className="poll-row-2 flex flex-row justify-evenly">
            <div className="ic-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="20"
                viewBox="0 0 46 34"
                fill="none"
              >
                <image
            href="/CO.webp"
            width="36"
            height="40"
            x="0"
            y="0"
            preserveAspectRatio="none"
        />
                  </svg>
                  {pollution.map((pol) =>(
                  <p key={pol.id}className="ic-txt">
                    {pol.CO}<span className="ic-span">(CO)</span>
                  </p>
               ))}
            </div>
            <div className="ic-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="20"
                viewBox="0 0 46 34"
                fill="none"
              >
                <image
            href="/o3.webp"
            width="36"
            height="40"
            x="0"
            y="0"
            preserveAspectRatio="none"
        />
                  </svg>
                  {pollution.map((pol) =>(
                  <p key={pol.id} className="ic-txt">
                    {pol.OZONE}<span className="ic-span">(OZONE)</span>
                  </p>
               ))}
            </div>
            <div className="ic-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="20"
                viewBox="0 0 46 34"
                fill="none"
              >
                <image
            href="/no2.webp"
            width="36"
            height="40"
            x="0"
            y="0"
            preserveAspectRatio="none"
        />
                  </svg>
                  {pollution.map((pol) =>(
                  <p key={pol.id}className="ic-txt">
                    {pol.NO2}<span className="ic-span">(NO2)</span>
                  </p>
               ))}
            </div>
          </div>
        </div>
        {/* <div className="C2-txt-2 flex flex-row gap-2 mt-8 items-center">
          <div className="rect bg-red-500 p-2 justify-center items-center text-white rounded-xl">
            <p className="text-xs">PM2.5</p>
            <p className="text-2xl">17.3X</p>
          </div>
          
        </div> */}
        <p className='mt-36'>
          </p>
      </div>
    </>
  );
};

export default Component2;
