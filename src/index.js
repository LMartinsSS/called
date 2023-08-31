const dotenv = require("dotenv");
const app = require("./server");

dotenv.config();
const porta = process.env.PORT

app.listen(porta, function () {
    console.log("Started application on port %d", porta)
});