const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


// middleware
app.use(express.json());
app.use(cors());


// route
const jobRoute = require("./routes/job.route");
const userRoute = require("./routes/user.route");
const managerRoute = require("./routes/manager.route");
const { modelName } = require("./models/Job");

// candidate route

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// posting to database
app.use("/jobs", jobRoute);

// candidate route
app.use("/manager", managerRoute);
// user
app.use("/user", userRoute);

module.exports = app;
