import React from "react"
import styled from "styled-components"
import StatusCircle from "../components/StatusCircle"
import {data} from "../utils.js"
import {pStatus} from '../../static/data/dataformat.js'

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
  color: #231536;
`


export default () => (
  <ProjectsStatusWrapper>
  {
    Object.values(pStatus).map( status => (
      <ProjectStatusContainer key={status.toString()}>
        <ProjectStatusObject>
          <ProjectObjectText>{data.NofProjectStatus[status]}</ProjectObjectText>
          <StatusCircle />
          <ProjectObjectText>{status}</ProjectObjectText>
        </ProjectStatusObject>
      </ProjectStatusContainer>
    ))
  }
  </ProjectsStatusWrapper>
);
