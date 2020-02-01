import React from "react"

import PrimaryStats from "@modules/charts/PrimaryStats.js"
import {ProjectList} from "@modules/ui/ProjectList.js"

import {Layout} from "@modules/ui/layouts";


export default () => (
  <Layout>
      <PrimaryStats />
      <ProjectList />
  </Layout>
)
