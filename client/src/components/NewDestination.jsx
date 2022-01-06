import React from 'react';

const NewDestination = (props) => {
	console.log(props);

	return (
		<div className='NewDestination'>
			<form>
				<input
					type='text'
					name='newDestination'
					value={props.newDestination}
					onChange={props.handleChange}
				/>
				<button type='submit' onClick={props.handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default NewDestination;
