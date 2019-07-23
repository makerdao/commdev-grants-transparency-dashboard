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
grid-template-columns: repeat(auto-fit, minmax(300px, 1200px));
grid-column-gap: 1rem;
grid-row-gap: 4rem;
justify-content: center;
padding: 6rem 0.5rem 6rem 0.5rem;
text-align: center;

@media ${device.tablet} {
  grid-row-gap: 3rem;
}
`

const StatsRow = styled.div`
grid-column: 1 / -1;
display: grid;
grid-template-columns: ${props => props.singlecolumn ? '1fr' : 'repeat(auto-fit, minmax(240px, 300px))'};
grid-row-gap: 5rem;
justify-content: space-between;
text-align: center;

@media ${device.laptop} {
  justify-content: center;
  justify-items: center;
}

@media ${device.tablet} {
  grid-row-gap: 2rem;
  /* Sets a single column for the element wrapping the doughnut graph & stats */
  grid-template-columns: ${props => props.doughnutcolumn ? '1fr' : 'repeat(auto-fit, minmax(240px, 300px))'};
}

@media ${device.mobileL} {
  grid-row-gap: 2rem;
  background-color: ${props => props.backgroundColor};
}
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
    <StatsRow doughnutcolumn>
      <PrimaryStatObject colorOrange={true} number={data.appsSubmitted} description="Grant Applications Submitted" />
      <DoughnutChartContainer>
      <ChartDoughnut/>
      </DoughnutChartContainer>
      <PrimaryStatObject number={data.appsAccepted} description="Grant Applications Accepted" />
    </StatsRow>
    <StatsRow singlecolumn>
      <PrimaryStatObject statsActiveProjects={true} number={data.currentlyActive} large={false} description="Active Projects" />
      <ProjectStatus />
    </StatsRow>
    <StatsRow singlecolumn justifyContent="space-between">
      <PrimaryStatObject statsCountriesRepresented={true} number={data.nCountries} description="Countries Represented" />
      <ProjectCountries />
    </StatsRow>
    <StatsRow justifyContent="center">
      <PrimaryStatObject number={data.milestones.total} description="Total Milestones Completed" />
      <PrimaryStatObject number={data.milestones.last30days} description="Recent Milestones Completed" />
      <PrimaryStatObject statsAttribution={true} number="1" description="Months Since Last Update" />
    </StatsRow>
  </StatsWrapper>
  </React.Fragment>
);
