const express=require("express");

const routes=express.Router();

routes.use("/gallery",require('./gallery'));

module.exports=routes;
