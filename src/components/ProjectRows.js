import React from "react"
import styled from "styled-components"
import {device} from "../mediaqueries/device.js"



const ProjectCardWrapper = styled.section`
grid-column: 1 / -1;
display: grid;
grid-template-columns: 1fr;
justify-items: center;
justify-content: space-around;
margin:   0rem 1rem 0rem 1rem;

@media ${device.mobileL} {
  grid-gap: 1rem;
}
`



const ProjectCard = styled.div`
display: ${props => props.hide ? 'none' : 'flex'};
width: 100%;
max-width: 1024px;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
background: hsl(210, 33%, 98%);
border: 1px solid hsla(240, 10%, 90%, 1);
border-top: 0px;
padding: 1rem;

@media ${device.tablet} {
  flex-direction: column;
  justify-content: flex-start;
}

@media ${device.mobileL} {
  max-width: 280px;
  border-radius: 4px;
  padding-bottom: 0;
}

:first-child {
  border-top: 1px solid hsla(240, 10%, 90%, 1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
`

const ProjectTopContainer = styled.div`
display: flex;
flex-direction: column;
`



const ProjectRow = styled.div`
display: flex;
flex-direction: row;
padding: 0.5rem 0rem 1rem 0rem;
`

const ProjectTitle = styled.h5`
color: #231536;
margin:0;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
`


const ProjectLabel = styled.span`
font-size: 1rem;
margin:0;
color: #53546a;
text-transform: uppercase;
text-align: left;

:nth-child(2) {
  margin-left: 1rem;
}
`

const ProjectBottomContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
width: 100%;

@media ${device.tablet} {
  flex-wrap: wrap;
}
`


const ProjectDescription = styled.p`
color: #53546a;
width: 100%;
white-space: nowrap;
text-overflow: ellipsis;
max-height: 140px;
overflow: hidden;
padding: 0.5rem 1rem 0.5rem 0rem;

@media ${device.tablet} {
  white-space: normal;
}
`

const ButtonLearnMore = styled.a`
align-self: center;
border: 1px solid #189a8c;
border-radius: 0.125rem;
padding: 0.5rem 0.75rem 0.5rem 0.75rem;
width: 96px;
font-size: 1.15rem;
text-align: center;
color: #189a8c;
background: none;
text-decoration: none;
border-radius: 100px;

@media ${device.tablet} {
  margin: 1rem 0rem 1rem 0rem;
  align-self: flex-start;
}
`

export default (props) => {
  return (
    <ProjectCardWrapper disp={props.disp}>
      {
        props.selectedProjects.map( (project, index) => (
          <ProjectCard key={project.name} hide={index > props.projectsToShow - 1}>
            <ProjectTopContainer>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectRow>
                  <ProjectLabel>{project.status}</ProjectLabel>
                  <ProjectLabel>{project.location}</ProjectLabel>
                </ProjectRow>
            </ProjectTopContainer>
            <ProjectBottomContainer>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ButtonLearnMore href={project.learnMoreLink} target="_blank" rel="noopener noreferrer">More ↗</ButtonLearnMore>
            </ProjectBottomContainer>
          </ProjectCard>
        ))
      }
    </ProjectCardWrapper>
  )
};
