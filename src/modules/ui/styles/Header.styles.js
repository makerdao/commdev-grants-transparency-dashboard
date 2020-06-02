import styled from "styled-components"
import { device } from "@src/styles/mediaqueries"
import { Link } from "gatsby"

export const IntroWrapper = styled.section`
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

export const LogoMaker = styled.img`
  width: 64px;
  height: 64px;
  align-self: center;
`

export const HeaderNav = styled.ul`
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 100%;
  padding: 0;
`

export const HeaderNavItem = styled.li`
  margin: 0rem 1rem;
`

export const HeaderNavLink = styled(Link)`
  color: ${props => props.theme.colors.headline_color};
  border-bottom: 2px solid transparent;
  transition: 0.2s ease;
  text-decoration: none;
  padding-bottom: 0.25rem;

  &.active {
    border-bottom: 2px solid ${props => props.theme.colors.headline_color};
  }

  &:hover {
    border-bottom: 2px solid ${props => props.theme.colors.body_color};
  }
`

export const IntroHeader = styled.h1`
  grid-column: 1 / -1;
  grid-row: 2;
  color: var(--headline-color);
  text-align: center;

  @media ${device.mobileL} {
    font-size: 2.25rem;
    padding: 0rem 2rem;
    text-align: left;
  }
`

export const IntroHeaderHighlight = styled.span`
  color: var(--highlight-color--makerteal);
`

export const IntroContent = styled.h2`
  grid-column: 1 / -1;
  grid-row: 3;
  color: var(--body-color);
  font-weight: 400rem;
  max-width: 720px;
  line-height: 140%;
  text-align: center;
  margin: 1rem auto;

  @media ${device.mobileL} {
    padding: 1rem 2rem 0rem 2rem;
    text-align: left;
  }
`
