const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  Seq: {
    type: Number,
  },
});

module.exports =
  mongoose.models.Counter || mongoose.model("Counter", counterSchema);
