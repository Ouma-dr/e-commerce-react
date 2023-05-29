import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { Increase , Decrease, Remove} from '../redux/cartSlice';
import { FaTimesCircle } from "react-icons/fa";
import {mobile} from '../responsive'
import {tablet} from '../responsive'

const Container = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
height: 60vh;
margin: 25px 30px;
width: 80%;

`
const First = styled.div `

`
const Second = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
height: 60vh;
margin-left: 25px
`
const Third = styled.div `
display: flex;
flex-direction: column;
`

const Price = styled.span `
font-size: 18px;
font-weight: 500;
color: gray;
`
const Desc = styled.div `
text-align: center;
padding-top: 16px;
`
const Button = styled.button `
width: 90px;
height: 90px;
border: none;
border-radius: 50%;
background: light-gray;
color: coral;
cursor: pointer;
font-size: 32px;
font-weight: bold;
margin: 10px 20px;
${mobile({width: "50px", height: "50px"})}
${tablet({width: "50px", height: "50px"})}
`
const Quantity = styled.span `
color: coral;
font-size: 32px;
font-weight: bold;
${mobile({fontSize: "24px"})}
${tablet({fontSize: "24px"})}
`
const Icon = styled.span `
color: coral;
font-size: 32px;
font-weight: bold;
`


const CheckItems = ({ cartItem }) => {
  const dispatch = useDispatch();

  const {id, img, price, quantity} = cartItem ;
  return (
    <Container key={id}>
      <First>
        
          <img src={img} />
       
        
        <Desc>
           <Price>{price}</Price>
        </Desc>
        
      </First> 
      
      <Second>
          <Button onClick={() => dispatch(Decrease(cartItem))}>-</Button>
          <Quantity>{quantity}</Quantity>
          <Button onClick={() => dispatch(Increase(cartItem))}>+</Button>
      </Second>

      <Third>
       <Icon>
        <FaTimesCircle onClick={() => dispatch(Remove(cartItem))}/>
       </Icon>
      
       
      </Third>
    </Container>
  )
}

export default CheckItems