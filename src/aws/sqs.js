const { sqs } = require("../config/aws");

class Queue {
    listQueue() {
        sqs.listQueues({}, function (err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success", data.QueueUrls);
            }
        });
    }

    receiveMessage() {
        sqs.receiveMessage({
            QueueUrl: "https://sqs.us-east-1.amazonaws.com/182037990636/called"
        }, (err, data) => {
            if (err)
                console.log("Error", err);
            else
                console.log(data)
        })
    }
}

module.exports = Queue