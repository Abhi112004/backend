const express = require("express");
const app = express();
const cors = require("cors");
const formidable = require("express-formidable");
const dbConnect = require("./config/dbConnect");
const apidataroutes = require("./routes/apidataroutes");
const PORT = process.env.PORT || 5000; // Use env port for deployment
app.use(formidable())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//importing routes  
app.use("/", apidataroutes);
//database connection
dbConnect()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database not connected");
    console.log(err);
  });
//server creation
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
