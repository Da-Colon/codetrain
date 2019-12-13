const express = require("express");
const router = express.Router();

const UserModel = require("../models/userModel");

// Read user info by user id
router.get("/id/:id", async (req, res) => {
  const { id } = req.params;
  const profileInfo = await UserModel.getById(id);
  res.json(profileInfo).status(200);
});

module.exports = router;
