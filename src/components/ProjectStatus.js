import React from "react"
import styled from "styled-components"
import {RowOverflow} from "../components/RowOverflow.js"
import {device} from "../mediaqueries/device.js"
import {data, pieData} from "../utils.js"
import {pStatus} from '../../static/data/dataformat.js'
import {Pie} from 'react-chartjs-2'
import Chart from "chart.js";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.elements.arc.borderColor = '#1AAB9B';
Chart.defaults.global.elements.arc.backgroundColor = 'hsl(152, 45%, 94%)';
Chart.defaults.global.elements.arc.borderWidth = 1;
Chart.defaults.pie.hover.mode = "none";


const ProjectStatusContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background: linear-gradient(hsla(168, 50%, 90%, 1), hsla(168, 50%, 86%, 1));
min-width: 160px;


@media ${device.tablet} {
  /* Changes the orientation (to 90degrees) of the background gradient to make it blend once this element changes from flex-direction: row to flex-direction: column */
  background: linear-gradient(90deg,hsla(168, 50%, 90%, 1), hsla(168, 50%, 86%, 1));
}
`

const ProjectStatusChart = styled.div`
width: 48px;
height: 48px;
border-radius: 100px;
`

const ProjectStatusNumber = styled.h6`
color: #444;
margin-bottom: 1rem;
`

const ProjectStatusLabel = styled.h6`
color: #231536;
`


export default () => (
  <RowOverflow gridColumn="2 / -1" maxWidth="" justifyContent="center">
  {
    Object.values(pStatus).map( status => (
      <ProjectStatusContainer key={status.toString()}>
          <ProjectStatusNumber>{data.NofProjectStatus[status]}</ProjectStatusNumber>
        <ProjectStatusChart>
          <Pie
            data={pieData('status', status)}
            width={100}
            height={50}
            options = {{
              maintainAspectRatio: false,
              /* color: '#fff' */
            }}
          />
        </ProjectStatusChart>
          <ProjectStatusLabel>{status}</ProjectStatusLabel>
      </ProjectStatusContainer>
    ))
  }
  </RowOverflow>
)
