import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import NotFound404 from '../pages/NotFound404';
import ProtectedRoute from '../components/ProtectedRoute'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path='*' element={<NotFound404/>} />
      </Routes>
    </Router>
  );
}

export default App;
