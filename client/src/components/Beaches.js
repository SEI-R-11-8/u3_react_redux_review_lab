import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadBeaches } from '../store/actions/BeachActions';

const mapStateToProps = ({ beachState }) => {
  return { beachState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeaches: () => dispatch(LoadBeaches())
  };
};

const Beaches = (props) => {
  useEffect(() => {
    props.fetchBeaches();
  }, []);

  return (
    <div>
      {props.beachState.beaches.map((beach) => (
        <ul key={beach._id}>
          <div>{beach.beachName}</div>
          {/* <Link to={`/beaches/${beach._id}`}>{beach.name}</Link> */}
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Beaches);
