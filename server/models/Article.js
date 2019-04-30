const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  abstract: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  Importance: {
    type: String,
    required: true
  },
  ReleaseTime: {
    type: Date,
    default: Date.now
  }
});

module.exports = Article = mongoose.model("Article", UserSchema);
