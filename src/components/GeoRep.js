import React from "react"
import styled from "styled-components"


// Geographic Representation

const GeographyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  justify-content: center;
  min-height: 50vh;
`

const GeographyObject = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: around;
  align-items: start;
  font-size: 2rem;
`

const CountryTitle = styled.h5`
color: #231536;
`

const CountryListContainer = styled.ul`
  font-size: 1.25rem;
  list-style: none;
  padding-left: 0px;
  line-height: 160%;
`

const CountryListItem = styled.li`

`


export default () => (
  <GeographyContainer>
    <GeographyObject>
      <CountryTitle>North America</CountryTitle>
        <CountryListContainer>
          <CountryListItem>United States</CountryListItem>
          <CountryListItem>Canada</CountryListItem>
        </CountryListContainer>
    </GeographyObject>
    <GeographyObject>
      <CountryTitle>Africa</CountryTitle>
      <CountryListContainer>
        <CountryListItem>Nigeria</CountryListItem>
        <CountryListItem>South Africa</CountryListItem>
        <CountryListItem>Kenya</CountryListItem>
        <CountryListItem>Ethiopia</CountryListItem>
        <CountryListItem>Cameroon</CountryListItem>
      </CountryListContainer>
    </GeographyObject>
    <GeographyObject>
      <CountryTitle>Europe</CountryTitle>
      <CountryListContainer>
        <CountryListItem>Nigeria</CountryListItem>
        <CountryListItem>South Africa</CountryListItem>
        <CountryListItem>Kenya</CountryListItem>
        <CountryListItem>Ethiopia</CountryListItem>
        <CountryListItem>Cameroon</CountryListItem>
      </CountryListContainer>
    </GeographyObject>
    <GeographyObject>
      <CountryTitle>Asia</CountryTitle>
      <CountryListContainer>
        <CountryListItem>Nigeria</CountryListItem>
        <CountryListItem>South Africa</CountryListItem>
        <CountryListItem>Kenya</CountryListItem>
        <CountryListItem>Ethiopia</CountryListItem>
        <CountryListItem>Cameroon</CountryListItem>
      </CountryListContainer>
    </GeographyObject>
    <GeographyObject>
      <CountryTitle>Oceania</CountryTitle>
      <CountryListContainer>
        <CountryListItem>Nigeria</CountryListItem>
        <CountryListItem>South Africa</CountryListItem>
        <CountryListItem>Kenya</CountryListItem>
        <CountryListItem>Ethiopia</CountryListItem>
        <CountryListItem>Cameroon</CountryListItem>
      </CountryListContainer>
    </GeographyObject>
  </GeographyContainer>
);
