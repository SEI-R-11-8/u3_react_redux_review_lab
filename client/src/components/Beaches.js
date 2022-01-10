import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CommentCard from './CommentCard';
import { LoadBeachesAction } from '../store/actions/BeachActions';

const mapStateToProps = ({ beachState }) => {
  return { beachState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeachesProp: () => dispatch(LoadBeachesAction())
  };
};

const Beaches = (props) => {
  useEffect(() => {
    props.fetchBeachesProp();
    // console.log(props.beachState.beaches[0]._id);
  }, []);

  return (
    <div>
      {props.beachState.beaches.map((beach) => (
        <ul key={beach._id}>
          <div>{beach.beachName}</div>
          <div>{beach.address}</div>
          <img src={beach.image} alt="beach" />
          <div>{beach.review}</div>
          <div>
            Likes: {beach.likes} <button>👍 </button>
          </div>
          Comments:
          <CommentCard beachID={beach._id} />
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Beaches);
