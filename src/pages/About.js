import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Links from '../components/Links'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {mobile} from '../responsive'
import {tablet} from '../responsive'

const Container = styled.div `

`
const Wrapper = styled.div `
display: flex;
padding: 50px;
${mobile({flexDirection: "column"})}
${tablet({flexDirection: "column"})}
`
const Image = styled.img `
width: 100%;
height: 90vh;
object-fit: cover;
border-radius: 12px;
box-shadow: 0 4px 4px rgba(255, 255, 255, 0.3);
${mobile({height: "60vh"})}
${tablet({height: "60vh"})}
`
const Desc= styled.div `
flex: 1;
`
const Title = styled.h1 `
font-size: 35px;
font-weight: 700;
color: coral;
text-align: center;
`
const Para = styled.p `
font-size: 25px;
font-weight: 300;
color: gray;
`
const ImgContainer = styled.div `
flex: 1;
padding-right: 14px;
`

const About = () => {
  return (
    <Container>
    <Navbar/>
    <Links/>
      <Wrapper>
      <ImgContainer>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkH5CwLZtv-uWfKGCMmbxj1psatKFwnurV2g&usqp=CAU' />
      </ImgContainer>  
        <Desc>
          <Title>About Us</Title> 
          <Para> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Para>
        </Desc>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default About