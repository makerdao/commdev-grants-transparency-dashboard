import React from 'react'
import { Component } from 'react'
import styled from "styled-components"
import {SectionWrapper} from "../components/SectionWrapper.js"
import ProjectCards from "../components/ProjectCards"
import {SectionTitle} from "../components/SectionTitle.js"
import {data, pieData} from "../utils.js"
import {pType} from '../../static/data/dataformat.js'
import {Pie} from 'react-chartjs-2'
import Chart from "chart.js";
// import h from 'react-hyperscript'
Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;


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

const ProjectCategorySelector = styled.button`
color: #231536;
`

//categoryPieData(type)}
export class ProjectCategories extends Component {
  constructor (props) {
    super(props)
    this.state = {displayType: 'all'}
  }

  setType (e) {
    this.setState({
      displayType: e.target.id
    })
  }

  render () {
    let categories = ['all']
    categories = categories.concat(Object.values(pType))
    return (
      <React.Fragment>
      <SectionWrapper small>
        <SectionTitle>Projects By Category</SectionTitle>
        {
          categories.map( type => (
            <ProjectCategoryContainer key={type.toString()}>
              <ProjectCategoryChart >
                <Pie
                  data={pieData('type', type)}
                  options = {{ maintainAspectRatio: false }}
                />
              </ProjectCategoryChart>
              <ProjectCategoryNumber>{type === 'all' ? data.appsAccepted : data.typeDistribution[type]}</ProjectCategoryNumber>
              <ProjectCategorySelector onClick={this.setType.bind(this)} id={type}> {type} </ProjectCategorySelector>
            </ProjectCategoryContainer>
          ))
        }
        </SectionWrapper>
        <ProjectCards displayType={this.state.displayType}/>
        </React.Fragment>

    )
  }
}
