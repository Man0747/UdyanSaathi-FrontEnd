import Component5 from "../components/AirQuality/Component5"; 
import Component6 from "../components/AirQuality/Component6";
import Component7 from "../components/AirQuality/Component7";
import Component8 from "../components/AirQuality/Component8";
import Map from "../components/AirQuality/Map";
import ParentComponent from "../components/AirQuality/parentComponent"
function AirQualityPage() {
  return (
    <>
     
      {/* <Navbar /> */}
      {/* <div className="home-row-1 m-5 flex flex-row relative">
        <div className="C1 m-3 rounded-2xl s">
          <Component1 />
        </div>
        <div className="C2 m-3 relative rounded-2xl">
          <Component2 />
        </div>
      </div> */}
      {/* <div className="C3 m-3 rounded-2xl bg-white">
          <Component3 />
        </div> */}
        {/* <div className="C4 m-3 rounded-2xl bg-white">
          <Component4 />
        </div> */}
       <ParentComponent/>
      <div className="home-row-2 flex flex-row relative m-5">
        
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
          <Component8 />
      
          
        </div>
      </div>
      <div className="home-row-6 flex flex-row relative m-5">
        <div className="C8 m-3 rounded-2xl bg-white ">
        </div>
      </div>
      <Map></Map>
      {/* <Carousel/> */}

 
    </>
  );
}

export default AirQualityPage;