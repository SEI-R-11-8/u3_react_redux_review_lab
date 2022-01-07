import React from 'react'


function LocationForm(props) {
  
  const handleSubmit = (e) => {
    props.addLocation(e)
    props.history.push('/locations')
  }

const newLocation = props.newLocation
  return (
    <div>
      <h1>Add A New Location</h1>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={newLocation.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
        <input type="text" value={newLocation.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}



export default LocationForm