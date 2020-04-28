import React from "react"

import { region } from "@static/data/dataformat"
import styled from "styled-components"

import {meetupsData} from "@modules/Data/meetups_data"

import Stat from "@modules/Stats"
console.log(meetupsData.nMeetupsByRegion)

const MeetupCountryRow = styled(Stat.Row)`
	display: flex;
	flex-wrap: wrap;
`

const MeetupCountry = styled(Stat.Country)`
	margin: 0rem 2rem 0rem 2rem; 
`

export default () => (
  <MeetupCountryRow>
    {// Only display regions that have countries in them.
    Object.values(region)
      .filter(reg => meetupsData.nMeetupsByRegion[reg] > 0)
      .map(reg => (
        <MeetupCountry
          key={reg}
          country={reg}
		  bottomSpaced
          number={meetupsData.nMeetupsByRegion[reg]}
        />
      ))}
  </MeetupCountryRow>
)
