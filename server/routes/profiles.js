const express = require("express");
const router = express.Router();

const ProfileModel = require("../models/profileModel");

// Read user info by user id
router.get("/id/:id", async (req, res) => {
  const { id } = req.params;
  const profileInfo = await ProfileModel.getById(id);
  res.json(profileInfo).status(200);
});

module.exports = router;
