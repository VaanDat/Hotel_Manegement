const customerController = require("../controllers/customerController");
const router = require("express").Router();
const middlewareController = require("../controllers/middlewareController");

//ADD CUSTOMER
router.post("/add", customerController.addCustomer);

//GET ALL CUSTOMER
router.get(
  "/",
  middlewareController.verifyToken,
  customerController.getAllCustomer
);
//DELETE CUSTOMER
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  customerController.deleteCustomer
);
module.exports = router;
