import React from 'react';
import { Link } from 'react-router-dom';

const DestinationDetails = ({ destination }) => {
  console.log(destination);
  return (
    <div>
      {destination ? (
        <div>
          <Link to={`/destinations/${destination._id}`}>
          <h3>
            {destination.city}, {destination.country}
          </h3>
          </Link>
          
          {destination.img.map((image, i) => (
            <img key={i} src={image}></img>
          ))}
        </div>
      ) : null}
      
    </div>
  );
};

export default DestinationDetails;
