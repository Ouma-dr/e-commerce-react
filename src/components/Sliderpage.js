import React, { useState } from 'react'
import styled from 'styled-components'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { sliderItems } from '../data';
import { mobile } from '../responsive';
import {tablet} from '../responsive'

const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
height: 50px;
width: 50px;
background-color: #f7f7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom:0;
margin: auto;
opacity: 0.5;
cursor: pointer;
z-index:2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
${mobile({flexDirection :"column"})}
${tablet({flexDirection :"column"})} 
`
const ImgContainer= styled.div`
flex: 1;
height: 100%;
margin-top: 30px;
`
const Img= styled.img `
height: 80%;
`
const Desc = styled.div`
flex: 1;
padding: 50px;
${mobile({padding :"10px"})} 
${tablet({padding :"8px"})} 
`
const Title = styled.h1`
font-size: 80px;
font-weight: 800;
color: coral;
${mobile({fontSize :"40px" , fontWeight: "400", paddingTop:"10px", textAlign:"center"})} 
${tablet({fontSize :"55px" , fontWeight: "600", paddingTop:"2px", textAlign:"center"})} 

`
const Paragraph = styled.p`
font-size: 20px;
font-weight: 500;
color: gray;
margin: 50px 0;
letter-spacing: 3px;
text-transform: uppercase;
${mobile({paddingLeft:"10px" , margin:"8px 0"})} 
${tablet({padding :"10px" , margin:"8px 0", fontSize: "15px"})} 
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
font-weight: 600;
color: coral;
background-color: lightgray;
cursor: pointer;
border: none;
boredr-radius: 5px;
`

const Sliderpage = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        } 
    }
  return (
    <Container>
      <Arrow direction = "left" style={{ left: 10}} onClick={()=> handleClick("left")} >
        <FaArrowLeft style={{color: "blue" , fontSize: 15}}/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {sliderItems.map(item => (
        <Slide key ={item.id}>
        <ImgContainer>
          <Img src={item.img}/>
        </ImgContainer>
       <Desc>
        <Title>{item.title}</Title>
        <Paragraph>{item.desc}</Paragraph>
        <Button>show now</Button>
       </Desc>
       </Slide>
      ))}
       

      </Wrapper>

      <Arrow direction = "right" style={{ right: 10}} onClick={()=> handleClick("right")}>
        <FaArrowRight style={{color: "blue" , fontSize: 15}}/>
      </Arrow>
    </Container>
  )
}

export default Sliderpage