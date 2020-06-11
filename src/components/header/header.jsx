import React from "react";
import image from './logo192.png'
import '../../index.css'
import styled from 'styled-components'

const StyledHeader = styled.div `
    display: flex;
    padding: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media(max-width: 500px){
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .logo{
        max-width:129px;
        max-height:136px;
    }
    div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 2%;

    @media(max-width: 500px){
        align-items: center;
    }

        h1{
        font-size: 3rem;
    }

    nav{
        display: flex;
        justify-content: space-around;
        width: 30%;
        button{
            padding: 3%;
            font-size: 1.2rem;
            font-family: inherit;
            text-transform: none;
            border: 0;
            background-color: white;
        }
        button:focus, button:hover {
            background: white;
            outline: 1px solid grey;

        }
        button:focus {
            outline:0;
            border: 1px solid grey;
            border-radius: 10px;
        }
        button:active{
            background-color: white;
        }
    }
}
`

export default function Gallery(){

    return (
        <StyledHeader>
            <img className='logo' src={image} alt='Logo'></img>
            <div>
                <h1>A Trip Through the Stars</h1>
                <nav>
                    <button href='#'>Home</button>
                    <button href='#'>About</button>
                </nav>
            </div>
        </StyledHeader>
    )
}