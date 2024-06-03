import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';

function App() {
  return (
    <>
    <h1>Hello</h1>
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Incora Test Task</h1>
        </header>
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
