import React from 'react'
import '../../../../index.css'


export default function Content(props){
    const {date} = props

    return(
        <div className = 'content'>
            <p>Date: {date}</p>
        </div>
    )
}