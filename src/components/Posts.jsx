// src/components/Posts.jsx
import React from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

export default function Posts() {
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p>Error cargando posts: {error.message}</p>;
  if (!posts) return <p>No hay posts.</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
