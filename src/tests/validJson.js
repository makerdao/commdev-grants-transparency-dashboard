var rawProjectData = require('../../static/data/acceptedProjectsData.json')
var dataFormat = require('../../static/data/dataformat.js')

var Ajv = require('ajv')
var ajv = new Ajv({allErrors: true})

var validateProject = ajv.compile(dataFormat.Project);

// test expecting a list of projectTypes
function testProjectData(json) {
  console.log('--------------- project info ----------------------------')
  // check whether fulfills JSON SCHEMA
  for (let p of json) {
    var valid = validateProject(p)
    process.stdout.write('Validating project ' +  p.name  + '...')
    if (!valid) {
      let error = "invalid JSON for project: " + p.name + ': '
      console.log('\x1b[31m%s\x1b[0m', 'error')
      console.log(error,  ajv.errorsText(validateProject.errors))
      throw error
      return -1
    }
    console.log('\x1b[32m%s\x1b[0m', 'OK');
  }
}

testProjectData(rawProjectData)
