// frontend/src/components/Feed.js
import React, { useEffect, useState } from "react";
import API from "../api";
import CreatePost from "./CreatePost";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const addPost = post => setPosts([post, ...posts]);

  useEffect(() => {
    API.get("/posts").then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <CreatePost addPost={addPost} />
      {posts.map(p => (
        <div key={p._id}>
          <h3>{p.user.name}</h3>
          <p>{p.text}</p>
          <small>{new Date(p.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
