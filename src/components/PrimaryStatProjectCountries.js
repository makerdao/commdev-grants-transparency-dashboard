import React from "react"
import styled from "styled-components"
import { RowOverflow } from "../components/RowOverflow.js"
import { region } from "../../static/data/dataformat.js"
import { data } from "../utils.js"
import { device } from "../mediaqueries/device.js"
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

const CountryListObject = styled.li`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0rem 2rem 0rem 0rem;
  margin: 0rem 2rem 0rem 0rem;
  border-radius: 4px;
  background: linear-gradient(hsla(39, 70%, 91%, 1), hsla(39, 70%, 86%, 1));

  @media ${device.mobileL} {
    background: linear-gradient(
      90deg,
      hsla(39, 70%, 91%, 1),
      hsla(39, 70%, 86%, 1)
    );
    margin: 0;
  }
`

const CountryListParent = styled.ul`
  padding: 0;
  list-style: none;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 1rem 0rem; */
  justify-content: center;
`

const CountryListNumber = styled.h1`
  color: var(--highlight-color--makerteal);
`

const CountryListName = styled.h3`
  color: var(--body-color);
`

const CountryImg = styled.img`
  width: 160px;
  opacity: 0.8;
`

export default () => (
  <RowOverflow
    gridColumn="1 / -1"
    justifyContent="space-between"
    backgroundColor="#f7f1db;"
  >
    {// Only display regions that have countries in them.
    Object.values(region)
      .filter(reg => data.nProjectsByRegion[reg] > 0)
      .map(reg => (
        <CountryListObject key={reg}>
          <CountryImg src={continentImages[reg]} alt={reg} />
          <CountryListParent>
            <CountryListNumber>{data.nProjectsByRegion[reg]}</CountryListNumber>
            <CountryListName>{reg}</CountryListName>
          </CountryListParent>
        </CountryListObject>
      ))}
  </RowOverflow>
)
