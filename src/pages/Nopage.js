import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height:80vh;
color: gray;
font-size:30px;
font-weight:400;
text-transform: uppercase;
`
const Nopage = () => {
  return (
    <Container>404 Not found</Container>
  )
}

export default Nopage