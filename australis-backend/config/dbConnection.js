const mongoose = require('mongoose');

const connectDb = async () => {
  try {

    const connect = await mongoose.connect('mongodb+srv://mordeajay07:swap1999@cluster0.taz4lkv.mongodb.net/');

    

    console.log(
      'Database connected: ',
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
