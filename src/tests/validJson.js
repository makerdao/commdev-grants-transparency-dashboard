var rawProjectData = require('../../static/data/projectData.json')
// var rawFinanceData = require('../../static/data/secretProjectData.json')
var dataFormat = require('../../static/data/dataformat.js')

var Ajv = require('ajv')
var ajv = new Ajv({allErrors: true})

var validateProject = ajv.compile(dataFormat.Project);
// var validateFinances = ajv.compile(dataFormat.Finances);

// test expecting a list of projectTypes
function testProjectData(json, /*finance*/) {
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
    // make sure there is financial/milestone data for all approved projects
    // if (p.accepted &&
    //     finance.map(f => f.name).indexOf(p.name) < 0) {
    //   let error = "No financial data found for project: " + p.name
    //   console.log('\x1b[31m%s\x1b[0m', 'error')
    //   throw error
    //   return -1
    // }
    console.log('\x1b[32m%s\x1b[0m', 'OK');
  }
}

// test to see whether financeData satisfies JSON SCHEMA
// function testProjectFinances(json) {
//   console.log('')
//   console.log('--------------- finance info ----------------------------')
//   for (let p of json) {
//     var valid = validateFinances(p)
//     process.stdout.write('Checking finances of ' +  p.name  + '...')
//     // check whether fulfills JSON SCHEMA
//     if (!valid) {
//       let error = "invalid JSON for project: " + p.name + ': '
//       console.log('\x1b[31m%s\x1b[0m', 'error')
//       console.log(error,  ajv.errorsText(validateFinances.errors))
//       throw error
//       return -1
//     }
//     console.log('\x1b[32m%s\x1b[0m', 'OK');
//   }
// }

testProjectData(rawProjectData, rawFinanceData)
// testProjectFinances(rawFinanceData)
