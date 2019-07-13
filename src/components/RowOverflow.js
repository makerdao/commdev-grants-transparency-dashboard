import styled from "styled-components"
import {device} from "../mediaqueries/device.js"


const RowOverflow = styled.div`
grid-column: ${props => props.gridColumn};
width: 100%;
max-width: ${props => props.maxWidth};
display: flex;
flex-direction: flex-row;
flex-wrap: nowrap;
overflow-x: auto;
justify-content: ${props => props.justifyContent};
/* background-color: #f7f1db; */

@media ${device.mobileL} {
  justify-content: flex-start;
  flex-direction: column;
}

@media ${device.tablet} {
  grid-column: 1 / -1;
}
`

export {RowOverflow}
