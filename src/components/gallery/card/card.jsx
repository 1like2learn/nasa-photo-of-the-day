import React from "react";
import photo from './logo512.png'
import '../../../index.css'


export default function Cards() {
    
    return (
        <div className= 'card'>
            <p>Date: 1/1/2001</p>
            <img src={photo}></img>
        </div>
    )
}