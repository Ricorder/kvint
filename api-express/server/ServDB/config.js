require('dotenv').config()

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
}

const { DB_HOST, DB_NAME, DB_PORT } = process.env
const dbConnectionURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

module.exports = {
  options,
  dbConnectionURL,
}
