import React from "react"

import { data } from "@src/utils.js"

import {
  IntroWrapper,
  LogoMaker,
  IntroHeader,
  IntroHeaderHighlight,
  IntroContent,
} from "./styles/Header.styles"

export default () => (
  <IntroWrapper>
    <LogoMaker src={"makerlogo.svg"} alt="Logo"></LogoMaker>
    <IntroHeader>
      We've awarded{" "}
      <IntroHeaderHighlight>{data.totalMoneyAwarded} Dai</IntroHeaderHighlight>{" "}
      since February 2018.
    </IntroHeader>
    <IntroContent>
      MakerDAO’s Core Community Development Initiative funds teams creating
      infrastructure and applications within the Maker ecosystem.
    </IntroContent>
  </IntroWrapper>
)
