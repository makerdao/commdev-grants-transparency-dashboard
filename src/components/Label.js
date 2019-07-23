import React from "react"
import styled from "styled-components"

const Label = styled.h6`
width: 100%;
${props => props.colorMakerBlue ? 'color: var(--highlight-color--makerblue)' : 'color: var(--body-color)'};
justify-self: center;
text-align: left;
font-size: 1rem;
font-weight: 400;
text-transform: uppercase;
letter-spacing: 0.0125rem;
margin-top: 0rem;
`

export default (props) => (
  <Label colorMakerBlue={props.colorMakerBlue}>{props.labelContent}</Label>
)
