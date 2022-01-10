import React, {useEffect} from 'react'
import axios from "axios"
import {connect} from "react-redux"
import { useParams } from 'react-router-dom'
import { LoadCityByID } from '../store/actions/CityActions'
import {LoadReviewsByID} from '../store/actions/ReviewActions'
import {LoadCommentsByID, LoadComment, CreateNewComment} from '../store/actions/CommentAction'
import Comments from './Comments'
import Reviews from './Reviews'

const mapStateToProps = ( {cityState, reviewState, commentState}) => {
    return { cityState, reviewState, commentState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCity: (id) => dispatch(LoadCityByID(id)),
        fetchReviews: (id) => dispatch(LoadReviewsByID(id)),
        fetchComments: (id) => dispatch(LoadCommentsByID(id)),
        createComment: (commentVal) => dispatch(CreateNewComment(commentVal)),
        postComment: (newCom) => dispatch(LoadComment(newCom))
    }
}

const CityDetail = (props) => {
    
    let {id} = useParams()
   
    useEffect(()=> {
        props.fetchCity(id)
        props.fetchReviews(id)
        props.fetchComments(id)
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        props.createComment(e.target.value)
    }

    const handleSubmit = async () => {
        await axios.post("http://localhost:3001/api/comments", {
            comment: `${props.commentState.newComment}`,
            city_id: `${id}`    
        } )
        props.fetchReviews(id)
    }

    return (
        <div>
            <h1>City Details</h1>
            <h2>{props.cityState.city.name}</h2>
            <img style={{ height: "200px" }}src={props.cityState.city.image}/>
            <p>Likes: {props.cityState.city.likes}</p>
            <div>
                <Reviews props={props}/>    
            </div>
            <div>
                <Comments props={props} handleSubmit={handleSubmit} handleChange={handleChange}/>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CityDetail)