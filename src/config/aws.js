const { SQS } = require("@aws-sdk/client-sqs");
const dotenv = require("dotenv");

dotenv.config();

const region = process.env.REGION
const apiVersion = process.env.APIVERSION

var sqs = new SQS({
    region: region,
    apiVersion: apiVersion
});

module.exports = { sqs }