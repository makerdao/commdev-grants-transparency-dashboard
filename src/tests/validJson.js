var rawData = require('../../static/projectData.json')
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
  "required": ["name", "description", "learnMoreLink", "active", "location", "type", "status"]
};

var validate = ajv.compile(ProjectType);

// test expecting a list of projectTypes
function test(json) {
  for (let p of json) {
    var valid = validate(p)
    process.stdout.write('Validating project ' +  p.name  + '...')
    if (!valid) {
      let error = "invalid JSON for project: " + p.name + ': '
      console.log( error + ajv.errorsText(validate.errors))
      throw error
      return -1
    }
    console.log('OK')
  }
  // console.log('JsonData is OK.')
}

test(rawData)

