import rawData from '../static/projectData.json'

const getTotalAwardedMoney = () => {
  console.log('data', rawData)
  let totalSum = 0
  rawData.filter(project => project.funds.awarded).map(project => totalSum += project.funds.amount)
  return totalSum
}

const getAppsSubmitted = () => {
  return rawData.length
}

const getAppsAccepted = () => {
  let tmp = rawData.filter(project => project.funds.awarded).length
  console.log('tmp ', tmp )
  return tmp
}

const getNofCountries = () => {
  let countries = rawData.filter(p => p.location)
  let distinctCountries = new Set(countries)
  return distinctCountries.size
}

const getNofProjectType = (type) => {
  return rawData.filter(p => p.type === type).length
}


const getNofProjectStatus = (status) => {
  return rawData.filter(p => p.status === status).length
}

export const data = {
  "totalMoney": getTotalAwardedMoney(),
  "appsSubmitted": getAppsSubmitted(),
  "appsAccepted": getAppsAccepted(),
  "nCountries": getNofCountries(),
  "NofProjectType": {
    "governance": getNofProjectType('governance'),
    "defi": getNofProjectType('defi'),
    "fiatRamps": getNofProjectType('fiatRamps'),
    "payroll": getNofProjectType('payroll')
  },
  "NofProjectStatus": {
    "prelaunch": getNofProjectStatus('prelaunch'),
    "prototype": getNofProjectStatus('prototype'),
    "beta": getNofProjectStatus('beta'),
    "live": getNofProjectStatus('live'),
    "inactive": getNofProjectStatus('inactive')
  }
}
