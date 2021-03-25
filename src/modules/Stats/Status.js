import React from "react"
import styled from "styled-components"

import { Pie, defaults } from "react-chartjs-2"
import { device } from "@src/styles/mediaqueries"

//ChartJS defaults
defaults.pie.hover.mode = "none"

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

export default {
  StatusNumber,
  StatusLabel,
  StatusChart,
  StatStatus,
}
