// frontend/src/components/Navbar.js
import React from "react";

export default function Navbar({ user, logout }) {
  return (
    <nav>
      <h1>LinkedIn Clone</h1>
      {user ? (
        <>
          <span>{user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : null}
    </nav>
  );
}
