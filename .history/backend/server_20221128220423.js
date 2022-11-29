const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const MONGO_URL = "mongodb+srv://abhi:Qo8bjmfHwYS8qjLz@cluster0.mfnrglj.mongodb.net/Exercise_Track?retryWrites=true&w=majority"
mongoose.connection.once("open", () => {
  console.log("MongoDB connected!");
});

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  keepAlive: true,
  connectTimeoutMS: 1000,
  useUnifiedTopology: true,
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
