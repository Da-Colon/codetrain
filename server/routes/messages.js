const express = require("express");
const router = express.Router();

const MessagesModel = require("../models/messagesModel");

router.get("/messages/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const getMessages = await MessagesModel.getSomeMessages(user_id)
  res.json(getMessages).status(200);
})

module.exports = router;