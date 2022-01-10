import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadPosts } from '../store/actions/PostAction'
import PostCard from './PostCard'

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

    console.log('props postState.posts', props.postState.posts)

    return (
        <div>


            {props.postState.posts.map((post) => (
                <Link to={`/postPage/${post._id}`} key={post._id} post={post}>
                    <div key={post._id} className="post">
                        <PostCard
                            post_location={post.post_location}
                            post_image={post.post_image}
                            post_description={post.post_description}
                            id={post._id}
                        />

                    </div>
                </Link>
            ))}

            <Link to={'/addPostPage'}>
                <button>
                    <p>Add Post</p>
                </button>
            </Link>


        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)