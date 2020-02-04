import React from "react"

import PrimaryStats from "@modules/layouts/PrimaryStats.js"
import { ProjectList } from "@modules/ui/ProjectList.js"

import { PageLayout } from "@modules/Layouts/PageLayout"
import { Title } from "react-head"
export default () => {
  return (
    <PageLayout>
      <Title>MakerDAO Development Grants</Title>
      <PrimaryStats />
      <ProjectList />
    </PageLayout>
  )
}
