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
  Footer, 
  FooterItem,
  FooterChildren
} from "@modules/ui/styles/Footer.styles"

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
        We've funded{" "}
        <IntroHeaderHighlight>
          {meetupsData.totalNumberReportedAttendees}
        </IntroHeaderHighlight>{" "}
        meetups in{" "}
        <IntroHeaderHighlight>
          {meetupsData.totalNumberCountries}
        </IntroHeaderHighlight>{" "}
        countries
      </IntroHeader>
      <IntroContent>
        Started by the Maker Foundation's Community Development Team, this grant program
        supported virtual and physical meetups that helped individuals around the world learn
        about Ethereum, DeFi, and MakerDAO.
      </IntroContent>

      <MeetupsSection>
        <Stat.Row>
          <MeetupCountries />
        </Stat.Row>
        <Stat.Row>
        <Stat
            number={meetupsData.totalMoneyDispersed}
            description="Total Dai Dispersed"
          />
          
          {/* <Stat.CircleChart
            fillAmount={
              meetupsData.totalMoneyDispersed /
              meetupsData.averageNumberMeetupsPerMonthThisYear
            }
          /> */}

          <Stat
            number={meetupsData.averageNumberMeetupsPerMonthThisYear}
            description="Avg. Meetups per Month"
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

      {/*FOOTER*/}
      {/* <SectionWrapperFooter name="Footer">
        <FooterBackgroundTop />
        <FooterColumn columnLeft>
          <FooterCard>
            <FooterCardListContainer noBackground>
              <FooterCardListHeader columnLeft>
                <FooterCardTitle columnLeft>
                  How can I host a meetup?
                </FooterCardTitle>
                <FooterCardDesc>
                  We've compiled some resources to help you get started.
                </FooterCardDesc>
              </FooterCardListHeader>
              </FooterLink>
              <FooterLink
                href="https://community-development.makerdao.com/en/learn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterCardListItemLeft noBackground>
                  <Label
                    colorMakerBlue="true"
                    labelContent="New to Maker?"
                  ></Label>
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
              <FooterCardTitle>MEETUP GRANTS ARE CLOSED</FooterCardTitle>
              <FooterCardDesc>
                As of April 19th we are no longer accepting applications for meetup grants.
              </FooterCardDesc>
            </FooterCardListHeader>
          </FooterCard>
      </SectionWrapperFooter> */}
      <Footer>
      <div>
      <FooterCardListHeader columnLeft>
              <FooterCardTitle columnLeft>
                How can I host a meetup?
              </FooterCardTitle>
              <FooterCardDesc>
              We've compiled some resources to help you get started.
              </FooterCardDesc>
            </FooterCardListHeader>
      </div>
      <FooterChildren>
      <FooterLink
              href="https://community-development.makerdao.com/en/learn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterItem noBackground>
                <Label
                  colorMakerBlue="true"
                  labelContent="New to Maker?"
                ></Label>
                View a list of educational resources.
              </FooterItem>
            </FooterLink>
            <FooterLink
                href="https://forum.makerdao.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterItem noBackground>
                  <Label
                    colorMakerBlue="true"
                    labelContent="Meet the community"
                  ></Label>
                  Join the official Maker forum.
                  </FooterItem>
              </FooterLink>
              <FooterLink
                href="https://community-development.makerdao.com/meetups/getting-started-guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterItem noBackground>
                  <Label
                    colorMakerBlue="true"
                    labelContent="Looking for guidance?"
                  ></Label>
                  View our meetup guides.
                </FooterItem>
              </FooterLink>
            <FooterLink
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterItem noBackground>
                <Label
                  colorMakerBlue="true"
                  labelContent="Looking for a Grant?"
                ></Label>
                Learn why this program is closed.
              </FooterItem>
            </FooterLink>
      </FooterChildren>
    </Footer>
    </>
  )
}

export default Meetups
