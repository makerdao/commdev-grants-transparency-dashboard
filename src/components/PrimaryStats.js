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
grid-row-gap: 5rem;
justify-content: center;
padding: 6rem 0.5rem 6rem 0.5rem;
text-align: center;

@media ${device.mobileL} {
  grid-row-gap: 4rem;
}
`

const StatsRow = styled.div`
grid-column: 1 / -1;
display: grid;
grid-template-columns: ${props => props.singlecolumn ? '1fr' : 'repeat(auto-fit, 300px)'};
grid-row-gap: 5rem;
justify-content: space-between;
text-align: center;

@media ${device.mobileL} {
  grid-row-gap: 2rem;
  background-color: ${props => props.backgroundColor};
}
`


const StatsRowOverflow = styled.div`
grid-column: 1 / -1;
display: grid;
grid-template-columns: repeat(auto-fit, 300px);
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
max-width: 200px;
height: 100%;
transform: rotate(8deg);


@media ${device.mobileL} {
  transform: rotate(97deg);
}
`

export default () => (
  <React.Fragment>
  <StatsWrapper>
    <StatsRow>
      <PrimaryStatObject number={data.totalMoneyAwarded} description="Dai Awarded" />
      <PrimaryStatObject number={data.totalMoneyDispersed} description="Dai Dispersed" />
      <PrimaryStatObject number={data.averageAwardedMoney} description="Average Dai Award" />
    </StatsRow>
    <StatsRow backgroundColor="hsla(158, 56%, 88%, 1)">
      <PrimaryStatObject colorOrange={true} number={data.appsSubmitted} description="Grant Applications Submitted" />
      <DoughnutChartContainer>
      <ChartDoughnut/>
      </DoughnutChartContainer>
      <PrimaryStatObject number={data.appsAccepted} description="Grant Applications Accepted" />
    </StatsRow>
    <StatsRow singlecolumn justifyContent="center">
      <PrimaryStatObject statsActiveProjects={true} number={data.currentlyActive} large={false} description="Active Projects" />
      <ProjectStatus />
    </StatsRow>
    <StatsRow>
      <PrimaryStatObject statsCountriesRepresented={true} number={data.nCountries} description="Countries Represented" />
      <PrimaryStatObject number={data.milestones.total} description="Total Milestones Completed" />
      <PrimaryStatObject number={data.milestones.last30days} description="Recent Milestones Completed" />
    </StatsRow>
    <StatsRowOverflow justifyContent="space-between">
      <ProjectCountries />
    </StatsRowOverflow>
  </StatsWrapper>
  </React.Fragment>
);
