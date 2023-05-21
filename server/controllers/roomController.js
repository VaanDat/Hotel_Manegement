const Room = require("../models/Room");

const roomController = {
  //GET ALL ROOMS
  getAllRooms: async (req, res) => {
    try {
      const room = await Room.find();
      res.status(200).json(room);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //ADD ROOM
  addRoom: async (req, res) => {
    try {
      //CREATE ROOM
      const newRoom = await new Room({
        roomnumber: req.body.roomnumber,
        roomtype: req.body.roomtype,
        floor: req.body.floor,
        status: req.body.status,
      });

      //SAVE TO DB
      const room = await newRoom.save();
      res.status(200).json(room);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = roomController;
