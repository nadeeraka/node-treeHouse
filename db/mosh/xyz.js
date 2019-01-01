var mongoose = require("mongoose");

//Set up default mongoose connection
//var mongoDB = "mongodb://127.0.0.1/my_database";
const connect = async () => {
  try {
    let connect = await mongoose.connect(
      "mongodb://localhost/playground",
      { useNewUrlParser: true }
    );

    if (connect) {
      console.log("connect!");
    }
  } catch (error) {
    console.error("could not connect", error);
  }
};
connect();

//mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
// //Get the default connection
// var db = mongoose.connection;
