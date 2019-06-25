import React from "react"
import styled from "styled-components"
import {data, pieData} from "../utils.js"
import {pStatus} from '../../static/data/dataformat.js'
import {Pie} from 'react-chartjs-2'
import Chart from "chart.js";
Chart.defaults.global.legend.display = false;

const ProjectStatusWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, 160px);
grid-gap: 2rem;
justify-content: space-around;
padding: 6rem 0rem 6rem 0rem;
`

const ProjectStatusContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: hsla(255,255,255,0.4);
`

const ProjectStatusChart = styled.div`
width: 48px;
height: 48px;
border-radius: 100px;
background-color: #1AAB9B;
`

const ProjectStatusNumber = styled.h6`
color: #444;
`

const ProjectStatusLabel = styled.h6`
color: #231536;
`

export default () => (
  <ProjectStatusWrapper>
  {
    Object.values(pStatus).map( status => (
      <ProjectStatusContainer key={status.toString()}>
          <ProjectStatusNumber>{data.NofProjectStatus[status]}</ProjectStatusNumber>
        <ProjectStatusChart>
          <Pie
            data={pieData('status', status)}
            width={100}
            height={50}
            options = {{ maintainAspectRatio: false }}
          />
        </ProjectStatusChart>
          <ProjectStatusLabel>{status}</ProjectStatusLabel>
      </ProjectStatusContainer>
    ))
  }
  </ProjectStatusWrapper>
);
