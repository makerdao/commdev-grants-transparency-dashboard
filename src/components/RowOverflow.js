import styled from "styled-components"
import { device } from "../mediaqueries/device.js"

const RowOverflow = styled.div`
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

export { RowOverflow }
