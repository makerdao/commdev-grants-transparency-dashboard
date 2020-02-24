import React from "react"
import styled from "styled-components"

import { region } from "@static/data/dataformat"

import { data } from "@src/utils"

import Stat from "@modules/Stats"

export default () => (
  <Stat.Row.Overflow gridColumn="1 / -1">
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
  </Stat.Row.Overflow>
)
