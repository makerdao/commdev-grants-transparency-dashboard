import React from "React"
import styled from "styled-components"

const StatsContainer = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
background: hsla(255,255,255,0.4);
`

const StatsNumber = styled.h3`

`


const StatsTitle = styled.h5`
`


export default (props) => (
  <StatsContainer>
    <StatsNumber>{props.number.toString()}</StatsNumber>
    <StatsTitle>{props.description}</StatsTitle>
  </StatsContainer>
)
