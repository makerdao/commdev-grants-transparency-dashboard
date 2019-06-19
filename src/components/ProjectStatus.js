import React from "react"
import styled from "styled-components"


const ProjectsStatusWrapper = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-gap: 2rem;
  justify-content: center;
  background: #F6F8F9;
`


const ProjectStatusContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-items: center;
`

const ProjectStatusObject = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: around;
  align-items: center;
  font-size: 2rem;
`

const ProjectObjectText = styled.h6`
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
        <ProjectObjectText>54</ProjectObjectText>
        <ProjectCircle></ProjectCircle>
        <ProjectObjectText>PRE-LAUNCH</ProjectObjectText>
      </ProjectStatusObject>
    </ProjectStatusContainer>
    <ProjectStatusContainer>
      <ProjectStatusObject>
        <ProjectObjectText>19</ProjectObjectText>
        <ProjectCircle></ProjectCircle>
        <ProjectObjectText>PROTOTYPE</ProjectObjectText>
      </ProjectStatusObject>
    </ProjectStatusContainer>
    <ProjectStatusContainer>
      <ProjectStatusObject>
        <ProjectObjectText>12</ProjectObjectText>
        <ProjectCircle></ProjectCircle>
        <ProjectObjectText>BETA</ProjectObjectText>
      </ProjectStatusObject>
    </ProjectStatusContainer>
    <ProjectStatusContainer>
      <ProjectStatusObject>
        <ProjectObjectText>6</ProjectObjectText>
        <ProjectCircle></ProjectCircle>
        <ProjectObjectText>LIVE</ProjectObjectText>
      </ProjectStatusObject>
    </ProjectStatusContainer>
    <ProjectStatusContainer>
      <ProjectStatusObject>
        <ProjectObjectText>4</ProjectObjectText>
        <ProjectCircle></ProjectCircle>
        <ProjectObjectText>INACTIVE</ProjectObjectText>
      </ProjectStatusObject>
    </ProjectStatusContainer>
  </ProjectsStatusWrapper>
);
