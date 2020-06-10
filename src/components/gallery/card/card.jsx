import React, { useEffect } from "react";
import photo from './logo512.png'
import '../../../index.css'


export default function Cards(props) {
    const {pic} = props 
    console.log(props)
    
    return (
        <div className= 'card'>
            <p>Date: 1/1/2001</p>
            <img src={pic}></img>
        </div>
    )
}