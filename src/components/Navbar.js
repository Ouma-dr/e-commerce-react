import React from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";
import {mobile} from '../responsive'
import {tablet} from '../responsive'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux'

const Container = styled.div `
height: 60px;
${mobile({height: "50px"})} 
${tablet({height: "55px"})} 
`

const Wrapper = styled.div `
padding: 10px 60px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding: "10px 0"})} 
${tablet({padding: "10px 0"})} 
`
const Left = styled.div `
flex: 1;
display: flex;
align-items: center;
`
const Middle = styled.div `
flex: 1;
text-align: center;
`
const Right = styled.div `
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex: 2, justifyContent: "center", paddingRight: "16px"})}
${tablet({flex: 2, justifyContent: "center"})} 
`
const Language = styled.span `
font-size: 14px;
cursor: pointer;
color: gray;
${mobile({display: "none"})}
${tablet({display: "none"})} 
`
const SearchContainer = styled.div `
border: .5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 3px;
`
const Input = styled.input `
border: none;
${mobile({width: "45px"})} 
`
const Logo = styled.h1 `
font-weight: bold;
color: coral;
font-size: 30px;
${mobile({fontSize: "16px"})}
${tablet({fontSize: "24px"})} 
`

const Navbar = () => {
const {quantity} = useSelector(state =>state.cart);
  return (
    <Container>
    <Wrapper>
     <Left>
       <Language>EN</Language>
       <SearchContainer>
         <Input placeholder='Serach'/>
         <FaSearch style={{fontSize: 14, color: "gray"}}/> 
       </SearchContainer>
     </Left> 
     <Middle><Logo>Shopping</Logo></Middle>
     <Right>
      <Link to="/cart" style={{color: "coral"}}><FaCartPlus style={{fontSize: 16}}/><sup style={{fontSize: 20}}>{quantity}</sup></Link>
     </Right>
    </Wrapper>
    
    </Container>
  )
}

export default Navbar