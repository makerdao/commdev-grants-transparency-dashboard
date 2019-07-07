import styled from "styled-components"

const RowOverflow = styled.div`
grid-column: 2 / -1;
width: 100%;
display: flex;
flex-direction: flex-row;
flex-wrap: nowrap;
overflow-x: auto;
justify-content: flex-start;
background-color: #f7f1db;
`

export {RowOverflow}
