import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadLocationById, LoadCommentById } from '../store/actions/LocationActions';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Comment from './Comment'

const mapStateToProps = ({ locationState, commentState }) => {
  return { locationState, commentState };
};
<button>Post a Comment?</button>
const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocationById: (locationId) => dispatch(LoadLocationById(locationId)),
    fetchCommentById: (commentId) => dispatch(LoadCommentById(commentId))
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
          <button>Post a Comment?</button>
          <h3>Show All Comments here: </h3>
             {
              props.locationState.location.comments? <ol>
              {props.locationState.location.comments.map((commentId, index)=>(
              <li key={index}>
                <Comment commentId = {commentId} /></li>
            ))}
            </ol>: null } 
           
      </div>
       {/* <div className='comments'>
        <h3>Show All Comments here: </h3>
         <Comments /> 
       <Switch>
        <Route exact path="/locations/{props.match.params.id}/" component={<Comments locId={props.match.params.id}/>}/>
        <Route path="/locations/:id" component={Location} /> 
      </Switch>
      </div>  */}
    </div>    
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);