const roomController = require("../controllers/roomController");
const router = require("express").Router();
const middlewareController = require("../controllers/middlewareController");

//ADD ROOM
router.post("/add", roomController.addRoom);
//GET ALL ROOMS
router.get("/", middlewareController.verifyToken, roomController.getAllRooms);

module.exports = router;
