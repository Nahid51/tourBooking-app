const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");


dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();


const authRoute = require("./routes/auth.route.js");
const hotelRoute = require("./routes/hotel.route.js");
const roomRoute = require("./routes/room.route.js");
const userRoute = require("./routes/user.route.js");


// middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/hotel", hotelRoute);
app.use("/api/v1/room", roomRoute);
app.use("/api/v1/user", userRoute);

app.use((error, req, res, next) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack
    })
});


// database connection
mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log(`Database connected.`);
    })
    .catch((error) => {
        console.log(`${error} did not connect.`)
    })

app.get("/", (req, res) => {
    res.send("Document founded.");
});

app.listen(PORT, () => {
    console.log("Server connected at port " + PORT);
});