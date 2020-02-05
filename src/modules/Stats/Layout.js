import styled from "styled-components"

import { device } from "@src/styles/mediaqueries"

//NOTE(Rejon): Previously StatsWrapper
export const StatSection = styled.section`
  display: grid;
  grid-template-columns: fit-content(1280px);
  grid-column-gap: 1rem;
  grid-row-gap: 4rem;
  justify-content: center;
  padding: 6rem 0.5rem 6rem 0.5rem;
  text-align: center;

  @media ${device.tablet} {
    grid-row-gap: 3rem;
  }
`

export const StatRow = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: ${props =>
    props.singleColumn
      ? "repeat(3, 1fr)"
      : "repeat(auto-fit, minmax(240px, 1fr))"};
  grid-row-gap: 4rem;
  justify-content: center;
  justify-items: center;
  text-align: center;

  @media ${device.tablet} {
    grid-row-gap: 2rem;
  }

  @media ${device.mobileL} {
    grid-row-gap: 2rem;
    background-color: ${props => props.backgroundColor};
  }
`

export const StatRowOverflow = styled.div`
  position: relative;
  grid-column: ${props => props.gridColumn};
  width: 100%;
  max-width: ${props => props.maxWidth};
  display: flex;
  flex-direction: flex-row;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: flex-start;
  /* background-color: #f7f1db; */

  @media ${device.mobileL} {
    grid-column: 1 / -1;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 300px;
  }
`

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 300px;
  border-radius: 4px;
  /* Lets a Stat object take up an entire horizontal row by creating a single column */
  ${props => (props.fullWidth ? "grid-column: 1 / -1" : null)};
`
