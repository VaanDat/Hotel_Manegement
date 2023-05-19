const mongoose = require("mongoose");

const customerSchma = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      require: true,
    },
    phoneNumber: {
      type: Number,
      require: true,
      unique: true,
    },
    country: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchma);
