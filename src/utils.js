import rawData from '../static/projectData.json'
var Ajv = require('ajv')
var ajv = new Ajv({allErrors: true})

var ProjectType = {
  "properties": {
    "name": { "type": "string" },
    "description": { "type": "string" },
    "learnmoreLink": { "type": "string" },
    "github": { "type": "string" },
    "twitter": { "type": "string" },
    "reddit": { "type": "string" },
    "discord": { "type": "string" },
    "location": { "type": "string" },
    "active": { "type": "boolean"},
    "type": { "type": "string", "enum": ["Governance", "DeFi", "Payroll"]},
    "status": { "type": "string", "enum": ["Pre-Launch", "Prototype", "BETA", "Live", "Inactive"]}
  },
  "required": ["name", "description", "learnMoreLink", "location", "type", "status"]
};

var validate = ajv.compile(ProjectType);
function test(json) {
  for (let p of json) {
    var valid = validate(p)
    if (!valid) {
      console.log(ajv.errorsText(validate.errors))
      let error = "invalid JSON for project: " + p.name
      throw error
    }
  }
}

test(rawData)

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
