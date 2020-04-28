import React from "react"

import {
  IntroWrapper,
  LogoMaker,
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
