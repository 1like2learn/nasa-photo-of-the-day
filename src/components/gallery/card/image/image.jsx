import React from 'react'
import '../../../../index.css'
import styled from 'styled-components'

const StyledImage = styled.div `
    div{
        display: flex;
        justify-content: center;
        img{

            width: 80%;
        }
    }
`

export default function Image(props){
    const {pic} = props

    return(
        <StyledImage>
            <div>
                <img src={pic} alt='Pic of the Day'></img>
            </div>
        </StyledImage>
    )
}