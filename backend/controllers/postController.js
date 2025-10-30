// backend/controllers/postController.js
const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const newPost = new Post({
      user: user.id,
      text: req.body.text
    });
    const post = await newPost.save();
    res.json(await post.populate("user", ["name"]));
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", ["name"]).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};