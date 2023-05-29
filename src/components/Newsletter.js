import React from 'react'
import styled from 'styled-components'
import { FaNewspaper } from "react-icons/fa";
import { mobile } from '../responsive'

const Container = styled.div`
height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: lightgray;
${mobile({width: "100%", background: "white"})} 
`
const Title = styled.h1`
font-size: 60px;
font-weight: 800;
padding: 3px auto;
color: coral;
${mobile({padding: "6px", fontSize: "30px"})} 
`
const Desc = styled.div`
font-size: 20px;
font-weight: 400;
padding: 10px auto;
margin-left: 10px;
color: gray;
letter-spacing: 1;
`
const InputContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 25px;
width: 400px;
height:30px;
position: relative;
border: 1 solid lightgray;
${mobile({width: "200px"})} 
`
const Input = styled.input`
width: 90%;
height: 100%;
padding: 8px;
margin: 4px;
border: none;
border-radius: 8px;
outline: none;
font-size: 18px;
font-weight: 400;
color: gray;
background-color: white;
`
const Button = styled.button`
position: absolute;
top: 30px;
right: 14px;
border: none;
color: coral;
font-size: 20px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Are we sending you the right products in our newsletters? <br /> So that we can improve your shopping experience with Office</Desc>
      <InputContainer>
         <Input placeholder='send your email'/>
         <Button>
             <FaNewspaper />  
         </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter