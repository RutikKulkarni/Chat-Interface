const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// GET chat history
router.get('/', chatController.getChatHistory);

// POST message
router.post('/', chatController.saveMessage);

module.exports = router;
