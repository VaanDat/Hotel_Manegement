const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const roomRoute = require("./routes/room")

const app = express();

dotenv.config();

//Connect MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.log("Error connecting with error code:", err);
  });

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/room", roomRoute);

app.listen(8000, () => {
  console.log("Server is running");
});
