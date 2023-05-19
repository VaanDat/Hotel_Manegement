const mongoose = require("mongoose");

const roomtypeSchma = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    capacity: {
      type: Number,
      requires: true,
    },
    rate: {
      type: Number,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Roomtype", roomtypeSchma);
