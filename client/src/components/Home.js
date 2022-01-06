import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadPosts } from '../store/actions/PostsActions'

const mapStateToProps = ({ postsState }) => {
  return { postsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts()),
  }
}

const Home = (props) => {

  useEffect(() => {
    props.fetchPosts()
  }, [])

  return (
    <div>
      <h1>Locations</h1>
       {
        props.postsState.posts.map((post) => (
          <div>
            <Link key={ post._id } to={ `/posts/${ post._id}` }>{ post.title }</Link>
          </div>
        ))
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
