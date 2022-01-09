import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadLocationById } from '../store/actions/LocationActions';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Comments from './Comments'

const mapStateToProps = ({ locationState }) => {
  return { locationState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocationById: (locationId) => dispatch(LoadLocationById(locationId))
  }
};

const Location = (props) => {
  useEffect(() => {
    props.fetchLocationById(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      <div className='locDetails'>
        <img src={props.locationState.location.image} alt=''/> 
        <h3>{props.locationState.location.city}</h3>
        <h3>{props.locationState.location.country}</h3>
          {
          props.locationState.location.comments? <h3> Comments: 
          {props.locationState.location.comments.length}
          </h3>:null }
          
            {
              props.locationState.location.comments? <div>
              {props.locationState.location.comments.map((comment, index)=>(
              <li key={index}>{comment}</li>
            ))}
            </div>: null }
      </div>
      <div className='comments'><h3>Show All Comments here: </h3>
      <Switch>
        <Route exact path="/locations/{props.match.params.id}/" component={Comments} locId={props.match.params.id} />
        {/* <Route path="/locations/:id" component={Location} /> */}
      </Switch>
      </div>
    </div>
    
        
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);