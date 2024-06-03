import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/posts/:userId" element={<Posts />} />
            <Route path="/posts/details/:postId" element={<PostDetails />} />
            <Route path="/posts/:userId/add" element={<AddPost />} />
            <Route path="/posts/edit/:postId" element={<EditPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
