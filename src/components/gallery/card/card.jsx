import React from "react";
// import photo from './logo512.png'
import '../../../index.css'
import Content from './content/content'
import Image from './image/image'
import styled from 'styled-components'

const StyledCard = styled.div `
    display: flex;
    flex-direction: column;
    align-content: center;

`

export default function Cards(props) {
    const {pic, date} = props 

    return (
        <StyledCard>
            <Image pic ={pic}/>
            <Content date ={date}/>
        </StyledCard>
    )
}