const express = require("express");
const router = express.Router();

const { updateUser, deleteUser, getAllUser, getSingleUser } = require("../controllers/user.controller.js");
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken.js");


router.route("/:id")
    .put(verifyUser, updateUser)
    .delete(verifyUser, deleteUser)
    .get(verifyUser, getSingleUser)

router.get("/", verifyAdmin, getAllUser)


module.exports = router;