import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import PrimaryStats from "../components/PrimaryStats"
import ProjectStatus from "../components/ProjectStatus"
import GeoRep from "../components/GeoRep"
import {ProjectCategories} from "../components/ProjectCategories"
import Footer from "../components/Footer"

const TopWrapper = styled.section`
background: linear-gradient(180deg, rgba(182, 237, 231, 0.38) 50%, rgba(253, 193, 52, 0) 100%);
width: 100%;
`


const BottomWrapper = styled.section`
  background: #F6F8F9;
  padding: 48px;
  `

const PageSectionTitle = styled.h4`
color: #1AAB9B;
text-align: center;
font-weight: 300;
`

export default () => (
  <React.Fragment>
    <TopWrapper>
      <Header />

      <PrimaryStats />
    </TopWrapper>
    <BottomWrapper>
      <PageSectionTitle>Explore our funded projects</PageSectionTitle>
      <ProjectStatus />
      <GeoRep />
      <ProjectCategories />

      {/* <ProjectCard /> */}

    </BottomWrapper>

    <Footer />
  </React.Fragment>
)
