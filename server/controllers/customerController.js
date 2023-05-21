const Customer = require("../models/Customer");

const customerController = {
  //GET ALL CUSTOMER
  getAllCustomer: async (req, res) => {
    try {
      const customer = await Customer.find();
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //ADD ROOM
  addCustomer: async (req, res) => {
    try {
      //Create Customer
      const newCustomer = await new Customer({
        name: req.body.name,
        gender: req.body.gender,
        date: req.body.date,
        phoneNumber: req.body.phoneNumber,
        country: req.body.country,
      });
      //Save to DB
      const customer = await newCustomer.save();
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json(err);
      console.error(err);
    }
  },
};

module.exports = customerController;
