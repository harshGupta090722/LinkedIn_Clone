// backend/models/Post.js
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: { type: String, required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{ user: String, text: String, date: Date }],
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);