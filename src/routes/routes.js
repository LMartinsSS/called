const express = require("express");
const { QueueRouter } = require("./QueueRouter");

const router = express.Router();
router.use(QueueRouter);

module.exports = router;

