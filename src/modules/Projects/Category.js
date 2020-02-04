import React from "react"
import styled from "styled-components"

import { PrimaryButton } from "@modules/ui/PrimaryButton.js"

import { device } from "@src/mediaqueries/device"
import { Pie, defaults } from "react-chartjs-2"

//ChartJS defaults
defaults.global.legend.display = false
defaults.global.tooltips.enabled = false

export const ProjectCategoryListContainer = styled.div`
  display: flex;
  position: relative;
  grid-column: 1 / -1;
  justify-content: center;
`

export const ProjectCategoryList = styled.ul`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: flex-row;
  list-style: none;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-left: 0;
  padding-bottom: 3rem;
`

export const CategoryContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: hsla(255, 255, 255, 0.4);
  margin: 0rem 1rem 0rem 1rem;

  @media ${device.mobileL} {
    margin: 0rem 0.25rem 0rem 0.25rem;
  }
`

export const CategoryChart = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 100px;
  background-color: #1aab9b;
  opacity: ${props => (props.selected ? 1 : 0)};
`

export const CategoryNumber = styled.h3`
  color: var(--body-color);
  margin: 0.875rem;
  text-transform: uppercase;
`

export const CategoryButton = styled(PrimaryButton)`
  min-width: 120px;
  color: ${props => (props.active ? "#fafafa" : "#53546a")};
  border: ${props =>
    props.active ? "1px solid #1aaa9b" : "1px solid #53546a"};
  background: ${props => (props.active ? "#1aaa9b" : "#def2eb")};
  border-radius: 400px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.0125rem;
`

export const Category = ({
  data,
  selected,
  number,
  onClick,
  label,
  ...otherProps
}) => (
  <CategoryContainer>
    <CategoryChart selected={selected}>
      {selected && <Pie data={data} {...otherProps} />}
    </CategoryChart>
    <CategoryNumber>{number}</CategoryNumber>
    <CategoryButton
      noClick={onClick}
      active={selected}
    >{` ${label} `}</CategoryButton>
  </CategoryContainer>
)
