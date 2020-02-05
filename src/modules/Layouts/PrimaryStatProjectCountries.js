import React from "react"
import styled from "styled-components"

import { region } from "@static/data/dataformat"

import { data } from "@src/utils"

import Stat from "@modules/Stats"

const StatULRowOverflow = styled(Stat.Row.Overflow).attrs({ as: "ul" })``

export default () => (
  <StatULRowOverflow gridColumn="1 / -1">
    {// Only display regions that have countries in them.
    Object.values(region)
      .filter(reg => data.nProjectsByRegion[reg] > 0)
      .map(reg => (
        <Stat.Country
          key={reg}
          country={reg}
          number={data.nProjectsByRegion[reg]}
        />
      ))}
  </StatULRowOverflow>
)
