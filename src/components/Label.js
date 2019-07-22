import React from "react"
import styled from "styled-components"

const Label = styled.h6`
width: 100%;
${props => props.colorMakerTeal ? 'color: var(--highlight-color--makerteal)' : 'color: var(--highlight-color--makerblue)'};
justify-self: center;
text-align: left;
font-size: 1rem;
font-weight: 400;
text-transform: uppercase;
letter-spacing: 0.0125rem;
margin-top: 0rem;
`

export default (props) => (
  <Label colorMakerTeal={props.colorMakerTeal}>{props.labelContent}</Label>
)
