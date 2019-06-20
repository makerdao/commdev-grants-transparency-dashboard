import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.section`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: auto;
padding: 6rem 0rem 6rem 0rem;
`

const FooterTitle = styled.h4`
grid-row: 1 / 2;
grid-column: 1 / -1;
justify-self: center;
align-self: center;
color: #1AAB9B;
`

const FooterCardContainer = styled.div`
grid-row: 2;
grid-column: 1 / -1;
grid-gap: 3rem;
display: grid;
grid-template-columns: repeat(auto-fit, 360px);
justify-content: center;
padding: 6rem 0rem 6rem 0rem;
`

const FooterCardCTA = styled.div`
display: grid;
grid-row: 3;
max-width: 400px;
grid-template-columns: 48px repeat(2, 1fr);
grid-template-rows: 48px 1fr;
`

const FooterCard = styled.div`
/* grid-row: 1; */
display: grid;
max-width: 400px;
grid-template-columns: 48px repeat(2, 1fr);
grid-template-rows: 48px 1fr;
`

const FooterCardNum = styled.h5`
grid-row:1;
grid-column: 1;
justify-self: center;
align-self: center;
color: #1AAB9B;
margin:0px;
`

const FooterCardTitle = styled.h5`
grid-row: 1;
grid-column: 2 / -1;
align-self: center;
color: #231536;
margin:0px;
`

const FooterCardDesc = styled.p`
grid-row: 2;
grid-column: 2 / -1;
color: #48495F;
margin:0px;
`

const CallToActionContainer = styled.div`
grid-row: 3;
grid-column: 3 / -1;
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-gap: 2rem;
justify-content: center;
align-items: center;
`

const CallToActionLinks = styled.a`
display: flex;
height: 64px;
border: 1px solid #1AAB9B;
border-radius: 2px;
background: #1AAB9B;
color: #fafafa;
font-size: 1.5rem;
justify-content: center;
align-items: center;
padding: 0rem 4rem 0rem 4rem;
`

const CallToActionFAQ = styled.a`
display: flex;
height: 64px;
border: 1px solid #1AAB9B;
border-radius: 2px;
color: #1AAB9B;
background: #fafafa;
font-size: 1.5rem;
justify-content: center;
align-items: center;
padding: 0rem 4rem 0rem 4rem;
`

export default () => (
  <FooterWrapper>
    <FooterTitle>Apply for a grant</FooterTitle>
    <FooterCardContainer>
      <FooterCard>
      <FooterCardNum>
        1
      </FooterCardNum>
      <FooterCardTitle>
        Select a category
      </FooterCardTitle>
      <FooterCardDesc>
        Choose the funding category that most interests you, or best fits your existing project
      </FooterCardDesc>
      </FooterCard>

      <FooterCard>
      <FooterCardNum>
        2
      </FooterCardNum>
      <FooterCardTitle>
        Submit your proposal
      </FooterCardTitle>
      <FooterCardDesc>
        Answer a handful of simple questions so we can learn about your project .
      </FooterCardDesc>
      </FooterCard>

      <FooterCard>
      <FooterCardNum>
        3
      </FooterCardNum>
      <FooterCardTitle>
        Build A Prototype
      </FooterCardTitle>
      <FooterCardDesc>
        Get coding! Grants are paid intermittently as you meet your milestones.
      </FooterCardDesc>
      </FooterCard>
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

      <CallToActionContainer>
      <CallToActionLinks>
        Apply
      </CallToActionLinks>
      <CallToActionFAQ>
        FAQ
      </CallToActionFAQ>
      </CallToActionContainer>
    </FooterCardContainer>


  </FooterWrapper>
);
