// src/Map.js

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import CustomMapMarker from './CustomMapMarker'; 
import 'leaflet/dist/leaflet.css';

const Map = () => {
    const [data, setData] = useState([]);
    const [userLocation, setUserLocation] = useState({ lat: '', lng: '' });
    const [nearestStation, setNearestStation] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/get-MapData/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching AQI data:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserLocation({ ...userLocation, [name]: value });
    };

    const handleFindNearest = () => {
        if (!userLocation.lat || !userLocation.lng) return;

        const userLat = parseFloat(userLocation.lat);
        const userLng = parseFloat(userLocation.lng);

        let closestStation = null;
        let minDistance = Infinity;

        data.forEach(station => {
            const distance = Math.sqrt(
                Math.pow(station.Latitude - userLat, 2) + Math.pow(station.Longitude - userLng, 2)
            );
            if (distance < minDistance) {
                closestStation = station;
                minDistance = distance;
            }
        });

        setNearestStation(closestStation);
    };

    return (
        <div>
            <div>
                <label>
                    Latitude:
                    <input type="text" name="lat" value={userLocation.lat} onChange={handleInputChange} />
                </label>
                <label>
                    Longitude:
                    <input type="text" name="lng" value={userLocation.lng} onChange={handleInputChange} />
                </label>
                <button onClick={handleFindNearest}>Find Nearest Station</button>
            </div>

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
                        highlight={nearestStation && nearestStation.Station === row.Station}
                    />
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
