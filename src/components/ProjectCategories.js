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
Chart.defaults.global.elements.arc.borderColor = '#1AAB9B';
Chart.defaults.global.elements.arc.backgroundColor = '#FFFFFF';
Chart.defaults.global.elements.arc.borderWidth = 1;
Chart.defaults.pie.hover.mode = "none";
Chart.defaults.pie.hover.mode = "none";
Chart.defaults.global.plugins.showLines = false;
console.log('global ptions', Chart.defaults.global)
// console.log('pie ptions', Chart.defaults.pie)




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
padding: 0.5rem 0.875rem 0.5rem 0.875rem;
color: #231536;
font-size: 1.25rem;
border: 1px solid #ddd;
border-radius: 2px;
background: ${props => props.active ? '#B6EDE7' : 'none'};
transition: 0.2s ease-in-out;
outline: none;

:hover {
  cursor: pointer;
  transform:translateY(-10%);
}

:active {
  background: #B6EDE7;
  border: 1px solid #B6EDE7;
}

`
const SeeMoreButton = styled.button`
color: ${props => props.disabled ? '#aaa' : '#231536'}; // TODO add style here alex
`

//categoryPieData(type)}
export class ProjectCategories extends Component {
  constructor (props) {
    super(props)
    this.cardsPerPage = 4
    this.state = {
      displayType: 'All',
      projectsToShow: this.cardsPerPage
    }
  }

  setType (e) {
    this.setState({
      displayType: e.target.id,
      projectsToShow: this.cardsPerPage
    })
  }

  seeMore (e) {
    this.setState({
      projectsToShow: this.state.projectsToShow + this.cardsPerPage
    })
  }

  render () {
    let categories = ['All']
    categories = categories.concat(Object.values(pType))
    let projectsForSelectedCategory = this.state.displayType === 'All' ?
      data.acceptedProjects
      : data.acceptedProjects.filter(p => p.type === this.state.displayType)

    return (
      <React.Fragment>
      <SectionWrapper small>
        <SectionTitle>Explore our funded projects</SectionTitle>
        {
          categories.map( type => (
            <ProjectCategoryContainer key={type.toString()}>
              <ProjectCategoryChart >
                <Pie
                  data={pieData('type', type)}
                  options = {{ maintainAspectRatio: false }}
                />
              </ProjectCategoryChart>
              <ProjectCategoryNumber>{type === 'All' ? data.appsAccepted : data.typeDistribution[type]}</ProjectCategoryNumber>
              <ProjectCategorySelector onClick={this.setType.bind(this)} id={type} active={type===this.state.displayType}> {type} </ProjectCategorySelector>
            </ProjectCategoryContainer>
          ))
        }
        </SectionWrapper>
        <ProjectCards
          selectedProjects={projectsForSelectedCategory}
          displayType={this.state.displayType}
          projectsToShow={this.state.projectsToShow}/>
        <SeeMoreButton
          disabled={this.state.projectsToShow >= projectsForSelectedCategory.length}
          onClick={this.seeMore.bind(this)}>
          more
        </SeeMoreButton>
        </React.Fragment>
    )
  }
}

