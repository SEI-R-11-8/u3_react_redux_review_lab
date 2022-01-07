import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  AddBeachAction,
  CreateNewBeach,
  LoadBeaches
} from '../store/actions/BeachActions';

const mapStateToProps = (state) => {
  return { beachState: state.beachState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeaches: () => dispatch(LoadBeaches()),
    addBeach: () => dispatch(AddBeachAction()),
    createBeach: () => dispatch(CreateNewBeach())
  };
};

const BeachForm = (props) => {
  const handleChange = (event) => {
    props.createBeach({
      ...props.beachState.newBeach,
      [event.target.name]: event.target.value
    });
    console.log(props.beachState.newBeach);
    console.log(props.beachState.beach);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBeach(props.beachState.beach);
    // console.log(props.beachState.newBeach);
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="beachName"
          placeholder={'Name'}
          onChange={handleChange}
        />
        <input
          type="text-area"
          name="review"
          placeholder={'Review'}
          onChange={handleChange}
        />
        <input
          type="text-area"
          name="address"
          placeholder={'Address'}
          onChange={handleChange}
        />
        <input
          type="text-area"
          name="image"
          placeholder={'Image'}
          onChange={handleChange}
        />
        <button className="button" onClick={handleSubmit}>
          Create Beach
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BeachForm);
