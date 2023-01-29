import React from 'react';
import Navbar from './components/Navbar'

const Blog = (props) => {
  const { posts } = props;

  return (
    <div className="blog-main">
      <Navbar />
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          // replace with Link to=`/blog/${post.id}`
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
