import React from 'react'
import { Component } from 'react'
import styled from "styled-components"
import {SectionWrapper} from "../components/SectionWrapper.js"
import {PrimaryButton} from "../components/PrimaryButton.js"
import ProjectCards from "../components/ProjectCards"
import {data, pieData} from "../utils.js"
import {pType} from '../../static/data/dataformat.js'
import {Pie} from 'react-chartjs-2'
import Chart from "chart.js";

Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;


const ProjectCategoryList = styled.ul`
grid-column: 1 / -1;
display: flex;
flex-direction: flex-row;
list-style: none;
justify-content: space-between;
flex-wrap: nowrap;
overflow-x: auto;
padding: 2rem 0rem 2rem 0rem;
`

const ProjectCategoryContainer = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: hsla(255,255,255,0.4);
margin: 0rem 0.5rem 0rem 0.5rem;
`
//${props => props.disp ? 'flex' : 'none'};
const ProjectCategoryChart = styled.div`
display: flex;
width: 48px;
height: 48px;
border-radius: 100px;
background-color: #1AAB9B;
opacity: ${props => props.selected ? 1 : 0}
`

const ProjectCategoryNumber = styled.h6`
color: #444;
text-transform: uppercase;
`


const ViewMoreButtonContainer = styled.div`
display: flex;
justify-content: center;
margin: 1.5rem;
`

const ProjectCategoryButton = styled(PrimaryButton)`
min-width: 120px;
border: ${props => props.active ? '1px solid #B6EDE7' : '1px solid #ddd'};
background: ${props => props.active ? '#B6EDE7' : 'none'};
`

const ViewMoreButton = styled(PrimaryButton)`
opacity: 1;
justify-self: center;
font-size: 1.5rem;
padding: 1.25rem;
border: 1px solid #1AAB9B;
color: #1AAB9B;
border-radius: 2px;

:hover {
cursor: pointer;
transform: translateY(10%);
}
`

//categoryPieData(type)}
export class ProjectCategories extends Component {
  constructor (props) {
    super(props)
    this.cardsPerPage = 4
    this.state = {
      displayType: 'All',
      projectsToShow: this.cardsPerPage,
      projectsForSelectedCategory: data.acceptedProjects
    }
  }

  setType (e) {
    let desiredType = e.target.id
    let nextProjectsForSelectedCategory = desiredType === 'All' ?
        data.acceptedProjects
        : data.acceptedProjects.filter(p => p.type === desiredType)
    this.setState({
      displayType: desiredType,
      projectsToShow: this.cardsPerPage,
      projectsForSelectedCategory: nextProjectsForSelectedCategory
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

    return (
      <React.Fragment>
      <SectionWrapper small>
          <ProjectCategoryList>
          {
            categories.map( type => (
              <ProjectCategoryContainer key={type.toString()}>
                {
                  type===this.state.displayType ?
                    // in order for the animation to be seen upon selecting a filter, this object has to be drawn anew
                    (<ProjectCategoryChart selected={true}>
                        <Pie
                          data={pieData('type', type)}
                          options = {{ maintainAspectRatio: false }}
                        />
                     </ProjectCategoryChart>)
                    : <ProjectCategoryChart selected={false}></ProjectCategoryChart >
                }
                <ProjectCategoryNumber>{type === 'All' ? data.appsAccepted : data.typeDistribution[type]}</ProjectCategoryNumber>
                <ProjectCategoryButton onClick={this.setType.bind(this)} id={type} active={type===this.state.displayType}> {type} </ProjectCategoryButton>
              </ProjectCategoryContainer>
            ))
          }
          </ProjectCategoryList>
        </SectionWrapper>
        <ProjectCards
          selectedProjects={this.state.projectsForSelectedCategory}
          displayType={this.state.displayType}
          projectsToShow={this.state.projectsToShow}>
        </ProjectCards>
            {
              this.state.projectsToShow < this.state.projectsForSelectedCategory.length ?
                (<ViewMoreButtonContainer>
                   <ViewMoreButton
                    onClick={this.seeMore.bind(this)}>
                    View More
                  </ViewMoreButton>
                 </ViewMoreButtonContainer>)
                : null
            }
        </React.Fragment>
    )
  }
}
