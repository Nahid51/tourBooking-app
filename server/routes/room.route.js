const express = require("express");
const router = express.Router();

const { updateRoom, deleteRoom, getSingleRoom, createRoom, getAllRoom, updateRoomAvailability } = require("../controllers/room.controller.js");
const { verifyAdmin } = require("../utils/verifyToken.js");


router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)

router.route("/:id")
    .put(verifyAdmin, updateRoom)
    .get(getSingleRoom)

router.put("/availability/:id", updateRoomAvailability);

router.post("/:hotelId", verifyAdmin, createRoom);

router.get("/", getAllRoom);

module.exports = router;