const e = require("express");
const mogoose = require("mongoose");

const apidatesSchema = new mogoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const apidates = mogoose.model("apidatas", apidatesSchema);
module.exports = apidates;
