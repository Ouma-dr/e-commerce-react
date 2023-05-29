import React ,{ useState } from 'react'
import styled from 'styled-components';
import { filterProducts } from '../data';
import ProductItem from './ProductItem';
import {mobile} from '../responsive'
import {tablet} from '../responsive'



const Container  = styled.div`
display: flex;
padding: 8px;
flex-wrap: wrap;
justify-content: space-between;
overflow: hidden;

`
const Top = styled.div `
height: 80px;
background-color: lightgray;
text-align: center;
padding-top: 25px;
`
const Text = styled.h1 `
text-align: center;
font-size: 32px;
font-weight: 800;
color: coral;
padding-bottom: 40px;
`

const Middle = styled.div `
text-align: center;
${mobile({paddingRight: "16px"})}
${tablet({paddingRight: "16px"})}
`
const Btns = styled.div `
padding: 3px;
${mobile({flexDirection: "column"})}
`
const Buttons = styled.button `
margin: 12px;
padding: 10px 12px;
border: 1px solid coral;
border-radius: 6px;
cursor: pointer;
color: coral;
font-size: 20px;
font-weight: 400;
&:hover {
  background-color: coral;
  color: lightgray;
  }
`

const Products = () => {


  const [products, setProducts] = useState(filterProducts);
  const filterCategory = (categoryItem) =>{
    const result = filterProducts.filter(currentCategory =>{
      return currentCategory.category === categoryItem;
    });
    setProducts(result);
  }
  return (
    <div>
    <Top>
      <Text>Our Products</Text>
    </Top>
    <Middle>
       <Btns>
        <Buttons onClick={()=> setProducts(filterProducts)}>All</Buttons>
        <Buttons onClick={()=> filterCategory('men')}>Men</Buttons>
        <Buttons onClick={()=> filterCategory('women')}>Women</Buttons>
        <Buttons onClick={()=> filterCategory('kids')}>Kids</Buttons>
        <Buttons onClick={()=> filterCategory('acc')}>Accessories</Buttons>
       </Btns>
     </Middle>
    <Container>
    { products.map(item=> (
        <ProductItem item={item} key={item.id}/>
    )) }
    </Container>
  
    
    </div>
  )
}

export default Products