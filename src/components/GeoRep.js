import React from "react"
import styled from "styled-components"


// Geographic Representation

const GeographyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  justify-items: center;
`

const GeographyObject = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: around;
  align-items: center;
  font-size: 2rem;
`


export default () => (
  <GeographyContainer>
    <GeographyObject>
      Geography Section is a WIP.
    </GeographyObject>
  </GeographyContainer>
);
