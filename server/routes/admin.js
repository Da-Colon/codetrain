const express = require("express");
const router = express.Router();

const AdminModel = require("../models/adminModel");

router.get("/authusers", async (req, res) => {
  const getUsers = await AdminModel.getAuthUsers();
  res.json(getUsers).status(200);
})
router.get("/authcompanyusers", async (req, res) => {
  const getCompanyUsers = await AdminModel.getAuthCompanyUsers();
  res.json(getCompanyUsers).status(200);
})

module.exports = router;