import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadDestinations } from '../store/actions/DestinationAction'
// import Comment from './subComponents/Comment'
// import Like from './subComponents/Like'
// import Review from './subComponents/Review'




const mapDispatchToProps = (dispatch) => {
    return {
        fetchDestinations: () => dispatch(LoadDestinations())
    }
}
const mapStateToProps = ({ destinationState }) => {
    return { destinationState }
}

const Destinations = (props) => {

    // console.log(props.destinationState.destinations.destination)

    useEffect(() => {
        props.fetchDestinations()
    }, [])

    

    return(
        <div>
            these are destinations
            {props.destinationState.destinations.map( (e) => (
                <div key={e._id}>
                        <Link to={`/destinations/${e._id}`}> {e.name} </Link>
                    <img src={`${e.image}`} alt={`${e.name}`}/>
                    {/* <div> {e.details} </div>
                    <div> comments: <Comment /> </div>
                    <div>  reviews: <Review /> </div>
                    <div> likes: {e.likes} <Like />  </div> */}
                </div>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Destinations)