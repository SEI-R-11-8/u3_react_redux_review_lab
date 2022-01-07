import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { LoadReviews } from '../store/actions/ReviewActions'

const mapStateToProps = ({ reviewState }) => {
   return { reviewState }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchReviews: () => dispatch(LoadReviews())
   }
}

const Reviews = (props) => {

   useEffect(() => {
      console.log('this is working also')

      props.fetchReviews()
   }, [])

   return (
      <div className='r_grid'>
         <div>
            <p> I want the Reviews!!!</p>
            {props.reviews}
         </div>
      </div >
   )
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
