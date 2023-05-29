import React from 'react'
import { useSelector } from 'react-redux'
import CheckItems from '../components/CheckItems';
import { FaHome } from "react-icons/fa";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {mobile} from '../responsive'
import {tablet} from '../responsive'

const Container = styled.div `
`
const Icon = styled.span `
font-size: 32px;
margin: 55px;
cursor: pointer;
`
const Top = styled.div `
height: 80px;
background-color: lightgray;
text-align: center;
padding-top: 25px;
${mobile({backgroundColor: "white"})}
${tablet({backgroundColor: "white"})}
`
const Text = styled.h1 `
color: coral;
text-align: center;
padding-top: 25px;
font-size: 32px;
font-weight: 600;
`
const Cart = () => {
  const {cart} = useSelector(state => state.cart);
  return (
    <Container>
    <Top>
      <Icon>
         <Link to='/'><FaHome style={{color: "coral"}}/></Link>
      </Icon>
  </Top>
  {
    cart.length === 0 ? (
      <Text> Your cart is empty</Text >
    ) : (
      <>
      {cart.map(cartItem => {
        return(
         <CheckItems key={cartItem.id} cartItem={cartItem}/>
        )
       })
       
       }
      </>
    )
  }
    
    </Container>
  )
}

export default Cart