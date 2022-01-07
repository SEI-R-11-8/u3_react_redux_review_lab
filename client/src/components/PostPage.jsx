import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { CreatePost, LoadPosts, UpdateNewPost } from '../store/actions/PostActions'
import PostList from './PostList'

export const PostPage = (props) => {

  useEffect(() => {
    props.fetchPosts()
  }, [])

  const handleChange = (e) => {
    props.updateNewPost({...props.postState.newPost, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createNewPost(props.postState.newPost)
    props.updateNewPost({city: '', date: '', description: '', likes: 0})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>New Post:
        <input 
          onChange={handleChange} 
          type="text" 
          placeholder="City" 
          value={props.postState.newPost.city} 
          name="city"
        />
        <input 
          onChange={handleChange} 
          type="text" 
          placeholder="Date" 
          value={props.postState.newPost.date} 
          name="date"
        />
        <input 
          onChange={handleChange} 
          type="text" 
          placeholder="Description" 
          value={props.postState.newPost.description} 
          name="description"
        />
        <button>Submit</button>
      </form>
        <PostList history={props.history} posts={props.postState.posts}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
