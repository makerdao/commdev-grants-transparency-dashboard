import React from "react"
import styled from "styled-components"
import PrimaryStatObject from "../components/PrimaryStatObject.js"
import PrimaryStatProjectStatus from "../components/PrimaryStatProjectStatus.js"
import PrimaryStatProjectCountries from "../components/PrimaryStatProjectCountries.js"
import ChartDoughnut from "../components/ChartDoughnut.js"
import { device } from "../mediaqueries/device.js"
import { data } from "../utils.js"

const StatsWrapper = styled.section`
  display: grid;
  grid-template-columns: fit-content(1280px);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
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
  grid-template-columns: ${props =>
    props.singleColumn ? "1fr" : "repeat(auto-fit, minmax(240px, 300px))"};
  grid-row-gap: 5rem;
  justify-content: space-between;
  text-align: center;

  @media ${device.laptop} {
    justify-content: center;
    justify-items: center;
  }

  @media ${device.tablet} {
    grid-row-gap: 2rem;
    grid-template-columns: 1fr;
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
        <PrimaryStatObject
          number={data.totalMoneyAwarded}
          description="Dai Awarded"
        />
        <PrimaryStatObject
          number={data.totalMoneyDispersed}
          description="Dai Dispersed"
        />
        <PrimaryStatObject
          number={data.averageAwardedMoney}
          description="Average Dai Award"
        />
      </StatsRow>
      <StatsRow>
        <PrimaryStatObject
          colorOrange={true}
          number={data.appsSubmitted}
          description="Grant Applications Submitted"
        />
        <DoughnutChartContainer>
          <ChartDoughnut />
        </DoughnutChartContainer>
        <PrimaryStatObject
          number={data.appsAccepted}
          description="Grant Applications Accepted"
        />
      </StatsRow>
      <StatsRow singleColumn>
        <PrimaryStatObject
          statsActiveProjects={true}
          number={data.currentlyActive}
          large={false}
          description="Active Projects"
        />
        <PrimaryStatProjectStatus />
      </StatsRow>
      <StatsRow singleColumn justifyContent="center">
        {/*
        <PrimaryStatObject
          statsCountriesRepresented={true}
          number={"3"}
          description="Countries Represented"
        />
        */}
        <PrimaryStatProjectCountries />
      </StatsRow>
      <StatsRow justifyContent="center">
        <PrimaryStatObject
          number={data.milestones.total}
          description="Total Milestones Completed"
        />
        <PrimaryStatObject
          number={data.milestones.last30days}
          description="Recent Milestones Completed"
        />
        <PrimaryStatObject
          statsAttribution={true}
          number="1"
          description="Months Since Last Update"
        />
      </StatsRow>
    </StatsWrapper>
  </React.Fragment>
)
