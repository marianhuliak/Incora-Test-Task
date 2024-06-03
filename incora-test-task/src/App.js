import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';
import './App.css'

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/posts/:userId" element={<Posts />} />
          </Routes>
        </main>
      </div>
    </Router>
    </>
  );
}

export default App;
