import React from 'react';

import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Main } from './pages/main/main';
import { Login } from './pages/Login';
import Navbar from './pages/Navbar';
import  CreatePost from './pages/create-post/create-post';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create-post' element={< CreatePost/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
