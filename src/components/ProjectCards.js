import React from "react"
import styled from "styled-components"
import {device} from "../mediaqueries/device.js"



const ProjectCardWrapper = styled.section`
grid-column: 1 / -1;
display: grid;
grid-template-columns: repeat(auto-fit, 320px);
grid-gap: 3rem;
justify-items: center;
justify-content: center;

@media ${device.mobileL} {
  grid-gap: 1rem;
}
`



const ProjectCard = styled.div`
display: ${props => props.hide ? 'none' : 'flex'};
width: 100%;
max-width: 320px;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
background: hsla(210, 33%, 97%, 1);
/* border: 1px solid hsla(240, 10%, 90%, 1); */
border-top-left-radius: 4px;
border-top-right-radius: 4px;
box-shadow: 0px 0px 2px #888;

@media ${device.tablet} {
  flex-direction: column;
  justify-content: flex-start;
}

@media ${device.mobileL} {
  max-width: 280px;
  border: 1px solid hsla(157, 49%, 84%, 1);
  border-radius: 4px;
  padding-bottom: 0;
}
`

const ProjectTopContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 1rem;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
background:linear-gradient(hsla(168,50%,90%,1),hsla(168,50%,86%,1));
box-sizing: border-box;
`


const ProjectRow = styled.div`
display: flex;
flex-direction: row;
padding: 0.5rem 0rem 0.5rem 0rem;
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
flex-direction: column;
width: 100%;
padding: 1rem;
box-sizing: border-box;
`

const ProjectDescription = styled.p`
color: #53546a;
width: 100%;
max-height: 140px;
overflow: hidden;
padding: 0.5rem 0rem 0.5rem 0rem;
`

const ButtonLearnMore = styled.a`
align-self: center;

padding: 0.5rem 0.75rem 0.5rem 0.75rem;
width: 100%;
font-size: 1.15rem;
text-align: right;
color: #189a8c;
background: hsla(210, 33%, 97%, 1);
text-decoration: none;
padding: 1rem;
box-sizing: border-box;
transition: 0.2s ease-in-out;

:hover {
  background: hsla(216, 41%, 95%, 1);
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
            </ProjectBottomContainer>
            <ButtonLearnMore href={project.learnMoreLink} target="_blank" rel="noopener noreferrer">More ↗</ButtonLearnMore>
          </ProjectCard>
        ))
      }
    </ProjectCardWrapper>
  )
};
