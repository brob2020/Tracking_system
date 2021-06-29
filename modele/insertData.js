const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  Account: {
    type: String,
  },
  Notification: {
    type: String,
  },
  Status: {
    type: String,
  },
  Incident: {
    type: String,
  },
  Type: {
    type: String,
  },
  Serial_Number: {
    type: String,
    max: 20,
    min: 5,
  },
  Name: {
    type: String,
    max: 1024,
  },
  Description: {
    type: String,
  },
  Address: {
    type: String,
    max: 1024,
  },
  PhoneNumber: {
    type: String,
    max: 1024,
  },
  User_Name: {
    type: String,
    max: 1024,
  },
  XSM_Incident: {
    type: String,
    max: 1024,
  },
});

module.exports =
  mongoose.models.insertData || mongoose.model("insertData", dataSchema);
