const express = require("express");
const router = express.Router();

const ApplicantsModel = require("../models/applicantsModel");

// Get all applicants by job post id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const applicants = await ApplicantsModel.getAllApplicantsByJobId(id);
  res.json(applicants).status(200);
});

module.exports = router;