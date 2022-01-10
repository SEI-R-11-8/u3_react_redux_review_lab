import React, {useEffect} from 'react'
import axios from "axios"
import {connect} from "react-redux"
import { useParams } from 'react-router-dom'
import { LoadCityByID } from '../store/actions/CityActions'
import {LoadReviewsByID} from '../store/actions/ReviewActions'
import {LoadCommentsByID, LoadComment, CreateNewComment} from '../store/actions/CommentAction'

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
        // console.log(props.commentState.newComment)
        // console.log(props)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        let res = await axios.post("http://localhost:3001/api/comments", {
            comment: `${props.commentState.newComment}`,
            city_id: `${id}`    
        } )

        props.postComment(props.commentState.newComment)

        //console.log(res)
        //props.postComment(newCom)
        //console.log(props, newCom)
    }

    return (
        <div>
            <h1>City Details</h1>
            <h2>{props.cityState.city.name}</h2>
            <img style={{ height: "200px" }}src={props.cityState.city.image}/>
            <p>Likes: {props.cityState.city.likes}</p>
            <div> 
                <h3>Reviews</h3>
                <div>{props.reviewState.reviews.map((rev, idx)=> <div><li key={idx}>{rev.review}</li></div>)}</div>
                <form >
                    <label>Submit review</label>
                    <input type="text"></input>
                    <button type="submit">Submit Review</button>
                </form>
            </div>

            <div>
            <h3>Comments</h3>
            <div>{props.commentState.comments.map((com, idx)=> <div><li key={idx}>{com.comment}</li><button>Delete</button></div>
            
            
             )}</div>
                <form onSubmit={handleSubmit}>
                    <label>Submit comment</label>
                    <input type="text" onChange={handleChange}></input>
                    <button type="submit">Submit Comment</button>
                </form>


            </div>

            
           
          
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CityDetail)