const messageModel = require("../models/messages.js")

const getMessages =async (req, res) => {
    try {
      const messages = await messageModel.find();
      res.json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
  
  const sendMessage = async (req, res) => {
    const { username, message, room, time } = req.body;
    try {
      const newMessage = new messageModel({ username, message, room, time });
      await newMessage.save();
      res.status(201).json(newMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }

module.exports={sendMessage,getMessages}