const { getDbData: getDbData1234 } = require("./dataSet-1.db")
const { getDbData: getDbData4321 } = require("./dataSet-2.db")

module.exports = { db1234: getDbData1234(), db4321: getDbData4321() }
