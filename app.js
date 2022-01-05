const {Server} = require("./server/index");
const dotenv = require("dotenv");

dotenv.config();

const app = new Server();

app.listen();
