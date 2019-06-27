import React from "react"
import styled from "styled-components"
import {SectionTitle} from "../components/SectionTitle.js"
import {data} from "../utils.js"



const ProjectCardWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, 300px);
justify-items: space-around;
grid-gap: 4rem;
justify-content: space-around;
`


const ProjectCard = styled.div`
display: ${props => props.hide ? 'none' : 'grid'};
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 2fr 1fr 1fr;
width: 300px;
height: 280px;
margin: 2rem 0rem 2rem 0rem;
flex-direction: column;
align-items: flex-start;
background: hsla(255,255,255,0.4);
border: 1px solid #ddd;
padding: 1rem 1rem 0.15rem 1rem;
`


const ProjectTitle = styled.h5`
grid-column: 1 / -1;
grid-row: 1;
color: #231536;
margin:0;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
`

const Row = styled.div`
grid-column: 1 / -1;
display: grid;
grid-template-columns: repeat(2, 1fr);

`

const ProjectStatus = styled.h6`
grid-column: 1 / 2;
grid-row: 4;
color: #444;
text-transform: uppercase;
`

const ProjectCategory = styled.h6`
grid-column: 1 / 3;
grid-row: 3;
color: #444;
`


const ProjectDescription = styled.p`
grid-column: 1 / -1;
grid-row: 2;
color: #444;
max-height: 140px;
overflow: hidden;
`

const ButtonLearnMore = styled.a`
grid-column: 3 / -1;
grid-row: 4;
align-self: center;
justify-self: flex-end;
border: 1px solid #aaa;
border-radius: 0.125rem;
padding: 0.875rem 0.875rem 0.875rem 0.875rem;
max-width: 96px;
font-size: 1.15rem;
text-align: center;
background: none;
text-decoration: none;
`

export default (props) => {
  console.log('props', props)
  // let projectsToDisplay

  return (
    <ProjectCardWrapper disp={props.disp}>
      <SectionTitle>Project Index</SectionTitle>
      {
        props.selectedProjects.map( (project, index) => (
          <ProjectCard key={project.name} hide={index > props.projectsToShow - 1}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectStatus>{project.status}</ProjectStatus>

            <ButtonLearnMore href={project.learnMoreLink} target="_blank" rel="noopener noreferrer"> Learn More</ButtonLearnMore>
          </ProjectCard>
        ))
      }
    </ProjectCardWrapper>
  )
};
//<ProjectCard key={project.name} hide={props.displayType !== 'All' && props.displayType !== project.type && Number(index) > Number(props.pageNumber * 1)}>
