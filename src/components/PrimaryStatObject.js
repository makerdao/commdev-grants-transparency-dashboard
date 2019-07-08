import React from "react"
import styled from "styled-components"

const StatsContainer = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
width: 100%;
${props => props.large ? 'grid-column: 1 / -1' : null};
`

const StatsNumber = styled.h3`
color: #179b8c;
font-size: ${props => props.large ? '5rem' : props.fontSize};
`

const StatsTitle = styled.h5`
max-width: 200px;
`

const PrimaryStatObject = (props) => (
    <StatsContainer large={props.large}>
      <StatsNumber large={props.large}>{props.number.toString()}</StatsNumber>,
      <StatsTitle>{props.description}</StatsTitle>
    </StatsContainer>
)

export default PrimaryStatObject
