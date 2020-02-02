import React from "react"

import PrimaryStats from "@modules/layouts/PrimaryStats.js"
import { ProjectList } from "@modules/ui/ProjectList.js"

import { PageLayout } from "@modules/ui/layouts"

export default () => {
  return (
    <PageLayout>
      <PrimaryStats />
      <ProjectList />
    </PageLayout>
  )
}
