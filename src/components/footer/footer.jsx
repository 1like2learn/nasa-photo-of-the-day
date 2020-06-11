import React from "react";
import '../../index.css'
import styled from 'styled-components'

const StyledFooter = styled.div `
    text-align: center;
`

export default function Footer(){

    return (
        <StyledFooter>
            <p>Copyright 2020</p>
        </StyledFooter>
    )
}