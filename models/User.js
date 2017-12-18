const mongoose = require("mongoose");
//const Schema = mongoose.Schema; is equal to next line
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
