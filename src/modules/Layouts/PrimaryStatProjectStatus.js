import React from "react"

import { pStatus } from "@static/data/dataformat.js"

import { data, pieData } from "@src/utils.js"

import Stat from "@modules/Stats"

export default () => (
  <Stat.Row.Overflow gridColumn="2 / -1">
    {Object.values(pStatus).map(status => (
      <Stat.Status
        key={status.toString()}
        number={data.NofProjectStatus[status]}
        data={pieData("status", status)}
        label={status}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
          /* color: '#fff' */
        }}
      />
    ))}
  </Stat.Row.Overflow>
)
