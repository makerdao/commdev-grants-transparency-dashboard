import React from "react"
import styled from "styled-components"

const StatsContainer = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
width: 100%;
`

const StatsNumber = styled.h3`
color: #179b8c;
font-size: ${props => props.fontSize}
`


const StatsTitle = styled.h5`
max-width: 200px;
`


export default (props) => (
  <StatsContainer>
    <StatsNumber>{props.number.toString()}</StatsNumber>
    <StatsTitle>{props.description}</StatsTitle>
  </StatsContainer>
)
