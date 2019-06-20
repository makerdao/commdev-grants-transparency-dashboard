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
  "oceania": "Oceania"
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
    "location": { "type": "string" },
    "region": {"type": "string", "enum": [...Object.values(region)]},
    "active": { "type": "boolean"},
    "type": { "type": "string", "enum": [...Object.values(pType)]},
    "status": { "type": "string", "enum": [...Object.values(pStatus)]},
    "funds": {
      "type": "object",
      "properties": {
        "awarded": {"type": "boolean"},
        "amount": {"type": "integer"}
      },
      "required": ["awarded", "amount"]
    }
  },
  "required": ["name", "description", "learnMoreLink", "active", "location", "region", "type", "status", "funds"]
};

module.exports = {pStatus, pType, region, Project};
