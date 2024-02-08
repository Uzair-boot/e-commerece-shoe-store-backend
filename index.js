const express = require("express");
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(morgan("common"));

const userRoute = require("./routes/users");
const appiontmentRoute = require("./routes/appiontments");
const notificationRoute = require("./routes/notifications");
// const productsRoute = require("./routes/products");

app.use("/api/users", userRoute);
app.use("/api/appiontments", appiontmentRoute);
app.use("/api/notifications", notificationRoute);
// app.use("/api/products", productsRoute);

const mongoUrl = "mongodb://localhost:27017/clinic";
mongoose
  .connect(mongoUrl)
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err));
app.listen("8070", () => {
  console.log("backend server is running");
});
