import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AddPost = () => {
  const {userId} = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title,
      body,
      userId: parseInt(userId, 10),
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        console.log('New post added:', response.data);
        navigate(`/posts/${userId}`);
      })
      .catch(error => {
        console.error('Error adding post:', error);
      });
  };


  return (
    <div>
      <h2>Add New Post</h2>
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

        <button type="submit">Add Post</button>
        
      </form>
    </div>
  );
  
};

export default AddPost;
