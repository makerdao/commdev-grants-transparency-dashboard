import React from "react"
import styled from "styled-components"

import { device } from "@src/mediaqueries/device"
import { SectionWrapper } from "@modules/ui/SectionWrapper"

export const SectionWrapperProjects = styled(SectionWrapper)`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1400px));
`

export const ProjectBackground = styled.div`
  width: 100%;
  height: 50%;
  background: linear-gradient(hsl(169, 49%, 89%), hsl(60, 44%, 94%));
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 1280px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  z-index: -9;
`

export const ProjectsContainer = ({ children, large, name }) => (
  <SectionWrapperProjects large={large} name={name}>
    <ProjectBackground />
    {children}
  </SectionWrapperProjects>
)
