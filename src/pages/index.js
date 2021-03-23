import React from "react"
import { Title } from "react-head"
import styled from "styled-components"
import { device } from "@src/styles/mediaqueries"

import GrantsProjectStatus from "@modules/Layouts/GrantsProjectStatus"
import GrantsProjectCountries from "@modules/Layouts/GrantsProjectCountries"
import ProjectList from "@modules/Layouts/ProjectList"
import Stat from "@modules/Stats"

import {
  IntroHeader,
  IntroHeaderHighlight,
  IntroContent,
} from "@modules/ui/styles/Header.styles"

import Label from "@modules/ui/Label"

import {
  Footer,
  FooterChildren, 
  FooterItem,
  FooterCardTitle,
  FooterCardDesc,
  FooterCardListHeader,
  FooterLink,
} from "@modules/ui/styles/Footer.styles"

import { grantsData } from "@modules/Data/grants_data"

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
      <IntroHeaderHighlight>
        {grantsData.totalMoneyAwarded} Dai
      </IntroHeaderHighlight>{" "}
      to{" "}
      <IntroHeaderHighlight>
        {grantsData.appsAccepted} projects
      </IntroHeaderHighlight>{" "}
    </IntroHeader>
    <IntroContent>
      Started by the Maker Foundation's Community Development team, 
      the Grants Program supported individuals’ and teams’ independent 
      creation of infrastructures and applications for the Maker ecosystem.
    </IntroContent>
    {/* Primary Stats Section */}
    <Stat.Section>
      <Stat.Row>
        <Stat number={grantsData.totalMoneyAwarded} description="Dai Awarded" />
        <Stat
          number={grantsData.totalMoneyDispersed}
          description="Dai Dispersed"
        />
        <Stat
          number={grantsData.averageAwardedMoney}
          description="Average Dai Award"
        />
      </Stat.Row>
      <Stat.Row singleColumn justifyContent="center">
        <GrantsProjectCountries />
      </Stat.Row>
      <Stat.Row singleColumn>
        {/* Commented out the gradient background for the "Active Projects" stat to improve information hierarchy. */}
        {/* <StatWithActiveProject number={data.currentlyActive} description="Active Projects" /> */}
        <Stat
          number={grantsData.currentlyActive}
          description="Active Projects"
        />
        <GrantsProjectStatus />
      </Stat.Row>
      
      <Stat.Row justifyContent="center">
        <Stat
          number={grantsData.milestones.total}
          description="Total Milestones Completed"
        />
        <Stat
          number={grantsData.milestones.last30days}
          description="Milestones Proposed"
        />
      </Stat.Row>
    </Stat.Section>
    <ProjectList />

    <Footer>
      <div>
      <FooterCardListHeader columnLeft>
              <FooterCardTitle columnLeft>
                How can I contribute to MakerDAO?
              </FooterCardTitle>
              <FooterCardDesc>
                Get up to speed on the Maker project & Dai stablecoin:
              </FooterCardDesc>
            </FooterCardListHeader>
      </div>
      <FooterChildren>
      <FooterLink
              href="https://community-development.makerdao.com/grants"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterItem noBackground>
                <Label
                  colorMakerBlue="true"
                  labelContent="Questions about the grants program?"
                ></Label>
                Visit the Maker Grants Program FAQ
              </FooterItem>
            </FooterLink>
            <FooterLink
              href="https://github.com/makerdao/awesome-makerdao"
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
              href="https://chat.makerdao.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterItem noBackground>
                <Label
                  colorMakerBlue="true"
                  labelContent="Meet the community"
                ></Label>
                Join the official MakerDAO chat.
              </FooterItem>
            </FooterLink>
            <FooterLink
              href="https://github.com/makerdao/awesome-makerdao#use-your-dai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterItem noBackground>
                <Label
                  colorMakerBlue="true"
                  labelContent="Looking for inspiration?"
                ></Label>
                Check out these community projects
              </FooterItem>
            </FooterLink>
      </FooterChildren>
    </Footer>
    
  </>
)
