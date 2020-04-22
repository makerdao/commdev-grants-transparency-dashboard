import React from "react"
import { Title } from "react-head"
import styled from "styled-components"

import PrimaryStatProjectStatus from "@modules/Layouts/PrimaryStatProjectStatus"
import PrimaryStatProjectCountries from "@modules/Layouts/PrimaryStatProjectCountries"
import ProjectList from '@modules/Layouts/ProjectList'
import Stat from "@modules/Stats"

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

import { grantsData, doughnutData } from "@src/utils.js"

//NOTE(Rejon): Commented out for now since they aren't being used and are causing warnings.
// const StatWithActiveProject = styled(Stat)`
//   background: linear-gradient(hsla(168, 50%, 90%, 1), hsla(168, 50%, 86%, 1));

//   /* Places the "Active Projects" stat onto its own row to better establish its relationship / the hierarchy of information between it and the list of countries below it. */
//   @media ${device.table} {
//     grid-column: auto;
//   }
// `

// const StatWithCountriesRepresented = styled(Stat)`
//   background: linear-gradient(hsla(39, 70%, 91%, 1), hsla(39, 70%, 86%, 1));

//   /* Places the "Countries Represented" stat onto its own row to better establish its relationship / the hierarchy of information between it and the list of countries below it. */
//   @media ${device.table} {
//     grid-column: auto;
//   }
// `


const StatNumberLastCompiled = styled(Stat.Number)`
  /* If the "Data Last Compiled" stat object, invoked in PrimaryStats.js (displayed bottom right of screen), reduce font-size to 2rem; */
  font-size: 2rem;
`

export default () => (
  <>
    <Title>MakerDAO Community - Development Grants</Title>
    {/* Header Content related to the Grants Page */}
    <IntroHeader>
      We've awarded{" "}
      <IntroHeaderHighlight>{grantsData.totalMoneyAwarded} Dai</IntroHeaderHighlight>{" "}
      since February 2018.
    </IntroHeader>
    <IntroContent>
      MakerDAO’s Core Community Development Initiative funds teams creating
      infrastructure and applications within the Maker ecosystem.
    </IntroContent>
    {/* Primary Stats Section */}
    <Stat.Section>
      <Stat.Row>
        <Stat number={grantsData.totalMoneyAwarded} description="Dai Awarded" />
        <Stat number={grantsData.totalMoneyDispersed} description="Dai Dispersed" />
        <Stat
          number={grantsData.averageAwardedMoney}
          description="Average Dai Award"
        />
      </Stat.Row>
      <Stat.Row>
        <Stat
          colorOrange
          number={grantsData.appsSubmitted}
          description="Grant Applications Submitted"
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
          number={grantsData.appsAccepted}
          description="Grant Applications Accepted"
        />
      </Stat.Row>
      <Stat.Row singleColumn>
        {/* Commented out the gradient background for the "Active Projects" stat to improve information hierarchy. */}
        {/* <StatWithActiveProject number={data.currentlyActive} description="Active Projects" /> */}
        <Stat number={grantsData.currentlyActive} description="Active Projects" />
        <PrimaryStatProjectStatus />
      </Stat.Row>
      <Stat.Row singleColumn justifyContent="center">
        <PrimaryStatProjectCountries />
      </Stat.Row>
      <Stat.Row justifyContent="center">
        <Stat
          number={grantsData.milestones.total}
          description="Total Milestones Completed"
        />
        <Stat
          number={grantsData.milestones.last30days}
          description="Recent Milestones Completed"
        />
        <Stat>
          <StatNumberLastCompiled>1</StatNumberLastCompiled>
          <Stat.Title>Months Since Last Update</Stat.Title>
        </Stat>
      </Stat.Row>
    </Stat.Section>
    <ProjectList/>
    
    {/*FOOTER*/}
    <SectionWrapperFooter name="Footer">
      <FooterBackgroundTop />
      <FooterColumn columnLeft>
        <FooterCard>
          <FooterCardListContainer noBackground>
            <FooterCardListHeader columnLeft>
              <FooterCardTitle columnLeft>How can I get a grant?</FooterCardTitle>
              <FooterCardDesc>
                Get up to speed on the Maker project & Dai stablecoin:
              </FooterCardDesc>
            </FooterCardListHeader>
            <FooterLink
              href="https://community-development.makerdao.com/grants"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterCardListItemLeft noBackground>
                <Label
                  colorMakerBlue="true"
                  labelContent="Questions about the grants program?"
                ></Label>
                Visit the Maker Grants Program FAQ
              </FooterCardListItemLeft>
            </FooterLink>
            <FooterLink
              href="https://github.com/makerdao/awesome-makerdao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterCardListItemLeft noBackground>
                <Label colorMakerBlue="true" labelContent="New to Maker?"></Label>
                View a list of educational resources.
              </FooterCardListItemLeft>
            </FooterLink>
            <FooterLink
              href="https://chat.makerdao.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterCardListItemLeft noBackground>
                <Label
                  colorMakerBlue="true"
                  labelContent="Meet the community"
                ></Label>
                Join the official MakerDAO chat.
              </FooterCardListItemLeft>
            </FooterLink>
            <FooterLink
              href="https://github.com/makerdao/awesome-makerdao#use-your-dai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterCardListItemLeft noBackground>
                <Label
                  colorMakerBlue="true"
                  labelContent="Looking for inspiration?"
                ></Label>
                Check out these community projects
              </FooterCardListItemLeft>
            </FooterLink>
          </FooterCardListContainer>
        </FooterCard>
      </FooterColumn>

      <FooterColumn>
        <FooterCard hero>
          <FooterCardListHeader>
            <FooterCardTitle>APPLY</FooterCardTitle>
            <FooterCardDesc>Write a 1-2 page proposal, answering:</FooterCardDesc>
          </FooterCardListHeader>
          <FooterCardListItem>→ What does it do, exactly?</FooterCardListItem>
          <FooterCardListItem>→ What problem does it solve?</FooterCardListItem>
          <FooterCardListItem>→ Why will it be successful?</FooterCardListItem>
          <FooterCardListItem>
            → Approximately what will it cost?
          </FooterCardListItem>
          <FooterCardListFooter applyCardFooter>
          ↗ Send it to{" "}
          <FooterLink inlineLink href="mailto:grants@makerdao.com">
            grants@makerdao.com
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
