const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/todoList";
const { ModuleFilenameHelpers } = require("webpack");
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

let todoListSchema = mongoose.Schema({
  todo: String
})

let TodoList = mongoose.model("TodoList", todoListSchema);

let saveTodo = (item) => {

  var newItem = new TodoList({
    todo: item
  })

  return newItem.save()
}

let getList = () => {
  return TodoList.find({})
}

let deleteWord = (inputtedWord) => {
  return TodoList.deleteOne({word: inputtedWord})
}

module.exports.saveTodo = saveTodo;
module.exports.getList = getList;
module.exports.deleteWord = deleteWord;