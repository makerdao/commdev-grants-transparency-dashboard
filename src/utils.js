import rawData from '../static/data/projectData.json'
import {pStatus, pType, region} from '../static/data/dataformat.js'

const getTotalAwardedMoney = () => {
  let totalSum = 0
  rawData.filter(project => project.funds.awarded).map(project => totalSum += project.funds.amount)
  return totalSum
}

const getAcceptedProjects = () => {
  return rawData.filter(project => project.funds.awarded)
}

const getAppsSubmitted = () => {
  return rawData.length
}

const getNofAcceptedProjects = () => {
  return getAcceptedProjects().length
}

const getNofCountries = () => {
  let countries = rawData.filter(p => p.location)
  let distinctCountries = new Set(countries)
  return distinctCountries.size
}

// REFACTOR: those next two could be fused together
// counts the number of projects which have a given value in a certain field, either all or just the accepted ones
const getNofProjectField = (field, value, all=false) => {
  return rawData.filter(p => p[field] === value && (all || p.funds.awarded)).length
}
// console.log('getNofProjectField ', getNofProjectField('status', 'BETA', true))

// Creating stats of how many projects there are of each type and status:
// REFACTOR maybe instead of doing map and reduce this can be done in one step?
let statusDistributionList = Object.values(pStatus).map( p => {
  return {[p]: getNofProjectField('status', p, false)};
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
  typeDistribution[type] = (getNofProjectField('type', type, false) / (nOfProjects)) * 100
}

// create list of countries by region
const getCountriesOfRegion = (region) => {
  let pByRegion = rawData.filter(p => p.region === region)
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

export const data = {
  "acceptedProjects": getAcceptedProjects(),
  "totalMoney": formatNumber(getTotalAwardedMoney()),
  "appsSubmitted": getAppsSubmitted(),
  "appsAccepted": getNofAcceptedProjects(),
  "nCountries": getNofCountries(),
  "NofProjectType": typeDistributionList.reduce(mergeObjects),
  "NofProjectStatus":statusDistributionList.reduce(mergeObjects),
  typeDistribution,
  countriesByRegion
}

console.log('processed data', data)
