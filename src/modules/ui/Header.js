import React from "react"

import { grantsData } from "@src/utils.js" //TODO: rename this component to specify that it displays grant stats

import {
  IntroWrapper,
  LogoMaker,
  IntroHeader,
  IntroHeaderHighlight,
  IntroContent,
  HeaderNav,
  HeaderNavItem,
  HeaderNavLink,
} from "./styles/Header.styles"

export default () => (
  <IntroWrapper>
    <HeaderNav>
      <HeaderNavItem>
        <HeaderNavLink to="/">Grants</HeaderNavLink>
      </HeaderNavItem>
      <HeaderNavItem>
        <LogoMaker src={"makerlogo.svg"} alt="Logo"></LogoMaker>
      </HeaderNavItem>
      <HeaderNavItem>
        <HeaderNavLink to="/meetups">Meetups</HeaderNavLink>
      </HeaderNavItem>
    </HeaderNav>
  </IntroWrapper>
)
