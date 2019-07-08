import React from "react"
import styled from "styled-components"
import {device} from "../mediaqueries/device.js"
import {SectionWrapper} from "../components/SectionWrapper.js"
import {SectionTitle} from "../components/SectionTitle.js"


const FooterRow = styled.section`
grid-column: 1 / -1;
display: grid;
grid-template-columns: repeat(auto-fit, 360px);
grid-row-gap: 2rem;
justify-content: space-between;
padding: 1rem;

@media ${device.laptop} {
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
}
`

const FooterTitle = styled.h4`
grid-column: 1 / -1;
justify-self: center;
align-self: center;
font-weight: 300;
color: #1AAB9B;
`

// const FooterCardContainer = styled.div`
// grid-column: 1 / -1;
// grid-gap: 3rem;
// display: grid;
// grid-template-columns: repeat(auto-fit, 360px);
// justify-content: center;
// padding: 6rem 0rem 6rem 0rem;
// `

const FooterCardCTA = styled.div`
display: grid;
grid-template-columns: 48px repeat(2, 1fr);
grid-template-rows: 48px 1fr;
`

const FooterCard = styled.div`
display: grid;
grid-template-columns: 48px repeat(2, 1fr);
grid-template-rows: 48px 1fr;
`

const FooterCardNum = styled.h5`
grid-column: 1;
justify-self: center;
align-self: center;
color: #1AAB9B;
margin:0px;
`

const FooterCardTitle = styled.h5`

grid-column: 2 / -1;
align-self: center;
color: #231536;
margin:0px;
`

const FooterCardDesc = styled.p`
grid-column: 2 / -1;
color: #48495F;
margin:0px;
padding: 1rem 0rem 1rem 0rem;
line-height: 140%;
`

const CallToActionContainer = styled.div`
grid-column: 1 / -1;
display: grid;
grid-template-columns: minmax(300px, 540px);
grid-gap: 2rem;
justify-content: center;
align-items: center;
justify-self: flex-start;
border: 1px solid #ddd;
padding-top: 2rem;
`

const ButtonContainer = styled.div`
grid-column: 1 / -1;
display: grid;
justify-items: center;
`

const CallToActionLink = styled.a`
width: 100%;
grid-row: 2;
display: flex;
height: 64px;
border: 1px solid #1AAB9B;
background: #1AAB9B;
color: #fafafa;
font-size: 1.25rem;
justify-content: center;
align-items: center;
`

const CallToActionFAQ = styled.a`
width: 100%;
grid-row: 2;
display: flex;
height: 64px;
border: 1px solid #1AAB9B;
color: #1AAB9B;
background: none;
font-size: 1.25rem;
justify-content: center;
align-items: center;

@media ${device.mobileL} {
  grid-row: 3;
}
`

export default () => (
  <SectionWrapper name="Footer">
    <SectionTitle>Apply for a grant</SectionTitle>
    <FooterRow>
        <FooterCard>
        <FooterCardNum>
          1
        </FooterCardNum>
        <FooterCardTitle>
          Learn about the program
        </FooterCardTitle>
        <FooterCardDesc>
          Learn more about the Maker grants program by visiting our <a href="https://community-development.makerdao.com/grants" target="_blank">grants information page</a>.
        </FooterCardDesc>
        </FooterCard>

        <FooterCard>
        <FooterCardNum>
          2
        </FooterCardNum>
        <FooterCardTitle>
          Write your proposal
        </FooterCardTitle>
        <FooterCardDesc>
          Within 1-2 pages, answer: What does it do, exactly? What problem does it solve? Why will it be successful? And approximately what will it cost?
        </FooterCardDesc>
        </FooterCard>

        <FooterCard>
        <FooterCardNum>
          3
        </FooterCardNum>
        <FooterCardTitle>
          Submit!
        </FooterCardTitle>
        <FooterCardDesc>
          Send your proposal to <a href="mailto: grants@makerdao.com">grants@makerdao.com</a>. Due to the large volume of submissions, expect a response within 2-3 weeks.
        </FooterCardDesc>
        </FooterCard>
      </FooterRow>
      <FooterRow>
      <CallToActionContainer>
        <FooterCardCTA>
        <FooterCardNum>
          →
        </FooterCardNum>
        <FooterCardTitle>
          Ready to Apply?
        </FooterCardTitle>
        <FooterCardDesc>
          All you need is 10 minutes and a little enthusiasm for contributing to the future of crypto.
        </FooterCardDesc>
        </FooterCardCTA>
        <ButtonContainer>
        <CallToActionLink>
          Apply
        </CallToActionLink>
        <CallToActionFAQ>
          FAQ
        </CallToActionFAQ>
        </ButtonContainer>
      </CallToActionContainer>
    </FooterRow>
  </SectionWrapper>
);
