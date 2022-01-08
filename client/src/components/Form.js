import React from 'react'

export default function Form(props) {
    return (
        <div>
            <form>
                <input
                    type='text'
                    name='comment'
                    value={props.blogsNew.comment}
                    onChange={props.handleChange}
                />
                
                <button type='submit' onClick={props.handleSubmit}>submit</button>
                <button>Like</button>
            </form>
        </div>
    )
}
