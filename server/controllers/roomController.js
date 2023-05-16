const Room = require("../models/Room")
const jwt = require("jsonwebtoken");

const roomController = {
    //GET ALL ROOMS
    getAllRooms: async (req,res) => {
        try{
            const room = await Room.find();
            res.status(200).json(room);
        }catch (err) {
            res.status(500).json(err);
        }
    },
    //ADD ROOM
    addRoom: async (req, res) => {
        try {
            //Creat Room
            const newRoom = await new Room({
                roomnumber: req.body.roomnumber,
                roomtype: req.body.roomtype,
                floor: req.body.floor,
                status: req.body.status,
            });

            //Save to DB
            const room = await newRoom.save();
            res.status(200).json(room)
        }catch(error){
            res.status(500).json(error)
        }
    },
};
module.exports = roomController;