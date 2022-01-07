import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadLocations } from '../store/actions/LocationActions';
import LocationCard from './LocationCard';

const mapStateToProps = ({ locationState }) => {
  return { locationState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations())
  };
};

const Home = (props) => {
  useEffect(() => {
    props.fetchLocations();
  }, []);
  console.log(props.locationState.locations);
  return (
    <div>
      <div>Welcome to your porcelain throne home</div>
      {props.locationState.locations.map((location) => (
        <div className="location-card" key={location.id}>
          <LocationCard
            locationName={location.locationName}
            address={location.address}
            content={location.content}
            photoURL={location.photoURL}
            likes={location.likes}
          />
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
