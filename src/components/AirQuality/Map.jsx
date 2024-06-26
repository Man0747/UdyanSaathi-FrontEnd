import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import CustomMapMarker from './CustomMapMarker'; 
import 'leaflet/dist/leaflet.css';
import { getBaseUrl } from '../Connectivity/storageHelper';

const Map = () => {
    const [data, setData] = useState([]);
    const [userLocation, setUserLocation] = useState(null);
    const [nearestStation, setNearestStation] = useState(null);
    const popups = useRef([]);

    useEffect(() => {
        const baseurl = getBaseUrl();
        fetch(`${baseurl}get-MapData/`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching AQI data:', error));

        // Get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    useEffect(() => {
        if (userLocation && data.length > 0) {
            findNearestStation(userLocation);
        }
    }, [userLocation, data]);

    const findNearestStation = (location) => {
        const userLat = parseFloat(location.lat);
        const userLng = parseFloat(location.lng);
        console.log("Lat:",userLat);
        console.log("Lng:",userLng);
        let closestStation = null;
        let minDistance = Infinity;

        data.forEach((station, index) => {
            const distance = Math.sqrt(
                Math.pow(station.Latitude - userLat, 2) + Math.pow(station.Longitude - userLng, 2)
            );
            if (distance < minDistance) {
                closestStation = station;
                minDistance = distance;
            }
        });

        setNearestStation(closestStation);

        // Find the index of the nearest station in the data array
        const nearestIndex = data.findIndex(station => station === closestStation);

        // Trigger the popup of the nearest station
        if (nearestIndex !== -1 && popups.current[nearestIndex]) {
            popups.current[nearestIndex].openPopup();
        }
    };

    return (
        <div>
            <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100vh', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {data.map((row, index) => (
                    <CustomMapMarker
                        key={index}
                        position={[row.Latitude, row.Longitude]}
                        aqi={row.AQI}
                        station={row.Station}
                        city={row.City}
                        polDate={row.Pol_Date}
                        Latitude={row.Longitude}
                        Longitude={row.Latitude}
                        highlight={nearestStation && nearestStation.Station === row.Station}
                        ref={(el) => popups.current[index] = el}
                    />
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
