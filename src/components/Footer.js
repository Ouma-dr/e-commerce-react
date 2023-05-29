import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin , FaMap, FaPhone, FaEnvelope} from "react-icons/fa";


const Container = styled.div`
display: flex;
flex-wrap: wrap;
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
font-size: 30px;
font-weight: 700;
color: coral;
`
const SocialContainer = styled.div`
display: flex;
`
const Desc = styled.p`
margin: 20px 0;
font-size: 18px;
font-weight: 500;
color: gray;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: lightgray;
color: coral;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
margin-right: 20px;
`
const Middle = styled.div`
flex:1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;
font-size: 30px;
font-weight: 700;
color: coral;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`
const ListItem = styled.li`
margin-bottom: 10px;
font-size: 14px;
font-weight: 700;
color: gray;
cursor: pointer;
&:hover{
    letter-spacing: 3px;
}
`
const Right = styled.div`
flex:1;
padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`
const DescItem = styled.div`
font-size: 18px;
font-weight: 500;
color: gray;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopping</Logo>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
         ex ea commodo consequat</Desc>
        <SocialContainer>
           <SocialIcon>
              <FaFacebook/>
           </SocialIcon>
           <SocialIcon>
              <FaInstagram/>
           </SocialIcon>
           <SocialIcon>
              <FaTwitter/>
           </SocialIcon>
           <SocialIcon>
              <FaLinkedin/>
           </SocialIcon>
        </SocialContainer>
      </Left>
      <Middle>
        <Title>Quick Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Man Fashon</ListItem>
          <ListItem>Order</ListItem>
          <ListItem>My account</ListItem>
        </List>
      </Middle>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
        <FaMap style={{marginRight: "10px", color: "coral"}}/>
          <DescItem>Tunisia</DescItem>
        </ContactItem>
        <ContactItem>
        <FaPhone style={{marginRight: "10px", color: "coral"}}/>
        <DescItem>+216 22 000 000</DescItem>
        </ContactItem>
        <ContactItem>
        <FaEnvelope style={{marginRight: "10px", color: "coral"}}/>
        <DescItem>contact@gmail.com</DescItem>
          
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer