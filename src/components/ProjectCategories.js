import React from "react"
import styled from "styled-components"
import {data} from "../utils.js"
import {pType} from '../../static/data/dataformat.js'

const ProjectCategoriesWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, 160px);
grid-gap: 2rem;
justify-content: space-around;
padding: 6rem 0rem 6rem 0rem;
`


const ProjectCategoryContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: hsla(255,255,255,0.4);
`

const ProjectCategoryChart = styled.div`
width: 48px;
height: 48px;
border-radius: 100px;
background-color: #1AAB9B;
`

const ProjectCategoryNumber = styled.h6`
color: #231536;
margin:1rem;
text-transform: uppercase;
`

const ProjectCategoryLabel = styled.h6`
color: #aaa;
margin:0;
text-transform: uppercase;
`



export default () => (
  <ProjectCategoriesWrapper>
    {
      Object.values(pType).map( type => (
        <ProjectCategoryContainer key={type.toString()}>
          <ProjectCategoryChart />
          <ProjectCategoryNumber>
            {data.typeDistribution[type]}%
          </ProjectCategoryNumber>
          <ProjectCategoryLabel>
            {type}
          </ProjectCategoryLabel>
        </ProjectCategoryContainer>
      ))
    }
  </ProjectCategoriesWrapper>

);
