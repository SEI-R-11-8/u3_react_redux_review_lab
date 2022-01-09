import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadDestinationsById } from '../store/actions/DestinationAction'
import { useParams } from 'react-router-dom'
import Comment from './subComponents/Comment'
import Review from './subComponents/Review'
import Like from './subComponents/Like'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetails: (id) => dispatch(LoadDestinationsById(id))
    }
}

const mapStateToProps = (destinationDetailState) => {
    return { destinationDetailState }
}

const Details = (props) => {

    // console.log(props.destinationDetailState.destinationDetailState.destination)

    const { id } = useParams()
    const details = props.destinationDetailState.destinationDetailState.destination

    useEffect(() => {
        props.fetchDetails(id)
    }, [])

    
    return (
        <div>
            these are some details
            <div>
                    <div> {details.name} </div>
                    <img src={`${details.image}`} alt={`${details.name}`}/>
                    <div> {details.details} </div>
                    <div> comments: <Comment /> {details.comments} </div>
                    <div>  reviews: <Review /> </div>
                    <div> likes: {details.likes} <Like />  </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)