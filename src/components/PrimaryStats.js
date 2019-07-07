import React from "react"
import styled from "styled-components"
import PrimaryStatObject from "../components/PrimaryStatObject.js"
import ProjectStatus from "../components/ProjectStatus.js"
import ProjectCountries from "../components/ProjectCountries.js"
import ChartDoughnut from "../components/ChartDoughnut.js"
import {device} from "../mediaqueries/device.js"
import {data} from "../utils.js"


const StatsWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, 300px);
grid-column-gap: 1rem;
grid-row-gap: 8rem;
justify-content: space-around;
padding: 6rem 0.5rem 6rem 0.5rem;
text-align: center;

@media ${device.mobileL} {
  grid-row-gap: 4rem;
}
`

const StatsRow = styled.div`
grid-column: 1 / -1;
display: grid;
grid-template-columns: repeat(auto-fit, 200px);
justify-content: space-around;
text-align: center;

@media ${device.mobileL} {
  grid-row-gap: 2rem;
  background-color: hsla(158, 56%, 88%, 1);
}
`


const StatsRowOverflow = styled.div`
grid-column: 1 / -1;
display: grid;
grid-template-columns: 280px 1fr;
justify-content: ${props => props.justifyContent};
text-align: center;
border: ${props => props.border};
border-radius: 2px;
justify-items: center;
`


const DoughnutChartContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
justify-self: center;
width: 100%;
max-width: 300px;
height: 100%;
`

export default () => (
  <React.Fragment>
  <StatsWrapper>
    <StatsRow>
      <PrimaryStatObject number={data.totalMoneyAwarded} description="Dai Awarded" />
      <PrimaryStatObject number={data.totalMoneyDispersed} description="Dai Dispersed" />
      <PrimaryStatObject number={data.averageAwardedMoney} description="Average Dai Award" />
    </StatsRow>
    <StatsRow>
      <PrimaryStatObject color="#000000" number={data.appsSubmitted} description="Grant Applications Submitted" />
      <DoughnutChartContainer>
      <ChartDoughnut/>
      </DoughnutChartContainer>
      <PrimaryStatObject number={data.appsAccepted} description="Grant Applications Accepted" />
    </StatsRow>
    <StatsRow>
      <PrimaryStatObject number={data.milestones.total} description="Total Milestones Completed" />
      <PrimaryStatObject number={data.milestones.last30days} description="Recent Milestones Completed" />
    </StatsRow>
    <StatsRowOverflow justifyContent="center">
      <PrimaryStatObject number={data.currentlyActive} description="Active Projects" />
      <ProjectStatus />
    </StatsRowOverflow>
    <StatsRowOverflow justifyContent="space-between" border="1px solid #eadea9;">
      <PrimaryStatObject number={data.nCountries} description="Countries Represented" />
      <ProjectCountries />
    </StatsRowOverflow>
  </StatsWrapper>
  </React.Fragment>
);
