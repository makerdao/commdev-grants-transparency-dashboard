import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import PrimaryStats from "../components/PrimaryStats"
import ProjectStatus from "../components/ProjectStatus"
import GeoRep from "../components/GeoRep"
import ProjectCategories from "../components/ProjectCategories"
import ProjectCard from "../components/ProjectCards"



const ProjectsWrapper = styled.section`
  background: #F6F8F9;
  padding: 48px;
  `;





// const StatAverageAwarded = ({ number }) => {
//   return   <StatsContainer>
//       <StatsNumber>{number}</StatsNumber>
//       <StatsTitle>Grant Applications Submitted</StatsTitle>
//     </StatsContainer>
// }

export default () => (
  <React.Fragment>
    <Header />

    <PrimaryStats />

    <ProjectsWrapper>

      <ProjectStatus />

      <GeoRep />

      <ProjectCategories />

      <ProjectCard />

    </ProjectsWrapper>
  </React.Fragment>
)
