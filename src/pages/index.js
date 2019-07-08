import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import PrimaryStats from "../components/PrimaryStats"
import {ProjectCategories} from "../components/ProjectCategories"
import Footer from "../components/Footer"

const TopWrapper = styled.section`
background: linear-gradient(180deg, rgba(182, 237, 231, 0.38) 0%, rgba(253, 193, 52, 0.15) 100%);
/* background: linear-gradient(180deg, rgba(182, 237, 231, 0.38) 50%, rgba(253, 193, 52, 0) 100%); */
width: 100%;
`

export default () => (
  <React.Fragment>
    <TopWrapper>
      <Header />
      <PrimaryStats />
    </TopWrapper>
      <ProjectCategories />
    <Footer />

  </React.Fragment>
)
