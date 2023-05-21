const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
    },
    guest: {
      type: String,
      require: true,
    },
    roomtype: {
      type: String,
      require: true,
    },
    arrivalDate: {
      type: Date,
      require: true,
    },
    departureDate: {
      type: Date,
      require: true,
    },
    request: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Booking", bookingSchema);
