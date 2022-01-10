import React from 'react'

const PostForm = (props) => {
    //First let's declare form labels
    let previousData = { 
        post_location: 'Location',
        post_description: 'Description',
        post_image: 'Image'
    }
    //Check to see if this is a new post or edited one::
    //IF a post is passed, set those as form labels
    if (Object.keys(props.post).length > 0) previousData = props.post
    // console.log('this is props in post form', props.post)
    return (
        <div className="form">
            <div className="form">
                <div className="form">

                    <form onSubmit={props.onSubmit}>

                        <div className='input-field'>

                        <input
                            type="text"
                            post_location={props.post_location}
                            onChange={props.onChange}
                            name="post_location"
                            placeholder={previousData.post_location}
                           
                        />
                        </div>

                        <div className='input-field'>

                        <input
                            type="text"
                            post_description={props.post_description}
                            onChange={props.onChange}
                            name="post_description"
                            placeholder={previousData.post_description}
                        />
                        </div>

                        <div className='input-field'>

                        <input
                            type="text"
                            post_image={props.post_image}
                            onChange={props.onChange}
                            name="post_image"
                            placeholder={previousData.post_image}
                        />
                        </div>
                        

                        <button
                            type="submit"
                        >
                            Done
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostForm