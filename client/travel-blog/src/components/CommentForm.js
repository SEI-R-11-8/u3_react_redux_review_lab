
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { PostComments } from '../services/LocationService'
import { CreateComments} from '../store/actions/LocationActions'
import { ChangeCommentValue } from '../store/actions/LocationActions'


const mapStateToProps = ({ commentState }) => {
  return { commentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: () => dispatch(CreateComments())

  }
}

const AddComments = (props) => {

  useEffect(() => {
    props.fetchComments()
  }, [])
  
  
 
const handleChange = (e) => {
        ChangeCommentValue(...props.comment, [e.target.name], e.target.value)
     
    };
const handleSubmit = (e) => {
        PostComments()
      
      
    };
  return (  
<form className='form' onSubmit={handleSubmit}>
<input
  type="text"
  value={props.authourName}
  onChange={handleChange}
  name={'authorName'}
  placeholder={'your name'}
/>
<input
  type="text"
  value={props.comment}
  onChange={handleChange}
  name={'comment'}
  placeholder="comment"
  />

<button type="submit">Submit</button>
</form>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComments)