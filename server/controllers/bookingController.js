const Booking = require("../models/Booking");

const bookingController = {
  //GET ALL BOOKING
  getAllBooking: async (req, res) => {
    try {
      const booking = await Booking.find();
      res.status(200).json(booking);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //ADD BOOKING
  addBooking: async (req, res) => {
    try {
      //CREATE NEW BOOKING
      const newBooking = await new Booking({
        fullname: req.body.fullname,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        guest: req.body.guest,
        roomtype: req.body.roomtype,
        arrivalDate: req.body.arrivalDate,
        departureDate: req.body.departureDate,
        request: req.body.request,
      });
      //SAVE TO DB
      const booking = await newBooking.save();
      res.status(200).json(booking);
    } catch (err) {
      res.status(500).json(err);
    }
  },
   //DELETE BOOKING
   deleteBooking: async (req, res) => {
    try {
      const user = await Booking.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = bookingController;
