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
      props.fetchPosts()
   }, [])

   return (
      <div className='p_grid'>
         <h1>Stories</h1>
         <div>
            {props.postState.posts.map((post, index) => (
               <div key={index} className='p_card'>
                  <img src={`${post.image_path}`} alt='' />
                  <h2>{post.title}</h2>
                  <h3>{post.author}</h3>
                  <p> {post.description}</p>
                  <p> {post.date}</p>
               </div>
            ))}
         </div>
      </div >
   )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)