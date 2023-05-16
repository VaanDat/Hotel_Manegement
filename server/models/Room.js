const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomnumber: {
      type: Number,
      require: true,
      unique: true,
    },
    roomtype: {
      type: String,
      require: true,
    },
    floor: {
      type: Number,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
