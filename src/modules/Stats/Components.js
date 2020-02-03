import React from "react"
import styled from "styled-components"

import { Doughnut, Pie, defaults } from "react-chartjs-2"
import { device } from "@src/mediaqueries/device.js"

import {CountryListElement, CountryDataContainer} from './Layout';
import imgAfrica from "@images/africa.svg"
import imgAsia from "@images/asia.svg"
import imgEurope from "@images/europe.svg"
import imgNorthAmerica from "@images/northamerica.svg"
import imgOceania from "@images/oceania.svg"
import imgSouthAmerica from "@images/southamerica.svg"
import { region } from "@static/data/dataformat.js"

//ChartJS defaults
defaults.doughnut.cutoutPercentage = 80
defaults.doughnut.hover.mode = "off"
defaults.global.legend.display = false
defaults.global.tooltips.enabled = false
defaults.global.elements.arc.borderColor = "#1AAB9B"
defaults.global.elements.arc.backgroundColor = "hsl(152, 45%, 94%)"
defaults.global.elements.arc.borderWidth = 1
defaults.pie.hover.mode = "none"

//Doughnut Chart
const DoughnutChartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-self: center;
  width: 100%;
  max-width: 200px;
  height: 100%;
  transform: rotate(8deg);

  @media ${device.mobileL} {
    transform: rotate(97deg);
  }
`

export const DoughnutChart = ({
  children,
  className,
  style,
  ...otherProps
}) => (
  <DoughnutChartContainer className={className} style={style}>
    <Doughnut {...otherProps} />
  </DoughnutChartContainer>
)

//Stat Number
export const StatNumber = styled.h1`
  ${props =>
    props.colorOrange
      ? "color: var(--highlight-color--makerorange);"
      : "color: var(--highlight-color--makerteal);"};
  /* If the "Data Last Compiled" stat object, invoked in PrimaryStats.js (displayed bottom right of screen), reduce font-size to 2rem; */
  ${props => (props.statsAttribution ? "font-size: 2rem;" : "")};
`

//Stat Title
export const StatTitle = styled.h2`
  color: var(--body-color);
  max-width: 200px;
  margin-top: ${props => props.marginTop};
`

//Status Container
const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(hsla(168, 50%, 90%, 1), hsla(168, 50%, 86%, 1));
  min-width: 160px;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  @media ${device.mobileL} {
    /* Changes the orientation (to 90degrees) of the background gradient to make it blend once this element changes from flex-direction: row to flex-direction: column */
    /* July 19 - Disabled if we go with a horizontal scroll & overflow on mobile. If we want to display it vertically, reenable this. */
    background: linear-gradient(
      90deg,
      hsla(168, 50%, 90%, 1),
      hsla(168, 50%, 86%, 1)
    );

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`

//Status Number
export const StatusNumber = styled.h3`
  color: var(--body-color);
  margin-bottom: 1rem;
`

//Status Label
export const StatusLabel = styled.h3`
  color: var(--body-color);
`

//NOTE(Rejon): I'm doing this backwards compared to the Doughtnut implementation
//             since we can import Pie directly from Chartjs. But I need to ensure
//             the "data" prop gets passed to the Pie component.
//NOTE(Rejon): I have to put the div here or the styled class won't get applied. See this issue for why: https://github.com/jerairrest/react-chartjs-2/issues/287
const PieChart = ({ className, ...otherProps }) => (
  <div className={className}>
    <Pie {...otherProps} />
  </div>
)

//TODO(Rejon): Might not be the best place for this since it forces width and height without context.
//             I'll leave it up to you for where this should go.
export const StatusChart = styled(PieChart)`
  width: 48px;
  height: 48px;
  border-radius: 100px;
`

export const StatStatus = ({
  children,
  className,
  style,
  number,
  data,
  label,
  ...otherProps
}) => (
  <StatusContainer>
    {children === null || children === undefined ? (
      <>
        {number && <StatusNumber>{number}</StatusNumber>}
        {/* //NOTE(Rejon): All other props spill into StatusChart. */}
        {data && <StatusChart data={data} {...otherProps} />}
        {label && <StatusLabel>{label}</StatusLabel>}
      </>
    ) : (
      children
    ) //NOTE(Rejon): If you have children, you handle all the rendering
    }
  </StatusContainer>
)

export const CountryImg = styled.img`
  width: 160px;
  opacity: 0.8;
`;

export const CountryNumber = styled.h1`
  color: var(--highlight-color--makerteal);
`

export const CountryLabel = styled.h3`
  color: var(--body-color);
`

// Geographic Representation
const continentImages = {
  [region.asia]: imgAsia,
  [region.europe]: imgEurope,
  [region.northamerica]: imgNorthAmerica,
  [region.southamerica]: imgSouthAmerica,
  [region.oceania]: imgOceania,
  [region.africa]: imgAfrica,
}

export const Country = ({country, alt, number, label, children}) => (
  <CountryListElement>
    {children === null || children === undefined ? (
      <>
        <CountryImg src={continentImages[country]} alt={alt || country} />
        <CountryDataContainer>
          {number && <CountryNumber>{number}</CountryNumber>}
          {(country || label) && <CountryLabel>{label || country}</CountryLabel>}
        </CountryDataContainer>
      </>
      )
    :
      children
    }
  </CountryListElement>
)
