import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullName: {
    required: true,
    type: String,
  },

  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },

  bloodGroup: {
    required: true,
    type: String,
  },
  phone: {
    required: false,
    type: String,
  },

  district: {
    required: false,
    type: String,
  },

  subDistrict: {
    required: false,
    type: String,
  },

  location: {
    required: false,
    type: String,
  },
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);
