const mongoose = require("mongoose");
const colors = require("colors");
const URL="mongodb+srv://singhtejashpratap03:12tpsspt98@cluster0.1japwop.mongodb.net/Chatapp?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;