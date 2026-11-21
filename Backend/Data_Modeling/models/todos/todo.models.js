import mongoose, { Types } from 'mongoose';

const todoSchema = new mongoose.schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.schema.Types.ObjectId,
        ref: 'subtodo',
      },
    ],
    // Array of Sub-Todos
  },
  { timestamps: true }
);

export const todo = mongoose.models('Todo', todoSchema);
// in databse the model name is 'todos'
