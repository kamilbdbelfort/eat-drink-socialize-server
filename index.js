// index.js

const express = require("express");
const app = express();

// Middlewares

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

const loggerMiddleWare = require("morgan");
app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const authMiddleWare = require("./auth/middleware");

// Routes

const ReviewRouter = require("./routers/reviewRouter");
const UserRouter = require("./routers/userRouter");
const PlaceRouter = require("./routers/placeRouter");
const TagRouter = require("./routers/tagRouter");
const authRouter = require("./routers/auth");

app.use("/", authRouter);
app.use("/places", PlaceRouter);
app.use("/reviews", ReviewRouter);
app.use("/users", UserRouter);
app.use("/tags", TagRouter);

// GET endpoint for testing purposes, can be removed
app.get("/", (req, res) => {
  res.send("Hi from express");
});

// POST endpoint for testing purposes, can be removed
app.post("/echo", (req, res) => {
  res.json({
    youPosted: {
      ...req.body,
    },
  });
});

// POST endpoint which requires a token for testing purposes, can be removed
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing user that was added to req by the auth middleware
  const user = req.user;
  // don't send back the password hash
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

// Listen for connections on specified port (default is port 4000)
const { PORT } = require("./config/constants");

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
