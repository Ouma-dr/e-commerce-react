import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'
import {tablet} from '../responsive'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 20px;
${mobile({padding: "0", flexDirection :"column"})}
${tablet({padding: "10px", flexDirection :"column"})} 
`

const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item ={item} key ={item.id}/>
      ))}
    </Container>
  )
}

export default Categories