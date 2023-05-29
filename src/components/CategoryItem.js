import styled from 'styled-components'
import React from 'react'
import {tablet} from '../responsive'




const Container = styled.div`
flex: 1;
margin: 2px;
height: 60vh;
position: relative;
${tablet({display: "none"})} ;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
&:hover {
    transform: scale(1.1);
    }
`
const Desc = styled.div`
position: absolute;
width: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
height: 100%;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 30px;
font-weight: 800;
color: coral;
letter-spacing: 1;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Desc>
        <Title>{item.title}</Title>
        
      </Desc>
    </Container>
  )
}

export default CategoryItem