const express = require("express");
const router = express.Router();

const ResourcePostModel = require("../models/resourcePostModel");

router.get("/getAllResources", async (res, req, next) => {
  // const getResources = await ResourcePostModel.getAllResources();
  const getResources = await ResourcePostModel.getAllResourcesAndPosters();
  console.log(getResources);
  req
    .send(getResources)
    .status(200)
    .end();
});

router.get("/:resource_id", async (req, res) => {
  const { resource_id } = req.params;
  const resourcePost = await ResourcePostModel.getResourceandPosterById(
    resource_id
  );
  res.json(resourcePost).status(200);
});

router.post("/add/:user_id", async (req, res) => {
  const userId = req.params.user_id;
  const { title, short_description, full_description, resource_url } = req.body;
  await ResourcePostModel.saveNewResource(
    title,
    short_description,
    full_description,
    resource_url,
    userId
  );
  res.json({ message: "Successfully Saved" }).status(200);
});

router.put("/delete/:resource_id", async (req, res) => {
  const resourceId = req.params.resource_id;
  console.log("THE PARAMS: ", req.params);
  await ResourcePostModel.deleteResource(resourceId);
  res.json({ message: "Successfully Deleted" }).status(200);
});

router.put("/update/:resource_id", async (req, res) => {
  const resourceId = req.params.resource_id;
  const { title, short_description, full_description, resource_url } = req.body;
  await ResourcePostModel.updateResource(
    title,
    short_description,
    full_description,
    resource_url,
    resourceId
  );
  res.json({ message: "Successfully Updated" }).status(200);
});

module.exports = router;
