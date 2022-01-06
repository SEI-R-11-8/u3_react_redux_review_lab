import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { LoadPosts } from '../store/actions/PostActions'

export const PostList = (props) => {

  useEffect(() => {
    props.fetchPosts()
  }, [])

  return (
    <div>
      {props.postState.posts.map((element, index) => 
        <div key={index}>
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
    fetchPosts: () => dispatch(LoadPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
