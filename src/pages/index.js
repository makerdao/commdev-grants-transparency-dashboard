import React from "react"
import Header from "../components/Header.js"
import PrimaryStats from "../components/PrimaryStats.js"
import {ProjectList} from "../components/ProjectList.js"
import Footer from "../components/Footer"


export default () => (
  <React.Fragment>
      <Header />
      <PrimaryStats />
      <ProjectList />
      <Footer />
  </React.Fragment>
)
