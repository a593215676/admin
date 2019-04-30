const mongoose = require("mongoose");
const Cont = mongoose.Schema;

const Cants = new Cont({
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
  content: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});
module.exports = Work = mongoose.model("Work", Cants);

