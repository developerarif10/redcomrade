import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },

  date: {
    type: Date,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    required: true,
  },
  isPublished: {
    type: Boolean,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  commentIds: [
    {
      type: Schema.ObjectId,
      ref: "BlogComment",
    },
  ],
  comments: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Blog = mongoose.models.Blog ?? mongoose.model("Blog", blogSchema);
