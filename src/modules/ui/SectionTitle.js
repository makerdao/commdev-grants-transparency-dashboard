import React from "react"
import styled from "styled-components"

const SectionTitle = styled.h2`
  grid-column: 1 / -1;
  ${props =>
    props.colorMakerTeal
      ? "color: var(--highlight-color--makerteal)"
      : "color: var(--highlight-color--makerblue)"};
  justify-self: center;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
`

export default ({ children }) => (
  <SectionTitle colorMakerTeal={props.colorMakerTeal}>{children}</SectionTitle>
)
