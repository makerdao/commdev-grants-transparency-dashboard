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

import Label from "@modules/ui/Label"

import {
  SectionWrapperFooter,
  FooterBackgroundTop,
  FooterColumn,
  FooterCard,
  FooterCardTitle,
  FooterCardDesc,
  FooterCardListContainer,
  FooterCardListHeader,
  FooterCardListItem,
  FooterCardListFooter,
  FooterCardListItemLeft,
  FooterLink,
} from "@modules/ui/styles/Footer.styles"

const {totalMeetupsAppsSubmittedDoughnut, avgMeetupsAttendeesDoughnut, uniqueHostsRepeatHostsDoughnut} = meetupsData;



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
        MakerDAO’s Core Community Development Initiative supports virtual and physical
        meetups to help anyone interested learn about Ethereum, DeFi, and
        MakerDAO.
      </IntroContent>
      <MeetupsSection>
        <Stat.Row>
          <Stat
            number={meetupsData.totalNumberCountries}
            description="Total Number of Countries"
          />
        </Stat.Row>
        <MeetupCountries/>

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
            description="ROI Per Attendee"
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
          />
          <Stat
            colorOrange
            number={meetupsData.applicationsSubmitted}
            description="Meetup Applications Submitted"
          />
        </Stat.Row>

        <Stat.Row>
          <Stat
            number={meetupsData.totalNumberPresentations}
            description="Total Presentations"
          />
        </Stat.Row>

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
          />
          <Stat
            number={meetupsData.totalNumberRepeatHosts}
            colorOrange
            description="Number of Repeat Hosts"
          />
        </Stat.Row>
      </MeetupsSection>

      {/*FOOTER*/}
      <SectionWrapperFooter name="Footer">
        <FooterBackgroundTop />
        <FooterColumn columnLeft>
          <FooterCard>
            <FooterCardListContainer noBackground>

              <FooterLink
                href="https://community-development.makerdao.com/meetups"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterCardListItemLeft noBackground>
                  <Label
                    colorMakerBlue="true"
                    labelContent="How can I get a meetup grant?"
                  ></Label>
                  Get up to speed on how to host a meetup and receive funding to help cover the costs.
                </FooterCardListItemLeft>
              </FooterLink>
              <FooterLink
                href="https://community-development.makerdao.com/meetups/faq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterCardListItemLeft noBackground>
                  <Label
                    colorMakerBlue="true"
                    labelContent="Questions about the meetup grants program?"
                  ></Label>
                  Visit the Meetup Grants FAQ
                </FooterCardListItemLeft>
              </FooterLink>
              <FooterLink
                href="https://awesome.makerdao.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterCardListItemLeft noBackground>
                  <Label colorMakerBlue="true" labelContent="New to Maker?"></Label>
                  View a list of educational resources.
                </FooterCardListItemLeft>
              </FooterLink>
              <FooterLink
                href="https://forum.makerdao.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterCardListItemLeft noBackground>
                  <Label
                    colorMakerBlue="true"
                    labelContent="Meet the community"
                  ></Label>
                  Join the official Maker forum.
                </FooterCardListItemLeft>
              </FooterLink>
              <FooterLink
                href="https://community-development.makerdao.com/meetups/getting-started-guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterCardListItemLeft noBackground>
                  <Label
                    colorMakerBlue="true"
                    labelContent="Looking for guidance?"
                  ></Label>
                  View our meetup guides.
                </FooterCardListItemLeft>
              </FooterLink>
            </FooterCardListContainer>
          </FooterCard>
        </FooterColumn>

        <FooterColumn>
          <FooterCard hero>
            <FooterCardListHeader>
              <FooterCardTitle>APPLY</FooterCardTitle>
            </FooterCardListHeader>
            <FooterCardListFooter applyCardFooter>
                ↗ Fill out the{" "}
                <FooterLink inlineLink href="https://airtable.com/shr4HOtcZ8o3VZmek" target="_blank">
                application form.
              </FooterLink>
            </FooterCardListFooter>
          </FooterCard>
          <FooterCard>
            <FooterCardListContainer>
              <FooterCardListItem noBackground>
                <Label labelContent="Due to the large number of submissions, please expect a response within 2-3 weeks."></Label>
              </FooterCardListItem>
            </FooterCardListContainer>
          </FooterCard>
        </FooterColumn>
      </SectionWrapperFooter>
    </>
  )
}

export default Meetups
