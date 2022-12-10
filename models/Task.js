const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
  },
  asignee: {
    type: String,
    trim: true,
    unique: true,
  },
  status: {
    type: String,
    trim: true,
    unique: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Task = mongoose.model("Task", TaskSchema);

// Export the Task model
module.exports = Task;
