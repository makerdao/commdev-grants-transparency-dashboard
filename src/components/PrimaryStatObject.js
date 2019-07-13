import React from "react"
import styled from "styled-components"
import {device} from "../mediaqueries/device.js"

const StatsContainer = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
width: 300px;
border-radius:4px;
${props => props.statsActiveProjects ? 'background: linear-gradient(hsla(168, 50%, 90%, 1), hsla(168, 50%, 86%, 1));' : null};
${props => props.statsCountriesRepresented ? 'background: linear-gradient(hsla(39,70%,91%,1),hsla(39,70%,86%,1));' : null};
/* Lets a Stat object take up an entire horizontal row by creating a single column */
${props => props.large ? 'grid-column: 1 / -1' : null};

/* Places the "Countries Represented" stat onto its own row to better establish its relationship / the hierarchy of information between it and the list of countries below it.
@media ${device.laptop} {
  ${props => props.statsCountriesRepresented ? 'grid-column: 1 / -1;' : null};
  ${props => props.statsCountriesRepresented ? 'grid-row: 2;' : null};
}

/* Changes the orientation (to 90degrees) of the background gradient to make it blend once this element changes from flex-direction: row to flex-direction: column */
@media ${device.mobileL} {
  ${props => props.statsActiveProjects ? 'background: linear-gradient(90deg,hsla(168, 50%, 90%, 1), hsla(168, 50%, 86%, 1));' : null};
}
`
const StatsNumber = styled.h3`
${props => props.colorOrange ? 'color: hsla(38, 90%, 60%, 1)' : 'color: #179b8c'};

`

const StatsTitle = styled.h5`
color: #53546a;
max-width: 200px;
`

const PrimaryStatObject = (props) => (
    <StatsContainer
      statsActiveProjects={props.statsActiveProjects}
      statsCountriesRepresented={props.statsCountriesRepresented}
      large={props.large}>
      <StatsNumber colorOrange={props.colorOrange} large={props.large}>{props.number.toString()}</StatsNumber>
      <StatsTitle>{props.description}</StatsTitle>
    </StatsContainer>
)

export default PrimaryStatObject
