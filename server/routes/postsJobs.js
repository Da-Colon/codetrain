const express = require("express");
const router = express.Router();

const JobPostsModel = require("../models/postsJobsModel");

// Read all job posts
router.get("/", async (req, res) => {
  const allJobPosts = await JobPostsModel.getAllJobs();
  res.json(allJobPosts).status(200);
});

// Read job posts by company
router.get("/company/:companies_id", async (req, res) => {
  const { companies_id } = req.params;
  const companyJobPosts = await JobPostsModel.getByCompanyId(companies_id);
  res.json(companyJobPosts).status(200);
});

// Read specific job post
router.get("/id/:id", async (req, res) => {
  const { id } = req.params;
  const jobPost = await JobPostsModel.getById(id);
  res.json(jobPost).status(200);
});

// Create
router.post("/add", async (req, res) => {
  const {
    title,
    content,
    experience,
    contact_email,
    contact_phone,
    companies_id,
    users_id
  } = req.body;
  const response = await JobPostsModel.addJob(
    title,
    content,
    experience,
    contact_email,
    contact_phone,
    companies_id,
    users_id
  );
  if (response.command === "INSERT" && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send("Could not add job").status(409);
  }
});

// Update job post
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, experience, contact_email, contact_phone } = req.body;
  const response = await JobPostsModel.updateJob(title, content, experience, contact_email, contact_phone, id);
  res.json({ message: "Successfully Updated" }).status(200);
});

router.put("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const response = await JobPostsModel.removeJob(id);
  res.json({ message: "Successfully Updated" }).status(200);
});

module.exports = router;
