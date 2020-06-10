import React from "react";
import Card from './card/card'
import '../../index.css'


export default function Gallery(props){
const {pic, date} = props
    return (
        <div className= 'gallery'>
            <Card pic={pic} date={date}/>
        </div>
    )
}