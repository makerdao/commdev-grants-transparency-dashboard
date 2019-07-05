import React from "react"
import styled from "styled-components"
import PrimaryStatObject from "../components/PrimaryStatObject.js"
import ProjectStatus from "../components/ProjectStatus.js"
import ProjectCountries from "../components/ProjectCountries.js"
import ChartDoughnut from "../components/ChartDoughnut.js"
import {data} from "../utils.js"


const StatsWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, 360px);
grid-column-gap: 3rem;
grid-row-gap: 8rem;
justify-content: space-around;
padding: 6rem 0.5rem 6rem 0.5rem;
text-align: center;
`

const StatsRow = styled.div`
grid-column: 1 / -1;
display: grid;
grid-template-columns: repeat(auto-fit, 360px);
justify-content: space-between;
text-align: center;
`


const StatsRowStatus = styled.div`
grid-column: 1 / -1;
display: grid;
grid-template-columns: 1fr;
justify-content: space-between;
text-align: center;
border: 1px solid #eadea9;
border-radius: 2px;
`

const DoughnutChartContainer = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
justify-self: center;
width: 100%;
max-width: 300px;
`

export default () => (
  <React.Fragment>
  <StatsWrapper>
    <StatsRow>
      <PrimaryStatObject number={data.totalMoneyAwarded} description="Funds Awarded" />
      <PrimaryStatObject number={data.totalMoneyDispersed} description="Funds Dispersed" />
      <PrimaryStatObject number={data.averageAwardedMoney} description="Average Awarded" />
    </StatsRow>
    <StatsRow>
      <PrimaryStatObject number={data.milestones.total} description="Milestones Completed" />
      <PrimaryStatObject number={data.milestones.last30days} description="Milestones Completed (30 days)" />
    </StatsRow>
    <StatsRow>
      <PrimaryStatObject color="#000000" number={data.appsSubmitted} description="Grant Applications Submitted" />
      <DoughnutChartContainer>
      <ChartDoughnut/>
      </DoughnutChartContainer>
      <PrimaryStatObject number={data.appsAccepted} description="Grant Applications Accepted" />
    </StatsRow>
    <StatsRowStatus>
      <PrimaryStatObject number={data.currentlyActive} description="Active Projects" />
      <ProjectStatus />
    </StatsRowStatus>
    <StatsRow>
      <PrimaryStatObject number={data.nCountries} description="Countries Represented" />
      <ProjectCountries />
    </StatsRow>
  </StatsWrapper>
  </React.Fragment>
);
