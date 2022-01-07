import '../styles/index.css'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoadPostsById } from '../store/actions/PostAction'

   

const mapStateToProps = ({ postState }) => {
    return { postState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (id) => dispatch(LoadPostsById(id))
    }
}



function PostPage(props) {

    const { id } = useParams()

    useEffect(() => {

        props.fetchPosts()

    }, [])

    console.log('in post page details', props.postState)

    return (
        <div>
            <div>
                {id}
            </div>

        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)