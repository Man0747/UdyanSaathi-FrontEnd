// Function to set the station name
function setStationName(name) {
    window.stationName = name;
}

// Function to get the station name
function getStationName() {
    return window.stationName || '';
}
function setUrl(url) {
    window.urlName = url;
}

// Function to get the station name
function getUrl() {
    return window.urlName || '';
}


function setBaseUrl() {
   
}

// Function to get the station name
function getBaseUrl() {
    window.BaseurlName = "http://127.0.0.1:8000/api/";
    return window.BaseurlName || '';
}

// Export the functions to be used in other scripts
export { setStationName, getStationName,setUrl,getUrl,setBaseUrl,getBaseUrl };
