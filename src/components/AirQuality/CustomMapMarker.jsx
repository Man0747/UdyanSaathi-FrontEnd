// src/CustomMapMarker.js

import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const createMarkerIcon = (aqi, highlight) => {
    let color = '#34A12B'; // Default color for "Good" AQI
    if (aqi <= 50) {
        color = '#34A12B'; // Good
    } else if (aqi <= 100) {
        color = '#D4CC0F'; // Satisfactory
    } else if (aqi <= 200) {
        color = '#FFA500'; // Moderate
    } else if (aqi <= 300) {
        color = '#FF0000'; // Poor
    } else if (aqi <= 400) {
        color = '#8F3F97'; // Very Poor
    } else {
        color = '#7E0023'; // Severe
    }

    // Change color if highlighted
    if (highlight) {
        color = '#00FFFF'; // Cyan for highlighted marker
    }

    const svg = `<svg width="33" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.205 3.217H6.777c-2.367 0-4.286 1.87-4.286 4.179v19.847c0 2.308 1.919 4.179 4.286 4.179h5.357l5.337 13.58 5.377-13.58h5.357c2.366 0 4.285-1.87 4.285-4.179V7.396c0-2.308-1.919-4.179-4.285-4.179" fill="${color}"/>
                    <text x="50%" y="40%" font-size="18" fill="white" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${aqi}</text>
                </svg>`;
    const icon = new L.DivIcon({
        html: svg,
        className: '',
        iconSize: [35, 45],
        iconAnchor: [17, 45]
    });

    return icon;
};

const CustomMapMarker = ({ position, aqi, station, highlight }) => {
    const markerIcon = createMarkerIcon(aqi, highlight);
    return (
        <Marker position={position} icon={markerIcon}>
            <Popup>{`${station}: AQI ${aqi}`}</Popup>
        </Marker>
    );
};

export default CustomMapMarker;
