import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import PrimaryStats from "../components/PrimaryStats"
import ProjectStatus from "../components/ProjectStatus"
import GeoRep from "../components/GeoRep"
import ProjectCategories from "../components/ProjectCategories"
import ProjectCard from "../components/ProjectCards"
import Footer from "../components/Footer"

const TopWrapper = styled.section`
background: linear-gradient(180deg, rgba(182, 237, 231, 0.38) 50%, rgba(253, 193, 52, 0) 100%);
`


const BottomWrapper = styled.section`
  background: #F6F8F9;
  padding: 48px;
  `

export default () => (
  <React.Fragment>
    <TopWrapper>
      <Header />

      <PrimaryStats />
    </TopWrapper>
    <BottomWrapper>

      <ProjectStatus />

      <GeoRep />

      <ProjectCategories />

      <ProjectCard />

    </BottomWrapper>

    <Footer />
  </React.Fragment>
)
