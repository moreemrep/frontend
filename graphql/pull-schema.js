const fs = require('fs')
const request = require('request')

const SCHEMA_FILE = './graphql/schema.graphql'
const SCHEMA_FETCH_URL = 'http://localhost:3000/graphql/schema'

const reportError = error => {
  console.log('Error while fetching', error)
  process.exit(1)
}

const writeSchemaFile = (schemaFile, schemaString) => {
  const currentSchema = fs.existsSync(schemaFile) && fs.readFileSync(schemaFile.toString())

  if (currentSchema == schemaString) {
    console.log('Schemas are the same')
  } else {
    fs.writeFile(schemaFile, schemaString, error => {
      if (error) {
        reportError(error)
      } else {
        console.log('Schema updated')
      }
    })
  }
}

request({ uri: SCHEMA_FETCH_URL }, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    reportError(error || response.body)
  } else {
    writeSchemaFile(SCHEMA_FILE, body)
  }
})