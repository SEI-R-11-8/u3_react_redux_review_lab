import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'



function LocationDetails(props) {
  let history = useHistory()
  let {id} = useParams()
  const [selectLocation, setLocation] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [comments, setComments] = useState('')
  const [posts, setPosts] = useState('')


  const getLocationDetail = async () => {
    const res = await axios.get(`http://localhost:3001/api/locations/${id}`)
    console.log(res.data)
    setLocation(res.data.location)
  }

 

  useEffect(() => {
    getLocationDetail()
    setLocation(selectLocation)
    setName(selectLocation.name)
    setDescription(selectLocation.description)
    setComments(selectLocation.comments)
    setPosts(selectLocation.posts)
  }, [])

  const putLocation = async () => {
    const res = await axios.put(
      `http://localhost:3001/api/location/${id}`,
      {
        comments,
        posts
      }
    )
    history.push(`/locations`)
  }


  const deleteLocation = async () => {
    const res = await axios.delete(`http://localhost:3001/api/location/${id}`)
    props.Locations.filter(props.locations.locations)
  }




  return selectLocation ? (
    <div className='details'>
      <div className='detail-header'>
        <div style={{ minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>{selectLocation.name}</h2>
        </div>
      </div>
      <div className='info-wrapper'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h3>Description: {selectLocation.description}</h3>
          <h3>Comments: {selectLocation.comments}</h3>
          <h3>Posts: {selectLocation.posts}</h3>
        </div>
      </div>
      <div>
        <form onSubmit={() => putLocation()}>
          <input type="text" value={comments} onChange={(e) => setComments(e.target.value)} name={'comments'} placeholder={'comments'} />
          <input type="text" value={posts} onSubmit={(e) => setPosts(e.target.value)} name={'posts'} placeholder={'posts'} />
          <button type='submit'>Submit</button>
        </form>

        <button onClick={() => deleteLocation()}>
          Delete the Location
        </button>
      </div>
    </div>
  ) : null;








}


export default LocationDetails;



