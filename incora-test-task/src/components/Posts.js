import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Posts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [userId]);

  return (
    <div>
      <h2>Posts by User {userId}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;