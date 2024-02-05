import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from an API or any other source
    // For simplicity, we'll use a sample JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Welcome to React Blog!</h2>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
