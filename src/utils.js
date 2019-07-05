import rawData from '../static/data/projectData.json'
import publicFinanceData from '../static/data/publicFinanceData.json'
import {pStatus, pType, region} from '../static/data/dataformat.js'

const getAcceptedProjects = () => {
  return rawData.filter(project => project.accepted)
}

const getAppsSubmitted = () => {
  return rawData.length
}

const getNofAcceptedProjects = () => {
  return getAcceptedProjects().length
}

const getNofCountries = () => {
  let countries = getAcceptedProjects().map(p => p.location)
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
// get distribution of projectTypes as percentages
let typeDistribution = {}
for (let type of Object.values(pType)) {
  typeDistribution[type] = (getNofProjectField('type', type)) // / (nOfProjects)) * 100
}
// let typeDistribution = Object.values(pType).map(t => getNofProjectField('type', t))


const distinct = (value, index, self) => {
  return self.indexOf(value) === index;
}
// create list of distinct countries by region
const getCountriesOfRegion = (region) => {
  return getAcceptedProjects().filter(p => p.region === region).map(p => p.location).filter(distinct)
}

var countriesByRegion = {}
for (let reg of Object.values(region)) {
  countriesByRegion[reg] = getCountriesOfRegion(reg)
}
// console.log('countriesByRegion ', countriesByRegion )

// function to insert comma as separators every 3 digits
function formatNumber(num) {
  return Math.round(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const data = {
  "acceptedProjects": getAcceptedProjects(),
  "totalMoneyAwarded": formatNumber(publicFinanceData.totalMoneyAwarded),
  "totalMoneyDispersed": formatNumber(publicFinanceData.totalMoneyDispersed),
  "averageAwardedMoney": formatNumber(publicFinanceData.totalMoneyAwarded / getNofAcceptedProjects()),
  "appsSubmitted": getAppsSubmitted(),
  "appsAccepted": getNofAcceptedProjects(),
  "nCountries": getNofCountries(),
  "NofProjectType": typeDistributionList.reduce(mergeObjects),
  "NofProjectStatus":statusDistributionList.reduce(mergeObjects),
  "milestones": {
    "total": publicFinanceData.totalMilestones,
    "last30days": publicFinanceData.milestonesLast30Days
  },
  "currentlyActive": getNofProjectField('active', true),
  typeDistribution,
  countriesByRegion
}

console.log('processed data', data)

export const pieData = (field, value) => {
  let nOfValue = getNofProjectField(field, value)
  let data
  if (value === 'All') data = [0]
  else data = nOfValue > 0 ? [nOfValue, getNofAcceptedProjects() - nOfValue] : [1]
  let displayData =  {
    datasets: [{
      data,
      backgroundColor: nOfValue > 0 ? ['#1BBBAA', '#fcf6e4'] : ['#fcf6e4'],
      borderColor: ['#1AA9BB']
    }]
  }
  if (value === 'Inactive') {
    displayData.datasets[0].borderColor = ['#FF0000', '#FF0000']
    displayData.datasets[0].backgroundColor = ['#FF0000']
  }
  return displayData
}

export const doughnutData = {
  datasets: [{
    data: [getAppsSubmitted(), getNofAcceptedProjects()],
    backgroundColor: ['#1BBBAA', '#fcf6e4'],
    borderColor: ['#1AA9BB', '#fcf6e4']
  }]
}
