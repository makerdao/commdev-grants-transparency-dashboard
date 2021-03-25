import React from "react"

import { region } from "@modules/Data/dataformat"
import styled from "styled-components"

import { meetupsData } from "@modules/Data/meetups_data"

import Stat from "@modules/Stats"

const MeetupCountry = styled(Stat.Country)`
  margin: 0rem 2rem 0rem 2rem;
`
const countryKeysInOrder = [
  "Africa",
  "Asia",
  "Oceania",
  "South America",
  "Europe",
  "North America",
]

export default () => (
  <Stat.Row.Overflow gridColumn="2 / -1">
    {countryKeysInOrder.map(country => (
      <MeetupCountry
        key={country}
        country={country}
        bottomSpaced
        number={meetupsData.nMeetupsByRegion[country]}
        css={`
          flex-direction: row;
        `}
      />
    ))}
  </Stat.Row.Overflow>
)
