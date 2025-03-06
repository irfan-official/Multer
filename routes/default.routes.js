import userModel from "../models/user.models.js";

import express from "express";

const route = express.Router();

route.get("/", (req, res, next) => {
  return res.status(200).send("hello mao mao");
});

route.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Kazi Irfan",
    username: "Mao MAo",
    image:
      "https://images.unsplash.com/photo-1741069716487-dfbc91c8921f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
  });
  return res.status(201).json(createdUser);
});
export default route;
