import React from "react"
import {doughnutData} from "../utils.js"
import {Doughnut} from 'react-chartjs-2'
import Chart from "chart.js";

Chart.defaults.doughnut.cutoutPercentage = 80;
Chart.defaults.doughnut.hover.mode = 'off';
console.log('options:', Chart.defaults.doughnut)

export default () => (
<Doughnut
      data={doughnutData}
      width={300}
      height={300}
      options = {{
        maintainAspectRatio: true,
        responsive:true
      }}
    />
)
