// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './dashboard';
import DisplayItems from './testing';
import "./App.css"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path='/dashboard' Component={Dashboard}/>

        {/* Add more routes for other pages */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
