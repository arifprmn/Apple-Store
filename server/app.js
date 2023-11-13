"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routers/routers");
// const errorHandler = require("./middlewares/errorHandler");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(` ${port}-an`);
});

module.exports = app;
