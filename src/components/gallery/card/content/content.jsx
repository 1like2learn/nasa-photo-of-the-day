import React from 'react'
import '../../../../index.css'
import styled from 'styled-components'

const StyledContent = styled.div `
    text-align: center;
    padding: 3%;
`

export default function Content(props){
    const {content, align} = props

    return(
        <StyledContent style={{textAlign: align}}>
            <p>{content}</p>
        </StyledContent>
    )
}