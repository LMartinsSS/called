const { SQS } = require("@aws-sdk/client-sqs");

var sqs = new SQS({ region: 'us-east-1', apiVersion: '2012-11-05' });

module.exports = { sqs }