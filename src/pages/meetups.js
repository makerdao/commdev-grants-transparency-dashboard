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

<<<<<<< HEAD
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

const StatNumberLastCompiled = styled(Stat.Number)`
  /* If the "Data Last Compiled" stat object, invoked in index.js (displayed bottom right of screen), reduce font-size to 2rem; */
  font-size: 2rem;
=======
const {doughnutData} = meetupsData;

const MeetupsSection = styled(Stat.Section)`
  padding-top: 3rem; 
>>>>>>> cdip10-v2
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
            number={meetupsData.totalNumberReportedAttendees}
            description="Total Attendees"
          />
          <Stat
            number={meetupsData.averageNumberMeetupsPerMonthThisYear}
            description="Avg. Meetups per Month"
          />
          <Stat
            number={meetupsData.averageNumberAttendeesPerMonthThisYear}
            description="Avg. Attendees per Month"
          />
        </Stat.Row>

        <Stat.Row>
          <Stat
            number={meetupsData.totalNumberMeetups}
            description="Total Meetups"
          />
          <Stat.DoughnutChart
            data={doughnutData}
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
<<<<<<< HEAD
      </Stat.Section>
      
      {/*FOOTER*/}
      <SectionWrapperFooter name="Footer">
        <FooterBackgroundTop />
        <FooterColumn columnLeft>
          <FooterCard>
            <FooterCardListContainer noBackground>
              <FooterCardListHeader columnLeft>
                <FooterLink
                  href="https://community-development.makerdao.com/meetups"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FooterCardTitle columnLeft>How can I get a meetup grant?</FooterCardTitle>
                  <FooterCardDesc>
                    Get up to speed on how to host a meetup and receive funding to help cover the costs.
                  </FooterCardDesc>
                </FooterLink>
              </FooterCardListHeader>
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
=======
      </MeetupsSection>
    </>
>>>>>>> cdip10-v2
  )
}

export default Meetups
