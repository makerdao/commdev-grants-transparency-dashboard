import React from "react"

import PrimaryStats from "@modules/Layouts/PrimaryStats.js"
import ProjectList from "@modules/Layouts/ProjectList.js"

import { Title } from "react-head"

export default () => {
  return (
    <>
      <Title>MakerDAO Development Grants</Title>

      <PrimaryStats />
      <ProjectList />
    </>
  )
}
