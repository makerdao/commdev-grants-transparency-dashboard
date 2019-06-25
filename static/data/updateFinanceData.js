// those are function that would be needed if one wanted to automate the
// generation of the public finance data. Basically, instead of filling that one
// out manually, one could maintain a list of finance/milestone data (see
// secretProjectData.json) with a bunch of entries per project and use a
// function (defined here) to aggregate it automatically into a file
// e.g. npm run updateFinanceData <pathToSecretProjectData> <targetLocationOfPublicFinanceData>

var financeData = require('../../static/data/secretProjectData.json')
// import financeData from '../static/data/secretProjectData.json'

const getTotalAwardedMoney = (financeData) => {
  let totalSum = 0
  financeData.map(project => totalSum += project.awarded)
  return totalSum
}

export const getTotalDispersedMoney = (financeData) => {
  let totalSum = 0
  financeData.map(project => totalSum += project.dispersed)
  return totalSum
}

export const getAverageAwardedMoney = (financeData) => {
  return Math.floor(getTotalAwardedMoney(financeData) / financeData.length)
}
console.log('averageAwardedMoney ', getAverageAwardedMoney(financeData) )

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





// TODO write function to generate the JSON in publicFinanceData.json from the
// JSON in secretProjectData.json

