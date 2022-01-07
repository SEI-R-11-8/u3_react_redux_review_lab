import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadPosts } from '../store/actions/PostActions'

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
      console.log('this is working')

      props.fetchPosts()
   }, [])

   return (
      <div className='p_grid'>
         {props.postState.posts.map((post) => (
            <div key={post.id} className='card'>
            </div>
         ))}
      </div >
   )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)