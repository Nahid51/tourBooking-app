const express = require("express");
const router = express.Router();

const { createHotel, getAllHotel, updateHotel, deleteHotel, getSingleHotel } = require("../controllers/hotel.controller.js");
const { verifyAdmin } = require("../utils/verifyToken.js");

router.route("/:id")
    .put(verifyAdmin, updateHotel)
    .delete(verifyAdmin, deleteHotel)
    .get(getSingleHotel)

router.post("/create", verifyAdmin, createHotel)

router.get("/", getAllHotel)


module.exports = router;