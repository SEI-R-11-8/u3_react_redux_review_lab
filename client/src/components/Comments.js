import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadComments } from '../store/actions/DestinationsActions';

const mapStateToProps = (state) => {
    return {
        CommentsState: state.CommentsState
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchComments: () => dispatch(LoadComments())
    }
}


const Comments = (props) => {
    useEffect(() => {
        props.fetchComments()
    }, [])


    return (
        <div>
            {
                props.CommentsState.comments.map((element) => {
                        // if(element.post_id === props.value){
                        //     return (
                        //         <div key={element._id}>
                        //             <h2>{element.name}</h2>
                        //         </div>
                        //     )
                        // }
                        return (
                            <div key={element._id}>
                                <h2>{element.comment}</h2>
                            </div>
                        )
                })
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)