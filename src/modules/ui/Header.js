import React from "react"
import { Link } from "gatsby"

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
    <Link to="/" style={{"align-self": 'center', 'text-align': 'center', 'margin': 'auto', 'grid-column': '1 / -1', 'grid-row': '1'}}>
      <LogoMaker src={"makerlogo.svg"} alt="Logo"></LogoMaker>
    </Link>

  </IntroWrapper>
)
