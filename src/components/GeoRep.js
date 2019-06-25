import React from "react"
import styled from "styled-components"
import {SectionWrapper} from "../components/SectionWrapper.js"
import {SectionTitle} from "../components/SectionTitle.js"
import {region} from '../../static/data/dataformat.js'
import {data} from "../utils.js"


// Geographic Representation


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
  <SectionWrapper>
    <SectionTitle>Countries Represented</SectionTitle>
    {
      Object.values(region).map( reg => (
        <GeographyObject key={reg}>
          <CountryTitle>{reg}</CountryTitle>
          <CountryListContainer>
            {
              Object.values(data.countriesByRegion[reg]).map( country => (
                <CountryListItem key={country}>{country}</CountryListItem>
              ))
            }
          </CountryListContainer>
        </GeographyObject>
      ))
    }
  </SectionWrapper>
);
