const express = require("express");
const router = express.Router();

const { createHotel, getAllHotel, updateHotel, deleteHotel, getSingleHotel } = require("../controllers/hotel.controller.js");


router.route("/")
    .post(createHotel)
    .get(getAllHotel)

router.route("/:id")
    .put(updateHotel)
    .delete(deleteHotel)
    .get(getSingleHotel)

module.exports = router;