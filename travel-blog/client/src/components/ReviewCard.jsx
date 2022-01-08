import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetAllComments } from '../store/actions/ReviewActions';
import CommentCard from './CommentCard'
import CommentForm from './CommentForm';


const mapStateToProps = ({ reviewState }) => {
  return { reviewState }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchComments:()=>dispatch(GetAllComments())
  }
}

const ReviewCard = (props) => {
  useEffect(()=>{
    props.fetchComments()
    console.log(props.reviewState)
  },[])

  return (
  <div>
    <img src={`${props.photoUrl}`}></img>
    <h2>{props.locationName}</h2>
    <h3>{props.address}</h3>
    <p>{props.content}</p>
    <div className="likes-count">Likes: {props.likes}</div>
    <CommentForm 
      reviewID={props.id}
    />
    {props.reviewState.comments.filter(comment=>comment.review_id===props.id).map((comment)=> (
      <div className="comment-card" key={comment._id}>
        <CommentCard 
          content={comment.content}
          author={comment.author}
        />
      </div>
    ))}
    {/* {props.reviewState.comments.reduce((previous, current)=>{
      if (current.id=`${props.id}`) {
        const card = (
        <CommentCard 
          content={comment.content}
          author={comment.author}
        />)
        previous.push(card)
      }
      return previous
    },[])} */}
    </div>
    )
}

export default connect(mapStateToProps,mapDispatchtoProps)(ReviewCard)