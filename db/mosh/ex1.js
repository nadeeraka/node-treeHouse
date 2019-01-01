const mongoose = require("mongoose");

const connect = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://127.0.0.1/asure",
      { useNewUrlParser: true }
    );
    console.log("Connect");
  } catch (error) {
    console.error("error occered ", error);
  }
};
connect();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

const createUser = async () => {
  const user = new User({
    name: "nadeeraka",
    email: "nadeeraka@fun.com",
    password: "abcd",
    age: 27
  });
  const result = await user.save();
  console.log(result);
};
//createUser();

const getUser = async () => {
  const user = await User.find();
  console.log(user);
};
getUser();
