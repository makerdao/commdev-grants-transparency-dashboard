import React from "react"
import styled from "styled-components"

const StatsContainer = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
width: 300px;
`

const StatsNumber = styled.h3`
color: #179b8c;
`


const StatsTitle = styled.h5`
`


export default (props) => (
  <StatsContainer>
    <StatsNumber>{props.number.toString()}</StatsNumber>
    <StatsTitle>{props.description}</StatsTitle>
  </StatsContainer>
)
