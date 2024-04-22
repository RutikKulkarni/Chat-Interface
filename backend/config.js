// module.exports = {
//   mongoURI: process.env.MONGO_URI || 'your_mongodb_connection_string_here',
// };

const config = {
  port: 8082, // Your desired port
  mongoose: {
    //   url: 'mongodb://localhost:27017/your_database_name',
    url: "mongodb://localhost:27017/",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

module.exports = config;
