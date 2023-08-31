const dotenv = require("dotenv");
const app = require("./server");
const Queue = require("./aws/sqs");

const queue = new Queue();
// queue.listQueue()
queue.receiveMessage()

dotenv.config();
const porta = process.env.PORT

app.listen(porta, function () {
    console.log("Started application on port %d", porta)
});