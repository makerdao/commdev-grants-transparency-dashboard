import React from "react"
import styled from "styled-components"
import {data} from "../utils.js"




const ProjectCardWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, 300px);
justify-items: space-around;
grid-gap: 3rem;
justify-content: space-around;
`


const ProjectCard = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 5fr 1fr;
width: 300px;
height: 240px;
flex-direction: column;
align-items: flex-start;
background: hsla(255,255,255,0.4);
`


const ProjectTitle = styled.h6`
grid-column: 1 / -1;
grid-row: 1;
color: #231536;
margin:0;
text-transform: uppercase;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
`

const ProjectStatus = styled.h6`
grid-column: 1 / -1;
grid-row: 2;
color: #ccc;
margin-top: 1rem;
`


const ProjectDescription = styled.p`
grid-column: 1 / -1;
grid-row: 3;
color: #aaa;
overflow: hidden;
`

const ButtonLearnMore = styled.a`
grid-column: 1 / 3;
grid-row: 4;
border: 1px solid #231536;
border-radius: 0.125rem;
padding: 0.875rem 1.5rem 0.875rem 1.5rem;
font-size: 1rem;
text-align: center;
background: none;
text-decoration: none;
`



export default () => (
  <ProjectCardWrapper >
  {
    Object.values(data.acceptedProjects).map( project => (
      <ProjectCard key={project.name}>
          <ProjectTitle>{project.name}</ProjectTitle>
          <ProjectStatus>{project.status}</ProjectStatus>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ButtonLearnMore href={project.learnMoreLink} target="_blank" rel="noopener noreferrer"> Learn More</ButtonLearnMore>
      </ProjectCard>
    ))
  }
  </ProjectCardWrapper>
);
