const express = require("express");
const router = express.Router();

const MessagesModel = require("../models/messagesModel");

router.get("/messages/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const getMessages = await MessagesModel.getSomeMessages(user_id)
  res.json(getMessages).status(200);
})

router.get("/messages/all/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const getMessages = await MessagesModel.getAllMessages(user_id)
  res.json(getMessages).status(200);
})

router.get("/messages/one/:messages_id", async (req, res) => {
  const {messages_id} = req.params;
  const getMessage = await MessagesModel.getMessage(messages_id)
  res.json(getMessage).status(200)
})

router.post("/sendmessage", async (req, res) => {
  const {subject, message, sent_from, sent_to } = req.body
  const sendMessage = await MessagesModel.sendMessage(subject, message, sent_from, sent_to )
  res.status(200).end()
})

module.exports = router;