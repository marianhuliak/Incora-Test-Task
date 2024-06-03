// src/components/PostDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post details:', error);
      });

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [postId]);

  const handleDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        console.log('Post deleted:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => navigate(`/posts/edit/${postId}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <h3>Comments</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <small>{comment.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
