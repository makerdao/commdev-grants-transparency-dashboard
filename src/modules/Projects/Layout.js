import React from "react"
import styled from "styled-components"

import { device } from "@src/styles/mediaqueries"
import { SectionWrapper } from "@modules/ui/SectionWrapper"

export const SectionWrapperProjects = styled(SectionWrapper)`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1400px));
  margin-bottom: 2rem;
`

export const ProjectBackground = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(hsl(169, 49%, 89%), hsl(60, 44%, 94%));
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 1280px;
  border-radius: 8px;
  z-index: -9;
`

export const ProjectsWrapper = ({ children, large, name }) => (
  <SectionWrapperProjects large={large} name={name}>
    <ProjectBackground />
    {children}
  </SectionWrapperProjects>
)

export const ProjectListSection = styled.section`
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

export const ProjectTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const ProjectBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 0rem 0.5rem 0rem;
  align-items: center;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }

  @media ${device.mobileL} {
    padding: 1rem 0rem 1rem 0rem;
  }
`

export const ProjectCard = styled.div`
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
