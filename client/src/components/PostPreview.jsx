import React from 'react';

export default function PostPreview(props) {
    return (
        <div className='postPreview'>
            <img src={props.post.imgUrl} alt={props.post.title} />
            <h2>{props.post.title}</h2>
            <p className='likeBtn'>👍 {props.post.likes}</p>
            <p className='reviewNum'>Reviews: {props.post.reviews.length}</p>
            <p className='commentNum'>Comments: {props.post.comments.length}</p>
            <button onClick={() => props.push('/post/'+props.post._id)} className='detailsBtn'>Read About It!</button>
        </div>
    );
};