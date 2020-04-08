import React from "react"
import { Title } from "react-head"
import styled from "styled-components"

import Stat from "@modules/Stats"

import {meetupsData, meetupsDoughnutData} from "@src/utils"

const StatNumberLastCompiled = styled(Stat.Number)`
  /* If the "Data Last Compiled" stat object, invoked in index.js (displayed bottom right of screen), reduce font-size to 2rem; */
  font-size: 2rem;
`
console.log(meetupsData)
const Meetups = () => {
	return (
		<>
			<Title>MakerDAO Community - Development Grants</Title>
			{/* Primary Stats Section */}
			<Stat.Section>
				<Stat.Row>
				<Stat number={meetupsData.totalNumberPresentations} description="Number of Presentations" />
				<Stat number={meetupsData.totalMoneyDispersed} description="Dai Dispersed" />
				<Stat                                                                   
					number={meetupsData.totalNumberReportedAttendees}
					description="Total Attendees"
				/>
				</Stat.Row>
				<Stat.Row>
				<Stat
					colorOrange
					number={meetupsData.totalNumberMeetups}
					description="Total Meetups"
				/>
				<Stat.DoughnutChart
					data={meetupsDoughnutData}
					width={200}
					height={200}
					options={{
					maintainAspectRatio: true,
					responsive: true,
					}}
				/>
				<Stat
					number={meetupsData.applicationsSubmitted}
					description="Meetup Applications Submitted"
				/>
				</Stat.Row>
				<Stat.Row singleColumn>
				<Stat number={meetupsData.averageNumberMeetupsPerMonthThisYear} description="Avg. Meetups per Month" />
				<Stat number={meetupsData.averageNumberAttendeesPerMonthThisYear} description="Avg. Attendees per Month" />
				<Stat number={meetupsData.totalNumberCountries} description="Total Number of Countries" />
				</Stat.Row>
				<Stat.Row justifyContent="center">
				<Stat
					number={meetupsData.totalNumberUniqueHosts}
					description="Number of Unique Hosts"
				/>
				<Stat
					number={meetupsData.totalNumberRepeatHosts}
					description="Number of Repeat Hosts"
				/>
				</Stat.Row>
			</Stat.Section>
		</>
	)
}

export default Meetups;
