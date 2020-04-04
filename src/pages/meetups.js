import React from "react"
import { Title } from "react-head"
import styled from "styled-components"

import Stat from "@modules/Stats"

const StatNumberLastCompiled = styled(Stat.Number)`
  /* If the "Data Last Compiled" stat object, invoked in index.js (displayed bottom right of screen), reduce font-size to 2rem; */
  font-size: 2rem;
`

const Meetups = () => {
	return (
		<>
			<Title>MakerDAO Community - Development Grants</Title>
			{/* Primary Stats Section */}
			<Stat.Section>
				<Stat.Row>
				<Stat number={0} description="Dai Awarded" />
				<Stat number={0} description="Dai Dispersed" />
				<Stat
					number={0}
					description="Average Dai Award"
				/>
				</Stat.Row>
				<Stat.Row>
				<Stat
					colorOrange
					number={0}
					description="Grant Applications Submitted"
				/>
				<Stat.DoughnutChart
					data={[0]}
					width={200}
					height={200}
					options={{
					maintainAspectRatio: true,
					responsive: true,
					}}
				/>
				<Stat
					number={0}
					description="Grant Applications Accepted"
				/>
				</Stat.Row>
				<Stat.Row singleColumn>
				<Stat number={0} description="Active Projects" />
				</Stat.Row>
				<Stat.Row singleColumn justifyContent="center">
	
				</Stat.Row>
				<Stat.Row justifyContent="center">
				<Stat
					number={0}
					description="Total Milestones Completed"
				/>
				<Stat
					number={0}
					description="Recent Milestones Completed"
				/>
				<Stat>
					<StatNumberLastCompiled>1</StatNumberLastCompiled>
					<Stat.Title>Months Since Last Update</Stat.Title>
				</Stat>
				</Stat.Row>
			</Stat.Section>
		</>
	)
}

export default Meetups;
