import React from "react"
import { Title } from "react-head"
import styled from "styled-components"

import Stat from "@modules/Stats"

import MeetupCountries from "@modules/Layouts/MeetupCountries"

import { meetupsData } from "@modules/Data/meetups_data"

import {
  IntroHeader,
  IntroHeaderHighlight,
  IntroContent,
} from "@modules/ui/styles/Header.styles"

const {
  totalMeetupsAppsSubmittedDoughnut,
  avgMeetupsAttendeesDoughnut,
  uniqueHostsRepeatHostsDoughnut,
} = meetupsData

const MeetupsSection = styled(Stat.Section)`
  padding-top: 3rem;
`

const Meetups = () => {
  return (
    <>
      <Title>MakerDAO Community - Development Grants</Title>
      {/* Primary Stats Section */}
      <IntroHeader>
        We've brought together{" "}
        <IntroHeaderHighlight>
          {meetupsData.totalNumberReportedAttendees}
        </IntroHeaderHighlight>{" "}
        people since February 2018.
      </IntroHeader>
      <IntroContent>
        MakerDAO’s Core Community Development Initiative supports virtual and
        physical meetups to help anyone interested learn about Ethereum, DeFi,
        and MakerDAO.
      </IntroContent>
      <MeetupsSection>
        <Stat.Row>
          <Stat
            number={meetupsData.totalNumberCountries}
            description="Countries With Meetups"
          />
        </Stat.Row>
        <MeetupCountries />

        <Stat.Row>
          <Stat
            number={meetupsData.totalMoneyDispersed}
            description="Total Dai Dispersed"
          />
          <Stat
            number={meetupsData.totalNumberReportedAttendees}
            description="Total Attendees"
          />
          <Stat
            number={meetupsData.roiPerAttendee}
            description="Cost Per Attendee"
          />
        </Stat.Row>
        <Stat.Row>
          <Stat
            number={meetupsData.averageNumberMeetupsPerMonthThisYear}
            description="Avg. Meetups per Month"
          />
          <Stat.DoughnutChart
            data={avgMeetupsAttendeesDoughnut}
            width={200}
            height={200}
            options={{
              maintainAspectRatio: true,
              responsive: true,
            }}
            css={`
              transform: rotate(-95deg);
            `}
          />
          <Stat
            number={meetupsData.averageNumberAttendeesPerMonthThisYear}
            colorOrange
            description="Avg. Attendees per Month"
          />
        </Stat.Row>

        <Stat.Row>
          <Stat
            number={meetupsData.totalNumberMeetups}
            description="Total Meetups"
          />
          <Stat.DoughnutChart
            data={totalMeetupsAppsSubmittedDoughnut}
            width={200}
            height={200}
            options={{
              maintainAspectRatio: true,
              responsive: true,
            }}
            css={`
              transform: rotate(-165deg);
            `}
          />
          <Stat
            colorOrange
            number={meetupsData.applicationsSubmitted}
            description="Meetup Applications Submitted"
          />
        </Stat.Row>

        {/* Alex -- Gonna keep this out for now based on my comments in rocketchat.
        <Stat.Row>
          <Stat
            number={meetupsData.totalNumberPresentations}
            description="Total Presentations"
          />
        </Stat.Row> */}

        <Stat.Row justifyContent="center">
          <Stat
            number={meetupsData.totalNumberUniqueHosts}
            description="Number of Unique Hosts"
          />
          <Stat.DoughnutChart
            data={uniqueHostsRepeatHostsDoughnut}
            width={200}
            height={200}
            options={{
              maintainAspectRatio: true,
              responsive: true,
            }}
            css={`
              transform: rotate(-235deg);
            `}
          />
          <Stat
            number={meetupsData.totalNumberRepeatHosts}
            colorOrange
            description="Number of Repeat Hosts"
          />
        </Stat.Row>
      </MeetupsSection>
    </>
  )
}

export default Meetups
