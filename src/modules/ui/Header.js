import React from "react"
import styled from "styled-components"
import {device} from "@src/mediaqueries/device.js"
import {data} from "@src/utils.js"


const IntroWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 120px repeat(1, 1fr);
  justify-items: center;
  text-align: center;

  @media ${device.mobileL} {
    grid-template-rows: 80px 1fr;
    text-align: left;
  }
`

const LogoMaker = styled.img`
  width: 64px;
  height: 64px;
  grid-column: 1 / -1;
  grid-row: 1;
  align-self: center;
`

const IntroHeader = styled.h1`
  grid-column: 1 / -1;
  grid-row: 2;
  color: var(--headline-color);

  @media ${device.mobileL} {
    font-size: 2.25rem;
    padding: 1rem 0rem 0rem 2rem;
  }
`

const IntroHeaderHighlight = styled.span`
color: var(--highlight-color--makerteal);
`

const IntroContent = styled.h2`
  grid-column: 1 / -1;
  grid-row: 3;
  color: var(--body-color);
  font-weight: 400rem;
  max-width: 720px;
  line-height: 140%;

  @media ${device.mobileL} {
    padding: 1rem 2rem 0rem 2rem;
  }
`

export default () => (
<IntroWrapper>
  <LogoMaker src={'makerlogo.svg'} alt="Logo"></LogoMaker>
  <IntroHeader>We've awarded <IntroHeaderHighlight>{data.totalMoneyAwarded} Dai</IntroHeaderHighlight> since February 2018.</IntroHeader>
  <IntroContent>MakerDAO’s Core Community Development Initiative funds teams creating infrastructure and applications within the Maker ecosystem.</IntroContent>
</IntroWrapper>
);
