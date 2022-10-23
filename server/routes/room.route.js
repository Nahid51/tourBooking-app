const express = require("express");
const router = express.Router();

const { updateRoom, deleteRoom, getSingleRoom, createRoom, getAllRoom } = require("../controllers/room.controller.js");
const { verifyAdmin } = require("../utils/verifyToken.js");


router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)

router.route("/:id")
    .put(verifyAdmin, updateRoom)
    .get(getSingleRoom)

router.post("/:hotelId", verifyAdmin, createRoom);

router.get("/", getAllRoom);

module.exports = router;