import CommentCard from "./CommentCard";
import React, { useState, useEffect} from 'react';
import axios from 'axios';

export default function AddComment(props) {
    let commentArray = [];
    const [comments, setComments] = useState(commentArray);
    let detailsArray = [];
    const [LocationDetails, setLocationDetails] = useState(detailsArray)
    const [returnId, setReturnId] = useState(0);
    const [newComment, setNewComment] = useState({
      authorName: '',
      comment: '',
    });
    const createComment = (e) =>{
      e.preventDefault();
      const createdComment = {
        ...newComment
      };
      axios
        .post('http://localhost:3001/locations/:id/comment', createdComment)
        .then((response) => setReturnId(response.data))
      setNewComment({
        authorName: '',
        comment:''
      });
  }
    const getComments = async () => {
    const response = await axios.get('http://localhost:3001/comments');
    setComments(response.data.comments);
   
  };
  const getDetails = async (req, res) => {
    const response = await axios.get(`http://localhost:3001/locations/${req.params.id}`);
    console.log(response.data)
        setLocationDetails(response.data.location);
  };

  
  
  useEffect(() => {
    getComments()
    getDetails()
  }, []);
  
    const handleChange = (e) => {
      setNewComment({ ...newComment, [e.target.name]: e.target.value });
     
    };
    const handleSubmit = (e) => {
      createComment(e);
      getComments(e)
      
      
    };
  
  
    return (
      <div>
        <h3>Add Comment</h3>
        <form className='form' onSubmit={handleSubmit}>
          <input
            type="text"
            value={newComment.authorName}
            onChange={handleChange}
            name={'authorName'}
            placeholder={'your name'}
          />
          <input
            type="text"
            value={newComment.comment}
            onChange={handleChange}
            name={'comment'}
            placeholder="comment"
            />

          <button type="submit">Submit</button>
        </form>
        
        
        <div className="grid">
          {comments.map((comment) => (
          <CommentCard
          key={comment.id}
          {...comment}
          name = {comment.authorName}
          comment = {comment.comment}
          />
          
        ))}  
      
      </div>  
  
      </div>
    );
  }