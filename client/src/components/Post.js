import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadPosts } from '../store/actions/PostAction'

const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  }
}

const Posts = (props) => {

  useEffect(() => {
    props.fetchPosts()

  }, [props])

  return (
    <div>
      {/* {props.postState.post.map((index) => (
        <ul key={index.id}>
          <Link to={`/posts/${index.id}`}>{index.name}</Link>
        </ul>
      ))} */}
   


    </div>

  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)