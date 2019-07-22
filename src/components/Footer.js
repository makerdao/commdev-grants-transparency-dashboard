import React from "react"
import styled from "styled-components"
import {device} from "../mediaqueries/device.js"
import {SectionWrapper} from "../components/SectionWrapper.js"
import {SectionTitle} from "../components/SectionTitle.js"
import Label from "../components/Label.js"

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
display: flex;
flex-direction: column;
border-radius: ${props => props.hero ? "8px" : null};
box-shadow: ${props => props.hero ? "1px 1px 4px #bbb" : 'none'};
padding:0;
margin: 1rem;
list-style: none;

@media ${device.mobileL} {
  grid-template-columns: 1fr;
}
`

const FooterCardTitle = styled.li`
align-self: center;
color: ${props => props.columnLeft ? 'var(--highlight-color--makerblue)' : 'var(--highlight-color--makerteal)'};
margin:0px;
text-transform: uppercase;
`

const FooterCardDesc = styled.li`
color: var(--body-color);
margin:0px;
padding: 1rem 0rem 1rem 0rem;
line-height: 140%;
`

const FooterCardListContainer = styled.ul`
grid-column: 1 / -1;
color: var(--body-color);
margin:0px;
padding: 0;
line-height: 140%;
list-style: none;
border-bottom-left-radius: 2px;
border-bottom-right-radius: 2px;
background: ${props => props.header ? 'linear-gradient(hsla(168,50%,90%,1),hsla(168,50%,86%,1)) !important' : null};
`

const FooterCardListHeader = styled.li`
padding: 1.5rem 1rem 1rem 3rem;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
background: linear-gradient(hsla(168,50%,90%,1),hsla(168,50%,86%,1));
`

const FooterCardListItem = styled.li`
display: ${props => props.applyCardFooter ? 'flex' : null};
align-items: ${props => props.applyCardFooter ? 'center' : null};
color: var(--body-color);
padding: 1.5rem 1.875rem 1.875rem 3rem;
border-radius: ${props => props.applyCardFooter ? null : '4px'};
height: ${props => props.applyCardFooter ? '100%' : null};

:first-child {
  margin-top: 0rem;
}

:nth-child(even) {
  background: ${props => props.noBackground ? 'none' : 'hsla(168, 50%, 90%, 1)'};
}

:nth-child(odd) {
  background: ${props => props.noBackground ? 'none' : 'hsla(168, 49%, 93%, 1)'};
}

:last-child {
  margin-bottom: 0rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
`

const FooterCardListItemLeft = styled(FooterCardListItem)`
/* !important here overrides the selector styles on its parent. Since this is locally scoped, I think it's a meaningful trade-off right now. Can be revisited later. */
margin: 1rem 0rem !important;
background: none;
transition: 0.15s linear;
background: hsla(210,50%,85%,0);

:hover {
  background: hsla(210,50%,85%,1);
}

@media ${device.tablet} {
  max-width: 480px;
  justify-self: center;
}

@media ${device.mobileL} {
  margin: 1rem 0rem;
  /* !important here overrides the selector styles on its parent. Since this is locally scoped, I think it's a meaningful trade-off right now. Can be revisited later. */
  background: hsla(210,50%,85%,1) !important;
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

const FooterLink = styled.a`
color: var(--highlight-color--makerteal);
text-decoration: none;
transition: 0.15s ease-in-out;
border-bottom: 2px solid hsla(173, 74%, 35%, 0);
margin: ${props => props.inlineLink ? '0rem 0rem 0rem 0.25rem' : null};

:hover {
  border-bottom: 2px solid var(--highlight-color--makerteal);
}
`

export default () => (
  <SectionWrapperFooter name="Footer">
    <FooterBackgroundTop />
    <FooterColumn columnLeft>
      <FooterCard>
      <FooterCardListContainer noBackground>
        <FooterCardListItem noBackground>
          <FooterCardTitle columnLeft>
            How can I get a grant?
          </FooterCardTitle>
          <FooterCardDesc>
            Get up to speed on the Maker project & Dai stablecoin:
          </FooterCardDesc>
        </FooterCardListItem>
        <FooterLink href="https://community-development.makerdao.com/grants" target="_blank">
          <FooterCardListItemLeft noBackground>
            <Label labelContent="Questions about the grants program?"></Label>
            Visit the Maker Grants Program FAQ
          </FooterCardListItemLeft>
        </FooterLink>
        <FooterLink href="https://github.com/makerdao/awesome-makerdao" target="_blank">
          <FooterCardListItemLeft noBackground>
            <Label labelContent="New to Maker?"></Label>
            View a list of educational resources.
          </FooterCardListItemLeft>
        </FooterLink>
        <FooterLink href="https://community-development.makerdao.com/grants" target="_blank">
          <FooterCardListItemLeft noBackground>
            <Label labelContent="Meet the community"></Label>
            Visit our onboarding site
          </FooterCardListItemLeft>
        </FooterLink>
        <FooterLink href="https://github.com/makerdao/awesome-makerdao#use-your-dai" target="_blank">
          <FooterCardListItemLeft noBackground>
            <Label labelContent="Looking for inspiration?"></Label>
            Check out these community projects
          </FooterCardListItemLeft>
        </FooterLink>
      </FooterCardListContainer>

      </FooterCard>
      </FooterColumn>

        <FooterColumn>
        <FooterCard hero>
          <FooterCardListHeader>
            <FooterCardTitle>
              APPLY
            </FooterCardTitle>
            <FooterCardDesc>
              Write a 1-2 page proposal, answering:
            </FooterCardDesc>
          </FooterCardListHeader>
          <FooterCardListItem>→  What does it do, exactly?</FooterCardListItem>
          <FooterCardListItem>→  What problem does it solve?</FooterCardListItem>
          <FooterCardListItem>→  Why will it be successful?</FooterCardListItem>
          <FooterCardListItem>→  Approximately what will it cost?</FooterCardListItem>
          <FooterCardListItem applyCardFooter>↗  Send it to <FooterLink inlineLink href="mailto:grants@makerdao.com">grants@makerdao.com</FooterLink>
          </FooterCardListItem>
        </FooterCard>
        <FooterCard>
        <FooterCardListContainer>
          <FooterCardListItem noBackground>
          <Label colorMakerTeal="true" labelContent="Due to the large number of submissions, please expect a response within 2-3 weeks."></Label>
          </FooterCardListItem>
        </FooterCardListContainer>
        </FooterCard>

      </FooterColumn>
  </SectionWrapperFooter>
);
