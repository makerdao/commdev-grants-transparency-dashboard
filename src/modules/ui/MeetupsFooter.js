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
)
