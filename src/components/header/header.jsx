import React from "react";
import image from './logo192.png'

export default function Gallery(){

    return (
        <div className= 'header'>
            <img className='logo' src={image}></img>
            <h1>A Trip Through the Stars</h1>
            <nav>
                <a href='#'>Home</a>
                <a href='#'>About</a>
            </nav>
        </div>
    )
}