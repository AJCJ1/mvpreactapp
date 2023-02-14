import React from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import fetchPosts from "./FetchPosts";
import Post from "./Post";

const Blog = () => {
  // here i'm destructuring, i'm expecting that one of the props will be 'posts'
  // So i'm taking just that one out, because this component lists the posts
  // then i map the posts, if there are any, and create the mapped html.

  const results = useQuery(["posts"], fetchPosts);
  const posts = results?.data?.posts ?? [];
  return (
    <main className="blog-main">
      <header className="blog-header">
        <Navbar />
        <h1>My Blog Posts</h1>
      </header>
      {!posts.length ? (
        <h2>No posts Found 😢</h2>
      ) : (
        posts.map((post) => (
          <Post
            title={post.title}
            description={post.description}
            content={post.content}
            id={post.id}
            key={post.id}
          />
        ))
      )}
    </main>
  );
};

export default Blog;
