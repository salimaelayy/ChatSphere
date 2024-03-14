const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/messageController');

router.get('/',MessageController.getMessages);
router.post('/send',MessageController.sendMessage);