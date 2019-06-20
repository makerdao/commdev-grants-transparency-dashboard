import rawData from '../static/data/projectData.json'
import {pStatus, pType} from '../static/data/dataformat.js'

const getTotalAwardedMoney = () => {
  let totalSum = 0
  rawData.filter(project => project.funds.awarded).map(project => totalSum += project.funds.amount)
  return totalSum
}

const getAppsSubmitted = () => {
  return rawData.length
}

const getAppsAccepted = () => {
  let tmp = rawData.filter(project => project.funds.awarded).length
  return tmp
}

const getNofCountries = () => {
  let countries = rawData.filter(p => p.location)
  let distinctCountries = new Set(countries)
  return distinctCountries.size
}

// REFACTOR: those next two could be fused together
// return number of projects of a given type (string), either all or just the accepted ones
const getNofProjectType = (type) => {
  return rawData.filter(p => p.type === type).length
}

// return number of projects of a given type (string), either all or just the accepted ones
const getNofProjectStatus = (status) => {
  return rawData.filter(p => p.status === status).length
}

// Creating stats of how many projects there are of each type and status:
// REFACTOR maybe instead of doing map and reduce this can be done in one step?
let statusDistributionList = Object.values(pStatus).map( p => {
  return {[p]: getNofProjectStatus(p)};
})
let typeDistributionList = Object.values(pType).map( p => {
  return {[p]: getNofProjectType(p)};
})

// reduce function to merge lists into one handy object with status/types as keys
const mergeObjects = (acc, currentValue) => Object.assign(acc, currentValue)
// let td = typeDistributionList.reduce(mergeObjects)

// get distribution of projectTypes as percentages
// TODO all porject or just accepted ones
var nOfProjects = getAppsSubmitted()
let typeDistribution = {}
for (let type of Object.values(pType)) {
  typeDistribution[type] = (getNofProjectType(type) / (nOfProjects)) * 100
}

export const data = {
  "totalMoney": getTotalAwardedMoney(),
  "appsSubmitted": getAppsSubmitted(),
  "appsAccepted": getAppsAccepted(),
  "nCountries": getNofCountries(),
  "NofProjectType": typeDistributionList.reduce(mergeObjects),
  "NofProjectStatus":statusDistributionList.reduce(mergeObjects),
  "typeDistribution": typeDistribution
}

console.log('processed data', data)
