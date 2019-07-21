import React from "react"
import styled from "styled-components"
import {RowOverflow} from "../components/RowOverflow.js"
import {region} from '../../static/data/dataformat.js'
import {data} from "../utils.js"
import {device} from "../mediaqueries/device.js"
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

const RowOverflowContent = styled.ul`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  font-size: 2rem;
  padding: 0;

  @media ${device.tablet} {
    background: #dcf4eb;
  }
`

const CountryListObject = styled.li`
  display: flex;
  flex-direction: row;
  justify-items: around;
  align-items: center;
  font-size: 2rem;
  align-content: center;
  justify-content:space-between;
  padding: 0rem 2rem 0rem 0rem;
  margin: 0rem 2rem 0rem 2rem;
  border-radius: 4px;
  background: linear-gradient(hsla(39, 70%, 91%, 1), hsla(39, 70%, 86%, 1));

  @media ${device.tablet} {
    background: linear-gradient(90deg, hsla(39, 70%, 91%, 1), hsla(39, 70%, 86%, 1));
  }
`


const CountryList = styled.ul`
  display: flex;
  width: 100%;
  font-size: 1.25rem;
  list-style: none;
  padding-left: 0px;
  line-height: 160%;
  padding: 0px;
  flex-flow: wrap column;
  max-height: 160px;
  text-align: left;
  justify-items: center;


@media ${device.mobileL}{
  flex-direction: row;
}
`

const CountryListItem = styled.li`
justify-content: left;
color: var(--body-color);
margin: 0.25rem;
`

const CountryImg = styled.img`
width: 160px;
transform: translate(-32px, -16px);
`

export default () => (
      <RowOverflow gridColumn="2 / -1" justifyContent="space-between" backgroundColor="#f7f1db;">
    {
      // Only display regions that have countries in them.
      Object.values(region).filter(reg => data.countriesByRegion[reg].length > 0).map( reg => (
        <CountryListObject key={reg}>
          <CountryImg src={continentImages[reg]} alt={reg} />
          <CountryList>
            {
              Object.values(data.countriesByRegion[reg]).map( country => (
                <CountryListItem key={country}>{country}</CountryListItem>
              ))
            }
          </CountryList>
        </CountryListObject>
      ))
    }
    </RowOverflow>
);
