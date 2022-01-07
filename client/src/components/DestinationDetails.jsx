import React from 'react';
import { Link } from 'react-router-dom';

const DestinationDetails = ({ destination }) => {
  console.log(destination);
  return (
    <div className="destination-wrapper">
      {destination ? (
        <div className="destination--wraper2">
          <Link className="city--country--name"  to={`/destinations/${destination._id}`}>
          <h3 className='city--conutry--text'>
            {destination.city}, {destination.country}
          </h3>
          </Link>
          <img className="city--avatar"src={destination.img[0]} alt="" />
       
        </div>
      ) : null}
      
    </div>
  );
};

export default DestinationDetails;

// style={{textDecoration: 'none', color: 'white'}}