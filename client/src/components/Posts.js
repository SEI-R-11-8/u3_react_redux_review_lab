import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { LoadPostComments } from '../store/actions/PostsActions'

const mapStateToProps = ({ postCommentsState }) => {
  return { postCommentsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostComments: (postId) => dispatch(LoadPostComments(postId)),
  }
}

const Posts = (props) => {

  const { id } = useParams()

  useEffect(() => {
    props.fetchPostComments(id)
  }, [id])

  const postData = props.postCommentsState.post

  return (
    <div>
      <h1>{ postData.title }</h1>
      <Link to="/">Home</Link>
      <p>{ postData.post_body }</p>
      <form>
        <input
          type="text"
          name="newTodo"
          value={props.newTodo}
          onChange={props.handleChange}
        />
        <button type="submit" onClick={props.handleSubmit}>
          Add Review
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
