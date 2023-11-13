const express = require("express");
const routers = express();
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");

routers.use("/product".productRouter);

module.exports = routers;
