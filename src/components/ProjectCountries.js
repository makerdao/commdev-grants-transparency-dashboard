import React from "react"
import styled from "styled-components"
import {SectionWrapper} from "../components/SectionWrapper.js"
import {SectionTitle} from "../components/SectionTitle.js"
import {region} from '../../static/data/dataformat.js'
import {data} from "../utils.js"
import imgAfrica from "../img/africa.svg"
import imgAsia from "../img/asia.svg"
import imgEurope from "../img/europe.svg"
import imgNorthAmerica from "../img/northamerica.svg"
import imgOceania from "../img/oceania.svg"
import imgSouthAmerica from "../img/southamerica.svg"



// Geographic Representation
const continentImages = {
  [region.asia]: imgAsia,
  [region.europe]: imgEurope,
  [region.northamerica]: imgNorthAmerica,
  [region.southamerica]: imgSouthAmerica,
  [region.oceania]: imgOceania,
  [region.africa]: imgAfrica,
}



const CountryListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-items: around;
  align-items: center;
  font-size: 2rem;
  align-content: center;
  justify-content:center;
`


const CountryObjectContainer = styled.ul`
  display: flex;
  width: 100%;
  font-size: 1.25rem;
  list-style: none;
  padding-left: 0px;
  line-height: 160%;
  padding: 0px;
  flex-flow: wrap column;
  max-height: 160px;
  justify-items: center;

`

const CountryListItem = styled.li`
justify-content: left;
`


export default () => (
  <SectionWrapper>
    <SectionTitle>Countries Represented</SectionTitle>
    {
      // Only display regions that have countries in them.
      Object.values(region).filter(reg => data.countriesByRegion[reg].length > 0).map( reg => (
        <CountryListContainer key={reg}>
          <img width={"160px"} src={continentImages[reg]} alt={reg} />
          <CountryObjectContainer>
            {
              Object.values(data.countriesByRegion[reg]).map( country => (
                <CountryListItem key={country}>{country}</CountryListItem>
              ))
            }
          </CountryObjectContainer>
        </CountryListContainer>
      ))
    }
  </SectionWrapper>
);
