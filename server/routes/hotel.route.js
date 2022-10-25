const express = require("express");
const router = express.Router();

const { createHotel, getAllHotel, updateHotel, deleteHotel, getSingleHotel, countByCity, countByType, getHotelRooms } = require("../controllers/hotel.controller.js");
const { verifyAdmin } = require("../utils/verifyToken.js");

router.route("/:id")
    .put(verifyAdmin, updateHotel)
    .delete(verifyAdmin, deleteHotel)

router.get("/find/:id", getSingleHotel);

router.post("/create", verifyAdmin, createHotel);

router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);


module.exports = router;