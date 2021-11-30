import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './components/post/Posts';
import PostDetail from './components/post/PostDetail';

function App() {
  return (
    <div className='App'>
      <Router>
        <h1>React rtk query</h1>
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/detail/:id' element={<PostDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
