var rawData = require('../static/data/projectData.json')
import {Project} from '../static/data/dataformat.js'

var Ajv = require('ajv')
var ajv = new Ajv({allErrors: true})

var validate = ajv.compile(Project);

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

