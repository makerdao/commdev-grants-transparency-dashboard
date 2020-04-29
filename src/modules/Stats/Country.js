import React from "react"
import styled from "styled-components"

import imgAfrica from "@images/africa.svg"
import imgAsia from "@images/asia.svg"
import imgEurope from "@images/europe.svg"
import imgNorthAmerica from "@images/northamerica.svg"
import imgOceania from "@images/oceania.svg"
import imgSouthAmerica from "@images/southamerica.svg"
import imgVirtual from '@images/iconmonstr-globe-3.svg'
import { region } from "@static/data/dataformat.js"
import { device } from "@src/styles/mediaqueries"

//Layout
export const CountryListElement = styled.li`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding-right: 2rem;
  margin: 0rem 2rem ${props => props.bottomSpaced ? '2rem' : '0rem'} 0rem ;
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

export const CountryDataContainer = styled.div`
  padding: 0;
  list-style: none;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 1rem 0rem; */
  justify-content: center;
`

export const CountryImg = styled.img`
  width: 160px;
  opacity: 0.8;
`

export const CountryNumber = styled.h1`
  color: var(--highlight-color--makerteal);
`

export const CountryLabel = styled.h3`
  color: var(--body-color);
`

// Geographic Representation
const continentImages = {
  [region.asia]: imgAsia,
  [region.europe]: imgEurope,
  [region.northamerica]: imgNorthAmerica,
  [region.southamerica]: imgSouthAmerica,
  [region.oceania]: imgOceania,
  [region.africa]: imgAfrica,
  [region.virtual]: imgVirtual
}

export const Country = ({ country, alt, number, label, children, bottomSpaced }) => (
  <CountryListElement bottomSpaced={bottomSpaced}>
    {children === null || children === undefined ? (
      <>
        <CountryImg src={continentImages[country]} alt={alt || country} />
        <CountryDataContainer>
          {number && <CountryNumber>{number}</CountryNumber>}
          {(country || label) && (
            <CountryLabel>{label || country}</CountryLabel>
          )}
        </CountryDataContainer>
      </>
    ) : (
      children
    )}
  </CountryListElement>
)

export default {
  CountryImg,
  CountryNumber,
  CountryLabel,
  Country,
  CountryListElement,
  CountryDataContainer,
}
