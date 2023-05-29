 
import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart, FaHeart, FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { AddCart } from '../redux/cartSlice';


const Container  = styled.div`
flex: 1;
margin: 1px; 
min-width: 260px;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`
const Image  = styled.img`
height: 200px;
width: 250px;
border-radius: 6px;
`
const Desc  = styled.div`
position: absolute;
right: 10px;
display: none;
${Container}:hover &{
    display: block;
}

`
const Icon  = styled.div`
background-color: lightgray;
color: coral; 
width: 40px;
height: 40px;
border-radius: 50%;
font-size: 16px;
padding: 2px;
margin-top: 6px;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.5s ease;
cursor: pointer;
`

const ProductItem = ({item}) => {
  const dispatch = useDispatch();
  return (
    <Container>
    <Image src= {item.img}/>
       
       <Desc>
          <Icon>
            <FaHeart />
          </Icon>
          <Icon>
          <Link to="/product" style={{color: "coral"}}><FaShare /></Link>
          </Icon>
          <Icon>
           <FaShoppingCart onClick={()=> dispatch(AddCart(item))}/>
          </Icon>
       </Desc>
    </Container>

    
  )
}

export default ProductItem