const userController = require("../controllers/userController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//GET ALL USERS
router.get("/", userController.getAllUser);
//DELETE USER
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);
module.exports = router;
