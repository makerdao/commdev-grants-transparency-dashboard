import React from "react"

import PrimaryStats from "@modules/charts/PrimaryStats.js"
import { ProjectList } from "@modules/ui/ProjectList.js"

import { Layout } from "@modules/ui/layouts"
import tw from 'tailwind.macro';
export default () => {
  console.log(tw`text-test-pink`);

  return (
    <Layout>
    <PrimaryStats />
    <ProjectList />
  </Layout>
  )
}
