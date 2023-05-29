import React from 'react'
import styled from 'styled-components'
import { services } from '../data'
import {tablet} from '../responsive'


const Container = styled.div `
display: flex;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
background: lightgray;
padding: 20px;
${tablet({paddingLeft: "25px"})} ;
`
const Image = styled.img `
width: 80px;
height: 80px;
border-radius: 50%;

`
const Title = styled.h3 `
color: coral;
font-size: 26px;
font-weight: 400;
text-transform: uppercase;
`
const Detail = styled.p `
font-size: 24px;
font-weight: 300;
color: gray;
text-transform: uppercase;
`
const Desc = styled.div `

`
const Service = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`
const Services = () => {
    
  return (
    <Container>
    {services.map(item=>(
      <Service key={item.id}>
      <Image src={item.img}/>
      <Desc>
        <Title>{item.name}</Title>
        <Detail>{item.detail}</Detail>
        
      </Desc>
      </Service>
        
      ))}
    </Container>
  )
}

export default Services