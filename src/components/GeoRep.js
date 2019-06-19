import React from "react"
import styled from "styled-components"
import Title from "../components/Title.js"


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
      <Title>North America</Title>
        <CountryListContainer>
          <CountryListItem>United States</CountryListItem>
          <CountryListItem>Canada</CountryListItem>
        </CountryListContainer>
    </GeographyObject>
    <GeographyObject>
      <Title>Africa</Title>
      <CountryListContainer>
        <CountryListItem>Nigeria</CountryListItem>
        <CountryListItem>South Africa</CountryListItem>
        <CountryListItem>Kenya</CountryListItem>
        <CountryListItem>Ethiopia</CountryListItem>
        <CountryListItem>Cameroon</CountryListItem>
      </CountryListContainer>
    </GeographyObject>
    <GeographyObject>
      <Title>Europe</Title>
      <CountryListContainer>
        <CountryListItem>Nigeria</CountryListItem>
        <CountryListItem>South Africa</CountryListItem>
        <CountryListItem>Kenya</CountryListItem>
        <CountryListItem>Ethiopia</CountryListItem>
        <CountryListItem>Cameroon</CountryListItem>
      </CountryListContainer>
    </GeographyObject>
    <GeographyObject>
      <Title>Asia</Title>
      <CountryListContainer>
        <CountryListItem>Nigeria</CountryListItem>
        <CountryListItem>South Africa</CountryListItem>
        <CountryListItem>Kenya</CountryListItem>
        <CountryListItem>Ethiopia</CountryListItem>
        <CountryListItem>Cameroon</CountryListItem>
      </CountryListContainer>
    </GeographyObject>
    <GeographyObject>
      <Title>Oceania</Title>
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
