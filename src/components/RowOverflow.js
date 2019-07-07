import styled from "styled-components"
import {device} from "../mediaqueries/device.js"


const RowOverflow = styled.div`
grid-column: 2 / -1;
width: 100%;
display: flex;
flex-direction: flex-row;
flex-wrap: nowrap;
overflow-x: auto;
justify-content: space-around;
background-color: #f7f1db;
/* padding: 2rem 0rem 2rem 0rem; */

@media ${device.laptop} {
  justify-content: flex-start
}

@media ${device.tablet} {
  grid-column: 1 / -1;
}
`

export {RowOverflow}
