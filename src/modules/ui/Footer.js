import React from "react"

import Label from "./Label"
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
} from "./styles/Footer.styles"

export default () => (
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
)
