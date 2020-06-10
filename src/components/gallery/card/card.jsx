import React, { useEffect } from "react";
import photo from './logo512.png'
import '../../../index.css'
import Content from './content/content'
import Image from './image/image'



export default function Cards(props) {
    const {pic, date} = props 

    return (
        <div className= 'card'>
            <Image pic ={pic}/>
            <Content date ={date}/>
        </div>
    )
}