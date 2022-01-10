import '../styles/index.css'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate, Link} from 'react-router-dom'
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
    let navigate = useNavigate()

    useEffect(() => {

        if (id)  {
            props.fetchPost(id)
            setNewPost(props.postState.post)
        }

    }, [props, id])

    const handleChange = (e) => {
        
        setNewPost({ ...post, [e.target.name]: e.target.value });
        console.log(post)
    };

    const onSubmit = (e) => {
        e.preventDefault()
        id ? props.updatePost(post) : props.addNewPost(post)
        navigate('/')
    }

    return (
        <div>
            < Link to={'/'}>
                <div className="addBtn">Home Page</div>
            </Link>

            <div className="Post">

                <h4>{id ? 'Edit' : 'Add'} Post </h4>
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