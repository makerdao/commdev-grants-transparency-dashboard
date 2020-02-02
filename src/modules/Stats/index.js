import React from 'react'
import styled from "styled-components"

import { StatSection, StatRow, StatRowOverflow, StatContainer } from "./Layout"
import { DoughnutChart, StatNumber, StatTitle, StatStatus, StatusChart, StatusLabel, StatusNumber } from "./Components"

const Stat = ({children, className, style, fullWidth, number, description, colorOrange, ...otherProps}) => (
    <StatContainer fullWidth={fullWidth} className={className}>
        {(children === null || children === undefined) ?
            <>
                <StatNumber colorOrange={colorOrange}>{number}</StatNumber>
                <StatTitle>{description}</StatTitle>
            </> 
         :
            children //NOTE(Rejon): If you have children, you handle all the rendering yourself.
        }
    </StatContainer>
)

//Basics
Stat.Number = StatNumber; 
Stat.Title = StatTitle;
Stat.Section = StatSection;

//Row
Stat.Row = StatRow;
Stat.Row.Overflow = StatRowOverflow;

//Status (Pie Chart)
Stat.Status = StatStatus; 
Stat.Status.Chart = StatusChart; 
Stat.Status.Label = StatusLabel; 
Stat.Status.Number = StatusNumber; 

//Doughnut
Stat.DoughnutChart = DoughnutChart;

export default Stat
