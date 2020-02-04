import React from "react"
import styled from "styled-components"

import { Doughnut, defaults } from "react-chartjs-2"
import { device } from "@src/mediaqueries/device.js"

//ChartJS defaults
defaults.doughnut.cutoutPercentage = 80
defaults.doughnut.hover.mode = "off"
defaults.global.legend.display = false
defaults.global.tooltips.enabled = false
defaults.global.elements.arc.borderColor = "#1AAB9B"
defaults.global.elements.arc.backgroundColor = "hsl(152, 45%, 94%)"
defaults.global.elements.arc.borderWidth = 1

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

export default {
  StatNumber, 
  StatTitle, 
  DoughnutChart
}
