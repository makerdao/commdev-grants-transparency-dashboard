import React from "react"
import styled from "styled-components"
import {data} from "../utils.js"


const ProjectsStatusWrapper = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  grid-gap: 2rem;
  justify-content: center;
  background: #F6F8F9;
`


const ProjectStatusContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  justify-items: center;
`

const ProjectStatusObject = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: around;
  align-items: center;
  font-size: 2rem;
`

const ProjectObjectText = styled.h4`
  font-size: 1.25rem;
`

const ProjectCircle = styled.span`
  display: inline-block;
  width: 5.25rem;
  height: 5.25rem;
  background: #1AAB9B;
  border-radius: 100px;
`


export default () => (
  <ProjectsStatusWrapper>
    <ProjectStatusContainer>
      <ProjectStatusObject>
        <ProjectObjectText>{data.NofProjectStatus.prelaunch}</ProjectObjectText>
        <ProjectCircle></ProjectCircle>
        <ProjectObjectText>PRE-LAUNCH</ProjectObjectText>
      </ProjectStatusObject>
    </ProjectStatusContainer>
    <ProjectStatusContainer>
      <ProjectStatusObject>
        <ProjectObjectText>{data.NofProjectStatus.prototype}</ProjectObjectText>
        <ProjectCircle></ProjectCircle>
        <ProjectObjectText>PROTOTYPE</ProjectObjectText>
      </ProjectStatusObject>
    </ProjectStatusContainer>
    <ProjectStatusContainer>
      <ProjectStatusObject>
        <ProjectObjectText>{data.NofProjectStatus.beta}</ProjectObjectText>
        <ProjectCircle></ProjectCircle>
        <ProjectObjectText>BETA</ProjectObjectText>
      </ProjectStatusObject>
    </ProjectStatusContainer>
    <ProjectStatusContainer>
      <ProjectStatusObject>
        <ProjectObjectText>{data.NofProjectStatus.live}</ProjectObjectText>
        <ProjectCircle></ProjectCircle>
        <ProjectObjectText>LIVE</ProjectObjectText>
      </ProjectStatusObject>
    </ProjectStatusContainer>
    <ProjectStatusContainer>
      <ProjectStatusObject>
        <ProjectObjectText>{data.NofProjectStatus.inactive}</ProjectObjectText>
        <ProjectCircle></ProjectCircle>
        <ProjectObjectText>INACTIVE</ProjectObjectText>
      </ProjectStatusObject>
    </ProjectStatusContainer>
  </ProjectsStatusWrapper>
);
