import React, {useEffect} from 'react'
import {connect} from "react-redux"
import { useParams } from 'react-router-dom'
import { LoadCityByID } from '../store/actions/CityActions'
import {LoadReviewsByID} from '../store/actions/ReviewActions'
import {LoadCommentsByID} from '../store/actions/CommentAction'

const mapStateToProps = ( {cityState, reviewState, commentState}) => {
    return { cityState, reviewState, commentState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCity: (id) => dispatch(LoadCityByID(id)),
        fetchReviews: (id) => dispatch(LoadReviewsByID(id)),
        fetchComments: (id) => dispatch(LoadCommentsByID(id))
    }
}

const CityDetail = (props) => {
    
    let {id} = useParams()
   
    useEffect(()=> {
        props.fetchCity(id)
        props.fetchReviews(id)
        props.fetchComments(id)
    },[])

    const test = (e) => {
        e.preventDefault()
        console.log("working?")
    }

    return (
        <div>
            <h1>City Details</h1>
            <h2>{props.cityState.city.name}</h2>
            <img style={{ height: "200px" }}src={props.cityState.city.image}/>
            <p>Likes: {props.cityState.city.likes}</p>
            <div> 
                <h3>Reviews</h3>
                <div>{props.reviewState.reviews.map((rev, idx)=> <div><li key={idx}>{rev.review}</li><button>Delete</button></div>)}</div>
                <form onClick={test}>
                    <label>Submit review</label>
                    <input type="text"></input>
                    <button type="submit">Submit Review</button>
                </form>
            </div>

            <div>
            <h3>Comments</h3>
            <div>{props.commentState.comments.map((com, idx)=> (<p key={idx}>{com.comment}</p> ))}</div>
                <form onClick={test}>
                    <label>Submit comment</label>
                    <input type="text"></input>
                    <button type="submit">Submit Comment</button>
                </form>


            </div>

            
           
          
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CityDetail)