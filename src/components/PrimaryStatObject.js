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

/* Places the "Countries Represented" stat onto its own row to better establish its relationship / the hierarchy of information between it and the list of countries below it. */


@media ${device.tablet} {
  ${props => props.statsCountriesRepresented ? 'grid-column: auto;' : null};
}
@media ${device.tablet} {
  ${props => props.statsActiveProjects ? 'grid-column: auto;' : null};
}
`
const StatsNumber = styled.h4`
${props => props.colorOrange ? 'color: var(--highlight-color--makerorange);' : 'color: var(--highlight-color--makerteal);'};
/* If the "Data Last Compiled" stat object, invoked in PrimaryStats.js (displayed bottom right of screen), reduce font-size to 2rem; */
${props => props.statsAttribution ? 'font-size: 2rem;' : ''};
`

const StatsTitle = styled.h5`
color: var(--body-color);
max-width: 200px;
`

const PrimaryStatObject = (props) => (
    <StatsContainer
      statsActiveProjects={props.statsActiveProjects}
      statsCountriesRepresented={props.statsCountriesRepresented}
      large={props.large}>
      <StatsNumber
        statsAttribution={props.statsAttribution}
        colorOrange={props.colorOrange}
        large={props.large}>
        {props.number.toString()}
      </StatsNumber>
      <StatsTitle>{props.description}</StatsTitle>
    </StatsContainer>
)

export default PrimaryStatObject
