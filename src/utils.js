import rawData from "../static/data/acceptedProjectsData.json"
import publicData from "../static/data/publicData.json"
import { pStatus, pType, region } from "../static/data/dataformat.js"

const getAcceptedProjects = () => {
  return rawData
}

const getAppsSubmitted = () => {
  return publicData.applicationsSubmitted
}

const getNofAcceptedProjects = () => {
  return rawData.length
}

const getNofCountries = () => {
  let countries = getAcceptedProjects().map(p => p.country)
  let distinctCountries = new Set(countries)
  distinctCountries.delete("")
  return distinctCountries.size
}

// counts the number of projects which have a given value in a certain field
const getNofProjectField = (field, value) => {
  return getAcceptedProjects().filter(p => p[field] === value).length
}

const nOfProjectsByRegion = Object.values(region).map(reg => {
  return { [reg]: getNofProjectField("region", reg) }
})

// all projects that have been accepted and are not discontinued
const getNofActiveProjects = () => {
  return getAcceptedProjects().filter(p => p.status !== "Inactive").length
}

// Creating stats of how many projects there are of each status:
let statusDistributionList = Object.values(pStatus).map(p => {
  return { [p]: getNofProjectField("status", p) }
})

// Creating stats of how many projects there are of each type
let typeDistributionList = Object.values(pType).map(p => {
  return { [p]: getNofProjectField("type", p) }
})

// helper-reduce function to merge lists into one handy object with status/types as keys
const mergeObjects = (acc, currentValue) => Object.assign(acc, currentValue)

// get distribution of projectTypes as percentages (used for pieCharts)
let typeDistribution = {}
for (let type of Object.values(pType)) {
  typeDistribution[type] = getNofProjectField("type", type) // / (nOfProjects)) * 100
}
// let typeDistribution = Object.values(pType).map(t => getNofProjectField('type', t))

//===== get all countries of each region ========
var countriesByRegion = {}
// helper-function to reduce a list to unique objects
const distinct = (value, index, self) => {
  return self.indexOf(value) === index
}
// create list of distinct countries by region
const getCountriesOfRegion = region => {
  return getAcceptedProjects()
    .filter(p => p.region === region)
    .map(p => p.country)
    .filter(distinct)
}
for (let reg of Object.values(region)) {
  countriesByRegion[reg] = getCountriesOfRegion(reg)
  // if there is an empty location-string remove that from the list
  let emptyStringIndex = countriesByRegion[reg].indexOf("")
  if (emptyStringIndex > -1) {
    countriesByRegion[reg].splice(emptyStringIndex, 1)
  }
}
// console.log('countriesByRegion ', countriesByRegion )

// helper-function to insert comma as separators every 3 digits
function formatNumber(num) {
  return Math.round(num)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export const data = {
  acceptedProjects: getAcceptedProjects(),
  totalMoneyAwarded: formatNumber(publicData.totalMoneyAwarded),
  totalMoneyDispersed: formatNumber(publicData.totalMoneyDispersed),
  averageAwardedMoney: formatNumber(
    publicData.totalMoneyAwarded / getNofAcceptedProjects()
  ),
  appsSubmitted: getAppsSubmitted(),
  appsAccepted: getNofAcceptedProjects(),
  nCountries: getNofCountries(),
  nProjectsByRegion: nOfProjectsByRegion.reduce(mergeObjects),
  NofProjectType: typeDistributionList.reduce(mergeObjects),
  NofProjectStatus: statusDistributionList.reduce(mergeObjects),
  milestones: {
    total: publicData.totalMilestones,
    last30days: publicData.milestonesLast30Days,
  },
  currentlyActive: getNofActiveProjects(),
  typeDistribution,
  countriesByRegion,
}

// activate this to debug data flows
// console.log("processed data", data)

export const pieData = (field, value) => {
  let nOfValue = getNofProjectField(field, value)
  let data
  if (value === "All") data = [0]
  else
    data = nOfValue > 0 ? [nOfValue, getNofAcceptedProjects() - nOfValue] : [1]
  let displayData = {
    datasets: [
      {
        data,
        backgroundColor:
          nOfValue > 0
            ? ["#1BBBAA", "hsl(152, 45%, 94%)"]
            : ["hsl(152, 45%, 94%)"],
        borderColor: ["#1AA9BB"],
      },
    ],
  }
  if (value === "Inactive") {
    displayData.datasets[0].borderColor = ["#FF0000", "#FF0000"]
    displayData.datasets[0].backgroundColor = ["#FF0000"]
  }
  return displayData
}

export const doughnutData = {
  datasets: [
    {
      data: [getNofAcceptedProjects(), getAppsSubmitted()],
      backgroundColor: ["#1AAB9B", "hsla(38,90%,60%,1)"],
      borderColor: ["#1AAB9B", "hsla(38,90%,60%,1)"],
    },
  ],
}
