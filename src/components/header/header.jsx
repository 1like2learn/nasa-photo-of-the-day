import React from "react";
import image from './logo192.png'
import '../../index.css'

export default function Gallery(){

    return (
        <div className= 'header'>
            <img className='logo' src={image} alt='Pic of the Day'></img>
            <h1>A Trip Through the Stars</h1>
            <nav>
                <button href='#'>Home</button>
                <button href='#'>About</button>
            </nav>
        </div>
    )
}