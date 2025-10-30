// frontend/src/components/CreatePost.js
import React, { useState } from "react";
import API from "../api";

export default function CreatePost({ addPost }) {
  const [text, setText] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await API.post("/posts", { text });
    addPost(data);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Write a post..." />
      <button type="submit">Post</button>
    </form>
  );
}
