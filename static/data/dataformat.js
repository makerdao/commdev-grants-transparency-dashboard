// define project types in object to avoid errors by misspelling
const pStatus = {
  "prelaunch": "Pre-Launch",
  "Prototype": "Prototype",
  "beta": "BETA",
  "live": "Live",
  "inactive": "Inactive"
}

const pType = {
  "governance": "Governance",
  "defi": "DeFi",
  "payroll": "Payroll",
  "fiatramps": "Fiat Ramps",
  "cdpmgmt": "CDP MGMT",
  "enterprise": "Enterprise",
  "analytics": "Analytics"
}

const region = {
  "northamerica": "North America",
  "africa": "Africa",
  "europe": "Europe",
  "asia": "Asia",
  "oceania": "Oceania'"
}

// json-SCHEMA defintion that entries have to conform with
const Project = {
  "properties": {
    "name": { "type": "string" },
    "description": { "type": "string" },
    "learnmoreLink": { "type": "string" },
    "github": { "type": "string" },
    "twitter": { "type": "string" },
    "reddit": { "type": "string" },
    "discord": { "type": "string" },
    "location": {
      "type": "object",
      "properties": {
        "country": { "type": "string" },
        "region": {"type": "string", "enum": [...Object.values(region)]}
      },
      "required": ["country", "region"]
    },
    "active": { "type": "boolean"},
    "type": { "type": "string", "enum": [...Object.values(pType)]},
    "status": { "type": "string", "enum": [...Object.values(pStatus)]},
  },
  "required": ["name", "description", "learnMoreLink", "active", "location", "type", "status"]
};

module.exports = {pStatus, pType, Project};
