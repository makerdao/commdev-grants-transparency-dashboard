import rawData from '../static/projectData.json'

const getTotalAwardedMoney = () => {
  console.log('data', rawData)
  let totalSum = 0
  rawData.filter(project => project.funds.awarded).map(project => totalSum += project.funds.amount)
  return totalSum
}

export const getAppsSubmitted = () => {
  return rawData.length
}

export const getAppsAccepted = () => {
  let tmp = rawData.filter(project => project.funds.awarded).length
  console.log('tmp ', tmp )
  return tmp
}

export const getNofCountries = () => {
  let countries = rawData.filter(p => p.location)
  let distinctCountries = new Set(countries)
  return distinctCountries.size
}

export const data = {
  "totalMoney": getTotalAwardedMoney(),
  "appsSubmitted": getAppsSubmitted(),
  "appsAccepted": getAppsAccepted(),
  "nCountries": getNofCountries()
}
