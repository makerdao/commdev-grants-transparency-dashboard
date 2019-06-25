import React from "react"
import styled from "styled-components"
import {SectionWrapper} from "../components/SectionWrapper.js"
import {SectionTitle} from "../components/SectionTitle.js"
import {data, pieData} from "../utils.js"
import {pType} from '../../static/data/dataformat.js'
import {Pie} from 'react-chartjs-2'
import Chart from "chart.js";
Chart.defaults.global.legend.display = false;


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
color: #444;
text-transform: uppercase;
`

const ProjectCategoryLabel = styled.h6`
color: #231536;
`

//categoryPieData(type)}
export default (props) => (
  <SectionWrapper small>
    <SectionTitle>Projects By Category</SectionTitle>
    {
      Object.values(pType).map( type => (
        <ProjectCategoryContainer key={type.toString()}>
        <ProjectCategoryNumber>{data.typeDistribution[type]}%</ProjectCategoryNumber>
          <ProjectCategoryChart >
            <Pie
              data={pieData('type', type)}
                /* width={100} */
                /* height={50} */
                options = {{ maintainAspectRatio: false }}
             />
          </ProjectCategoryChart>
           <ProjectCategoryLabel>{type}</ProjectCategoryLabel>
        </ProjectCategoryContainer>
      ))
  }
  </SectionWrapper>
);
