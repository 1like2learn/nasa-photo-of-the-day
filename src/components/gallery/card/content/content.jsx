import React from 'react'
import '../../../../index.css'
import styled from 'styled-components'

const StyledContent = styled.div `
    text-align: center;
    padding-top: 3%;
`

export default function Content(props){
    const {date} = props

    return(
        <StyledContent>
            <p>Date: {date}</p>
        </StyledContent>
    )
}