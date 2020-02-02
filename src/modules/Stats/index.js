import React from 'react'
import styled from "styled-components"

import { StatSection, StatRow, StatContainer } from "./Layout"
import { DoughnutChart, StatNumber, StatTitle } from "./Components"

const Stat = ({children, className, style, fullWidth, number, description, colorOrange, ...otherProps}) => (
    <StatContainer fullWidth={fullWidth} className={className}>
        {(children === null || children === undefined) ?
            <>
                <StatNumber colorOrange={colorOrange}>{number}</StatNumber>
                <StatTitle>{description}</StatTitle>
            </> 
         :
            children
        }
    </StatContainer>
)

Stat.Number = StatNumber; 
Stat.Title = StatTitle;
Stat.Section = StatSection
Stat.Row = StatRow
Stat.DoughnutChart = DoughnutChart

export default Stat
