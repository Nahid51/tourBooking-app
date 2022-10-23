const express = require("express");
const router = express.Router();

const { updateUser, deleteUser, getAllUser, getSingleUser } = require("../controllers/user.controller.js");
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
//     console.log(req.user);
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and you can delete your account.")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and you can delete all accounts.")
// })

router.route("/:id")
    .put(verifyUser, updateUser)
    .delete(verifyUser, deleteUser)
    .get(verifyUser, getSingleUser)

router.get("/", verifyAdmin, getAllUser)


module.exports = router;