import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/post';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the specific blog post using postId
    // For simplicity, we'll use a sample JSONPlaceholder API
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
      {post ? (
        <Post post={post} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetail;
