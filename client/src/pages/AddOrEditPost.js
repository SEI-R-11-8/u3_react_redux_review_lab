import '../styles/index.css'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoadUpdatePost, LoadNewPost, LoadPostsById } from '../store/actions/PostAction'
import PostForm from '../components/PostForm'


const mapStateToProps = ({ postState }) => {
    return { postState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (post) => dispatch(LoadUpdatePost(post)),
        addNewPost: (post) => dispatch(LoadNewPost(post)),
        fetchPost: (id) => dispatch(LoadPostsById(id))
    }
}

function AddOrEditPost(props) {

    const { id } = useParams()
    const [ post, setNewPost ] = useState({})

    useEffect(() => {

        if (id)  {
            props.fetchPost(id)
            setNewPost(props.postState.post)
        }

    }, [])

    const handleChange = (e) => {
        
        setNewPost({ ...post, [e.target.name]: e.target.value });
        console.log(post)
    };

    const onSubmit = (e) => {
        e.preventDefault()
        id ? props.updatePost(post) : props.addNewPost(post)
        
    }

    return (
        <div>
            <div className="Post">

                <h4>Edit Post</h4>
                <div className="Post">
                        <div className="Post">
                            < PostForm
                                onChange={handleChange}
                                onSubmit={onSubmit}
                                post = {post}
                            />
                        </div>
                </div>
            </div>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditPost)