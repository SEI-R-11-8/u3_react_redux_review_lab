import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { LoadPostComments } from '../store/actions/PostsActions'

const mapStateToProps = ({ postCommentsState }) => {
  return { postCommentsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostComments: () => dispatch(LoadPostComments),
  }
}

const Posts = (props) => {

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    props.fetchPostCommets(id)
  }, [])


console.log(props.postCommentsState)

  return (
    <div>
      <h1>Post</h1>

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
