import React from "react"
import styled from "styled-components"
import PrimaryStatObject from "../components/PrimaryStatObject.js"
import {data} from "../utils.js"

const StatsWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, 360px);
grid-column-gap: 3rem;
grid-row-gap: 8rem;
justify-content: space-around;
padding: 6rem 0rem 6rem 0rem;
`


export default () => (
  <StatsWrapper>
    <PrimaryStatObject number={data.appsSubmitted} description="Grant Applications Submitted" />
    <PrimaryStatObject number={data.appsAccepted} description="Grant Applications Accepted" />
    <PrimaryStatObject number={data.nCountries} description="Countries Represented" />
    <PrimaryStatObject number={data.totalMoneyAwarded} description="Funds Awarded" />
    <PrimaryStatObject number={data.totalMoneyDispersed} description="Funds Dispersed" />
    <PrimaryStatObject number={data.averageAwardedMoney} description="Average Awarded" />
    <PrimaryStatObject number={data.milestones.total} description="Milestones Completed" />
    <PrimaryStatObject number={data.milestones.last30days} description="Milestones Completed (30 days)" />
    <PrimaryStatObject number={data.currentlyActive} description="Active Projects" />
  </StatsWrapper>
);
