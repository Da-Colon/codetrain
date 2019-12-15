const express = require("express");
const router = express.Router();

const ResourcePostModel = require('../models/resourcePostModel');

router.get('/getAllResources', async (res, req, next) => {
  // const getResources = await ResourcePostModel.getAllResources();
  const getResources = await ResourcePostModel.getAllResourcesAndPosters();
  console.log(getResources);
  req.send(getResources).status(200).end();
})

router.post("/add/:user_id", async (req, res) => {
  const userId = req.params.user_id;
  const {title, short_description, full_description, resource_url} = req.body;
  await ResourcePostModel.saveNewResource(title, short_description, full_description, resource_url, userId );
  res.json({ message: 'Successfully Saved' }).status(200);
});

module.exports = router;