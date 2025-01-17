import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  name: {
    required: false,
    type: String,
  },
  email: {
    required: false,
    type: String,
  },
  comment: {
    required: false,
    type: String,
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  blogId: {
    type: Schema.ObjectId,
    ref: "Blog",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const BlogComment =
  mongoose.models.BlogComment ?? mongoose.model("BlogComment", commentSchema);
