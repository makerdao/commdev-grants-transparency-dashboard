// define project types in object to avoid errors by misspelling
const pStatus = {
  prelaunch: "Pre-Launch",
  Prototype: "Prototype",
  beta: "Beta",
  live: "Live",
  inactive: "Inactive",
}

const pType = {
  hold: "Hold Dai",
  spend: "Spend Dai",
  send: "Send Dai",
  watch: "Watch Dai",
  use: "Use Dai",
  understand: "Learn Dai",
  cdpmgmt: "CDP",
}

const region = {
  northamerica: "North America",
  southamerica: "South America",
  africa: "Africa",
  europe: "Europe",
  asia: "Asia",
  oceania: "Oceania",
}

// json-SCHEMA defintion that entries have to conform with
const Project = {
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    learnmoreLink: { type: "string" },
    github: { type: "string" },
    twitter: { type: "string" },
    reddit: { type: "string" },
    discord: { type: "string" },
    location: { type: "string" },
    region: { type: "string", enum: [...Object.values(region)] },
    type: { type: "string", enum: [...Object.values(pType)] },
    status: { type: "string", enum: [...Object.values(pStatus)] },
    audited: { type: "boolean" },
  },
  required: [
    "name",
    "description",
    "learnMoreLink",
    "location",
    "region",
    "type",
    "status",
  ],
}

module.exports = { pStatus, pType, region, Project }
