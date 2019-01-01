const { MongoClient } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/aws",
  { useNewUrlParser: true },
  (err, db) => {
    if (err) {
      return console.error("cannot connect to the server", err);
    }
    console.log("connection successfully establish !");
    //insert documents

    db.collection("Todos").insertOne(
      {
        text: "go to bulathsinhala",
        completed: false
      },
      (err, res) => {
        if (err) {
          return console.error("error occerd ", err);
        }
        console.log("successfully added!");
      }
    );

    db.close();
  }
);
