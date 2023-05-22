const bookingController = require("../controllers/bookingController");
const router = require("express").Router();
const middlewareController = require("../controllers/middlewareController");

//ADD BOOKING
router.post("/add", bookingController.addBooking);

//GET ALL BOOKING
router.get(
  "/",
  middlewareController.verifyToken,
  bookingController.getAllBooking
);

//DELETE BOOKING
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  bookingController.deleteBooking
);

module.exports = router;
