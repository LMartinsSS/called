const express = require("express")
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.json({ type: 'application/json' }))

module.exports = app