import React, { useState } from 'react';
import './MapPage.css';

const MapPage = () => {
  const [locations, setLocations] = useState([
    { id: 1, name: 'Paris', status: 'available' },
    { id: 2, name: 'New York', status: 'error' },
    { id: 3, name: 'Tokyo', status: 'available' },
    { id: 4, name: 'Sydney', status: 'error' },
  ]);

  return (
    <div className="map-page">
      <h2>Map Locations</h2>
      <ul className="location-list">
        {locations.map((location) => (
          <li
            key={location.id}
            className={`location-item ${location.status}`}
          >
            <h3>{location.name}</h3>
            <p>Status: {location.status === 'available' ? 'Available' : 'Error'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapPage;
