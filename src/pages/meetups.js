import React from "react"
import { Title } from "react-head"

import Stat from "@modules/Stats"

import MeetupCountries from "@modules/Layouts/MeetupCountries"

import { meetupsData } from "@modules/Data/meetups_data"

import {
  IntroHeader,
  IntroHeaderHighlight,
  IntroContent,
} from "@modules/ui/styles/Header.styles"

const {meetupsDoughnutData} = meetupsData;

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
        MakerDAO’s Core Community Development Initiative supports virtual and physical
        meetups to help anyone interested learn about Ethereum, DeFi, and
        MakerDAO.
      </IntroContent>
      <Stat.Section>
        <MeetupCountries/>
      </Stat.Section>
      <Stat.Section>
        <Stat.Row>
          <Stat
            number={meetupsData.totalNumberPresentations}
            description="Number of Presentations"
          />
          <Stat
            number={meetupsData.totalMoneyDispersed}
            description="Dai Dispersed"
          />
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
          <Stat
            number={meetupsData.averageNumberMeetupsPerMonthThisYear}
            description="Avg. Meetups per Month"
          />
          <Stat
            number={meetupsData.averageNumberAttendeesPerMonthThisYear}
            description="Avg. Attendees per Month"
          />
          <Stat
            number={meetupsData.totalNumberCountries}
            description="Total Number of Countries"
          />
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

export default Meetups
