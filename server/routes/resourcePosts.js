const express = require("express");
const router = express.Router();

const ResourcePostModel = require('../models/resourcePostModel');

router.get('/getAllResources', async (res, req, next) => {
  const getResources = await ResourcePostModel.getAllResources();
  req.send(getResources).status(200).end();
})

// router.post('saveNewResource', (req, res, next) => {

// })

module.exports = router;