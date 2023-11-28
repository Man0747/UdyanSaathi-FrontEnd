import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import Component1 from "./Component1";
import Component2 from "./Component2";
function ParentComponent() {
  const [selectedSearch, setSelectedSearch] = useState('');

  const handleSearchSelected = (search) => {
    setSelectedSearch(search);
  }

  return (
    <div>
        <Navbar onSearchSelected={handleSearchSelected} />
        <div className="home-row-1 m-5 flex flex-row relative">
        <div className="C1 m-3 rounded-2xl s">
          <Component1 selectedSearch={selectedSearch}/>
        </div>
        <div className="C2 m-3 relative rounded-2xl">
          <Component2 selectedSearch={selectedSearch}/>
        </div>
      </div>
    </div>
  );
}

export default ParentComponent;
