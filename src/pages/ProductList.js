import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import {mobile} from '../responsive'
import {tablet} from '../responsive'

const Container = styled.div ``
const Title = styled.h1`
margin:20px;
color: coral;
font-size: 40px;
font-weight: 800;
`
const FilterContainer = styled.div `
display: flex;
justify-content: space-between;
`
const Filter = styled.div `
margin:20px;
${mobile({margin: "0 20px", display:"flex", flexDirection: "column"})}
${tablet({margin: "0 30px", display:"flex", flexDirection: "column"})}
`
const FilterText = styled.span `
font-size: 20px;
font-weight: 600;
color: gray;
margin-right: 20px;
${mobile({marginRight: "0"})}
${tablet({marginRight: "0"})}
`
const Select = styled.select `
padding: 10px;
margin-right: 20px;
font-size: 14px;
font-weight: 300;
color: gray;
${mobile({margin: "10px"})}
${tablet({margin: "10px"})}
`
const Option = styled.option `

`
const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Title>dresses</Title>
      <FilterContainer>
         <Filter>
           <FilterText>Filter Products:</FilterText>
           <Select>
             <Option disabled selected>Color</Option>
             <Option>White</Option>
             <Option>black</Option>
             <Option>Red</Option>
             <Option>blue</Option>
           </Select>
           <Select>
             <Option disabled selected>Size</Option>
             <Option>Xs</Option>
             <Option>S</Option>
             <Option>M</Option>
             <Option>L</Option>
           </Select>
        </Filter>
         <Filter>
         <FilterText>Sort Products:</FilterText>
         <Select>
           <Option selected>Newest</Option>
           <Option>Price (asc)</Option>
           <Option>Price (desc)</Option>
         </Select>
         </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList