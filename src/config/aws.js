const { SQS } = require("@aws-sdk/client-sqs");

const region = process.env.REGION
const apiVersion = process.env.APIVERSION

var sqs = new SQS({
    region,
    apiVersion
});

module.exports = { sqs }