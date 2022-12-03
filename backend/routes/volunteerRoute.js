const express = require("express");
const { addvolunteer, volunteerlist} = require("../controllers/volunteerController.js");
const userRouter = express.Router();

userRouter.post("/register", addvolunteer);
userRouter.get("/register", volunteerlist);

module.exports = userRouter;
