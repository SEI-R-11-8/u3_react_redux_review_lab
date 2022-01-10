import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createReview } from '../store/actions/CityActions';

const mapStateToProps = ({ reviewState }) => {
  return { reviewState };
};

const mapDispatchToProps = (dispatch) => {
  return { createReview: () => dispatch(createReview()) };
};

const Reviews = (props) => {
  const [pop, setPop] = useState('');

  useEffect(() => {
    async function reviewed() {
      const res = await axios.get(
        `http://localhost:3001/api/reviews/${props.cityId}`
      );
      setPop(res.data.thiscity[0].review);
    }
    reviewed();
  }, []);

  function postReview() {}

  return (
    <div>
      <div className="ReviewComponent">{pop}</div>
      <form>
        <input placeholder="Post a review" id="newReview" type="text"></input>
        <button onClick={postReview}>post</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
