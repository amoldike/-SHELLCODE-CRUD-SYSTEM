const express = require("express");

const router = express.Router();
const userController = require("../controllers/users");

// --------------------TO CREATE A NEW USER-------------------
router.post("/", userController.createUser);

// -------------------TO GET ALL USER INFO.--------------------
router.get("/", userController.getAllUserInfo);

// -------------------TO GET SPECIFIDE USER INFO---------------
router.get("/:userId", userController.getUserInfo);

// -------------------TO UPDATE SPECIFIDE USER INFO-------------
router.put("/:userId", userController.updateUserInfo);

// -------------------TO DELETE SPECIFIDE USER INFO-------------
router.delete("/:userId", userController.deleteUserInfo);

module.exports = router;
