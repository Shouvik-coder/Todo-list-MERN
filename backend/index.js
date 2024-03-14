const express = require("express");
const cors=require("cors")
const {Todo}=require('./dbConnection.js');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const data = await Todo.find();
  res.json(data);
});

app.post("/todos", async (req, res) => {
  const data = await Todo.insertMany([req.body]);
  console.log(data);
  res.send(data);
});

app.put("/todo/done/:id", async (req, res) => {
  await Todo.findOneAndUpdate({ _id: req.params.id },{completed: req.body.completed});
  const data=await Todo.find();
  res.send(data);
});

app.delete("/todo/delete/:id", async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id });
  const data=await Todo.find();
  res.send(data);
});

app.listen(4000, function (e) {
  if (!e) console.log("server started");
});
