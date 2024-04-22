const Chat = require('../models/Chat');

exports.getChatHistory = async (req, res) => {
  try {
    const history = await Chat.find();
    res.json(history);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.saveMessage = async (req, res) => {
  try {
    const { prompt, response } = req.body;
    const newMessage = new Chat({ prompt, response });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
