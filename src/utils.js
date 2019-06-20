import rawData from '../static/data/projectData.json'
import financeData from '../static/data/secretProjectData.json'
import {pStatus, pType, region} from '../static/data/dataformat.js'
import {differenceInDays, endOfToday} from 'date-fns'

const getTotalAwardedMoney = () => {
  let totalSum = 0
  financeData.map(project => totalSum += project.awarded)
  return totalSum
}

const getTotalDispersedMoney = () => {
  let totalSum = 0
  financeData.map(project => totalSum += project.dispersed)
  return totalSum
}

const getAcceptedProjects = () => {
  return rawData.filter(project => project.accepted)
}

const getAppsSubmitted = () => {
  return rawData.length
}

const getNofAcceptedProjects = () => {
  return getAcceptedProjects().length
}

const averageAwardedMoney = Math.floor(getTotalAwardedMoney() / getNofAcceptedProjects())
console.log('averageAwardedMoney ', averageAwardedMoney )

const getNofCountries = () => {
  let countries = getAcceptedProjects().filter(p => p.location)
  let distinctCountries = new Set(countries)
  return distinctCountries.size
}

// REFACTOR: those next two could be fused together
// counts the number of projects which have a given value in a certain field
const getNofProjectField = (field, value) => {
  return getAcceptedProjects().filter(p => p[field] === value).length
}
// console.log('getNofProjectField ', getNofProjectField('status', 'BETA', true))

// Creating stats of how many projects there are of each type and status:
// REFACTOR maybe instead of doing map and reduce this can be done in one step?
let statusDistributionList = Object.values(pStatus).map( p => {
  return {[p]: getNofProjectField('status', p)};
})

let typeDistributionList = Object.values(pType).map( p => {
  return {[p]: getNofProjectField('type', p)};
})

// reduce function to merge lists into one handy object with status/types as keys
const mergeObjects = (acc, currentValue) => Object.assign(acc, currentValue)
// let td = typeDistributionList.reduce(mergeObjects)

// get distribution of projectTypes as percentages
var nOfProjects = getNofAcceptedProjects()
let typeDistribution = {}
for (let type of Object.values(pType)) {
  typeDistribution[type] = (getNofProjectField('type', type) / (nOfProjects)) * 100
}

// create list of countries by region
const getCountriesOfRegion = (region) => {
  let pByRegion = getAcceptedProjects().filter(p => p.region === region)
  return pByRegion.length === 0 ? [] : pByRegion.map(p => p.location)
}

var countriesByRegion = {}
for (let reg of Object.values(region)) {
  countriesByRegion[reg] = getCountriesOfRegion(reg)
}
// console.log('countriesByRegion ', countriesByRegion )

// function to insert comma as separators every 3 digits
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// total completed milestones
const getTotalCompletedMilestones = () => {
  let ms = 0
  financeData.map(project => ms += project.milestones.completed)
  return ms
}

const getMilestonesLast30Days = () => {
  let ms = 0
  financeData.filter(project => project.milestones.last30days && (ms += project.milestones.last30days))
  return ms
}
console.log('getMilestonesLast30Days', getMilestonesLast30Days())

export const data = {
  "acceptedProjects": getAcceptedProjects(),
  "totalMoneyAwarded": formatNumber(getTotalAwardedMoney()),
  "totalMoneyDispersed": formatNumber(getTotalDispersedMoney()),
  "averageAwardedMoney": formatNumber(averageAwardedMoney),
  "appsSubmitted": getAppsSubmitted(),
  "appsAccepted": getNofAcceptedProjects(),
  "nCountries": getNofCountries(),
  "NofProjectType": typeDistributionList.reduce(mergeObjects),
  "NofProjectStatus":statusDistributionList.reduce(mergeObjects),
  "milestones": {
    "total": getTotalCompletedMilestones(),
    "last30days": getMilestonesLast30Days()
  },
  "currentlyActive": getNofProjectField('active', true),
  typeDistribution,
  countriesByRegion
}

console.log('processed data', data)
