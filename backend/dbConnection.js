const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Shouvik");

const Todo = mongoose.model("Todo", {
  todo: { type: String},
  desc: { type: String },
  completed: { type: Boolean, default: false },
});

module.exports={Todo};