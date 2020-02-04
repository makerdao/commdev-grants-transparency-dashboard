import React from "react"
import styled from "styled-components"
import projectListRowStyles from "./projectlistrows.module.css"
import { device } from "@src/mediaqueries/device.js"
import { FaGithub } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

const ProjectCardWrapper = styled.section`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: minmax(300px, 1024px);
  justify-items: center;
  justify-content: space-around;
  margin: 0rem 1rem 0rem 1rem;

  @media ${device.mobileL} {
    grid-gap: 1rem;
  }
`

const ProjectCard = styled.div`
  display: ${props => (props.hide ? "none" : "flex")};
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
    border: 1px solid hsla(240, 10%, 80%, 1);
    box-shadow: 0px 0px 4px hsla(0, 0%, 50%, 0.25);
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
  width: 100%;
  justify-content: space-between;
`

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 0rem 0.5rem 0rem;

  @media ${device.mobileL} {
    padding: 1rem 0rem 1rem 0rem;
  }
`

const ProjectTitle = styled.h2`
  color: var(--headline-color);
  margin: 0;
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

  @media ${device.mobileL} {
    max-width: 180px;
  }
`

const ProjectLabel = styled.span`
  font-size: 1rem;
  margin: 0 1rem;
  color: var(--body-color);
  text-transform: uppercase;
  text-align: left;

  :nth-child(1) {
    margin-left: 0rem;
  }

  @media ${device.mobileL} {
    margin: 0.5rem;
  }
`

const ProjectLabelAudited = styled(ProjectLabel)`
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  background: linear-gradient(hsla(168, 50%, 90%, 1), hsla(168, 50%, 86%, 1));
  color: var(--highlight-color--makerteal);
  border-radius: 4px;
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
  width: 100%;

  max-height: 140px;
  overflow: auto;
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
      transform: translate(4px);
    }
  }
`

const IcoArrow = styled.span`
display: inline-block;
transition: 0.15s ease-in-out;
color: var(--highlight-color--makerteal);
`

export default props => {
  return (
    <ProjectCardWrapper disp={props.disp}>
      {props.selectedProjects.map((project, index) => (
        <ProjectCard key={project.name} hide={index > props.projectsToShow - 1}>
          <ProjectTopContainer>
            <TitleLinkLearnMore
              href={project.learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectTitle>
                {project.name} <IcoArrow>↗</IcoArrow>
              </ProjectTitle>
            </TitleLinkLearnMore>
            <ProjectLinkContainer>
              {project.github ? (
                <ProjectLink href={project.github}>
                  <FaGithub className={projectListRowStyles.ico} />
                </ProjectLink>
              ) : null}
              {project.medium ? (
                <ProjectLink href={project.medium}>
                  <FaMedium className={projectListRowStyles.ico} />
                </ProjectLink>
              ) : null}
              {project.twitter ? (
                <ProjectLink href={project.twitter}>
                  <FaTwitter className={projectListRowStyles.ico} />
                </ProjectLink>
              ) : null}
            </ProjectLinkContainer>
          </ProjectTopContainer>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectBottomContainer>
            <ProjectRow>
              <ProjectLabel>{project.status}</ProjectLabel>
              <ProjectLabel>{project.country}</ProjectLabel>
              {project.audited ? (
                <ProjectLabelAudited>Audited</ProjectLabelAudited>
              ) : null}
            </ProjectRow>
          </ProjectBottomContainer>
        </ProjectCard>
      ))}
    </ProjectCardWrapper>
  )
}
