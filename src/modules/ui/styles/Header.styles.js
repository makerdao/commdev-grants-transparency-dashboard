import styled from "styled-components"
import { device } from "@src/styles/mediaqueries"

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
  grid-column: 1 / -1;
  grid-row: 1;
  align-self: center;
`

export const IntroHeader = styled.h1`
  grid-column: 1 / -1;
  grid-row: 2;
  color: var(--headline-color);

  @media ${device.mobileL} {
    font-size: 2.25rem;
    padding: 1rem 0rem 0rem 2rem;
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

  @media ${device.mobileL} {
    padding: 1rem 2rem 0rem 2rem;
  }
`
