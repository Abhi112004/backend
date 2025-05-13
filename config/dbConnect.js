const mogoose = require("mongoose");
require("dotenv").config();
const dbConnect = async () => {
     await mogoose.connect(process.env.DATEBASE_URL)
}

module.exports = dbConnect;