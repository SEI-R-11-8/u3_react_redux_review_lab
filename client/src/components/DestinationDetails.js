import React, { useEffect } from "react";
import { connect } from "react-redux";
import { LoadDestinationDetails, LoadDestinations } from "../store/actions/DestinationsActions";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";

const mapStateToProps = (state) => {
    return {
        DestinationsState: state.DestinationsState,
        DestinationDetailsState: state.DestinationDetailsState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDestinationDetails: (id) => dispatch(LoadDestinationDetails(id))
    }
}

const DestinationDetails = (props) => {

    useEffect(() => {
        props.fetchDestinationDetails(props.match.params.id)
    }, [props.match.params.id])

    return (
        <div>
            <h2>{props.DestinationDetailsState.destination.name}</h2>
            <img src={props.DestinationDetailsState.destination.image} alt='destination photo' />
            <p>{props.DestinationDetailsState.destination.description}</p>
            <br />
            <CommentsForm />
            <br />
            <Comments value={props.match.params.id}/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DestinationDetails)