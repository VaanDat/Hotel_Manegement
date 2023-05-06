const authController = require("../controllers/authController");

const router = require("express").Router();

//REGISTER
router.post("/register", authController.registerUser);

module.exports = router;
