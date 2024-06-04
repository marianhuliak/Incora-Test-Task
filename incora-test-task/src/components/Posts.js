import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Posts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [userId]);

  const handleAddNew = () => {
    navigate(`/posts/${userId}/add`);
  };

  return (
    <div>
      <h2>Posts by User {userId}</h2>
      <button onClick={handleAddNew}>Add New</button>
      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <Link to={`/posts/details/${post.id}`}>
                  <button>Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
};

export default Posts;
