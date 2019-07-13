import React from "react"
import styled from "styled-components"
import {device} from "../mediaqueries/device.js"
import {SectionWrapper} from "../components/SectionWrapper.js"
import {SectionTitle} from "../components/SectionTitle.js"


const FooterRow = styled.div`
grid-column: 1 / -1;
display: grid;
grid-template-columns: repeat(2, minmax(300px, 480px));
grid-row-gap: 2rem;
justify-self: center;
justify-content: space-around;
padding: 1rem;
width: 100%;
border-radius: 2px;


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
grid-column: 1 / -1;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 48px 1fr;
box-shadow: 0px 0px 2px #444;

`

const FooterCard = styled.div`
display: grid;
grid-template-columns: 48px repeat(2, 1fr);
grid-template-rows: 48px auto;
background: ${props => props.hero ? "#eee" : null};
border-radius: ${props => props.hero ? "8px" : null};
box-shadow: ${props => props.hero ? "1px 1px 4px #bbb" : null};
margin:1rem;
`

const FooterCardNum = styled.h5`
grid-column: 1;
justify-self: center;
align-self: center;
color: #1AAB9B;
margin:0px;
`

const FooterCardTitle = styled.h6`

grid-column: 2 / -1;
align-self: center;
color: #179b8c;
margin:0px;
text-transform: uppercase;
`

const FooterCardDesc = styled.p`
grid-column: 2 / -1;
color: #231536;
margin:0px;
padding: 1rem 0rem 1rem 0rem;
line-height: 140%;
`

const FooterCardListContainer = styled.ul`
grid-column: 1 / -1;
color: #48495F;
background: ${props => props.cardFooter ? 'black' : '#fafafa;'};
color: #53546a;
margin:0px;
padding: 0;
line-height: 140%;
list-style: none;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;

`

const FooterCardListItem = styled.li`
padding: 1rem 1rem 1rem 3rem;


:first-child {
  margin-top: 0rem;
}

:nth-child(even) {
  background: ${props => props.cardFooter ? '#ddd' : '#f5f5f5'};
}

:nth-child(odd) {
  background: ${props => props.cardFooter ? '#ddd' : '#fafafa'};
}

:last-child {
  margin-bottom: 0rem;
}
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
    <SectionTitle>How can I get a grant?</SectionTitle>
    <FooterRow>
        <div>
        <FooterCard>
        <FooterCardNum>
          1
        </FooterCardNum>
        <FooterCardTitle>
          Learn
        </FooterCardTitle>
        <FooterCardDesc>
          Learn more about the Maker grants program by visiting our <a href="https://community-development.makerdao.com/grants" target="_blank">grants information page</a>.
        </FooterCardDesc>
        <FooterCardDesc>
          New to Maker? Visit our <a href="https://community-development.makerdao.com/grants" target="_blank">onboarding site</a>.
        </FooterCardDesc>
        <FooterCardDesc>
          See what the community has created at <a href="https://community-development.makerdao.com/grants" target="_blank">Awesome MakerDao</a>.
        </FooterCardDesc>
        </FooterCard>
        </div>
        <FooterCard hero>
        <FooterCardNum>
          2
        </FooterCardNum>
        <FooterCardTitle>
          Write
        </FooterCardTitle>
        <FooterCardDesc>
          Write a 1-2 page proposal, answering:
        </FooterCardDesc>
        <FooterCardListContainer>
          <FooterCardListItem>→  What does it do, exactly?</FooterCardListItem>
          <FooterCardListItem>→  What problem does it solve?</FooterCardListItem>
          <FooterCardListItem>→  Why will it be successful?</FooterCardListItem>
          <FooterCardListItem>→  And approximately what will it cost?</FooterCardListItem>
        </FooterCardListContainer>
        <FooterCardListContainer>
          <FooterCardListItem cardFooter>Send your proposal to grants@makerdao.com.</FooterCardListItem>
          <FooterCardListItem cardFooter>Due to the large number of submissions, please expect a response within 2-3 weeks.</FooterCardListItem>
        </FooterCardListContainer>
        </FooterCard>
      </FooterRow>

  </SectionWrapper>
);
