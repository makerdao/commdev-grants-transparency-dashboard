import React from "react"
import styled from "styled-components"
import {device} from "../mediaqueries/device.js"
import {data} from "../utils.js"


const IntroWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 120px repeat(2, 1fr);
  justify-items: center;
  text-align: center;
  padding: 1rem;

  @media ${device.mobileL} {
    grid-template-rows: 80px 1fr;
    text-align: left;
`

const LogoMaker = styled.img`
  width: 64px;
  height: 64px;
  grid-column: 1 / -1;
  grid-row: 1;
  align-self: center;
`

const IntroHeader = styled.h3`
  grid-column: 1 / -1;
  grid-row: 2;
  color: #444;

  @media ${device.mobileL} {
    font-size: 2.25rem;
`

const IntroHeaderHighlight = styled.span`
color: #179b8c;
`

const IntroContent = styled.h5`
  grid-column: 1 / -1;
  grid-row: 3;
  color: #333;
  font-weight: 400rem;
  max-width: 720px;
  line-height: 140%;
`

export default () => (
<IntroWrapper>
  <LogoMaker src={'makerlogo.svg'} alt="Logo"></LogoMaker>
  <IntroHeader>We've awarded <IntroHeaderHighlight>{data.totalMoneyAwarded} Dai</IntroHeaderHighlight> since February 2018.</IntroHeader>
  <IntroContent>MakerDAO’s Core Community Development Initiative funds teams creating infrastructure and applications within the Maker ecosystem.</IntroContent>
</IntroWrapper>
);
