const { Router } = require("express");
const Queue = require("../aws/sqs");
const queue = new Queue()

const QueueRouter = Router();

QueueRouter.get("/queue/list", queue.listQueue);
QueueRouter.get("/queue/message", queue.receiveMessage);

module.exports.QueueRouter = QueueRouter;