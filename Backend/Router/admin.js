
const middlewareController = require("../Controller/middlewareController");
const adminController = require("../Controller/adminController");

const router = require("express").Router();

// Get all users
router.get("/",middlewareController.verifyAdmin, adminController.getAllUsers);
router.delete("/:id", middlewareController.verifyAdmin, adminController.deleteUser);

module.exports = router;