import React from "react"
import styled from "styled-components"
import {device} from "../mediaqueries/device.js"
import {SectionWrapper} from "../components/SectionWrapper.js"
import {SectionTitle} from "../components/SectionTitle.js"

const SectionWrapperFooter = styled(SectionWrapper)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 0;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

const FooterBackgroundTop = styled.div`
width: 100%;
height: 100%;
background: linear-gradient(hsl(169, 49%, 89%),hsl(60, 44%, 94%));
/* color: hsla(173, 54%, 25%, 1);  */
/* background: linear-gradient(hsla(168, 69%, 50%, 1), hsla(168, 40%, 76%, 1));  old background*/
position: absolute;
z-index: 999;
top: 0;
/* border-top-left-radius: 8px; */
/* border-top-right-radius: 8px; */
/* max-width: 1200px; */
z-index:-9;
`

const FooterBackgroundBottom = styled.div`
grid-column: 1 / -1;
grid-row: 4;
grid-template-rows: 1fr;
grid-template-columns: 1fr;
bottom: 0;
background: linear-gradient(hsl(246, 49%, 89%),hsl(60,44%,94%));
position: relative;
display: flex;
align-content: flex-end;
justify-content: flex-end;
left: 0;
right: 0;
margin: auto;
max-width: 1200px;
z-index: -99;
`

const FooterColumn = styled.div`
grid-column: auto;
display: grid;
grid-template-columns: minmax(320px, 540px);
grid-gap: 2rem;
justify-self: center;
justify-content: space-around;
width: 100%;
padding: 2rem 0rem;
background: ${props => props.columnLeft ? 'linear-gradient(hsla(210,50%,90%,1),hsla(210,50%,86%,1))' : ''};


@media ${device.laptop} {
  justify-content: center;
}

@media ${device.tablet} {
  justify-content: center;
  grid-template-columns: 1fr;
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

const FooterCard = styled.ul`
display: grid;
grid-template-columns: minmax(300px, 1fr);
background: ${props => props.hero ? "#eee" : null};
border-radius: ${props => props.hero ? "8px" : null};
box-shadow: ${props => props.hero ? "1px 1px 4px #bbb" : null};
padding:0;
margin: 1rem;
list-style: none;

@media ${device.mobileL} {
  grid-template-columns: 1fr;
}
`

const FooterCardTitle = styled.li`
align-self: center;
color: #179b8c;
margin:0px;
text-transform: uppercase;
`

const FooterCardDesc = styled.li`
color: var(--body-color: #53546a);
margin:0px;
padding: 1rem 0rem 1rem 0rem;
line-height: 140%;
`

const FooterCardListContainer = styled.ul`
grid-column: 1 / -1;
background: ${props => props.cardFooter ? 'black' : '#fafafa;'};
color: #53546a;
margin:0px;
padding: 0;
line-height: 140%;
list-style: none;
border-bottom-left-radius: 2px;
border-bottom-right-radius: 2px;

`

const FooterCardListItem = styled.li`
padding: ${props => props.headerTop ? '1.5rem 1rem 0rem 3rem' : '1.5rem 1rem 1.5rem 3rem'};
padding: ${props => props.headerBottom ? '0rem 1rem 0rem 3rem' : ''};
background: ${props => props.headerTop ? 'linear-gradient(hsla(168,50%,90%,1),hsla(168,50%,86%,1)) !important;' : ''};
background: ${props => props.headerBottom ? '#c9ede6 !important' : ''};


:first-child {
  margin-top: 0rem;
}

:nth-child(even) {
  background: ${props => props.cardFooter ? 'none' : 'hsla(168, 50%, 90%, 1)'};
}

:nth-child(odd) {
  background: ${props => props.cardFooter ? 'none' : 'hsla(168, 49%, 93%, 1)'};
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
  <SectionWrapperFooter name="Footer">
    <FooterBackgroundTop />
    <FooterColumn columnLeft>
      <FooterCard>
      <FooterCardListContainer>
        <FooterCardListItem headerTop>
          <FooterCardTitle>
            How can I get a grant?
          </FooterCardTitle>
        </FooterCardListItem>
        <FooterCardListItem headerBottom>
          <FooterCardDesc>
            Get up to speed on Dai and the Maker project:
          </FooterCardDesc>
        </FooterCardListItem>
      </FooterCardListContainer>
      <FooterCardListContainer>
        <FooterCardListItem>→  What does it do, exactly?</FooterCardListItem>
        <FooterCardListItem>→  What problem does it solve?</FooterCardListItem>
        <FooterCardListItem>→  Why will it be successful?</FooterCardListItem>
        <FooterCardListItem>→  And approximately what will it cost?</FooterCardListItem>
      </FooterCardListContainer>
      <FooterCardListContainer>
        <FooterCardListItem cardFooter>Send your proposal to <a href="mailto:grants@makerdao.com">grants@makerdao.com</a>
        </FooterCardListItem>
        <FooterCardListItem cardFooter>Due to the large number of submissions, please expect a response within 2-3 weeks.</FooterCardListItem>
      </FooterCardListContainer>
      </FooterCard>
      </FooterColumn>

        <FooterColumn>
        <FooterCard hero>
        <FooterCardListContainer>
          <FooterCardListItem headerTop>
            <FooterCardTitle>
              APPLY
            </FooterCardTitle>
          </FooterCardListItem>
          <FooterCardListItem headerBottom>
            <FooterCardDesc>
              Write a 1-2 page proposal, answering:
            </FooterCardDesc>
          </FooterCardListItem>
        </FooterCardListContainer>
        <FooterCardListContainer>
          <FooterCardListItem>→  What does it do, exactly?</FooterCardListItem>
          <FooterCardListItem>→  What problem does it solve?</FooterCardListItem>
          <FooterCardListItem>→  Why will it be successful?</FooterCardListItem>
          <FooterCardListItem>→  And approximately what will it cost?</FooterCardListItem>
        </FooterCardListContainer>
        <FooterCardListContainer>
          <FooterCardListItem cardFooter>Send your proposal to <a href="mailto:grants@makerdao.com">grants@makerdao.com</a>
          </FooterCardListItem>
          <FooterCardListItem cardFooter>Due to the large number of submissions, please expect a response within 2-3 weeks.</FooterCardListItem>
        </FooterCardListContainer>
        </FooterCard>

      </FooterColumn>
  </SectionWrapperFooter>
);
