import React from "react";
import Card from './card/card'
import '../../index.css'
import styled from 'styled-components'

const StyledGallery = styled.div `
    display: flex;
    justify-content: center;
    margin: 5% 0;

`

export default function Gallery(props){
const {pic, date} = props
    return (
        <StyledGallery>
            <Card pic={pic} date={date}/>
        </StyledGallery>
    )
}