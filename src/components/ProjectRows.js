import React from "react"
import styled from "styled-components"
import projectRowStyles from "./projectrows.module.css"
import {device} from "../mediaqueries/device.js"
import { FaGithub } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';




const ProjectCardWrapper = styled.section`
grid-column: 1 / -1;
display: grid;
grid-template-columns: minmax(300px, 1024px);
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
flex-direction: row;
width:100%;
justify-content: space-between;
`



const ProjectRow = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 1rem 0rem 0.5rem 0rem;

@media ${device.mobileL} {
  padding: 1rem 0rem 2rem 0rem;
}
`

const ProjectTitle = styled.h2`
color: var(--headline-color);
margin:0;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
transition: 0.15s ease-in-out;

:hover {
  color: var(--highlight-color--makerteal);
}

span {
  color: var(--highlight-color--makerteal);
}

`


const ProjectLabel = styled.span`
font-size: 1rem;
margin:0;
color: var(--body-color);
text-transform: uppercase;
text-align: left;
margin-left: 1rem;

:nth-child(1) {
  margin-left: 0rem;
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
color: var(--body-color);
width: 75%;
white-space: nowrap;
text-overflow: ellipsis;
max-height: 140px;
overflow: hidden;
padding: 1rem 1rem 1rem 0rem;
transition: 0.1s ease-in-out;

:hover {
  /* Enable this and overflowing project descriptions will be revealed on hover */
  /* white-space: pre-wrap; */
}

@media ${device.tablet} {
  white-space: normal;
}
`

const ProjectLinkContainer = styled.div`
display: flex;
justify-items: center;
align-items: center;
`

const ProjectLink = styled.a`
display: flex;
align-items: center;
text-decoration: none;
font-size: 1.25rem;
margin: 0rem 0.475rem;
`

const TitleLinkLearnMore = styled.a`
align-self: center;
background: none;
text-decoration: none;
transition: 0.15s ease-in-out;


:hover {
  color: var(--highlight-color--makerteal);

  IcoArrow {
    transform:translate(4px);
  }
}
`

const IcoArrow = styled.span`
display: inline-block
transition: 0.15s ease-in-out;
color: var(--highlight-color--makerteal);
`

export default (props) => {
  return (
    <ProjectCardWrapper disp={props.disp}>
      {
        props.selectedProjects.map( (project, index) => (
          <ProjectCard key={project.name} hide={index > props.projectsToShow - 1}>
            <ProjectTopContainer>
              <TitleLinkLearnMore href={project.learnMoreLink} target="_blank" rel="noopener noreferrer">
                <ProjectTitle>{project.name} <IcoArrow>↗</IcoArrow></ProjectTitle>
              </TitleLinkLearnMore>
                <ProjectLinkContainer>
                  <ProjectLink href={project.github}>
                  <FaGithub className={projectRowStyles.ico} />
                  </ProjectLink>
                  <ProjectLink href={project.medium}>
                  <FaMedium className={projectRowStyles.ico} />
                  </ProjectLink>
                  <ProjectLink href={project.twitter}>
                  <FaTwitter className={projectRowStyles.ico} />
                  </ProjectLink>
                </ProjectLinkContainer>
            </ProjectTopContainer>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectBottomContainer>
            <ProjectRow>
              <ProjectLabel>{project.status}</ProjectLabel>
              <ProjectLabel>{project.location}</ProjectLabel>
            </ProjectRow>
            </ProjectBottomContainer>
          </ProjectCard>
        ))
      }
    </ProjectCardWrapper>
  )
};
