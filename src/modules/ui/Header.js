import React from "react"
import { Location } from "@reach/router"

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
        <HeaderNavLink to="/" activeClassName="active">
          Grants
        </HeaderNavLink>
      </HeaderNavItem>
      <HeaderNavItem>
        <LogoMaker src={"makerlogo.svg"} alt="Logo"></LogoMaker>
      </HeaderNavItem>
      <HeaderNavItem>
        <HeaderNavLink to="/meetups" activeClassName="active">
          Meetups
        </HeaderNavLink>
      </HeaderNavItem>
    </HeaderNav>
  </IntroWrapper>
)
