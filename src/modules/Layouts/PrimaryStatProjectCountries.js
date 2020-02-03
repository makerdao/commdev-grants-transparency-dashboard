import React from "react"
import styled from 'styled-components'
//Static
import { region } from "@static/data/dataformat.js"
//SRC
import { data } from "@src/utils.js"
//Modules
import Stat from "@modules/Stats"

const StatULRowOverflow = styled(Stat.Row.Overflow).attrs({as: "ul"})``;
export default () => (
  <StatULRowOverflow gridColumn="1 / -1">
    {// Only display regions that have countries in them.
    Object.values(region)
      .filter(reg => data.nProjectsByRegion[reg] > 0)
      .map(reg => (
        <Stat.Country key={reg} country={reg} number={data.nProjectsByRegion[reg]} />
      ))}
  </StatULRowOverflow>
)
