const express = require('express');
const mongoose = require('mongoose');
const chatRoutes = require('./routes/chatRoutes');
const config = require('./config');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/chat', chatRoutes);

// Connect to MongoDB
mongoose.connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("Connection with MongoDB established");
    const server = app.listen(config.port, () =>
      console.log("App started at PORT", config.port)
    );
  })
  .catch((error) => {
    console.log("Connection with MongoDB failed");
  });

module.exports = app;
