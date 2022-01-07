import React from 'react'
import { connect } from 'react-redux'
import { CreatePost, LoadPosts, UpdateNewPost } from '../store/actions/PostActions'

export const PostDetails = (props) => {
  return (
    <div>
      {props.postState.posts.filter((element) =>  element._id === props.match.params.id).map((element, index) =>
        <div key={index}>
          <img className="details-image" src={element.photo} alt=""/>
          <p>{element.city}</p>
          <p>{element.date}</p>
          <p>{element.description}</p>
          <p>Likes: {element.likes}</p>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts()),
    updateNewPost: (newPost) => dispatch(UpdateNewPost(newPost)),
    createNewPost: (newPost) => dispatch(CreatePost(newPost))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
