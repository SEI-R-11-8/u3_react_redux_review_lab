import React from 'react'
import { useParams } from 'react-router-dom'


export default function CityDetail(props) {
    console.log(props)
    let {id} = useParams()
    console.log(id)


    return (
        <div>
            <h1>City Details</h1>
        </div>
    )
}
