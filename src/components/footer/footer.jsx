import React from "react";
import '../../index.css'
import styled from 'styled-components'

const StyledFooter = styled.div `
    text-align: center;
    padding: 2%;
    background-color: #61dafb;
`

export default function Footer(){

    return (
        <StyledFooter>
            <p>Copyright 2020</p>
        </StyledFooter>
    )
}