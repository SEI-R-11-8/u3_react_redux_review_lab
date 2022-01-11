import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadLocations, CreateNewLocation, AddLocation } from '../store/actions/LocationActions';

const mapStateToProps = ({ locationsState }) => {
  return { locationsState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations()),
    createLocation: (formValue) => dispatch(CreateNewLocation(formValue)),
    addLocation: (locationInfo) => dispatch(AddLocation(locationInfo))
  };
};

const LocationForm = (props) => {
  useEffect(() => {
    props.fetchLocations();
  }, []);

  const handleChange = (event) => {
    props.createLocation({ ...props.locationsState.newLocation, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    props.addLocation(props.locationsState.newLocation)
  }

  return (
    <form>
      <h3>New Location</h3>
      <label htmlFor="city">City:</label>
      <input 
        type="text" 
        name="city" 
        onChange={handleChange}
      />
      <label htmlFor="country">Country:</label>
      <input 
        type="text" 
        name="country" 
        onChange={handleChange}
      />
      <label htmlFor="image">Image URL:</label>
      <input 
        type="text" 
        name="image" 
        onChange={handleChange}
      />
      <label htmlFor="description">Description:</label>
      <textarea 
        type="text" 
        name="description" 
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
