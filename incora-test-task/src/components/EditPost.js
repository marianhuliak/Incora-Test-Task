import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const {postId} = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setTitle(response.data.title);
        setBody(response.data.body);
      })
      .catch(error => {
        console.error('Error fetching post details:', error);
      });
  }, [postId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedPost = { title, body };

    axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost)
      .then(response => {
        console.log('Post updated:', response.data);
        navigate(`/posts/details/${postId}`);
      })
      .catch(error => {
        console.error('Error updating post:', error);
      });
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <button type="submit">Update Post</button>
        
      </form>
    </div>
  );
};

export default EditPost;
