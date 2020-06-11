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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 80%;
    max-width: 1200px;
    padding: 0 3%;
`

export default function Cards(props) {
    const {pic, date, title, explain} = props 

    return (
        <StyledCard>
            <Content content ={date} align='center'/>
            <Image pic ={pic}/>
            <Content content = {title} align='center'/>
            <Content content = {explain} align='left'/>
        </StyledCard>
    )
}