import React from 'react'
import Coastline from '../src/videos/Coastline.mp4'

export default function Landing() {

   return (
      <div className='travel'>
         <video loop muted autoPlay src={Coastline} width="750" height="500" >
         </video>
      </div >
   )
}


