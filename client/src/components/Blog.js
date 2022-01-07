import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import {LoadBlogs, LoadComment, CreateComment} from '../store/actions/BlogAction'
import Form from './Form'

const mapStateToProps = ({ blogState }) => {
    return { blogState }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchBlogs: () => dispatch(LoadBlogs()),
      submitComments: () => dispatch(CreateComment()),
      createComment: (comment)=>dispatch(LoadComment(comment))
    }
  }


const Blogs = (props)=>{

    const handleChange =(e)=>{
        props.createComment({comment: e.target.value})
    }

    const handleSubmit=(e)=>{
        console.log('test')
        e.preventDefault()
        props.submitComments(props.blogState.blogsNew)
    }
 
    useEffect(() => {
        props.fetchBlogs()
       
      }, [])

 


    return (
        <div>
            {props.blogState.blogs.map((blog, index)=>(
                <div key = {index}>
                    <h1>{blog.date}</h1>
                    <h2>{blog.blog_post}</h2>
                    <Form
                        blogsNew={props.blogState.blogsNew}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                    
                        
                    
                </div>
            ))} 
            {/* {props.blogState.blogsNew.map((newComment, index)=>(
                <div key={index}>
                    {newComment.comment}
                </div>
            ))} */}

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
