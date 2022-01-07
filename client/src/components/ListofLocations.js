import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

function ListofLocations(props) {
  const [locations, setLocations] = useState([]);

  const showLocation = (location) => {
    props.history.push(`/locations/${location._id}`);
  };

  const getLocations = async () => {
    const res = await axios.get('http://localhost:3001/api/locations');
    setLocations(res.data);
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div key={locations}>
      {locations.locations &&
        locations.locations.map((location) => (
          <div className="location-card" onClick={() => showLocation(location)}>
            <h3>{location.name}</h3>
          </div>
        ))}
    </div>
  );
}

export default ListofLocations;
