import React from "react"
import Header from "../components/Header"
import PrimaryStats from "../components/PrimaryStats"
import {ProjectCategories} from "../components/ProjectCategories"
import Footer from "../components/Footer"


export default () => (
  <React.Fragment>
      <Header />
      <PrimaryStats />
      <ProjectCategories />
      <Footer />
  </React.Fragment>
)
