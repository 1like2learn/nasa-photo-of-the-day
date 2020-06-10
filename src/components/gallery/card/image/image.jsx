import React, {useEffect} from 'react'
import '../../../../index.css'

export default function Image(props){
    const {pic} = props
    
    return(
        <div className='image'>
            <img src={pic}></img>
        </div>
    )
}