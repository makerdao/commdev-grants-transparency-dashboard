import React from "react"

import { region } from "@modules/Data/dataformat"

import { grantsData } from "@modules/Data/grants_data" //TODO: rename this component to specify that it displays grant stats

import Stat from "@modules/Stats"

export default () => (
  <Stat.Row.Overflow gridColumn="1 / -1">
    {// Only display regions that have countries in them.
    Object.values(region)
      .filter(reg => grantsData.nProjectsByRegion[reg] > 0)
      .map(reg => (
        <Stat.Country
          key={reg}
          country={reg}
          number={grantsData.nProjectsByRegion[reg]}
        />
      ))}
  </Stat.Row.Overflow>
)
