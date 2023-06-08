const RoomType = require("../models/Roomtype");

const roomTypeController = {
    //GET ALL ROOMTYPE
    getAllRoomType: async (req, res) => {
        try {
            const roomType = await RoomType.find();
            res.status(200).json(RoomType);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    //ADD ROOMTYPE
    addRoomType: async (req,res) => {
        try{
        //CREATE NEW ROOMTYPE
        const newRoomType = await new RoomType({
            name: req.body.name,
            rate: req.body.rate,
            description: req.body.description
        });
        //Save to DB
        const roomtype = await newRoomType.save();
        res.status(200).json(roomtype);
        }catch (err) {
            res.status(500).json(err);
        }
    },
    //DELETE ROOMTYPE
    deleteRoomType: async(req,res) => {
        try{
            
        }catch(err){}
    },
}