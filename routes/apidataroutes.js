//get api

const express = require("express");
const router = express.Router();
//Importing controller
const {
  HandlerGetapidata,
  HandlerLogin,
  HandlerPostapidata,
  HandlerDeleteapidata,
  HandlerSingleData,
  HandlerUpdateapidata,
} = require("../controllers/apidatacontroller");

//get api
router.get("/",HandlerGetapidata );

//login api
router.post("/login", HandlerLogin);
//post api
router.post("/",HandlerPostapidata );
//delete api
router.put("/delete-data", HandlerDeleteapidata);
// single data get api+
router.post("/single-data", HandlerSingleData);
// update api
router.put("/edit-data",HandlerUpdateapidata );
module.exports = router;