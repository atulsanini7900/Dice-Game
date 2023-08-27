import React from 'react'
import styled from "styled-components"
const StartGame = ({toggle}) => {
  return (
   <Container>
        <div>
        <img src='/images/dices.png'></img>

        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>

   </Container>
  )
}

export default StartGame;

const Container=styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;
    
    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

const Button=styled.button`
display: flex;
min-width: 220px;
padding: 10px 18px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 5px;
background: #000;
color: white;
cursor: pointer;
font-size: 16px;

&:hover{
    background-color: white;
    color: black;

}
`;