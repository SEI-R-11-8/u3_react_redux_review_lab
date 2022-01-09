import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  AddBeachAction,
  CreateNewBeachAction,
  LoadBeachesAction
} from '../store/actions/BeachActions';

const mapStateToProps = ({ beachState }) => {
  return { beachState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeachesProp: () => dispatch(LoadBeachesAction()),
    addBeachProp: (beach) => dispatch(AddBeachAction(beach)),
    createBeachProp: (formValue) => dispatch(CreateNewBeachAction(formValue))
  };
};

const BeachForm = (props) => {
  const handleChange = (event) => {
    props.createBeachProp({
      ...props.beachState.newBeach,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBeachProp(props.beachState.newBeach);
    console.log(props.beachState.newBeach);
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
