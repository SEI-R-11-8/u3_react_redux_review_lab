
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostComments } from '../services/LocationService'
import { LoadComments } from '../store/actions/LocationActions'
import CommentCard from '../components/CommentCard'
import CommentForm from '../components/CommentForm'

const mapStateToProps = ({ commentState }) => {
  return { commentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: () => dispatch(LoadComments())

  }
}

const Comments = (props) => {

  useEffect(() => {
    props.fetchComments()
  }, [])
  
  
  
    return (
      <div>
        <h3>Add Comment</h3>
        <CommentForm/>      
        <div className="grid">
          {props.commentState.comments.map((comment) => (
          <CommentCard
          id = {comment._id}
          key={comment.id}
          {...comment}
          name = {comment.authorName}
          comment = {comment.comment}
          render = {props.fetchComments()}
          />
          
        ))}  
      
      </div>  
  
      </div>
    );
  }
export default connect(mapStateToProps, mapDispatchToProps)(Comments)
