import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import {tablet} from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div `
height: 60px;
display: flex;
justify-content: center;
align-items: center;
background-color: lightgray;
margin-top: 20px;
${mobile({height: "50px"})} 
${tablet({height: "55px"})} 
`
const MenuItem = styled.div `
padding: 20px 15px;
font-size: 28px;
font-weight: 400;
`

const Links = () => {
  return (
    <Container>
       <MenuItem><Link to="/" style={{color: "gray", textDecoration:"none"}}>Home</Link></MenuItem>
       <MenuItem> <Link to="/about" style={{color: "gray", textDecoration:"none"}}>About</Link></MenuItem>
       <MenuItem> <Link to="/cart" style={{color: "gray", textDecoration:"none"}}>Cart</Link></MenuItem>
    </Container>
  )
}

export default Links