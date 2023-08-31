const { sqs } = require("../config/aws");
const dotenv = require("dotenv");
dotenv.config();

const queueUrl = process.env.QUEUEURL

class Queue {
    listQueue(req, res) {
        sqs.listQueues({}, function (err, data) {
            if (err) {
                res.send(err).status(404)
            } else if (data.QueueUrls)
                res.send({ queueUrls: data.QueueUrls }).status(200)
        });
    }

    receiveMessage(req, res) {
        sqs.receiveMessage({
            QueueUrl: queueUrl
        }, (err, data) => {
            if (err)
                res.send(err).status(404)
            else if (data.Messages) {
                const message = data.Messages[0].Body
                res.send({ content: message }).status(200)
            }
        })
    }
}

module.exports = Queue